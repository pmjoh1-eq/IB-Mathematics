 const SYLLABUS_OBJECTIVES = [
  {
    id: "AA_1-1",
    section: "1.1",
    topic: "Number and Algebra",
    text: "Perform operations with numbers written in the form $a \\times 10^k$, where $1 \\le a < 10$ and $k \\in \\mathbb{Z}$."
  },
  {
    id: "AA_1-2",
    section: "1.2",
    topic: "Number and Algebra",
    text: "Use formulas for the $n$th term and the sum of the first $n$ terms of arithmetic sequences; express sums using $\\Sigma$ notation and interpret arithmetic models in context."
  },
  {
    id: "AA_1-3",
    section: "1.3",
    topic: "Number and Algebra",
    text: "Use formulas for the $n$th term and sum of the first $n$ terms of geometric sequences; use $\\Sigma$ notation and apply geometric models to real situations."
  },
  {
    id: "AA_1-4",
    section: "1.4",
    topic: "Number and Algebra",
    text: "Apply geometric sequences to financial situations, including compound interest $A = P(1+r)^n$ and depreciation problems."
  },
  {
    id: "AA_1-6",
    section: "1.6",
    topic: "Number and Algebra",
    text: "Set out simple numerical and algebraic proofs from LHS to RHS; use correct notation for equality $(=)$ and identity $(\\equiv)$."
  },
  {
    id: "AA_1-7",
    section: "1.7",
    topic: "Number and Algebra",
    text: "Use laws of logarithms: $\\log_a(xy) = \\log_a x + \\log_a y$, $\\log_a(x/y) = \\log_a x - \\log_a y$, $\\log_a(x^m) = m\\log_a x$, and the change-of-base formula $\\log_a x = \\dfrac{\\log_b x}{\\log_b a}$ to solve exponential equations."
  },
  {
    id: "AA_1-8",
    section: "1.8",
    topic: "Number and Algebra",
    text: "Work with infinite convergent geometric series and use the sum formula $S = \\dfrac{a}{1-r}$ for $|r| < 1$."
  },
  {
    id: "AA_1-9",
    section: "1.9",
    topic: "Number and Algebra",
    text: "Expand $(a+b)^n$ for $n \\in \\mathbb{N}$ using the binomial theorem, Pascal’s triangle, and binomial coefficients $\\binom{n}{r}$."
  },
  {
    id: "AA_1-10",
    section: "1.10",
    topic: "Number and Algebra",
    text: "Apply basic counting principles, permutations and combinations in selection and arrangement problems; extend binomial expansions to rational or negative indices $(a+b)^n$, $n \\in \\mathbb{Q}$."
  },
  {
    id: "AA_1-11",
    section: "1.11",
    topic: "Number and Algebra",
    text: "Decompose rational expressions into partial fractions to simplify expressions and prepare for integration."
  },
  {
    id: "AA_1-12",
    section: "1.12",
    topic: "Number and Algebra",
    text: "Work with complex numbers $z = a + bi$, $i^2 = -1$; identify real and imaginary parts, modulus and argument; represent complex numbers in the Argand plane."
  },
  {
    id: "AA_1-13",
    section: "1.13",
    topic: "Number and Algebra",
    text: "Express complex numbers in polar form $z = r(\\cos\\theta + i\\sin\\theta) = r\\,\\text{cis}\\,\\theta$ and exponential form $z = re^{i\\theta}$; perform operations (addition, multiplication, division) in Cartesian and polar form and interpret them geometrically."
  },
  {
    id: "AA_1-15",
    section: "1.15",
    topic: "Number and Algebra",
    text: "Use proof techniques including mathematical induction, proof by contradiction, and counterexamples to test general statements."
  },
  {
    id: "AA_1-16",
    section: "1.16",
    topic: "Number and Algebra",
    text: "Solve systems of up to three linear equations in three unknowns; classify solution sets as unique, infinitely many, or none."
  },

  /* --------------------------- TOPIC 2: FUNCTIONS --------------------------- */

  {
    id: "AA_2-1",
    section: "2.1",
    topic: "Functions",
    text: "Use different forms of linear equations such as $y = mx + c$; recognise that parallel lines have equal gradients and perpendicular lines satisfy $m_1 m_2 = -1$."
  },
  {
    id: "AA_2-2",
    section: "2.2",
    topic: "Functions",
    text: "Understand the concept of a function, its domain and range; use function notation (e.g. $f(x)$, $v(t)$); view functions as mathematical models; interpret inverse functions as reflections in the line $y = x$."
  },
  {
    id: "AA_2-3",
    section: "2.3",
    topic: "Functions",
    text: "Interpret and sketch graphs of $y = f(x)$ from descriptions, tables, or contexts; use technology to graph functions and combinations such as $f(x) + g(x)$."
  },
  {
    id: "AA_2-4",
    section: "2.4",
    topic: "Functions",
    text: "Determine key graph features, including intersections of curves or lines, using analytical methods and technology."
  },
  {
    id: "AA_2-5",
    section: "2.5",
    topic: "Functions",
    text: "Form composite functions $(f \\circ g)(x) = f(g(x))$ and work with inverse functions $f^{-1}(x)$ satisfying $(f \\circ f^{-1})(x) = x$ where appropriate."
  },
  {
    id: "AA_2-6",
    section: "2.6",
    topic: "Functions",
    text: "Represent quadratic functions in standard $ax^2 + bx + c$, factor, and vertex form; identify $y$-intercept, axis of symmetry, and vertex from these forms."
  },
  {
    id: "AA_2-7",
    section: "2.7",
    topic: "Functions",
    text: "Solve quadratic equations and inequalities using the quadratic formula $x = \\dfrac{-b \\pm \\sqrt{\\Delta}}{2a}$, where $\\Delta = b^2 - 4ac$, and interpret the discriminant to determine the nature of roots."
  },
  {
    id: "AA_2-8",
    section: "2.8",
    topic: "Functions",
    text: "Work with reciprocal functions such as $f(x) = 1/x$ and general rational functions $f(x) = \\dfrac{ax + b}{cx + d}$; identify key features including asymptotes."
  },
  {
    id: "AA_2-9",
    section: "2.9",
    topic: "Functions",
    text: "Understand and use exponential functions $f(x) = a^x$, $f(x) = e^x$ and logarithmic functions $f(x) = \\log_a x$, $f(x) = \\ln x$ in modelling situations."
  },
  {
    id: "AA_2-10",
    section: "2.10",
    topic: "Functions",
    text: "Solve equations graphically and algebraically, including with technology, and interpret solutions in context."
  },
  {
    id: "AA_2-11",
    section: "2.11",
    topic: "Functions",
    text: "Apply graph transformations: vertical and horizontal translations, reflections in axes, and stretches/compressions; combine transformations in sequence."
  },
  {
    id: "AA_2-12",
    section: "2.12",
    topic: "Functions",
    text: "Analyse polynomial functions: roots/zeros, factors, and their graphs; use factor and remainder theorems; relate sums and products of roots to coefficients."
  },
  {
    id: "AA_2-13",
    section: "2.13",
    topic: "Functions",
    text: "Study rational functions such as $f(x) = \\dfrac{ax + b}{cx^2 + dx + e}$ and $f(x) = \\dfrac{ax^2 + bx + c}{dx + e}$; identify asymptotes and graph behaviour."
  },
  {
    id: "AA_2-14",
    section: "2.14",
    topic: "Functions",
    text: "Recognise odd and even functions; find and interpret inverse functions, including domain restrictions; work with self-inverse functions."
  },
  {
    id: "AA_2-15",
    section: "2.15",
    topic: "Functions",
    text: "Solve inequalities such as $g(x) \\ge f(x)$ using graphical and algebraic methods."
  },
  {
    id: "AA_2-16",
    section: "2.16",
    topic: "Functions",
    text: "Work with special graphs and transformations such as $y = |f(x)|$, $y = f(|x|)$, $y = \\dfrac{1}{f(x)}$, $y = f(ax + b)$, and $y = (f(x))^2$."
  },

  /* -------------------- TOPIC 3: GEOMETRY & TRIGONOMETRY -------------------- */

  {
    id: "AA_3-1",
    section: "3.1",
    topic: "Geometry and Trigonometry",
    text: "Find volume and surface area of solids (right pyramids, cones, spheres, hemispheres, and combinations); determine angles between two lines or between a line and a plane."
  },
  {
    id: "AA_3-2",
    section: "3.2",
    topic: "Geometry and Trigonometry",
    text: "Use right-angled trigonometry (sine, cosine, tangent); apply sine rule $\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C}$, cosine rule $c^2 = a^2 + b^2 - 2ab\\cos C$, and area formula $\\tfrac12 ab\\sin C$."
  },
  {
    id: "AA_3-3",
    section: "3.3",
    topic: "Geometry and Trigonometry",
    text: "Apply trigonometry to real problems, including Pythagoras, angles of elevation and depression; construct labelled diagrams from word descriptions."
  },
  {
    id: "AA_3-4",
    section: "3.4",
    topic: "Geometry and Trigonometry",
    text: "Use radian measure; compute arc length $s = r\\theta$ and sector area $A = \\tfrac12 r^2 \\theta$."
  },
  {
    id: "AA_3-5",
    section: "3.5",
    topic: "Geometry and Trigonometry",
    text: "Define $\\sin\\theta$ and $\\cos\\theta$ on the unit circle; use $\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}$; handle the ambiguous case of the sine rule."
  },
  {
    id: "AA_3-6",
    section: "3.6",
    topic: "Geometry and Trigonometry",
    text: "Use identities such as $\\sin^2 \\theta + \\cos^2 \\theta = 1$; apply double-angle and other basic trig identities; reason about sign and values of trig functions in different quadrants."
  },
  {
    id: "AA_3-7",
    section: "3.7",
    topic: "Geometry and Trigonometry",
    text: "Sketch graphs of $\\sin x$, $\\cos x$, $\\tan x$ and related functions; identify amplitude, period, and phase shift."
  },
  {
    id: "AA_3-8",
    section: "3.8",
    topic: "Geometry and Trigonometry",
    text: "Solve trigonometric equations in given intervals and interpret solutions; use technology where appropriate."
  },
  {
    id: "AA_3-12",
    section: "3.12",
    topic: "Geometry and Trigonometry",
    text: "Understand vectors in 2D and 3D: components, magnitude $|\\mathbf{v}|$, unit vectors, position and displacement vectors; perform vector addition, subtraction, and scalar multiplication; prove geometric results using vectors."
  },
  {
    id: "AA_3-13",
    section: "3.13",
    topic: "Geometry and Trigonometry",
    text: "Work with the scalar (dot) product $\\mathbf{a}\\cdot\\mathbf{b}$; find the angle between two vectors; determine conditions for perpendicularity and parallelism."
  },
  {
    id: "AA_3-14",
    section: "3.14",
    topic: "Geometry and Trigonometry",
    text: "Use vector equations of lines in 2D and 3D, $\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{b}$; find angles between lines; apply to simple kinematics problems."
  },
  {
    id: "AA_3-15",
    section: "3.15",
    topic: "Geometry and Trigonometry",
    text: "Classify pairs of lines in space as coincident, parallel, intersecting, or skew; find intersection points where they exist."
  },
  {
    id: "AA_3-16",
    section: "3.16",
    topic: "Geometry and Trigonometry",
    text: "Use the vector (cross) product $\\mathbf{v} \\times \\mathbf{w}$; know its properties and interpret $|\\mathbf{v} \\times \\mathbf{w}|$ geometrically (area of parallelogram)."
  },
  {
    id: "AA_3-17",
    section: "3.17",
    topic: "Geometry and Trigonometry",
    text: "Write vector equations of planes: $\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{b} + \\mu\\mathbf{c}$ and $\\mathbf{r} \\cdot \\mathbf{n} = \\mathbf{a} \\cdot \\mathbf{n}$; use the Cartesian plane equation $ax + by + cz = d$."
  },
  {
    id: "AA_3-18",
    section: "3.18",
    topic: "Geometry and Trigonometry",
    text: "Find intersections of a line with a plane, of two planes, or three planes; compute angles between a line and a plane or between two planes."
  },

  /* -------------------- TOPIC 4: STATISTICS & PROBABILITY -------------------- */

  {
    id: "AA_4-1",
    section: "4.1",
    topic: "Statistics and Probability",
    text: "Distinguish population and sample; identify random samples, discrete and continuous data; discuss reliability, bias, outliers, and sampling techniques."
  },
  {
    id: "AA_4-2",
    section: "4.2",
    topic: "Statistics and Probability",
    text: "Present data using frequency tables, histograms, and cumulative frequency graphs; use these to find median, quartiles, percentiles, range, and IQR; construct box-and-whisker plots."
  },
  {
    id: "AA_4-3",
    section: "4.3",
    topic: "Statistics and Probability",
    text: "Calculate and interpret mean, median, mode; estimate mean from grouped data; identify modal class; compute IQR, standard deviation, and variance; study effects of linear transformations."
  },
  {
    id: "AA_4-4",
    section: "4.4",
    topic: "Statistics and Probability",
    text: "Analyse bivariate data with scatter diagrams; calculate Pearson’s correlation coefficient $r$; draw line of best fit by eye; interpret the regression line of $y$ on $x$."
  },
  {
    id: "AA_4-5",
    section: "4.5",
    topic: "Statistics and Probability",
    text: "Use basic probability concepts: trials, outcomes, equally likely outcomes, sample space $U$, events; compute $P(A) = \\dfrac{n(A)}{n(U)}$; work with complements $A'$ and expected frequency."
  },
  {
    id: "AA_4-6",
    section: "4.6",
    topic: "Statistics and Probability",
    text: "Use Venn diagrams, tree diagrams, sample space diagrams, and two-way tables; apply $P(A \\cup B)$, $P(A \\cap B)$; work with mutually exclusive events, conditional probability $P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}$, and independence $P(A \\cap B) = P(A)P(B)$."
  },
  {
    id: "AA_4-7",
    section: "4.7",
    topic: "Statistics and Probability",
    text: "Define discrete random variables; work with probability distributions and expected value $E(X)$ in applied contexts."
  },
  {
    id: "AA_4-8",
    section: "4.8",
    topic: "Statistics and Probability",
    text: "Use the binomial distribution; compute its mean and variance; identify suitable binomial modelling situations."
  },
  {
    id: "AA_4-9",
    section: "4.9",
    topic: "Statistics and Probability",
    text: "Use the normal distribution: understand shape and properties; perform normal probability and inverse normal calculations."
  },
  {
    id: "AA_4-10",
    section: "4.10",
    topic: "Statistics and Probability",
    text: "Work with the regression line of $x$ on $y$ for prediction; interpret results appropriately."
  },
  {
    id: "AA_4-11",
    section: "4.11",
    topic: "Statistics and Probability",
    text: "Use formal conditional probability $P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}$; characterise independence via $P(A|B) = P(A)$ and related conditions."
  },
  {
    id: "AA_4-12",
    section: "4.12",
    topic: "Statistics and Probability",
    text: "Standardise normal variables; compute $z$-scores and use inverse normal methods, including when mean or standard deviation is unknown."
  },
  {
    id: "AA_4-13",
    section: "4.13",
    topic: "Statistics and Probability",
    text: "Apply Bayes’ theorem for up to three events and interpret posterior probabilities in context."
  },
  {
    id: "AA_4-14",
    section: "4.14",
    topic: "Statistics and Probability",
    text: "Compute variance of a discrete random variable; work with continuous random variables and probability density functions; determine mode, median, mean, variance and standard deviation; understand effects of linear transformations of $X$."
  },

  /* --------------------------- TOPIC 5: CALCULUS --------------------------- */

  {
    id: "AA_5-1",
    section: "5.1",
    topic: "Calculus",
    text: "Understand the concept of a limit $\\lim_{x \\to a} f(x)$; interpret the derivative as a gradient function and as a rate of change."
  },
  {
    id: "AA_5-2",
    section: "5.2",
    topic: "Calculus",
    text: "Interpret increasing and decreasing functions via the sign of $f'(x)$: $f'(x) > 0$, $f'(x) = 0$, $f'(x) < 0$."
  },
  {
    id: "AA_5-3",
    section: "5.3",
    topic: "Calculus",
    text: "Differentiate polynomial functions such as $f(x) = a x^n + b x^m$, using the power rule."
  },
  {
    id: "AA_5-4",
    section: "5.4",
    topic: "Calculus",
    text: "Find equations of tangents and normals to a curve at a given point."
  },
  {
    id: "AA_5-5",
    section: "5.5",
    topic: "Calculus",
    text: "Introduce integration as anti-differentiation for functions of the form $f(x) = a x^n + b x^m$; use boundary conditions to find constants; evaluate definite integrals for areas under $y = f(x)$ where $f(x) \\ge 0$."
  },
  {
    id: "AA_5-6",
    section: "5.6",
    topic: "Calculus",
    text: "Differentiate elementary functions: $x^n$, $\\sin x$, $\\cos x$, $e^x$, $\\ln x$; apply the chain rule, product rule, and quotient rule, including examples like $\\sin(3x-1)$."
  },
  {
    id: "AA_5-7",
    section: "5.7",
    topic: "Calculus",
    text: "Interpret the second derivative $f''(x)$ and relate it to the behaviour of $f$ and $f'$ (concavity and inflection)."
  },
  {
    id: "AA_5-8",
    section: "5.8",
    topic: "Calculus",
    text: "Find local maxima and minima; solve optimisation problems; identify points of inflection with zero and non-zero gradient."
  },
  {
    id: "AA_5-9",
    section: "5.9",
    topic: "Calculus",
    text: "Apply differentiation and integration to kinematics: displacement $s$, velocity $v$, acceleration $a$, and total distance travelled for motion in one dimension."
  },
  {
    id: "AA_5-10",
    section: "5.10",
    topic: "Calculus",
    text: "Evaluate indefinite integrals of $x^n$ ($n$ rational), $1/x$, $e^x$, and composites with linear functions $ax + b$ using inspection, reverse chain rule, or substitution."
  },
  {
    id: "AA_5-11",
    section: "5.11",
    topic: "Calculus",
    text: "Evaluate definite integrals $\\int_a^b f(x)\\,dx$ analytically; interpret as area under curves (with $f(x)$ positive or negative) and area between curves."
  },
  {
    id: "AA_5-12",
    section: "5.12",
    topic: "Calculus",
    text: "Develop an informal understanding of continuity, differentiability, convergence and divergence; define derivative from first principles $f'(x) = \\lim_{h \\to 0} \\dfrac{f(x+h)-f(x)}{h}$; work with higher derivatives."
  },
  {
    id: "AA_5-13",
    section: "5.13",
    topic: "Calculus",
    text: "Evaluate limits of the form $\\lim_{x \\to a} \\dfrac{f(x)}{g(x)}$ and $\\lim_{x \\to \\infty} \\dfrac{f(x)}{g(x)}$ using l’Hôpital’s rule and Maclaurin series; apply l’Hôpital repeatedly where needed."
  },
  {
    id: "AA_5-14",
    section: "5.14",
    topic: "Calculus",
    text: "Use implicit differentiation; solve related rates problems; tackle optimisation problems that may involve endpoints."
  },
  {
    id: "AA_5-15",
    section: "5.15",
    topic: "Calculus",
    text: "Differentiate $\\tan x$, $\\sec x$, $\\csc x$, $\\cot x$, $a^x$, $\\log_a x$, $\\arcsin x$, $\\arccos x$, $\\arctan x$ and linear composites; integrate their derivatives; simplify integrands with partial fractions."
  },
  {
    id: "AA_5-16",
    section: "5.16",
    topic: "Calculus",
    text: "Use integration techniques including substitution and integration by parts; perform repeated integration by parts where necessary."
  },
  {
    id: "AA_5-17",
    section: "5.17",
    topic: "Calculus",
    text: "Find the area of a region enclosed by a curve and the $y$-axis; compute volumes of revolution about the $x$-axis and $y$-axis."
  },
  {
    id: "AA_5-18",
    section: "5.18",
    topic: "Calculus",
    text: "Solve first-order differential equations: use Euler’s method numerically; solve separable equations and homogeneous equations of the form $\\dfrac{dy}{dx} = f(y/x)$ via $y = vx$; solve linear equations $y' + P(x)y = Q(x)$ with integrating factors."
  },
  {
    id: "AA_5-19",
    section: "5.19",
    topic: "Calculus",
    text: "Work with Maclaurin series for $e^x$, $\\sin x$, $\\cos x$, $\\ln(1+x)$, and $(1+x)^p$ ($p$ rational); derive further series using substitution, products, integration, differentiation, or from differential equations."
  }
];


const TEXTBOOK_REFERENCES = [
  /* ======================= AA SL ======================= */

  {
    id: "tb-0",
    textbook: "AA-SL",
    label: "Haese IB AA SL – Ch 1: The Binomial Theorem",
    detail:
      "Factorial notation, binomial expansions, the binomial theorem and related problem solving.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-sl/book/ibsl-aaa-2/15"
  },
  {
    id: "tb-1",
    textbook: "AA-SL",
    label: "Haese IB AA SL – Ch 2: Quadratic Functions",
    detail:
      "Quadratic functions, graphs, discriminant, finding equations, intersections, optimisation and inequalities.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-sl/book/ibsl-aaa-2/29"
  },
  {
    id: "tb-2",
    textbook: "AA-SL",
    label: "Haese IB AA SL – Ch 3: Functions",
    detail:
      "Relations, functions, notation, domain and range, rational and composite functions, inverse and absolute value functions.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-sl/book/ibsl-aaa-2/65"
  },
  {
    id: "tb-3",
    textbook: "AA-SL",
    label: "Haese IB AA SL – Ch 4: Transformations of Functions",
    detail:
      "Translations, stretches, reflections and miscellaneous transformations.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-sl/book/ibsl-aaa-2/99"
  },
  {
    id: "tb-4",
    textbook: "AA-SL",
    label: "Haese IB AA SL – Ch 5: Exponential Functions",
    detail:
      "Exponents, algebraic expansion and factorisation, exponential equations, growth and decay and the natural exponential function.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-sl/book/ibsl-aaa-2/119"
  },
  {
    id: "tb-5",
    textbook: "AA-SL",
    label: "Haese IB AA SL – Ch 6: Logarithms",
    detail:
      "Logarithms in base 10 and base e, laws of logarithms, natural logarithms, change of base rule and solving exponential equations.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-sl/book/ibsl-aaa-2/145"
  },
  {
    id: "tb-6",
    textbook: "AA-SL",
    label: "Haese IB AA SL – Ch 7: The Unit Circle and Radian Measure",
    detail:
      "Radian measure, arc length and sector area, the unit circle, key angles, Pythagorean identity and finding angles.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-sl/book/ibsl-aaa-2/173"
  },
  {
    id: "tb-7",
    textbook: "AA-SL",
    label: "Haese IB AA SL – Ch 8: Trigonometric Functions",
    detail:
      "Periodic behaviour, sine and cosine functions, general sinusoidal functions, modelling periodic behaviour and the tangent function.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-sl/book/ibsl-aaa-2/199"
  },
  {
    id: "tb-8",
    textbook: "AA-SL",
    label: "Haese IB AA SL – Ch 9: Trigonometric Equations and Identities",
    detail:
      "Trigonometric equations, trigonometric models, identities and double angle identities.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-sl/book/ibsl-aaa-2/223"
  },
  {
    id: "tb-9",
    textbook: "AA-SL",
    label: "Haese IB AA SL – Ch 10: Reasoning and Proof",
    detail:
      "Logical connectives, proof by deduction, proof by equivalence and definitions.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-sl/book/ibsl-aaa-2/245"
  },
  {
    id: "tb-10",
    textbook: "AA-SL",
    label: "Haese IB AA SL – Ch 11: Introduction to Differential Calculus",
    detail:
      "Rates of change, instantaneous rates of change, limits, gradient of a tangent and the derivative from first principles.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-sl/book/ibsl-aaa-2/261"
  },
  {
    id: "tb-11",
    textbook: "AA-SL",
    label: "Haese IB AA SL – Ch 12: Rules of Differentiation",
    detail:
      "Basic differentiation rules, chain rule, product rule, quotient rule and derivatives of exponential, logarithmic and trigonometric functions.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-sl/book/ibsl-aaa-2/285"
  },
  {
    id: "tb-12",
    textbook: "AA-SL",
    label: "Haese IB AA SL – Ch 13: Properties of Curves",
    detail:
      "Tangents, normals, increasing and decreasing functions, stationary points, shape of graphs and inflection points.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-sl/book/ibsl-aaa-2/313"
  },
  {
    id: "tb-13",
    textbook: "AA-SL",
    label: "Haese IB AA SL – Ch 14: Applications of Differentiation",
    detail:
      "Optimisation, rates of change and modelling with calculus applications.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-sl/book/ibsl-aaa-2/345"
  },
  {
    id: "tb-14",
    textbook: "AA-SL",
    label: "Haese IB AA SL – Ch 15: Introduction to Integration",
    detail:
      "Approximating the area under a curve, the Riemann integral, antidifferentiation and the Fundamental Theorem of Calculus.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-sl/book/ibsl-aaa-2/365"
  },
  {
    id: "tb-15",
    textbook: "AA-SL",
    label: "Haese IB AA SL – Ch 16: Techniques for Integration",
    detail:
      "Rules for integration, particular values, integrating f(ax + b) and integration by substitution.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-sl/book/ibsl-aaa-2/381"
  },
  {
    id: "tb-16",
    textbook: "AA-SL",
    label: "Haese IB AA SL – Ch 17: Definite Integrals",
    detail:
      "Definite integrals, area under a curve and between curves and problem solving by integration.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-sl/book/ibsl-aaa-2/399"
  },
  {
    id: "tb-17",
    textbook: "AA-SL",
    label: "Haese IB AA SL – Ch 18: Kinematics",
    detail:
      "Displacement, velocity, acceleration and speed; interpreting motion using calculus and graphs.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-sl/book/ibsl-aaa-2/423"
  },
  {
    id: "tb-18",
    textbook: "AA-SL",
    label: "Haese IB AA SL – Ch 19: Bivariate Statistics",
    detail:
      "Scatterplots, Pearson correlation, regression lines, least squares, interpreting correlation and residuals.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-sl/book/ibsl-aaa-2/449"
  },
  {
    id: "tb-19",
    textbook: "AA-SL",
    label: "Haese IB AA SL – Ch 20: Discrete Random Variables",
    detail:
      "Discrete probability distributions, expectation, binomial distribution and technology for binomial probabilities.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-sl/book/ibsl-aaa-2/479"
  },
  {
    id: "tb-20",
    textbook: "AA-SL",
    label: "Haese IB AA SL – Ch 21: The Normal Distribution",
    detail:
      "Normal distribution, calculating probabilities, z-scores and quantiles.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-sl/book/ibsl-aaa-2/505"
  },

  /* ======================= Core SL ======================= */

  {
    id: "tb-21",
    textbook: "Core-SL",
    label: "Haese Core SL – Ch 1: Straight Lines",
    detail:
      "Equations of lines, graphing a straight line, perpendicular bisectors, simultaneous equations and problem solving with lines.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-sl/book/ibsl-core/19"
  },
  {
    id: "tb-22",
    textbook: "Core-SL",
    label: "Haese Core SL – Ch 2: Sets and Venn Diagrams",
    detail:
      "Sets, intersection and union, complements, special number sets, interval notation, Venn diagrams and problem solving.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-sl/book/ibsl-core/39"
  },
  {
    id: "tb-23",
    textbook: "Core-SL",
    label: "Haese Core SL – Ch 3: Surds and Exponents",
    detail:
      "Surds and other radicals, division by surds, exponents, exponent laws and scientific notation.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-sl/book/ibsl-core/63"
  },
  {
    id: "tb-24",
    textbook: "Core-SL",
    label: "Haese Core SL – Ch 4: Equations",
    detail:
      "Equations of the form x² = k, power equations, equations in factored form, quadratic equations and solving other equations using technology.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-sl/book/ibsl-core/83"
  },
  {
    id: "tb-25",
    textbook: "Core-SL",
    label: "Haese Core SL – Ch 5: Sequences and Series",
    detail:
      "Number sequences, arithmetic and geometric sequences, growth and decay, financial mathematics and arithmetic/finite geometric series.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-sl/book/ibsl-core/101"
  },
  {
    id: "tb-26",
    textbook: "Core-SL",
    label: "Haese Core SL – Ch 6: Measurement",
    detail:
      "Circles, arcs and sectors, surface area, volume and capacity problems.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-sl/book/ibsl-core/145"
  },
  {
    id: "tb-27",
    textbook: "Core-SL",
    label: "Haese Core SL – Ch 7: Right Angled Triangle Trigonometry",
    detail:
      "Trigonometric ratios, solving right triangles, problem solving with trigonometry and true bearings.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-sl/book/ibsl-core/171"
  },
  {
    id: "tb-28",
    textbook: "Core-SL",
    label:
      "Haese Core SL – Ch 8: Non-Right Angled Triangle Trigonometry",
    detail:
      "The unit circle review, area of a triangle, cosine rule, sine rule, ambiguous case and real-world applications.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-sl/book/ibsl-core/201"
  },
  {
    id: "tb-29",
    textbook: "Core-SL",
    label: "Haese Core SL – Ch 9: Points in Space",
    detail:
      "Points in 3D, measurement and trigonometry problems in three dimensions.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-sl/book/ibsl-core/227"
  },
  {
    id: "tb-30",
    textbook: "Core-SL",
    label: "Haese Core SL – Ch 10: Probability",
    detail:
      "Experimental probability, two-way tables, sample space and events, theoretical probability, addition law, independence and conditional probability.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-sl/book/ibsl-core/239"
  },
  {
    id: "tb-31",
    textbook: "Core-SL",
    label: "Haese Core SL – Ch 11: Sampling and Data",
    detail:
      "Errors in sampling, sampling methods, data types, discrete and continuous data and basic survey design.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-sl/book/ibsl-core/281"
  },
  {
    id: "tb-32",
    textbook: "Core-SL",
    label: "Haese Core SL – Ch 12: Statistics",
    detail:
      "Measures of centre and spread, grouped data, box and whisker plots, cumulative frequency graphs, variance and standard deviation.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-sl/book/ibsl-core/305"
  },

  /* ======================= AA HL ======================= */

  {
    id: "tb-33",
    textbook: "AA-HL",
    label: "Haese IB AA HL – Ch 1: Further Trigonometry",
    detail:
      "Reciprocal and inverse trigonometric functions, algebra with trigonometric functions, double and compound angle identities and mixed problems.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-hl/book/ibhl-aaa-2/17"
  },
  {
    id: "tb-34",
    textbook: "AA-HL",
    label: "Haese IB AA HL – Ch 2: Exponential Functions",
    detail:
      "Rational exponents, algebraic expansion and factorisation, exponential functions, growth and decay and the natural exponential function.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-hl/book/ibhl-aaa-2/41"
  },
  {
    id: "tb-35",
    textbook: "AA-HL",
    label: "Haese IB AA HL – Ch 3: Logarithms",
    detail:
      "Logarithms in base 10 and base a, laws of logarithms, natural logarithms, change of base rule and solving exponential equations using logarithms.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-hl/book/ibhl-aaa-2/67"
  },
  {
    id: "tb-36",
    textbook: "AA-HL",
    label:
      "Haese IB AA HL – Ch 4: Introduction to Complex Numbers",
    detail:
      "Complex numbers, sum of two squares factorisation, operations with complex numbers, equality and complex conjugates.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-hl/book/ibhl-aaa-2/97"
  },
  {
    id: "tb-37",
    textbook: "AA-HL",
    label: "Haese IB AA HL – Ch 5: Real Polynomials",
    detail:
      "Polynomials, operations with polynomials, zeros, roots and factors, polynomial equality and polynomial division.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-hl/book/ibhl-aaa-2/109"
  },
  {
    id: "tb-38",
    textbook: "AA-HL",
    label: "Haese IB AA HL – Ch 6: Further Functions",
    detail:
      "Even and odd functions, the graph of y = [f(x)]², absolute value functions, rational functions and partial fractions.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-hl/book/ibhl-aaa-2/151"
  },
  {
    id: "tb-39",
    textbook: "AA-HL",
    label: "Haese IB AA HL – Ch 7: Counting",
    detail:
      "The product principle, sum principle, factorial notation, permutations and combinations with applications.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-hl/book/ibhl-aaa-2/175"
  },
  {
    id: "tb-40",
    textbook: "AA-HL",
    label: "Haese IB AA HL – Ch 8: The Binomial Theorem",
    detail:
      "Binomial expansions and the binomial theorem for n ∈ ℤ⁺ and n ∈ ℚ, with applications.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-hl/book/ibhl-aaa-2/193"
  },
  {
    id: "tb-41",
    textbook: "AA-HL",
    label: "Haese IB AA HL – Ch 9: Reasoning and Proof",
    detail:
      "Logical connectives, proof by deduction, proof by equivalence, definitions, proof by exhaustion, counterexample, contraposition and contradiction.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-hl/book/ibhl-aaa-2/209"
  },
  {
    id: "tb-42",
    textbook: "AA-HL",
    label:
      "Haese IB AA HL – Ch 10: Proof by Mathematical Induction",
    detail:
      "The process and principle of mathematical induction with examples and review problems.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-hl/book/ibhl-aaa-2/233"
  },
  {
    id: "tb-43",
    textbook: "AA-HL",
    label: "Haese IB AA HL – Ch 11: Linear Algebra",
    detail:
      "Systems of linear equations, row operations, solving 2×2 and 3×3 systems and applications.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-hl/book/ibhl-aaa-2/253"
  },
  {
    id: "tb-44",
    textbook: "AA-HL",
    label: "Haese IB AA HL – Ch 12: Vectors",
    detail:
      "Vectors and scalars, geometric operations with vectors, vectors in the plane and space, magnitude, scalar product and geometry with vectors.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-hl/book/ibhl-aaa-2/269"
  },
  {
    id: "tb-45",
    textbook: "AA-HL",
    label: "Haese IB AA HL – Ch 13: Vector Applications",
    detail:
      "Lines in 2 and 3 dimensions, angle between two lines, constant velocity problems, shortest distance to a line, intersecting lines and planes and relationships between lines and planes.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-hl/book/ibhl-aaa-2/323"
  },
  {
    id: "tb-46",
    textbook: "AA-HL",
    label: "Haese IB AA HL – Ch 14: Complex Numbers (Polar)",
    detail:
      "The complex plane, modulus and argument, geometry in the complex plane, polar form, Euler’s form and De Moivre’s theorem, roots of complex numbers.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-hl/book/ibhl-aaa-2/367"
  },
  {
    id: "tb-47",
    textbook: "AA-HL",
    label: "Haese IB AA HL – Ch 15: Limits",
    detail:
      "Limits, existence of limits, limits at infinity, trigonometric limits and continuity.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-hl/book/ibhl-aaa-2/399"
  },
  {
    id: "tb-48",
    textbook: "AA-HL",
    label:
      "Haese IB AA HL – Ch 16: Introduction to Differential Calculus",
    detail:
      "Rates of change, instantaneous rate of change, gradient of a tangent, derivative function, differentiation from first principles and differentiability.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-hl/book/ibhl-aaa-2/415"
  },
  {
    id: "tb-49",
    textbook: "AA-HL",
    label: "Haese IB AA HL – Ch 17: Rules of Differentiation",
    detail:
      "Simple rules, chain rule, product rule, quotient rule, derivatives of exponential, logarithmic and trigonometric functions, higher derivatives and implicit differentiation.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-hl/book/ibhl-aaa-2/435"
  },
  {
    id: "tb-50",
    textbook: "AA-HL",
    label: "Haese IB AA HL – Ch 18: Properties of Curves",
    detail:
      "Tangents and normals, increasing and decreasing functions, stationary points, graph shape, inflection points, understanding functions and their derivatives and l’Hôpital’s rule.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-hl/book/ibhl-aaa-2/475"
  },
  {
    id: "tb-51",
    textbook: "AA-HL",
    label: "Haese IB AA HL – Ch 19: Applications of Differentiation",
    detail:
      "Rates of change, optimisation problems and related rates, with mixed applications.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-hl/book/ibhl-aaa-2/517"
  },
  {
    id: "tb-52",
    textbook: "AA-HL",
    label:
      "Haese IB AA HL – Ch 20: Introduction to Integration",
    detail:
      "Approximating the area under a curve, Riemann integral, antidifferentiation, Fundamental Theorem of Calculus and introductory area problems.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-hl/book/ibhl-aaa-2/543"
  },
  {
    id: "tb-53",
    textbook: "AA-HL",
    label: "Haese IB AA HL – Ch 21: Techniques for Integration",
    detail:
      "Discovering integrals, rules for integration, particular values, integrating f(ax + b), partial fractions, substitution and integration by parts.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-hl/book/ibhl-aaa-2/561"
  },
  {
    id: "tb-54",
    textbook: "AA-HL",
    label: "Haese IB AA HL – Ch 22: Definite Integrals",
    detail:
      "Definite integrals, substitution in definite integrals, area under a curve and between two functions, regions between a curve and the y-axis and solids of revolution.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-hl/book/ibhl-aaa-2/589"
  },
  {
    id: "tb-55",
    textbook: "AA-HL",
    label: "Haese IB AA HL – Ch 23: Kinematics",
    detail:
      "Displacement, velocity, acceleration and speed interpreted via calculus with modelling examples.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-hl/book/ibhl-aaa-2/629"
  },
  {
    id: "tb-56",
    textbook: "AA-HL",
    label: "Haese IB AA HL – Ch 24: Maclaurin Series",
    detail:
      "Maclaurin series, convergence, series for composite functions, addition and subtraction, differentiation and integration of series, multiplication and division of series.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-hl/book/ibhl-aaa-2/653"
  },
  {
    id: "tb-57",
    textbook: "AA-HL",
    label: "Haese IB AA HL – Ch 25: Differential Equations",
    detail:
      "Differential equations, Euler’s method, equations of the form dy/dx = f(x), separable equations, logistic growth, homogeneous equations and integrating factor method, plus Maclaurin series solutions.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-hl/book/ibhl-aaa-2/673"
  },
  {
    id: "tb-58",
    textbook: "AA-HL",
    label: "Haese IB AA HL – Ch 26: Bivariate Statistics",
    detail:
      "Association between numerical variables, Pearson’s correlation, line of best fit by eye, least squares regression and the regression line of y on x.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-hl/book/ibhl-aaa-2/707"
  },
  {
    id: "tb-59",
    textbook: "AA-HL",
    label: "Haese IB AA HL – Ch 27: Discrete Random Variables",
    detail:
      "Random variables, discrete probability distributions, expectation, variance, binomial distribution, technology for binomial probabilities and mean and standard deviation of a binomial distribution.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-hl/book/ibhl-aaa-2/737"
  },
  {
    id: "tb-60",
    textbook: "AA-HL",
    label: "Haese IB AA HL – Ch 28: Continuous Random Variables",
    detail:
      "Probability density functions, measures of centre and spread, the normal distribution, normal probabilities, the standard normal distribution and normal quantiles.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-analysis-and-approaches-hl/book/ibhl-aaa-2/769"
  },

  /* ======================= Core HL ======================= */

  {
    id: "tb-61",
    textbook: "Core-HL",
    label: "Haese Core HL – Ch 1: Straight Lines",
    detail:
      "Lines in the Cartesian plane, graphing straight lines, perpendicular bisectors, simultaneous equations and review problems.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-hl/book/ibhl-core/19"
  },
  {
    id: "tb-62",
    textbook: "Core-HL",
    label: "Haese Core HL – Ch 2: Sets and Venn Diagrams",
    detail:
      "Sets, intersection and union, complements, special number sets, interval notation, Venn diagrams and region problems.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-hl/book/ibhl-core/33"
  },
  {
    id: "tb-63",
    textbook: "Core-HL",
    label: "Haese Core HL – Ch 3: Surds and Exponents",
    detail:
      "Surds and radicals, division by surds, exponents, exponent laws and scientific notation.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-hl/book/ibhl-core/53"
  },
  {
    id: "tb-64",
    textbook: "Core-HL",
    label: "Haese Core HL – Ch 4: Equations",
    detail:
      "Power equations, quadratics, equations in factored form, solving polynomial equations and technology-based solving.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-hl/book/ibhl-core/71"
  },
  {
    id: "tb-65",
    textbook: "Core-HL",
    label: "Haese Core HL – Ch 5: Sequences and Series",
    detail:
      "Number sequences, arithmetic and geometric sequences, growth and decay, financial mathematics and finite and infinite series.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-hl/book/ibhl-core/89"
  },
  {
    id: "tb-66",
    textbook: "Core-HL",
    label: "Haese Core HL – Ch 6: Measurement",
    detail:
      "Circles, arcs and sectors, surface area, volume and capacity with applications.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-hl/book/ibhl-core/131"
  },
  {
    id: "tb-67",
    textbook: "Core-HL",
    label:
      "Haese Core HL – Ch 7: Right Angled Triangle Trigonometry",
    detail:
      "Trigonometric ratios, inverse trig ratios, right angles in geometric figures, problem solving with trigonometry, true bearings and angles between a line and a plane.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-hl/book/ibhl-core/157"
  },
  {
    id: "tb-68",
    textbook: "Core-HL",
    label:
      "Haese Core HL – Ch 8: The Unit Circle and Radian Measure",
    detail:
      "Radian measure, arc length and sector area, unit circle, key angles, Pythagorean identity, finding angles and the equation of a straight line in the circle context.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-hl/book/ibhl-core/183"
  },
  {
    id: "tb-69",
    textbook: "Core-HL",
    label:
      "Haese Core HL – Ch 9: Non-Right Angled Triangle Trigonometry",
    detail:
      "Area of a triangle, cosine and sine rules, ambiguous case and trigonometric problem solving.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-hl/book/ibhl-core/207"
  },
  {
    id: "tb-70",
    textbook: "Core-HL",
    label: "Haese Core HL – Ch 10: Points in Space",
    detail:
      "Points in 3D, measurement and trigonometry in space, including review problems.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-hl/book/ibhl-core/233"
  },
  {
    id: "tb-71",
    textbook: "Core-HL",
    label: "Haese Core HL – Ch 11: Probability",
    detail:
      "Experimental probability, two-way tables, sample space, theoretical probability, addition law, independent and dependent events, conditional probability and Bayes’ theorem.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-hl/book/ibhl-core/247"
  },
  {
    id: "tb-72",
    textbook: "Core-HL",
    label: "Haese Core HL – Ch 12: Sampling and Data",
    detail:
      "Sampling errors and methods, survey design, data types, simple and grouped discrete data, continuous data and review.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-hl/book/ibhl-core/289"
  },
  {
    id: "tb-73",
    textbook: "Core-HL",
    label: "Haese Core HL – Ch 13: Statistics",
    detail:
      "Measures of centre, choosing appropriate measures, frequency tables, grouped data, spread of data, box plots, cumulative frequency graphs, variance and standard deviation.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-hl/book/ibhl-core/315"
  },
  {
    id: "tb-74",
    textbook: "Core-HL",
    label: "Haese Core HL – Ch 14: Quadratic Functions",
    detail:
      "Quadratic functions and graphs, discriminant, finding a quadratic from its graph, intersections, optimisation and quadratic inequalities.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-hl/book/ibhl-core/359"
  },
  {
    id: "tb-75",
    textbook: "Core-HL",
    label: "Haese Core HL – Ch 15: Functions",
    detail:
      "Relations and functions, notation, domain and range, rational functions, composite functions and inverse functions.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-hl/book/ibhl-core/393"
  },
  {
    id: "tb-76",
    textbook: "Core-HL",
    label: "Haese Core HL – Ch 16: Transformations of Functions",
    detail:
      "Translations, stretches, reflections, miscellaneous transformations and graphs of y = 1/f(x).",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-hl/book/ibhl-core/425"
  },
  {
    id: "tb-77",
    textbook: "Core-HL",
    label: "Haese Core HL – Ch 17: Trigonometric Functions",
    detail:
      "Periodic behaviour, sine and cosine functions, general sinusoidal models, fitting trigonometric models to data, tangent function, trigonometric equations and using trigonometric models.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-core-topics-hl/book/ibhl-core/447"
  },

  /* ======================= AI SL ======================= */

  {
    id: "tb-78",
    textbook: "AI-SL",
    label: "Haese IB AI SL – Ch 1: Approximations and Error",
    detail:
      "Rounding numbers and approximations, errors in measurement, absolute and percentage error, with mixed applications.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-applications-and-interpretation-sl/book/ibsl-aai-2/15"
  },
  {
    id: "tb-79",
    textbook: "AI-SL",
    label: "Haese IB AI SL – Ch 2: Loans and Annuities",
    detail:
      "Loans, simple and compound interest, annuities, finance formulas and technology for financial calculations.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-applications-and-interpretation-sl/book/ibsl-aai-2/31"
  },
  {
    id: "tb-80",
    textbook: "AI-SL",
    label: "Haese IB AI SL – Ch 3: Functions",
    detail:
      "Relations and functions, function notation, domain and range, graphs of functions, sign diagrams, transformations and inverse functions.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-applications-and-interpretation-sl/book/ibsl-aai-2/45"
  },
  {
    id: "tb-81",
    textbook: "AI-SL",
    label: "Haese IB AI SL – Ch 4: Modelling",
    detail:
      "The modelling cycle, linear models, piecewise linear models and systems of equations in modelling contexts.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-applications-and-interpretation-sl/book/ibsl-aai-2/79"
  },
  {
    id: "tb-82",
    textbook: "AI-SL",
    label: "Haese IB AI SL – Ch 5: Bivariate Statistics",
    detail:
      "Association between numerical variables, Pearson’s correlation coefficient, line of best fit by eye, least squares regression and Spearman’s rank correlation coefficient.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-applications-and-interpretation-sl/book/ibsl-aai-2/101"
  },
  {
    id: "tb-83",
    textbook: "AI-SL",
    label: "Haese IB AI SL – Ch 6: Quadratic Functions",
    detail:
      "Quadratic functions and graphs, intercepts, axes of symmetry, vertex, finding quadratics from graphs, intersections and quadratic models.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-applications-and-interpretation-sl/book/ibsl-aai-2/133"
  },
  {
    id: "tb-84",
    textbook: "AI-SL",
    label:
      "Haese IB AI SL – Ch 7: Direct and Inverse Variation",
    detail:
      "Direct variation and power models, inverse variation and power models, determining variation models and using technology to find models.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-applications-and-interpretation-sl/book/ibsl-aai-2/163"
  },
  {
    id: "tb-85",
    textbook: "AI-SL",
    label:
      "Haese IB AI SL – Ch 8: Exponentials and Logarithms",
    detail:
      "Exponential functions and graphs, exponential equations, growth and decay, natural exponential and logarithms in base 10 and base e.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-applications-and-interpretation-sl/book/ibsl-aai-2/183"
  },
  {
    id: "tb-86",
    textbook: "AI-SL",
    label: "Haese IB AI SL – Ch 9: Trigonometric Functions",
    detail:
      "The unit circle, periodic behaviour, sine and cosine functions, general sinusoidal models and modelling periodic behaviour.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-applications-and-interpretation-sl/book/ibsl-aai-2/217"
  },
  {
    id: "tb-87",
    textbook: "AI-SL",
    label: "Haese IB AI SL – Ch 10: Differentiation",
    detail:
      "Rates of change, instantaneous rate of change, limits, gradients of tangents, derivative function and basic differentiation rules.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-applications-and-interpretation-sl/book/ibsl-aai-2/241"
  },
  {
    id: "tb-88",
    textbook: "AI-SL",
    label: "Haese IB AI SL – Ch 11: Properties of Curves",
    detail:
      "Tangents, normals, increasing and decreasing functions and stationary points, with applications.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-applications-and-interpretation-sl/book/ibsl-aai-2/269"
  },
  {
    id: "tb-89",
    textbook: "AI-SL",
    label:
      "Haese IB AI SL – Ch 12: Applications of Differentiation",
    detail:
      "Applications of derivatives to rates of change, optimisation and modelling in applied contexts.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-applications-and-interpretation-sl/book/ibsl-aai-2/287"
  },
  {
    id: "tb-90",
    textbook: "AI-SL",
    label: "Haese IB AI SL – Ch 13: Integration",
    detail:
      "Approximating area under a curve, Riemann integral, Fundamental Theorem of Calculus, antiderivatives, rules for integration and definite integrals.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-applications-and-interpretation-sl/book/ibsl-aai-2/307"
  },
  {
    id: "tb-91",
    textbook: "AI-SL",
    label:
      "Haese IB AI SL – Ch 14: Discrete Random Variables",
    detail:
      "Random variables, discrete probability distributions, expectation, binomial distribution and technology for binomial probabilities.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-applications-and-interpretation-sl/book/ibsl-aai-2/335"
  },
  {
    id: "tb-92",
    textbook: "AI-SL",
    label: "Haese IB AI SL – Ch 15: The Normal Distribution",
    detail:
      "Introduction to the normal distribution, calculating probabilities and quantiles.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-applications-and-interpretation-sl/book/ibsl-aai-2/361"
  },
  {
    id: "tb-93",
    textbook: "AI-SL",
    label: "Haese IB AI SL – Ch 16: Hypothesis Testing",
    detail:
      "Statistical hypotheses, Student’s t-test, two-sample t-tests, χ² goodness-of-fit tests and χ² tests for independence.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-applications-and-interpretation-sl/book/ibsl-aai-2/381"
  },
  {
    id: "tb-94",
    textbook: "AI-SL",
    label: "Haese IB AI SL – Ch 17: Voronoi Diagrams",
    detail:
      "Voronoi diagrams, constructing Voronoi diagrams, adding a site, nearest neighbour interpolation and the largest empty circle problem.",
    url: "https://snowflake.haesemathematics.com.au/viewer/mathematics-applications-and-interpretation-sl/book/ibsl-aai-2/417"
  }
];
