/**********************************************************
 * CONSTANTS + STATE
 **********************************************************/
const TERMS = 8;
const WEEKS_PER_TERM = 10;
const STORAGE_KEY = "aa-term-planner-topic1-card-centric-v1";
const THEME_KEY = "aa-planner-theme";

const state = {
  currentTerm: 1,
  syllabusById: new Map(), // id -> syllabus card (with placements[])
  textbookById: new Map(), // id -> textbook card (with placements[])
  resources: {},           // id -> { id, title, detail, placements[] }
  nextResourceId: 0,
  syllabusTopicFilter: null
};

/**********************************************************
 * INIT
 **********************************************************/
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initCards();
  loadState();
  buildTermTabs();
  buildSyllabusTopicTabs();
  buildPlanner();
  buildBacklogs();
  renderAll();
  wireControls();
});

/**********************************************************
 * THEME
 **********************************************************/
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || "dark";
  setTheme(saved);
}

function setTheme(theme) {
  if (theme !== "light" && theme !== "dark") theme = "dark";
  document.body.dataset.theme = theme;
  const btn = document.getElementById("themeToggleBtn");
  if (btn) {
    btn.textContent = theme === "dark" ? "☀ Light mode" : "🌙 Dark mode";
  }
  localStorage.setItem(THEME_KEY, theme);
}

function toggleTheme() {
  const current = document.body.dataset.theme || "dark";
  setTheme(current === "dark" ? "light" : "dark");
}

/**********************************************************
 * CARD INITIALISATION
 **********************************************************/
function initCards() {
  // Extend syllabus + textbook objects with placements arrays
  SYLLABUS_OBJECTIVES.forEach((o) => {
    o.placements = o.placements || [];
    state.syllabusById.set(o.id, o);
  });
  TEXTBOOK_REFERENCES.forEach((t) => {
    t.placements = t.placements || [];
    state.textbookById.set(t.id, t);
  });

  // Default topic filter = first topic
  const topics = Array.from(
    new Set(SYLLABUS_OBJECTIVES.map((o) => o.topic))
  );
  if (!state.syllabusTopicFilter && topics.length > 0) {
    state.syllabusTopicFilter = topics[0];
  }
}

/**********************************************************
 * LOAD / SAVE STATE (card-centric)
 **********************************************************/
function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    state.currentTerm = 1;
    state.resources = {};
    state.nextResourceId = 0;
    return;
  }

  try {
    const saved = JSON.parse(raw);
    const s = saved.internalState || saved;

    // Current term
    state.currentTerm = typeof s.currentTerm === "number" ? s.currentTerm : 1;

    // Syllabus placements
    if (s.syllabusPlacements && typeof s.syllabusPlacements === "object") {
      Object.entries(s.syllabusPlacements).forEach(([id, placements]) => {
        const card = state.syllabusById.get(id);
        if (card) card.placements = placements || [];
      });
    }

    // Textbook placements
    if (s.textbookPlacements && typeof s.textbookPlacements === "object") {
      Object.entries(s.textbookPlacements).forEach(([id, placements]) => {
        const card = state.textbookById.get(id);
        if (card) card.placements = placements || [];
      });
    }

    // Resources
    state.resources =
      (s.resources && typeof s.resources === "object" && s.resources) || {};
    Object.values(state.resources).forEach((r) => {
      r.placements = r.placements || [];
    });

    state.nextResourceId =
      typeof s.nextResourceId === "number" ? s.nextResourceId : 0;

    if (s.syllabusTopicFilter) {
      state.syllabusTopicFilter = s.syllabusTopicFilter;
    }
  } catch (e) {
    console.warn("Error loading saved state", e);
  }
}

function saveState() {
  const syllabusPlacements = {};
  state.syllabusById.forEach((card, id) => {
    if (card.placements && card.placements.length > 0) {
      syllabusPlacements[id] = card.placements;
    }
  });

  const textbookPlacements = {};
  state.textbookById.forEach((card, id) => {
    if (card.placements && card.placements.length > 0) {
      textbookPlacements[id] = card.placements;
    }
  });

  const payload = {
    version: 1,
    internalState: {
      currentTerm: state.currentTerm,
      syllabusPlacements,
      textbookPlacements,
      resources: state.resources,
      nextResourceId: state.nextResourceId,
      syllabusTopicFilter: state.syllabusTopicFilter
    }
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (e) {
    console.warn("Could not save layout", e);
  }
}

/**********************************************************
 * TERM TABS + TOPIC TABS
 **********************************************************/
function buildTermTabs() {
  const tabsContainer = document.getElementById("termTabs");
  tabsContainer.innerHTML = "";
  for (let t = 1; t <= TERMS; t++) {
    const btn = document.createElement("button");
    btn.className = "term-tab" + (t === state.currentTerm ? " active" : "");
    btn.textContent = `Term ${t}`;
    btn.dataset.term = String(t);
    btn.addEventListener("click", () => {
      state.currentTerm = t;
      document
        .querySelectorAll(".term-tab")
        .forEach((el) => el.classList.remove("active"));
      btn.classList.add("active");
      renderPlanner();
      updateSummaryLabel();
      document.getElementById(
        "currentTermLabel"
      ).textContent = `Term ${state.currentTerm}`;
      saveState();
    });
    tabsContainer.appendChild(btn);
  }
  document.getElementById(
    "currentTermLabel"
  ).textContent = `Term ${state.currentTerm}`;
}

function buildSyllabusTopicTabs() {
  const container = document.getElementById("syllabusTopicTabs");
  container.innerHTML = "";
  const topics = Array.from(
    new Set(SYLLABUS_OBJECTIVES.map((o) => o.topic))
  );
  if (!state.syllabusTopicFilter && topics.length > 0) {
    state.syllabusTopicFilter = topics[0];
  }
  topics.forEach((topic) => {
    const btn = document.createElement("button");
    btn.className =
      "syllabus-topic-tab" +
      (topic === state.syllabusTopicFilter ? " active" : "");
    btn.textContent = topic;
    btn.addEventListener("click", () => {
      state.syllabusTopicFilter = topic;
      document
        .querySelectorAll(".syllabus-topic-tab")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderBacklogs();
      saveState();
    });
    container.appendChild(btn);
  });
}

/**********************************************************
 * PLANNER GRID STRUCTURE
 **********************************************************/
function buildPlanner() {
  const plannerGrid = document.getElementById("plannerGrid");
  plannerGrid.innerHTML = "";
  for (let w = 1; w <= WEEKS_PER_TERM; w++) {
    const weekKey = `week-${w}`;
    const row = document.createElement("div");
    row.className = "week-row";
    row.dataset.weekKey = weekKey;

    const header = document.createElement("div");
    header.className = "week-header";
    const name = document.createElement("div");
    name.className = "week-name";
    name.textContent = `Week ${w}`;
    const count = document.createElement("div");
    count.className = "week-count";
    count.id = `week-count-${weekKey}`;
    count.textContent = "0 items";
    header.appendChild(name);
    header.appendChild(count);

    const slotsRow = document.createElement("div");
    slotsRow.className = "week-slots-row";

    const syllabusSlot = createSlot(
      "Syllabus objectives",
      "syllabus",
      weekKey
    );
    const textbookSlot = createSlot(
      "Textbook references",
      "textbook",
      weekKey
    );
    const resourceSlot = createSlot(
      "Additional resources / information",
      "resources",
      weekKey
    );

    slotsRow.appendChild(syllabusSlot);
    slotsRow.appendChild(textbookSlot);
    slotsRow.appendChild(resourceSlot);

    row.appendChild(header);
    row.appendChild(slotsRow);
    plannerGrid.appendChild(row);
  }
}

function createSlot(title, slotType, weekKey) {
  const slot = document.createElement("div");
  slot.className = "slot";

  const header = document.createElement("div");
  header.className = "slot-header";
  const titleEl = document.createElement("div");
  titleEl.className = "slot-title";
  titleEl.textContent = title;
  const chip = document.createElement("div");
  chip.className = "slot-chip";
  chip.textContent =
    slotType === "syllabus"
      ? "Syllabus cards (duplicable)"
      : slotType === "textbook"
      ? "Textbook cards (duplicable)"
      : "Resource cards";
  header.appendChild(titleEl);
  header.appendChild(chip);

  const dz = document.createElement("div");
  dz.className = "slot-dropzone";
  dz.dataset.locationType = "week";
  dz.dataset.weekKey = weekKey;
  dz.dataset.slotType = slotType;
  dz.dataset.acceptType =
    slotType === "syllabus"
      ? "syllabus"
      : slotType === "textbook"
      ? "textbook"
      : "resource";
  enableDropzone(dz);

  slot.appendChild(header);
  slot.appendChild(dz);
  return slot;
}

function buildBacklogs() {
  enableDropzone(document.getElementById("syllabusBacklog"));
  enableDropzone(document.getElementById("textbookBacklog"));
  enableDropzone(document.getElementById("resourceBacklog"));
}

/**********************************************************
 * RENDERING
 **********************************************************/
function renderAll() {
  renderBacklogs();
  renderPlanner();
  updateSummaryLabel();
  retypesetMath();
}

function cardHasPlacements(card) {
  return card.placements && card.placements.length > 0;
}

function renderBacklogs() {
  const syllabusBacklog = document.getElementById("syllabusBacklog");
  const textbookBacklog = document.getElementById("textbookBacklog");
  const resourceBacklog = document.getElementById("resourceBacklog");

  syllabusBacklog.innerHTML = "";
  textbookBacklog.innerHTML = "";
  resourceBacklog.innerHTML = "";

  let unplacedSyllabus = 0;
  let unplacedTextbook = 0;
  let unplacedResources = 0;

  // Syllabus backlog: cards with placements.length === 0, filtered by topic
  SYLLABUS_OBJECTIVES.forEach((obj) => {
    if (obj.topic !== state.syllabusTopicFilter) return;
    if (!cardHasPlacements(obj)) {
      unplacedSyllabus++;
      syllabusBacklog.appendChild(createCard(obj, "syllabus", null));
    }
  });

  // Textbook backlog: cards with placements.length === 0
  TEXTBOOK_REFERENCES.forEach((ref) => {
    if (!cardHasPlacements(ref)) {
      unplacedTextbook++;
      textbookBacklog.appendChild(createCard(ref, "textbook", null));
    }
  });

  // Resource backlog: resource notes with placements.length === 0
  Object.values(state.resources).forEach((res) => {
    if (!cardHasPlacements(res)) {
      unplacedResources++;
      resourceBacklog.appendChild(createCard(res, "resource", null));
    }
  });

  document.getElementById(
    "syllabusBacklogCount"
  ).textContent = `${unplacedSyllabus} unplaced`;
  document.getElementById(
    "textbookBacklogCount"
  ).textContent = `${unplacedTextbook} unplaced`;
  document.getElementById(
    "resourceBacklogCount"
  ).textContent = `${unplacedResources} unplaced`;

  retypesetMath();
}

function getLanePlacements(term, week, lane) {
  const results = [];

  if (lane === "syllabus") {
    SYLLABUS_OBJECTIVES.forEach((card) => {
      (card.placements || []).forEach((p, idx) => {
        if (p.term === term && p.week === week && p.lane === lane) {
          results.push({ cardType: "syllabus", card, placement: p, placementIndex: idx });
        }
      });
    });
  } else if (lane === "textbook") {
    TEXTBOOK_REFERENCES.forEach((card) => {
      (card.placements || []).forEach((p, idx) => {
        if (p.term === term && p.week === week && p.lane === lane) {
          results.push({ cardType: "textbook", card, placement: p, placementIndex: idx });
        }
      });
    });
  } else if (lane === "resources") {
    Object.values(state.resources).forEach((card) => {
      (card.placements || []).forEach((p, idx) => {
        if (p.term === term && p.week === week && p.lane === lane) {
          results.push({ cardType: "resource", card, placement: p, placementIndex: idx });
        }
      });
    });
  }

  // Sort by order, then fallback to index
  results.sort((a, b) => {
    const ao = typeof a.placement.order === "number" ? a.placement.order : 0;
    const bo = typeof b.placement.order === "number" ? b.placement.order : 0;
    if (ao !== bo) return ao - bo;
    return a.placementIndex - b.placementIndex;
  });

  return results;
}

function renderPlanner() {
  document.querySelectorAll(".slot-dropzone").forEach((dz) => {
    dz.innerHTML = "";
  });

  const term = state.currentTerm;

  for (let w = 1; w <= WEEKS_PER_TERM; w++) {
    const weekKey = `week-${w}`;
    const syllabusDz = document.querySelector(
      `.slot-dropzone[data-week-key="${weekKey}"][data-slot-type="syllabus"]`
    );
    const textbookDz = document.querySelector(
      `.slot-dropzone[data-week-key="${weekKey}"][data-slot-type="textbook"]`
    );
    const resourceDz = document.querySelector(
      `.slot-dropzone[data-week-key="${weekKey}"][data-slot-type="resources"]`
    );

    const sylPlacements = getLanePlacements(term, w, "syllabus");
    const tbPlacements = getLanePlacements(term, w, "textbook");
    const resPlacements = getLanePlacements(term, w, "resources");

    sylPlacements.forEach((entry) => {
      const cardEl = createCard(entry.card, "syllabus", entry);
      syllabusDz.appendChild(cardEl);
    });

    tbPlacements.forEach((entry) => {
      const cardEl = createCard(entry.card, "textbook", entry);
      textbookDz.appendChild(cardEl);
    });

    resPlacements.forEach((entry) => {
      const cardEl = createCard(entry.card, "resource", entry);
      resourceDz.appendChild(cardEl);
    });

    const countEl = document.getElementById(`week-count-${weekKey}`);
    if (countEl) {
      const count =
        sylPlacements.length + tbPlacements.length + resPlacements.length;
      countEl.textContent = `${count} item${count === 1 ? "" : "s"}`;
    }
  }

  document.getElementById(
    "currentTermLabel"
  ).textContent = `Term ${state.currentTerm}`;
  retypesetMath();
}

function updateSummaryLabel() {
  let syllabusPlacements = 0;
  SYLLABUS_OBJECTIVES.forEach((c) => {
    syllabusPlacements += (c.placements || []).length;
  });

  let textbookPlacements = 0;
  TEXTBOOK_REFERENCES.forEach((c) => {
    textbookPlacements += (c.placements || []).length;
  });

  let resourcePlacements = 0;
  Object.values(state.resources).forEach((c) => {
    resourcePlacements += (c.placements || []).length;
  });

  const totalSyllabus = SYLLABUS_OBJECTIVES.length;
  const totalTextbook = TEXTBOOK_REFERENCES.length;

  const label = document.getElementById("summaryLabel");
  label.textContent =
    `${syllabusPlacements} syllabus placements / ${totalSyllabus} objectives, ` +
    `${textbookPlacements} textbook placements / ${totalTextbook} chapters, ` +
    `${resourcePlacements} resource placements`;
}

function retypesetMath() {
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
}

/**********************************************************
 * UTILS
 **********************************************************/
function topicSlug(topic) {
  if (!topic) return "unknown";
  return topic.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

/**********************************************************
 * CARD CREATION
 **********************************************************/
function createCard(data, type, placementInfo) {
  const card = document.createElement("article");
  card.className = "card";
  card.draggable = true;
  card.dataset.cardType = type;

  // Base ID
  card.dataset.cardId = data.id;

  // If this is a placement (in a week), encode its key info
  if (placementInfo && placementInfo.placement) {
    card.dataset.isPlacement = "true";
    card.dataset.term = placementInfo.placement.term;
    card.dataset.week = placementInfo.placement.week;
    card.dataset.lane = placementInfo.placement.lane;
    card.dataset.placementIndex = String(placementInfo.placementIndex);
  } else {
    card.dataset.isPlacement = "false";
  }

  const tagRow = document.createElement("div");
  tagRow.className = "card-tag-row";

  const tag = document.createElement("div");
  tag.className = `card-tag ${type}`;
  const dot = document.createElement("span");
  dot.className = "dot";
  const label = document.createElement("span");
  label.className = "card-tag-label";
  if (type === "syllabus") label.textContent = data.section || "Syllabus";
  else if (type === "textbook") label.textContent = "Textbook";
  else label.textContent = "Resource";

  tag.appendChild(dot);
  tag.appendChild(label);

  const pill = document.createElement("div");
  pill.className = "pill";

  if (type === "syllabus") {
    pill.classList.add("pill-syllabus");
    const slug = topicSlug(data.topic);
    pill.classList.add(`topic-${slug}`);
    pill.textContent = data.topic || "AA Syllabus";
    } else if (type === "textbook") {
      pill.classList.add("pill-textbook");

      // extract textbook name before the first "–"
      const bookName = (data.label.split("–")[0] || "Textbook").trim();
      pill.textContent = bookName;

      // add a slugged class so CSS can colour by book
      const slug = bookName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      pill.classList.add(`book-${slug}`);
  } else {
    pill.classList.add("pill-resource");
    pill.textContent = "Note";
  }

  tagRow.appendChild(tag);
  tagRow.appendChild(pill);

  const main = document.createElement("div");
  main.className = "card-main";
  if (type === "syllabus") {
    main.innerHTML = `<strong>${data.section}</strong> — ${data.text}`;
  } else if (type === "textbook") {
    main.innerHTML = `<strong>${data.label}</strong>`;
  } else {
    main.innerHTML = `<strong>${data.title}</strong>`;
  }

  const sub = document.createElement("div");
  sub.className = "card-sub";

  if (type === "syllabus") {
    sub.textContent = "";
  } else if (type === "textbook") {
    const parts = [];
    if (data.detail) parts.push(data.detail);
    if (data.url) {
      parts.push(
        `<a href="${data.url}" target="_blank" rel="noopener noreferrer">Exercises ↗</a>`
      );
    }
    sub.innerHTML = parts.join(" · ");
  } else {
    sub.textContent = data.detail || "";
  }

  card.appendChild(tagRow);
  card.appendChild(main);
  if (sub.textContent.trim() !== "" || sub.innerHTML.trim() !== "") {
    card.appendChild(sub);
  }

  card.addEventListener("dragstart", handleDragStart);
  card.addEventListener("dragend", handleDragEnd);

  return card;
}

/**********************************************************
 * RESOURCE CARDS
 **********************************************************/
function createNewResourceNote() {
  const title = prompt("Resource / note title:");
  if (!title) return;
  const detail =
    prompt(
      "Optional details / link / description (LaTeX allowed, eg $y=mx+c$):"
    ) || "";
  const id = `res-${state.nextResourceId++}`;
  state.resources[id] = { id, title, detail, placements: [] };
  saveState();
  renderBacklogs();
  updateSummaryLabel();
  retypesetMath();
}

/**********************************************************
 * DRAG & DROP (CARD-CENTRIC)
 **********************************************************/
let currentDrag = null;

function handleDragStart(e) {
  const card = this;
  const id = card.dataset.cardId;
  const type = card.dataset.cardType;
  const isPlacement = card.dataset.isPlacement === "true";

  const dz = card.closest(".slot-dropzone, .backlog-dropzone");
  const locType = dz?.dataset.locationType; // "week" or "backlog"

  let sourcePlacement = null;
  if (isPlacement && locType === "week") {
    sourcePlacement = {
      term: Number(card.dataset.term),
      week: Number(card.dataset.week),
      lane: card.dataset.lane,
      placementIndex: Number(card.dataset.placementIndex)
    };
  }

  currentDrag = {
    id,
    type,
    sourceLocationType: locType || null,
    sourcePlacement,
    sourceElement: card
  };

  card.classList.add("dragging");
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", JSON.stringify({ id, type }));
}

function handleDragEnd() {
  this.classList.remove("dragging");
  currentDrag = null;
}

function enableDropzone(dz) {
  dz.addEventListener("dragover", (e) => {
    e.preventDefault();
    if (!currentDrag) return;

    const acceptType = dz.dataset.acceptType;
    const dragType = currentDrag.type;
    if (acceptType && dragType && acceptType !== dragType) {
      e.dataTransfer.dropEffect = "none";
      dz.classList.remove("is-over");
      return;
    }
    e.dataTransfer.dropEffect = "move";
    dz.classList.add("is-over");
  });

  dz.addEventListener("dragleave", () => {
    dz.classList.remove("is-over");
  });

  dz.addEventListener("drop", (e) => {
    e.preventDefault();
    dz.classList.remove("is-over");
    if (!currentDrag) return;

    const acceptType = dz.dataset.acceptType;
    if (acceptType && currentDrag.type !== acceptType) return;

    const dropIndex = getDropIndex(dz, e.clientY);
    moveCardToDropzone(currentDrag, dz, dropIndex);
  });
}

function getDropIndex(dz, clientY) {
  const cards = Array.from(dz.querySelectorAll(".card")).filter(
    (c) => !currentDrag || c !== currentDrag.sourceElement
  );
  let index = cards.length;
  for (let i = 0; i < cards.length; i++) {
    const rect = cards[i].getBoundingClientRect();
    const midY = rect.top + rect.height / 2;
    if (clientY < midY) {
      index = i;
      break;
    }
  }
  return index;
}

function getCardObject(type, id) {
  if (type === "syllabus") return state.syllabusById.get(id);
  if (type === "textbook") return state.textbookById.get(id);
  if (type === "resource") return state.resources[id];
  return null;
}

function moveCardToDropzone(drag, dz, dropIndex) {
  const { id, type, sourceLocationType, sourcePlacement } = drag;
  const destLocationType = dz.dataset.locationType;

  const card = getCardObject(type, id);
  if (!card) return;

  if (destLocationType === "week") {
    const term = state.currentTerm;
    const weekKey = dz.dataset.weekKey;
    const week = Number(weekKey.replace("week-", ""));
    const lane = dz.dataset.slotType;

    const sameLane =
      sourcePlacement &&
      sourceLocationType === "week" &&
      sourcePlacement.term === term &&
      sourcePlacement.week === week &&
      sourcePlacement.lane === lane;

    if (sameLane) {
      // Reorder within same lane
      reorderWithinLane(type, id, sourcePlacement, dropIndex);
    } else {
      // New placement
      if (type === "resource") {
        // Move: remove old placement (if any), then add new
        if (sourcePlacement && sourceLocationType === "week") {
          removePlacement(card, sourcePlacement);
        }
        addPlacement(card, term, week, lane, dropIndex);
      } else {
        // syllabus/textbook: copy (keep original), add new placement
        addPlacement(card, term, week, lane, dropIndex);
      }
    }

    saveState();
    renderAll();
    return;
  }

  if (destLocationType === "backlog") {
    // Remove this placement if from a week
    if (sourceLocationType === "week" && sourcePlacement) {
      removePlacement(card, sourcePlacement);
    }
    // Backlog lists are derived from cards with 0 placements; nothing else to do
    saveState();
    renderAll();
  }
}

function addPlacement(card, term, week, lane, dropIndex) {
  card.placements = card.placements || [];

  // Collect all placements in the target lane to compute order
  const lanePlacements = card.placements.filter(
    (p) => p.term === term && p.week === week && p.lane === lane
  );
  const otherPlacements = card.placements.filter(
    (p) => !(p.term === term && p.week === week && p.lane === lane)
  );

  lanePlacements.sort((a, b) => {
    const ao = typeof a.order === "number" ? a.order : 0;
    const bo = typeof b.order === "number" ? b.order : 0;
    return ao - bo;
  });

  const insertIndex = Math.min(
    typeof dropIndex === "number" ? dropIndex : lanePlacements.length,
    lanePlacements.length
  );

  const newPlacement = { term, week, lane, order: 0 };
  lanePlacements.splice(insertIndex, 0, newPlacement);

  // Reassign orders
  lanePlacements.forEach((p, i) => {
    p.order = i;
  });

  card.placements = otherPlacements.concat(lanePlacements);
}

function removePlacement(card, placementInfo) {
  if (!card.placements) return;
  card.placements = card.placements.filter((p, idx) => {
    if (
      p.term === placementInfo.term &&
      p.week === placementInfo.week &&
      p.lane === placementInfo.lane
    ) {
      // Remove only one occurrence; use index check
      return idx !== placementInfo.placementIndex;
    }
    return true;
  });
}

function reorderWithinLane(type, id, sourcePlacement, dropIndex) {
  const card = getCardObject(type, id);
  if (!card || !card.placements) return;

  const { term, week, lane, placementIndex } = sourcePlacement;

  const lanePlacements = [];
  const otherPlacements = [];

  card.placements.forEach((p) => {
    if (p.term === term && p.week === week && p.lane === lane) {
      lanePlacements.push(p);
    } else {
      otherPlacements.push(p);
    }
  });

  lanePlacements.sort((a, b) => {
    const ao = typeof a.order === "number" ? a.order : 0;
    const bo = typeof b.order === "number" ? b.order : 0;
    return ao - bo;
  });

  if (
    placementIndex < 0 ||
    placementIndex >= lanePlacements.length
  ) {
    return;
  }

  const [moved] = lanePlacements.splice(placementIndex, 1);
  const newIndex = Math.min(dropIndex, lanePlacements.length);
  lanePlacements.splice(newIndex, 0, moved);

  lanePlacements.forEach((p, i) => {
    p.order = i;
  });

  card.placements = otherPlacements.concat(lanePlacements);
}

/**********************************************************
 * EXPORT / IMPORT
 **********************************************************/
function exportJSON() {
  const syllabusPlacements = {};
  state.syllabusById.forEach((card, id) => {
    if (card.placements && card.placements.length > 0) {
      syllabusPlacements[id] = card.placements;
    }
  });

  const textbookPlacements = {};
  state.textbookById.forEach((card, id) => {
    if (card.placements && card.placements.length > 0) {
      textbookPlacements[id] = card.placements;
    }
  });

  const exportObj = {
    version: 1,
    theme: document.body.dataset.theme || "dark",
    cards: {
      syllabusPlacements,
      textbookPlacements,
      resources: state.resources
    },
    internalState: {
      currentTerm: state.currentTerm,
      syllabusPlacements,
      textbookPlacements,
      resources: state.resources,
      nextResourceId: state.nextResourceId,
      syllabusTopicFilter: state.syllabusTopicFilter
    }
  };

  const blob = new Blob([JSON.stringify(exportObj, null, 2)], {
    type: "application/json"
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const dateStr = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `aa-topic1-planner-${dateStr}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function handleImportFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const obj = JSON.parse(e.target.result);
      applyImportedState(obj);
      alert("Import successful.");
    } catch (err) {
      console.error(err);
      alert("Could not import JSON – check the file format.");
    } finally {
      event.target.value = "";
    }
  };
  reader.readAsText(file);
}

function applyImportedState(importObj) {
  if (!importObj || typeof importObj !== "object") return;

  if (importObj.theme) setTheme(importObj.theme);
  const s = importObj.internalState || importObj;

  // Clear placements first
  SYLLABUS_OBJECTIVES.forEach((c) => (c.placements = []));
  TEXTBOOK_REFERENCES.forEach((c) => (c.placements = []));

  if (s.syllabusPlacements && typeof s.syllabusPlacements === "object") {
    Object.entries(s.syllabusPlacements).forEach(([id, placements]) => {
      const card = state.syllabusById.get(id);
      if (card) card.placements = placements || [];
    });
  }

  if (s.textbookPlacements && typeof s.textbookPlacements === "object") {
    Object.entries(s.textbookPlacements).forEach(([id, placements]) => {
      const card = state.textbookById.get(id);
      if (card) card.placements = placements || [];
    });
  }

  state.resources =
    (s.resources && typeof s.resources === "object" && s.resources) || {};
  Object.values(state.resources).forEach((r) => {
    r.placements = r.placements || [];
  });

  state.nextResourceId =
    typeof s.nextResourceId === "number" ? s.nextResourceId : 0;
  state.currentTerm =
    typeof s.currentTerm === "number" ? s.currentTerm : 1;
  state.syllabusTopicFilter = s.syllabusTopicFilter || state.syllabusTopicFilter;

  buildTermTabs();
  buildSyllabusTopicTabs();
  buildPlanner();
  renderAll();
  saveState();
}

/**********************************************************
 * CLEAN PLANNER
 * - Remove duplicate placements (same card, term, week, lane)
 * - Nothing to do with backlog: it's derived from cards with 0 placements
 **********************************************************/
function cleanPlanner() {
  const dedupe = (card) => {
    if (!card.placements) return;
    const seen = new Set();
    const result = [];
    card.placements.forEach((p) => {
      const key = `${p.term}-${p.week}-${p.lane}-${p.order}`;
      if (seen.has(key)) return;
      seen.add(key);
      result.push(p);
    });
    card.placements = result;
  };

  SYLLABUS_OBJECTIVES.forEach(dedupe);
  TEXTBOOK_REFERENCES.forEach(dedupe);
  Object.values(state.resources).forEach(dedupe);

  saveState();
  renderAll();
  alert("Planner cleaned: duplicate placements removed.");
}

/**********************************************************
 * CONTROLS
 **********************************************************/
function wireControls() {
  document
    .getElementById("resetLayoutBtn")
    .addEventListener("click", () => {
      if (
        !confirm(
          "Reset the entire planner? All placements will be cleared and resources will remain but unplaced."
        )
      ) {
        return;
      }
      SYLLABUS_OBJECTIVES.forEach((c) => (c.placements = []));
      TEXTBOOK_REFERENCES.forEach((c) => (c.placements = []));
      Object.values(state.resources).forEach((r) => (r.placements = []));
      state.currentTerm = 1;
      state.nextResourceId = 0;
      saveState();
      buildTermTabs();
      renderAll();
    });

  document
    .getElementById("cleanPlannerBtn")
    .addEventListener("click", () => {
      if (
        !confirm(
          "Clean planner?\n\nThis will remove duplicate placements of the same card in the same lane."
        )
      ) {
        return;
      }
      cleanPlanner();
    });

  document
    .getElementById("newResourceBtn")
    .addEventListener("click", createNewResourceNote);

  document
    .getElementById("themeToggleBtn")
    .addEventListener("click", toggleTheme);

  document.getElementById("exportBtn").addEventListener("click", exportJSON);

  const importInput = document.getElementById("importFileInput");
  document.getElementById("importBtn").addEventListener("click", () => {
    importInput.click();
  });
  importInput.addEventListener("change", handleImportFile);
}
