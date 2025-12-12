/**********************************************************
 * CONSTANTS + STATE
 **********************************************************/
const TERMS = 8;
const WEEKS_PER_TERM = 10;
const STORAGE_KEY = "ib-math-planner-card-centric-v2";
const THEME_KEY = "aa-planner-theme";

const state = {
  currentTerm: 1,
  currentCourse: "AA_SL",        // AA_SL, AA_HL, AI_SL, AI_HL
  syllabusById: new Map(),       // id -> syllabus card (with placements[])
  textbookById: new Map(),       // id -> textbook card (with placements[])
  resources: {},                 // id -> { id, title, detail, placements[] }
  nextResourceId: 0,
  syllabusTopicFilter: null,
  textbookBookFilter: null,      // which textbook tab is active
  syllabusSearchQuery: "",       // NEW: filter text for syllabus backlog
  textbookSearchQuery: ""        // NEW: filter text for textbook backlog
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
  buildTextbookTabs();
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
 * COURSE FILTER HELPERS
 **********************************************************/

function getSyllabusCourseTag(obj) {
  const s = obj.section || "";
  const t = obj.topic || "";

  if (s.includes("AA SL") || t.includes("AA SL")) return "AA_SL";
  if (s.includes("AA HL") || t.includes("AA HL")) return "AA_HL";
  if (s.includes("AI SL") || t.includes("AI SL")) return "AI_SL";
  if (s.includes("AI HL") || t.includes("AI HL")) return "AI_HL";

  // Fallback: try a looser match on topic prefix like "AI SL Functions"
  if (/^AA SL/i.test(t)) return "AA_SL";
  if (/^AA HL/i.test(t)) return "AA_HL";
  if (/^AI SL/i.test(t)) return "AI_SL";
  if (/^AI HL/i.test(t)) return "AI_HL";

  // If unknown, allow by default
  return null;
}

function getAllowedSyllabusTagsForCourse(course) {
  switch (course) {
    case "AA_SL":
      return ["AA_SL"];
    case "AA_HL":
      return ["AA_SL", "AA_HL"]; // HL includes SL
    case "AI_SL":
      return ["AI_SL"];
    case "AI_HL":
      return ["AI_SL", "AI_HL"]; // HL includes SL
    default:
      return ["AA_SL", "AA_HL", "AI_SL", "AI_HL"];
  }
}

function syllabusAllowedForCourse(obj, course) {
  const tag = getSyllabusCourseTag(obj);
  if (!tag) return true; // if we can't classify it, don't hide it
  const allowed = getAllowedSyllabusTagsForCourse(course);
  return allowed.includes(tag);
}

// --- Textbooks ---

function getBookName(ref) {
  if (ref && ref.textbook) return ref.textbook;
  if (ref && ref.label) {
    const parts = ref.label.split(/–|-/);
    return (parts[0] || "Textbook").trim();
  }
  return "Textbook";
}

// Normalise textbook into logical group keys
function getTextbookGroup(ref) {
  const name = getBookName(ref);

  if (name.includes("AA HL")) return "AA_HL_BOOK";
  if (name.includes("AA SL")) return "AA_SL_BOOK";
  if (name.includes("AI SL")) return "AI_SL_BOOK";
  if (name.includes("AI HL")) return "AI_HL_BOOK";
  if (name.includes("Core HL")) return "CORE_HL_BOOK";
  if (name.includes("Core SL")) return "CORE_SL_BOOK";

  return "OTHER_BOOK";
}

function getAllowedTextbookGroupsForCourse(course) {
  switch (course) {
    case "AA_SL":
      // Reasonable assumption: AA SL uses AA SL + Core SL
      return ["AA_SL_BOOK", "CORE_SL_BOOK"];
    case "AA_HL":
      // As per your note: Core SL, Core HL, AA SL, AA HL
      return ["AA_SL_BOOK", "AA_HL_BOOK", "CORE_SL_BOOK", "CORE_HL_BOOK"];
    case "AI_SL":
      // As per your note: Core SL + AI SL
      return ["AI_SL_BOOK", "CORE_SL_BOOK"];
    case "AI_HL":
      // Reasonable assumption: Core SL, Core HL, AI SL, AI HL
      return ["AI_SL_BOOK", "AI_HL_BOOK", "CORE_SL_BOOK", "CORE_HL_BOOK"];
    default:
      return [
        "AA_SL_BOOK",
        "AA_HL_BOOK",
        "AI_SL_BOOK",
        "AI_HL_BOOK",
        "CORE_SL_BOOK",
        "CORE_HL_BOOK",
        "OTHER_BOOK"
      ];
  }
}

function textbookAllowedForCourse(ref, course) {
  const group = getTextbookGroup(ref);
  const allowedGroups = getAllowedTextbookGroupsForCourse(course);
  return allowedGroups.includes(group);
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

  // Default topic filter = first topic for the default course
  const topics = Array.from(
    new Set(
      SYLLABUS_OBJECTIVES
        .filter((o) => syllabusAllowedForCourse(o, state.currentCourse))
        .map((o) => o.topic)
    )
  );
  if (!state.syllabusTopicFilter && topics.length > 0) {
    state.syllabusTopicFilter = topics[0];
  }
}

/**********************************************************
 * LOAD / SAVE STATE
 **********************************************************/
function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    state.currentTerm = 1;
    state.resources = {};
    state.nextResourceId = 0;
    state.currentCourse = "AA_SL";
    state.syllabusSearchQuery = "";
    state.textbookSearchQuery = "";
    return;
  }

  try {
    const saved = JSON.parse(raw);
    const s = saved.internalState || saved;

    state.currentTerm =
      typeof s.currentTerm === "number" ? s.currentTerm : 1;
    state.currentCourse = s.currentCourse || "AA_SL";

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
    if (s.textbookBookFilter) {
      state.textbookBookFilter = s.textbookBookFilter;
    }

    state.syllabusSearchQuery = s.syllabusSearchQuery || "";
    state.textbookSearchQuery = s.textbookSearchQuery || "";
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
    version: 2,
    internalState: {
      currentTerm: state.currentTerm,
      currentCourse: state.currentCourse,
      syllabusPlacements,
      textbookPlacements,
      resources: state.resources,
      nextResourceId: state.nextResourceId,
      syllabusTopicFilter: state.syllabusTopicFilter,
      textbookBookFilter: state.textbookBookFilter,
      syllabusSearchQuery: state.syllabusSearchQuery,
      textbookSearchQuery: state.textbookSearchQuery
    }
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (e) {
    console.warn("Could not save layout", e);
  }
}

/**********************************************************
 * TERM TABS + TOPIC TABS + TEXTBOOK TABS
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
    new Set(
      SYLLABUS_OBJECTIVES
        .filter((o) => syllabusAllowedForCourse(o, state.currentCourse))
        .map((o) => o.topic)
    )
  );

  if (!topics.includes(state.syllabusTopicFilter)) {
    state.syllabusTopicFilter = topics[0] || null;
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

function buildTextbookTabs() {
  const container = document.getElementById("textbookTabs");
  if (!container) return;
  container.innerHTML = "";

  // All distinct book names
  const allBooks = Array.from(
    new Set(TEXTBOOK_REFERENCES.map((ref) => getBookName(ref)))
  );

  // Keep only books that have at least one chapter allowed for this course
  const filteredBooks = allBooks.filter((bookName) =>
    TEXTBOOK_REFERENCES.some((ref) => {
      if (getBookName(ref) !== bookName) return false;
      return textbookAllowedForCourse(ref, state.currentCourse);
    })
  );

  if (
    !state.textbookBookFilter ||
    !filteredBooks.includes(state.textbookBookFilter)
  ) {
    state.textbookBookFilter = filteredBooks[0] || null;
  }

  filteredBooks.forEach((bookName) => {
    const btn = document.createElement("button");
    btn.className =
      "textbook-tab" +
      (bookName === state.textbookBookFilter ? " active" : "");
    btn.textContent = bookName;
    btn.addEventListener("click", () => {
      state.textbookBookFilter = bookName;
      document
        .querySelectorAll(".textbook-tab")
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

/**
 * Case-insensitive text matcher for syllabus cards.
 */
function syllabusMatchesSearch(obj, query) {
  if (!query) return true;
  const q = query.toLowerCase();
  const haystack =
    ((obj.section || "") +
      " " +
      (obj.topic || "") +
      " " +
      (obj.text || "")).toLowerCase();
  return haystack.includes(q);
}

/**
 * Case-insensitive text matcher for textbook cards.
 */
function textbookMatchesSearch(ref, query) {
  if (!query) return true;
  const q = query.toLowerCase();
  const bookName = getBookName(ref);
  const haystack =
    ((bookName || "") +
      " " +
      (ref.label || "") +
      " " +
      (ref.detail || "")).toLowerCase();
  return haystack.includes(q);
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

  const syllabusQuery = (state.syllabusSearchQuery || "").trim().toLowerCase();
  const textbookQuery =
    (state.textbookSearchQuery || "").trim().toLowerCase();

  // Syllabus backlog: filtered by course + topic + search, and unplaced
  SYLLABUS_OBJECTIVES.forEach((obj) => {
    if (!syllabusAllowedForCourse(obj, state.currentCourse)) return;
    if (state.syllabusTopicFilter && obj.topic !== state.syllabusTopicFilter)
      return;
    if (syllabusQuery && !syllabusMatchesSearch(obj, syllabusQuery)) return;
    if (!cardHasPlacements(obj)) {
      unplacedSyllabus++;
      syllabusBacklog.appendChild(createCard(obj, "syllabus", null));
    }
  });

  // Textbook backlog: filtered by course + selected book tab + search, and unplaced
  TEXTBOOK_REFERENCES.forEach((ref) => {
    if (!textbookAllowedForCourse(ref, state.currentCourse)) return;

    const bookName = getBookName(ref);
    if (state.textbookBookFilter && bookName !== state.textbookBookFilter)
      return;

    if (textbookQuery && !textbookMatchesSearch(ref, textbookQuery)) return;

    if (!cardHasPlacements(ref)) {
      unplacedTextbook++;
      textbookBacklog.appendChild(createCard(ref, "textbook", null));
    }
  });

  // Resource backlog: unplaced resources (not searched for now)
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
      if (!syllabusAllowedForCourse(card, state.currentCourse)) return;
      (card.placements || []).forEach((p, idx) => {
        if (p.term === term && p.week === week && p.lane === lane) {
          results.push({
            cardType: "syllabus",
            card,
            placement: p,
            placementIndex: idx
          });
        }
      });
    });
  } else if (lane === "textbook") {
    TEXTBOOK_REFERENCES.forEach((card) => {
      if (!textbookAllowedForCourse(card, state.currentCourse)) return;
      (card.placements || []).forEach((p, idx) => {
        if (p.term === term && p.week === week && p.lane === lane) {
          results.push({
            cardType: "textbook",
            card,
            placement: p,
            placementIndex: idx
          });
        }
      });
    });
  } else if (lane === "resources") {
    Object.values(state.resources).forEach((card) => {
      (card.placements || []).forEach((p, idx) => {
        if (p.term === term && p.week === week && p.lane === lane) {
          results.push({
            cardType: "resource",
            card,
            placement: p,
            placementIndex: idx
          });
        }
      });
    });
  }

  // Sort by order, fallback to index
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
    // only count those allowed for current course
    if (!syllabusAllowedForCourse(c, state.currentCourse)) return;
    syllabusPlacements += (c.placements || []).length;
  });

  let textbookPlacements = 0;
  TEXTBOOK_REFERENCES.forEach((c) => {
    if (!textbookAllowedForCourse(c, state.currentCourse)) return;
    textbookPlacements += (c.placements || []).length;
  });

  let resourcePlacements = 0;
  Object.values(state.resources).forEach((c) => {
    resourcePlacements += (c.placements || []).length;
  });

  const totalSyllabus = SYLLABUS_OBJECTIVES.filter((c) =>
    syllabusAllowedForCourse(c, state.currentCourse)
  ).length;
  const totalTextbook = TEXTBOOK_REFERENCES.filter((c) =>
    textbookAllowedForCourse(c, state.currentCourse)
  ).length;

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
    pill.textContent = data.topic || "Syllabus";
  } else if (type === "textbook") {
    pill.classList.add("pill-textbook");
    const bookName = getBookName(data);
    pill.textContent = bookName;

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
 * DRAG & DROP
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
  if (!dz) return;

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
    saveState();
    renderAll();
  }
}

function addPlacement(card, term, week, lane, dropIndex) {
  card.placements = card.placements || [];

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

  lanePlacements.forEach((p, i) => {
    p.order = i;
  });

  card.placements = otherPlacements.concat(lanePlacements);
}

function removePlacement(card, placementInfo) {
  if (!card.placements) return;
  let encountered = 0;
  card.placements = card.placements.filter((p) => {
    if (
      p.term === placementInfo.term &&
      p.week === placementInfo.week &&
      p.lane === placementInfo.lane
    ) {
      // Remove only the specific indexed occurrence
      if (encountered === placementInfo.placementIndex) {
        encountered++;
        return false;
      }
      encountered++;
      return true;
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

  if (placementIndex < 0 || placementIndex >= lanePlacements.length) {
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
    version: 2,
    theme: document.body.dataset.theme || "dark",
    cards: {
      syllabusPlacements,
      textbookPlacements,
      resources: state.resources
    },
    internalState: {
      currentTerm: state.currentTerm,
      currentCourse: state.currentCourse,
      syllabusPlacements,
      textbookPlacements,
      resources: state.resources,
      nextResourceId: state.nextResourceId,
      syllabusTopicFilter: state.syllabusTopicFilter,
      textbookBookFilter: state.textbookBookFilter,
      syllabusSearchQuery: state.syllabusSearchQuery,
      textbookSearchQuery: state.textbookSearchQuery
    }
  };

  const blob = new Blob([JSON.stringify(exportObj, null, 2)], {
    type: "application/json"
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const dateStr = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `ib-math-planner-${dateStr}.json`;
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
  state.currentCourse = s.currentCourse || "AA_SL";
  state.syllabusTopicFilter =
    s.syllabusTopicFilter || state.syllabusTopicFilter;
  state.textbookBookFilter =
    s.textbookBookFilter || state.textbookBookFilter;
  state.syllabusSearchQuery = s.syllabusSearchQuery || "";
  state.textbookSearchQuery = s.textbookSearchQuery || "";

  buildTermTabs();
  buildSyllabusTopicTabs();
  buildTextbookTabs();
  buildPlanner();
  renderAll();
  saveState();
}

/**********************************************************
 * CLEAN PLANNER
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
 * COURSE CHANGE + CONTROLS
 **********************************************************/
function handleCourseChange(newCourse) {
  state.currentCourse = newCourse;

  // Rebuild dependent UI
  buildSyllabusTopicTabs();
  buildTextbookTabs();
  renderBacklogs();
  renderPlanner();
  updateSummaryLabel();
  saveState();
}

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

  // Course select
  const classSelect = document.getElementById("classFilterSelect");
  if (classSelect) {
    // Sync UI with state
    classSelect.value = state.currentCourse;
    classSelect.addEventListener("change", (e) => {
      handleCourseChange(e.target.value);
    });
  }

  // NEW: Syllabus backlog search input (Option C – header search)
  const syllabusSearchInput = document.getElementById("syllabusSearchInput");
  if (syllabusSearchInput) {
    syllabusSearchInput.value = state.syllabusSearchQuery || "";
    syllabusSearchInput.addEventListener("input", (e) => {
      state.syllabusSearchQuery = e.target.value || "";
      renderBacklogs();
      saveState();
    });
  }

  // NEW: Textbook backlog search input (Option C – header search)
  const textbookSearchInput = document.getElementById("textbookSearchInput");
  if (textbookSearchInput) {
    textbookSearchInput.value = state.textbookSearchQuery || "";
    textbookSearchInput.addEventListener("input", (e) => {
      state.textbookSearchQuery = e.target.value || "";
      renderBacklogs();
      saveState();
    });
  }
}
