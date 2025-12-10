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


    // Sample textbook references – add your actual exercise URLs in `url` fields
    const TEXTBOOK_REFERENCES = [
     {
    id: "tb-0",
    label: "Haese IB AA SL – Ch 1: The Binomial Theorem",
    detail: "Factorial notation, binomial expansions, the binomial theorem, related problem solving.",
    url: ""
  },
  {
    id: "tb-1",
    label: "Haese IB AA SL – Ch 2: Quadratic Functions",
    detail: "Quadratic functions, graphs, discriminant, finding equations, intersections, optimisation and inequalities.",
    url: ""
  },
  {
    id: "tb-2",
    label: "Haese IB AA SL – Ch 3: Functions",
    detail: "Relations, functions, notation, domain and range, rational and composite functions, inverse and absolute value functions.",
    url: ""
  },
  {
    id: "tb-3",
    label: "Haese IB AA SL – Ch 4: Transformations of Functions",
    detail: "Translations, stretches, reflections, and miscellaneous transformations.",
    url: ""
  },
  {
    id: "tb-4",
    label: "Haese IB AA SL – Ch 5: Exponential Functions",
    detail: "Exponents, algebraic manipulation, exponential equations, growth and decay, natural exponential function.",
    url: ""
  },
  {
    id: "tb-5",
    label: "Haese IB AA SL – Ch 6: Logarithms",
    detail: "Logarithms (base 10 and base e), laws of logarithms, natural logarithms, change of base rule, solving exponential equations.",
    url: ""
  },
  {
    id: "tb-6",
    label: "Haese IB AA SL – Ch 7: The Unit Circle and Radian Measure",
    detail: "Radian measure, arc length and area, unit circle, multiples of π/6 and π/4, Pythagorean identity, finding angles.",
    url: ""
  },
  {
    id: "tb-7",
    label: "Haese IB AA SL – Ch 8: Trigonometric Functions",
    detail: "Periodic behaviour, sine and cosine functions, general sinusoidal functions, modelling, tangent function.",
    url: ""
  },
  {
    id: "tb-8",
    label: "Haese IB AA SL – Ch 9: Trigonometric Equations and Identities",
    detail: "Trigonometric equations, modelling, identities, double-angle identities.",
    url: ""
  },
  {
    id: "tb-9",
    label: "Haese IB AA SL – Ch 10: Reasoning and Proof",
    detail: "Logical connectives, proof by deduction, proof by equivalence, definitions.",
    url: ""
  },
  {
    id: "tb-10",
    label: "Haese IB AA SL – Ch 11: Introduction to Differential Calculus",
    detail: "Rates of change, instantaneous rates, limits, gradient of a tangent, derivative from first principles.",
    url: ""
  },
  {
    id: "tb-11",
    label: "Haese IB AA SL – Ch 12: Rules of Differentiation",
    detail: "Basic derivative rules, chain rule, product rule, quotient rule, derivatives of exponential, logarithmic, and trigonometric functions.",
    url: ""
  },
  {
    id: "tb-12",
    label: "Haese IB AA SL – Ch 13: Properties of Curves",
    detail: "Tangents, normals, increasing/decreasing functions, stationary points, shape of graphs, inflection points.",
    url: ""
  },
  {
    id: "tb-13",
    label: "Haese IB AA SL – Ch 14: Applications of Differentiation",
    detail: "Optimisation, rates of change, curve sketching applications.",
    url: ""
  },
  {
    id: "tb-14",
    label: "Haese IB AA SL – Ch 15: Introduction to Integration",
    detail: "Area under curves, Riemann sums, anti-differentiation, Fundamental Theorem of Calculus.",
    url: ""
  },
  {
    id: "tb-15",
    label: "Haese IB AA SL – Ch 16: Techniques for Integration",
    detail: "Basic integration rules, particular values, integration of f(ax + b), substitution.",
    url: ""
  },
  {
    id: "tb-16",
    label: "Haese IB AA SL – Ch 17: Definite Integrals",
    detail: "Definite integrals, area under and between curves, problem solving with integration.",
    url: ""
  },
  {
    id: "tb-17",
    label: "Haese IB AA SL – Ch 18: Kinematics",
    detail: "Displacement, velocity, acceleration, speed, calculus applications in motion.",
    url: ""
  },
  {
    id: "tb-18",
    label: "Haese IB AA SL – Ch 19: Bivariate Statistics",
    detail: "Scatterplots, Pearson correlation, regression lines, least squares, interpreting correlation.",
    url: ""
  },
  {
    id: "tb-19",
    label: "Haese IB AA SL – Ch 20: Discrete Random Variables",
    detail: "Probability distributions, expectation, binomial distribution, calculations and technology use.",
    url: ""
  },
  {
    id: "tb-20",
    label: "Haese IB AA SL – Ch 21: The Normal Distribution",
    detail: "Normal distribution, calculating probabilities, z-scores, quantiles.",
    url: ""
  },

  /* ------------------------------- CORE SL ------------------------------- */

  {
    id: "tb-21",
    label: "Haese Core SL – Ch 1: Straight Lines",
    detail: "Equation of a line, graphing, perpendicular bisectors, simultaneous equations.",
    url: ""
  },
  {
    id: "tb-22",
    label: "Haese Core SL – Ch 2: Sets and Venn Diagrams",
    detail: "Sets, unions, intersections, complements, special sets, Venn diagram regions, set problems.",
    url: ""
  },
  {
    id: "tb-23",
    label: "Haese Core SL – Ch 3: Surds and Exponents",
    detail: "Surds, rationalisation, exponent laws, scientific notation.",
    url: ""
  },
  {
    id: "tb-24",
    label: "Haese Core SL – Ch 4: Equations",
    detail: "Equations of the form x² = k, power equations, factored form, quadratic equations, solving with technology.",
    url: ""
  },
  {
    id: "tb-25",
    label: "Haese Core SL – Ch 5: Sequences and Series",
    detail: "Number sequences, arithmetic and geometric sequences, growth and decay, financial mathematics, finite and infinite series.",
    url: ""
  },
  {
    id: "tb-26",
    label: "Haese Core SL – Ch 6: Measurement",
    detail: "Circles, arcs, sectors, surface area, volume, capacity.",
    url: ""
  },
  {
    id: "tb-27",
    label: "Haese Core SL – Ch 7: Right-Angled Triangle Trigonometry",
    detail: "Trig ratios, finding side lengths, angles, solving real problems, true bearings, angle between line and plane.",
    url: ""
  },
  {
    id: "tb-28",
    label: "Haese Core SL – Ch 8: Non-Right-Angled Triangle Trigonometry",
    detail: "Unit circle review, area formula, cosine rule, sine rule, ambiguous case.",
    url: ""
  },
  {
    id: "tb-29",
    label: "Haese Core SL – Ch 9: Points in Space",
    detail: "3D coordinate geometry, measurement, trigonometry in 3D.",
    url: ""
  },
  {
    id: "tb-30",
    label: "Haese Core SL – Ch 10: Probability",
    detail: "Experimental probability, two-way tables, sample spaces, theoretical probability, independence, conditional probability.",
    url: ""
  },
  {
    id: "tb-31",
    label: "Haese Core SL – Ch 11: Sampling and Data",
    detail: "Sampling errors, methods, data types, discrete and continuous data.",
    url: ""
  },
  {
    id: "tb-32",
    label: "Haese Core SL – Ch 12: Statistics",
    detail: "Measures of centre, frequency tables, grouped data, spread of data, box plots, cumulative frequency, variance and standard deviation.",
    url: ""
  },
       // -------------------- Haese IB AA HL – Content --------------------

  {
    id: "tb-33",
    label: "Haese IB AA HL – Ch 1: Further Trigonometry",
    detail: "Reciprocal and inverse trigonometric functions, algebra with trig functions, double and compound angle identities, mixed problems and review sets.",
    url: ""
  },
  {
    id: "tb-34",
    label: "Haese IB AA HL – Ch 2: Exponential Functions",
    detail: "Rational exponents, exponential equations and functions, growth and decay, the natural exponential function, applications and review sets.",
    url: ""
  },
  {
    id: "tb-35",
    label: "Haese IB AA HL – Ch 3: Logarithms",
    detail: "Logarithms in different bases, laws of logarithms, natural logs, change of base rule, solving exponential equations and logarithmic functions.",
    url: ""
  },
  {
    id: "tb-36",
    label: "Haese IB AA HL – Ch 4: Introduction to Complex Numbers",
    detail: "Definition of complex numbers, algebraic operations, equality, complex conjugates, factorisation using complex numbers and review sets.",
    url: ""
  },
  {
    id: "tb-37",
    label: "Haese IB AA HL – Ch 5: Real Polynomials",
    detail: "Polynomial notation and algebra, expressions with polynomials, zeros, roots and factors, polynomial equality and long division.",
    url: ""
  },
  {
    id: "tb-38",
    label: "Haese IB AA HL – Ch 6: Further Functions",
    detail: "Even and odd functions, graphs of [f(x)]², absolute value functions, rational functions and partial fractions, with applications and review.",
    url: ""
  },
  {
    id: "tb-39",
    label: "Haese IB AA HL – Ch 7: Counting",
    detail: "Product and sum principles, factorial notation, permutations and combinations, introductory counting problems and review sets.",
    url: ""
  },
  {
    id: "tb-40",
    label: "Haese IB AA HL – Ch 8: The Binomial Theorem",
    detail: "Binomial expansions and the binomial theorem for integer and rational indices, applications and review exercises.",
    url: ""
  },
  {
    id: "tb-41",
    label: "Haese IB AA HL – Ch 9: Reasoning and Proof",
    detail: "Logical connectives, proof by deduction and equivalence, definitions, proof by exhaustion, counterexample, contraposition and contradiction.",
    url: ""
  },
  {
    id: "tb-42",
    label: "Haese IB AA HL – Ch 10: Proof by Mathematical Induction",
    detail: "The process and principle of mathematical induction with worked examples and review sets.",
    url: ""
  },
  {
    id: "tb-43",
    label: "Haese IB AA HL – Ch 11: Linear Algebra",
    detail: "Systems of linear equations, row operations, solving 2×2 and 3×3 systems, and applications with review exercises.",
    url: ""
  },
  {
    id: "tb-44",
    label: "Haese IB AA HL – Ch 12: Vectors",
    detail: "Vectors and scalars, geometric operations, vectors in the plane and in space, scalar and vector products, geometry with vectors and review.",
    url: ""
  },
  {
    id: "tb-45",
    label: "Haese IB AA HL – Ch 13: Vector Applications",
    detail: "Vector equations of lines and planes, angles between lines, constant velocity problems, distances, intersections and relationships between lines.",
    url: ""
  },
  {
    id: "tb-46",
    label: "Haese IB AA HL – Ch 14: Complex Numbers (Polar and Advanced)",
    detail: "Complex plane, modulus and argument, geometry in the complex plane, polar and Euler forms, De Moivre’s theorem and roots of complex numbers.",
    url: ""
  },
  {
    id: "tb-47",
    label: "Haese IB AA HL – Ch 15: Limits",
    detail: "Limit concepts, existence of limits, limits at infinity, trigonometric limits, continuity and introductory analysis with limits.",
    url: ""
  },
  {
    id: "tb-48",
    label: "Haese IB AA HL – Ch 16: Introduction to Differential Calculus",
    detail: "Rates of change, instantaneous rate, gradient of a tangent, derivative function, differentiation from first principles and differentiability.",
    url: ""
  },
  {
    id: "tb-49",
    label: "Haese IB AA HL – Ch 17: Rules of Differentiation",
    detail: "Standard rules, chain, product and quotient rules, derivatives of exponential, logarithmic and trigonometric functions, higher derivatives and implicit differentiation.",
    url: ""
  },

  // -------------------- Haese Core HL – Core topics --------------------

  {
    id: "tb-50",
    label: "Haese Core HL – Ch 1: Straight Lines",
    detail: "Lines in the Cartesian plane, graphing straight lines, perpendicular bisectors, simultaneous equations and review exercises.",
    url: ""
  },
  {
    id: "tb-51",
    label: "Haese Core HL – Ch 2: Sets and Venn Diagrams",
    detail: "Set notation, unions and intersections, complements, special number sets, interval notation, Venn diagrams and problem solving.",
    url: ""
  },
  {
    id: "tb-52",
    label: "Haese Core HL – Ch 3: Surds and Exponents",
    detail: "Surds and radicals, division by surds, exponents and exponent laws, scientific notation and related exercises.",
    url: ""
  },
  {
    id: "tb-53",
    label: "Haese Core HL – Ch 4: Equations",
    detail: "Power equations, factored equations, quadratic equations, solving polynomial and other equations including technology use.",
    url: ""
  },
  {
    id: "tb-54",
    label: "Haese Core HL – Ch 5: Sequences and Series",
    detail: "Number patterns, arithmetic and geometric sequences, growth and decay, financial maths, finite and infinite series and review.",
    url: ""
  },
  {
    id: "tb-55",
    label: "Haese Core HL – Ch 6: Measurement",
    detail: "Circles, arcs and sectors, surface area, volume and capacity with mixed applications and review exercises.",
    url: ""
  },
  {
    id: "tb-56",
    label: "Haese Core HL – Ch 7: Right Angled Triangle Trigonometry",
    detail: "Trig ratios, inverse trig ratios, right triangles in geometry, problem solving with trigonometry, bearings and angles between line and plane.",
    url: ""
  },
  {
    id: "tb-57",
    label: "Haese Core HL – Ch 8: The Unit Circle and Radian Measure",
    detail: "Radian measure, arc length and sector area, unit circle, key angles, Pythagorean identity, angle finding and straight line connections.",
    url: ""
  },
  {
    id: "tb-58",
    label: "Haese Core HL – Ch 9: Non-Right Angled Triangle Trigonometry",
    detail: "Area of a triangle, sine and cosine rules, non-right-angled trigonometry problems and review sets.",
    url: ""
  },
  {
    id: "tb-59",
    label: "Haese Core HL – Ch 10: Points in Space",
    detail: "3D coordinate geometry, measurement and trigonometry in space including review exercises.",
    url: ""
  },
  {
    id: "tb-60",
    label: "Haese Core HL – Ch 11: Probability",
    detail: "Experimental probability, two-way tables, sample spaces, theoretical probability, addition law, independence, conditional probability and Bayes’ theorem.",
    url: ""
  },
  {
    id: "tb-61",
    label: "Haese Core HL – Ch 12: Sampling and Data",
    detail: "Sampling errors and methods, designing surveys, data types, simple and grouped discrete data, continuous data and review.",
    url: ""
  },
  {
    id: "tb-62",
    label: "Haese Core HL – Ch 13: Statistics",
    detail: "Measures of centre and spread, frequency tables, grouped data, range, IQR, outliers, box plots, cumulative frequency, variance and standard deviation.",
    url: ""
  },
  {
    id: "tb-63",
    label: "Haese Core HL – Ch 14: Quadratic Functions",
    detail: "Quadratic functions and graphs, discriminant, finding equations from graphs, intersections, optimisation and inequalities.",
    url: ""
  },
  {
    id: "tb-64",
    label: "Haese Core HL – Ch 15: Functions",
    detail: "Relations and functions, notation, domain and range, rational, composite and inverse functions, with applications and review.",
    url: ""
  },
  {
    id: "tb-65",
    label: "Haese Core HL – Ch 16: Transformations of Functions",
    detail: "Translations, stretches, reflections, miscellaneous transformations and graphs of y = 1/f(x) with review exercises.",
    url: ""
  },
  {
    id: "tb-66",
    label: "Haese Core HL – Ch 17: Trigonometric Functions",
    detail: "Periodic behaviour, sine and cosine functions, general sinusoidal models, fitting data, tangent function, trig equations and modelling.",
    url: ""
  },
       {
    id: "tb-67",
    label: "Haese IB AA HL – Ch 18: Properties of Curves",
    detail: "Tangents and normals, increasing and decreasing functions, stationary points, graph shape and points of inflection, understanding functions and their derivatives, and an introduction to l’Hôpital’s rule with review exercises.",
    url: ""
  },
  {
    id: "tb-68",
    label: "Haese IB AA HL – Ch 19: Applications of Differentiation",
    detail: "Rates of change, optimisation problems and related rates, with mixed applications and review sets.",
    url: ""
  },
  {
    id: "tb-69",
    label: "Haese IB AA HL – Ch 20: Introduction to Integration",
    detail: "Approximating the area under a curve, the Riemann integral, antidifferentiation, the Fundamental Theorem of Calculus and introductory area problems with review exercises.",
    url: ""
  },
  {
    id: "tb-70",
    label: "Haese IB AA HL – Ch 21: Techniques for Integration",
    detail: "Discovering integrals, rules for integration, particular values, integrating f(ax + b), partial fractions, substitution and integration by parts, followed by mixed problems and review.",
    url: ""
  },
  {
    id: "tb-71",
    label: "Haese IB AA HL – Ch 22: Definite Integrals",
    detail: "Definite integrals, definite integrals involving substitution, area under a curve and between two functions, regions between a curve and the y-axis, solids of revolution, and problem solving (including improper integrals).",
    url: ""
  },
  {
    id: "tb-72",
    label: "Haese IB AA HL – Ch 23: Kinematics",
    detail: "Displacement, velocity, acceleration and speed interpreted via calculus, with modelling examples and review sets.",
    url: ""
  },
  {
    id: "tb-73",
    label: "Haese IB AA HL – Ch 24: Maclaurin Series",
    detail: "Maclaurin series and convergence, series for composite functions, addition and subtraction of series, differentiation and integration of series, multiplication and division of series, with applications and review.",
    url: ""
  },
  {
    id: "tb-74",
    label: "Haese IB AA HL – Ch 25: Differential Equations",
    detail: "Differential equations and solution methods: Euler’s method for numerical integration, equations of the form dy/dx = f(x), separable equations, logistic growth, homogeneous equations of the form dy/dx = f(y/x), integrating factor method, and series solutions from differential equations.",
    url: ""
  },
  {
    id: "tb-75",
    label: "Haese IB AA HL – Ch 26: Bivariate Statistics",
    detail: "Association between numerical variables, Pearson’s product–moment correlation coefficient, line of best fit by eye, least squares regression line and the regression line of y on x, with interpretation and review.",
    url: ""
  },
  {
    id: "tb-76",
    label: "Haese IB AA HL – Ch 27: Discrete Random Variables",
    detail: "Discrete random variables and probability distributions, expectation, variance and standard deviation, linear transformations of X, the binomial distribution, technology for binomial probabilities, and the mean and standard deviation of a binomial distribution.",
    url: ""
  },
  {
    id: "tb-77",
    label: "Haese IB AA HL – Ch 28: Continuous Random Variables",
    detail: "Probability density functions, measures of centre and spread for continuous distributions, the normal distribution, calculating normal probabilities, the standard normal distribution and normal quantiles, with review exercises.",
    url: ""
  }

    ];
