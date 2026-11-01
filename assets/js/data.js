/* =========================================================
   SITE CONTENT — edit this file to update the website.
   Images: pass a Wix media id (e.g. "594421_xxx~mv2.jpg")
   or a local path (e.g. "assets/img/photo.jpg").
   ========================================================= */

const SITE = {
  name: "Ziqi Cui",
  email: "ziqicui@student.ubc.ca",
  links: {
    scholar: "https://scholar.google.com/citations?user=jrtXgKgAAAAJ&hl=en",
    github: "https://github.com/ziqicui001",
    linkedin: "https://www.linkedin.com/in/ziqi-cui-247312236/",
    portfolio: "assets/files/portfolio-ziqi-cui.pdf",
  },
};

/* ---------- News (newest first) ---------- */
const NEWS = [
  { date: "2026", text: "Received an <b>ACM SIGSPATIAL Travel Grant</b> to attend SIGSPATIAL 2026." },
  { date: "2026-08", text: "Our paper <i>PlaceSeek: Human-Centered Geospatial Retrieval of Urban Outdoor Places via Semantic Grounding and Affective Alignment</i> has been accepted as a research paper (short) at <b>ACM SIGSPATIAL 2026</b>.", link: "https://arxiv.org/abs/2608.24133" },
  { date: "2026-03", text: "Oral presentation at <b>AAG 2026</b> in San Francisco on semantic geospatial retrieval of urban outdoor spaces with MLLMs." },
  { date: "2026", text: "Book chapter <i>Impact of varying street view perspectives on urban perception: The case of Celoria Street in Milan</i> published by <b>Springer</b>.", link: "https://doi.org/10.1007/978-3-032-04711-3_24" },
  { date: "2025-10", text: "Sponsored participant at the <b>Mobile Brain/Body Imaging (MoBI) Workshop</b> at TU Berlin with Prof. Klaus Gramann." },
  { date: "2025-07", text: "Awarded a <b>COST (European Cooperation in Science & Technology) Grant</b> to give an oral presentation at CitySenZ 2025 in Lisbon." },
  { date: "2025-05", text: "Presented <i>SyncPerception</i>, a real-time GNN-based urban perception prediction tool, at <b>SimAUD / ANNSIM 2025</b> in Madrid.", link: "https://ieeexplore.ieee.org/abstract/document/11118366" },
  { date: "2025-04", text: "Paper on built environment and sexual violence against women in Mumbai published in <b>Humanities and Social Sciences Communications</b>.", link: "https://doi.org/10.1057/s41599-025-04838-4" },
  { date: "2025-04", text: "Exhibited <i>ACTUATED KNIT // TEXTILEMORPHOSIS</i> at <b>Milano Design Week 2025</b>." },
  { date: "2025-03", text: "Oral presentation at <b>CAADRIA 2025</b>, The University of Tokyo, on explainable GNN models of street perception.", link: "https://doi.org/10.52842/conf.caadria.2025.4.459" },
  { date: "2024-11", text: "Oral presentation at <b>ACSP 2024</b> (Seattle) on the spatial-temporal impact of the built environment on women's safety in Mumbai." },
  { date: "2024-11", text: "Poster <i>“Flow along the corridor” — a GAN-based floor plan generator</i> presented at the <b>Future of Construction Conference 2024</b>, ETH Zürich.", link: "assets/files/gan-floorplan-poster.pdf" },
];

/* ---------- Publications ----------
   type: journal | conference | chapter
   authors: "**Name**" = me (bold); "+" co-first, "*" corresponding
   selected: shown on the home page                          */
const PUBLICATIONS = [
  {
    type: "conference", year: "2026", selected: true,
    title: "PlaceSeek: Human-Centered Geospatial Retrieval of Urban Outdoor Places via Semantic Grounding and Affective Alignment",
    authors: "**Ziqi Cui**+*, Shangyu Lou+",
    venue: "Accepted as a Research Paper (short) at ACM SIGSPATIAL 2026",
    img: "assets/img/placeseek-framework.jpg",
    links: { arXiv: "https://arxiv.org/abs/2608.24133" },
  },
  {
    type: "conference", year: "2026", selected: true,
    title: "Enhancing Human Mobility Prediction with Spatially Aware LLM-based Multi-Agent Systems",
    authors: "Shangyu Lou+*, **Ziqi Cui**+",
    venue: "Proceedings of the 2026 ACM SIGMOD Conference Workshop on Human-In-the-Loop Data Analytics (HILDA '26), pp. 28–34",
    img: "assets/img/hilda.jpg",
    links: { Paper: "https://doi.org/10.1145/3814573.3814949" },
  },
  {
    type: "journal", year: "2026", selected: true,
    title: "How Urban Micro-Scale Built Environment Influences Perceived Walkability: An NLP-based Literature Review",
    authors: "**Ziqi Cui**+, Barbara Ester Adele Piga*",
    venue: "Under review, Transport Reviews",
    img: "assets/img/8fd5eab5.jpg",
    links: {},
  },
  {
    type: "journal", year: "2026", selected: false,
    title: "From Walkability to Walking Experience: Perceived Safety and Affective Responses to Intersection Redesign in Immersive Virtual Reality",
    authors: "Barbara Ester Adele Piga*, Giandomenico Caruso, Carlotta Colonna, Gabriele Stancato, Nicola Rainisio, Lorenzo Mussone, Andrea Picardi, Simone Piersigilli, **Ziqi Cui**, Marco Boffi",
    venue: "Under review, Cities",
    img: "assets/img/cities-vr-intersection.jpg",
    links: {},
  },
  {
    type: "chapter", year: "2026", selected: false,
    title: "Impact of Varying Street View Perspectives on Urban Perception: The Case of Celoria Street in Milan",
    authors: "**Ziqi Cui**+, Barbara Ester Adele Piga*, Gabriele Stancato",
    venue: "Digital Innovations in Architecture, Engineering and Construction, Springer, 2026",
    img: "assets/img/0035fe5e.png",
    links: { Paper: "https://doi.org/10.1007/978-3-032-04711-3_24" },
  },
  {
    type: "conference", year: "2025", selected: true,
    title: "SyncPerception: A Real-Time Urban Perception Prediction Tool Based on Graph Neural Networks",
    authors: "**Ziqi Cui**+*, Shangyu Lou+",
    venue: "2025 Annual Modeling and Simulation Conference (ANNSIM), 1–13",
    img: "assets/img/f9537108.png",
    links: { Paper: "https://ieeexplore.ieee.org/abstract/document/11118366" },
  },
  {
    type: "conference", year: "2025", selected: true,
    title: "How do the Spatial Layout of Street Elements and Geometric Features Affect Human Perception: A Prediction Model and Explainable Method Based on Graph Neural Network",
    authors: "**Ziqi Cui**+*, Shangyu Lou+",
    venue: "Proceedings of the 30th CAADRIA Conference, Tokyo, Vol. 4, pp. 459–468, 2025",
    img: "assets/img/118ee327.jpg",
    links: { Paper: "https://doi.org/10.52842/conf.caadria.2025.4.459" },
  },
  {
    type: "journal", year: "2025", selected: true,
    title: "Investigating the Spatiotemporally Heterogeneous Effects of Macro and Micro Built Environment on Sexual Violence Against Women: A Case Study of Mumbai",
    authors: "Baohua Wei+, **Ziqi Cui**+, Qilin Wu, Sitong Guo, Wenjing Li, Xinyue Wang, Waishan Qiu*",
    venue: "Humanities and Social Sciences Communications, 12(1), 1–17, 2025",
    img: "assets/img/de175046.png",
    links: { Paper: "https://doi.org/10.1057/s41599-025-04838-4" },
  },
  {
    type: "journal", year: "2023", selected: false,
    title: "Weaving Octopus: An Assembly–Disassembly-Adaptable Customized Textile Hybrid Prototype",
    authors: "**Ziqi Cui**+, Siman Zhang+, Salvatore Viscuso*, Alessandra Zanelli",
    venue: "Buildings, 13, 2413, 2023",
    img: "assets/img/9eb2e39b.png",
    links: { Paper: "https://doi.org/10.3390/buildings13102413" },
  },
];

/* ---------- Conference presentations ---------- */
const TALKS = [
  { kind: "Upcoming", title: "Beyond Physical Space: Learning Human-Centered Place Representations from Sparse Experience Narratives", authors: "**Ziqi Cui**+*, Shangyu Lou+", venue: "AAG 2027", place: "New York, USA", date: "2027" },
  { kind: "Oral", title: "Semantic Geospatial Retrieval of Urban Outdoor Spaces: Aligning Subjective Affective Needs with MLLM", authors: "**Ziqi Cui**+*, Shangyu Lou+", venue: "AAG 2026", place: "San Francisco, USA", date: "2026.03" },
  { kind: "Oral", title: "Enhancing Human Mobility Prediction through an OSINT-Based LLM Multi-Agent System", authors: "Shangyu Lou+*, **Ziqi Cui**+", venue: "AAG 2026", place: "San Francisco, USA", date: "2026.03" },
  { kind: "Oral", title: "In-motion Urban Ambiances: Assessing Walkability and Safety Perception Through Immersive VR Simulation", authors: "Barbara Ester Adele Piga+*, **Ziqi Cui**, Gabriele Stancato, Andrea Picardi, Simone Piersigilli, Lorenzo Mussone, Marco Boffi, Carlotta Colonna, Chiara Maninetti, Riccardo Barbieri, Luca Mainardi, Giandomenico Caruso", venue: "CitySenZ 2025", place: "Lisbon, Portugal", date: "2025.07" },
  { kind: "Oral", title: "SyncPerception: A Real-time Urban Perception Prediction Tool Based on Graph Neural Network", authors: "**Ziqi Cui**+*, Shangyu Lou+", venue: "SimAUD 2025", place: "Madrid, Spain", date: "2025.05" },
  { kind: "Oral", title: "How Do the Geometric Features and Spatial Layout of Street Elements Affect Human Perception: A Prediction Model and Explainable Method Based on Graph Neural Network", authors: "**Ziqi Cui**+*, Shangyu Lou+", venue: "CAADRIA 2025", place: "The University of Tokyo, Japan", date: "2025.03" },
  { kind: "Oral", title: "Spatial-temporal Impact of Built Environment on Women's Safety in Mumbai", authors: "Baohua Wei+, **Ziqi Cui**+, Qilin Wu, Sitong Guo, Wenjing Li, Xinyue Wang, Waishan Qiu*", venue: "ACSP 2024 Annual Conference", place: "Seattle, USA", date: "2024.11" },
  { kind: "Oral", title: "Evaluating Urban Environment and Perception with Varying Street View Perspectives", authors: "**Ziqi Cui**+, Barbara Ester Adele Piga*, Gabriele Stancato", venue: "REAACH Conference 2024", place: "Online", date: "2024.10" },
  { kind: "Poster", title: "“Flow along the corridor” — A GAN-based Floor Plan Generator", authors: "**Ziqi Cui**+*, Oana Taut, Xinyuan Zhang, David Andres Leon", venue: "Future of Construction (FoC) Conference 2024", place: "ETH Zürich, Switzerland", date: "2024.11" },
];

/* ---------- Projects ----------
   group: research | previous | lab
   gallery: images shown in the project page lightbox            */
const PROJECTS = [
  {
    id: "physio", group: "research", selected: true,
    title: "Physiological Responses during Urban Walking",
    tags: ["VR Walking", "EEG / ECG / Eye-tracking", "Affective Modeling"],
    funding: "MED4PED · NextGenerationEU",
    img: "assets/img/33e33c2b.jpg",
    summary: "A high-fidelity VR replica of Via Celoria (Milan) and an on-site walking route are used to record EEG, ECG, eye-tracking, questionnaire and behavioral data from pedestrians. Signals are synchronized, cleaned and turned into interpretable perceptual features (PCA, t-SNE, clustering), then mapped onto Russell's valence–arousal circumplex for dimensional sentiment modeling. A multi-modal deep learning model trained on SALICON and CAT2000 predicts pedestrian visual attention.",
    people: "Ziqi Cui, Chiara Maninetti, Gabriele Stancato, Barbara Ester Adele Piga",
    gallery: [
      "assets/img/913bad21.jpg",
      "assets/img/b2e0923c.jpg",
      "assets/img/31f4c362.jpg",
      "assets/img/df65c5d4.jpg",
      "assets/img/2373a2cd.jpg",
      "assets/img/a45ed0c5.jpg",
      "assets/img/36e863ab.jpg",
    ],
  },
  {
    id: "walkability", group: "research", selected: false,
    title: "LLM-based Review of Micro-Scale Walkability",
    tags: ["RAG–LLM Pipeline", "Knowledge Graph", "Walkability Index"],
    funding: "MUSA · NextGenerationEU",
    img: "assets/img/c21db2af.png",
    summary: "An enhanced umbrella review combined with an automated Retrieval-Augmented Generation (RAG) pipeline. A dual-track workflow — manual mining validated against LLM extraction — identified 101 micro-scale built-environment variables and their effects on perceived walkability across 50 core studies. Semantic-similarity clustering harmonizes terminology, and a dynamic knowledge graph supports the development of a new walkability index.",
    people: "Ziqi Cui, Barbara Ester Adele Piga",
    gallery: [
      "assets/img/de4f10ef.jpg",
      "assets/img/0a90e847.jpg",
      "assets/img/3ae9e86b.jpg",
      "assets/img/8217aad2.png",
      "assets/img/175f4b28.jpg",
      "assets/img/cabe6727.png",
      "assets/img/11963880.jpg",
      "assets/img/37f3d5a1.jpg",
    ],
  },
  {
    id: "syncperception", group: "research", selected: false,
    title: "SyncPerception — GNN Perception Prediction & Design Plugin",
    tags: ["Graph Neural Network", "Explainable AI", "C# / PythonNet"],
    funding: "exp-EIA_D · Seed4Innovation",
    img: "assets/img/f9537108.png",
    summary: "Street scenes are encoded as graphs of urban elements so a GNN can learn how spatial layout and geometry shape human perception (+3–8% accuracy over baselines), with eye-tracking-derived attention features improving explainability. The model ships as a real-time 3D modeling plugin (C#, PythonNet) that predicts citizen feedback while designers edit, and feeds a web-based urban decision-support dashboard.",
    people: "Ziqi Cui, Shangyu Lou",
    links: { Paper: "https://ieeexplore.ieee.org/abstract/document/11118366" },
    gallery: [
      "assets/img/f9537108.png",
      "assets/img/118ee327.jpg",
    ],
  },
  {
    id: "umm", group: "research", selected: true,
    title: "UrbanMorphMetrics (UMM) — Quantifying Urban Form in Milan",
    tags: ["Urban Morphology", "Clustering", "Python"],
    funding: "MUSA · NextGenerationEU",
    img: "assets/img/13d3df0c.jpg",
    summary: "A Python workflow that computes and visualizes 70+ morphological indicators across the Milan area. Hierarchical clustering reveals urban-form typologies (e.g., CittaStudi), and correlation and PCA analyses link UMM indicators to perception scores. Results are published as an interactive web map.",
    people: "Ziqi Cui, Barbara Ester Adele Piga",
    links: { "Web Map": "https://pinea.app.carto.com/map/0cbf2365-527b-44ea-877b-2662d93b8ec1" },
    gallery: [
      "assets/img/08050f08.jpg",
      "assets/img/4eed4685.jpg",
      "assets/img/b6fd1cbb.jpg",
      "assets/img/20e0811d.jpg",
      "assets/img/7bdbc6a3.png",
      "assets/img/0db24639.jpg",
      "assets/img/cddfdcf8.jpg",
      "assets/img/0d0988f3.png",
      "assets/img/148302dd.jpg",
    ],
  },
  {
    id: "octopus", group: "previous",
    title: "Weaving Octopus — Adaptable Textile Hybrid Prototype",
    tags: ["Bending-active Structure", "Arduino / C++", "Full-marks Thesis"],
    funding: "M.Sc. Thesis · Politecnico di Milano",
    img: "assets/img/da2a03ad.jpg",
    summary: "An assembly–disassembly-adaptable, customized textile hybrid structure developed at the Textiles Hub lab, with an adaptive, human-centered actuated prototype for smart building facades. Published in <i>Buildings</i> and exhibited at Milano Design Week 2025 (ACTUATED KNIT // TEXTILEMORPHOSIS).",
    people: "Ziqi Cui, Siman Zhang · Supervisors: Prof. Alessandra Zanelli, Prof. Salvatore Viscuso",
    links: { Paper: "https://doi.org/10.3390/buildings13102413" },
  },
  {
    id: "gan", group: "previous",
    title: "“Flow along the corridor” — GAN-based Floor Plan Generator",
    tags: ["GAN", "Generative Design"],
    funding: "M.Sc. Thesis · IAAC Barcelona",
    img: "assets/img/3c85d162.jpg",
    summary: "A generative adversarial network that learns corridor-driven spatial organization to generate architectural floor plans. Presented as a poster at the Future of Construction Conference 2024, ETH Zürich.",
    people: "Ziqi Cui · Supervisor: Oana Taut",
    links: { Poster: "assets/files/gan-floorplan-poster.pdf" },
  },
  {
    id: "portfolio", group: "previous",
    title: "Portfolio 2018–2023",
    tags: ["Architecture", "Computational Design"],
    funding: "Selected design work",
    img: "assets/img/d0351757.png",
    summary: "Selected architecture and computational design work from my studies in China, Italy and Spain.",
    links: { PDF: "assets/files/portfolio-ziqi-cui.pdf" },
  },
  {
    id: "vrwalk", group: "lab",
    title: "VR / On-site Walking Physiological Data Collection",
    img: "assets/img/f6cf7671.jpg",
    summary: "Walking outdoors and in VR while collecting EEG, ECG and eye-tracking data.",
  },
  {
    id: "sidewalk", group: "lab",
    title: "360° Sidewalk Image & Video Collection",
    img: "assets/img/3a25c06e.jpg",
    summary: "360° panoramic images, GPS and environmental data collected along sidewalks.",
  },
  {
    id: "inclusion", group: "lab",
    title: "Polimi Inclusion: Beyond Sight",
    img: "assets/img/e2fc348f.jpg",
    summary: "Simulated visually impaired walking outdoors, with accompanying psychological surveys.",
  },
  {
    id: "lpt", group: "lab",
    title: "Luminous Planning Table (LPT)",
    img: "assets/img/d690985f.jpg",
    summary: "A phygital (physical + digital) table that augments physical models with real-time digital-twin projections for multi-user collaborative planning.",
  },
  {
    id: "teaching", group: "lab",
    title: "Teaching Assistant Work",
    img: "assets/img/f3a74c82.jpg",
    summary: "Urban Survey and Representation Studio (055696) and Advanced Methodologies for Human-Centered Urban Design (061694), Politecnico di Milano.",
  },
];

/* ---------- CV sections ---------- */
const EDUCATION = [
  { org: "The University of British Columbia", detail: "Ph.D. Student", date: "Sep. 2026 – present", place: "Vancouver, Canada" },
  { org: "IAAC – Universitat Politècnica de Catalunya (UPC)", detail: "M.Sc. Advanced Computation for Architecture & Design", date: "2022 – 2023", place: "Barcelona, Spain" },
  { org: "Politecnico di Milano", detail: "M.Sc. Architecture – Built Environment – Interiors · 110/110", date: "2020 – 2023", place: "Milan, Italy" },
  { org: "Shanxi University", detail: "B.Eng. Architecture", date: "2015 – 2020", place: "Taiyuan, China" },
];

const EXPERIENCE = [
  { org: "Politecnico di Milano · LABSIMURB", detail: "Research Fellow – Dept. Architecture & Urban Studies", date: "2024 – 2026" },
  { org: "University of Milan", detail: "Research Assistant – Dept. Computer Science", date: "2024 – 2026" },
  { org: "Guangzhou City Construction & Design Co.", detail: "Urban Planning Intern", date: "2019" },
];

const HONORS = [
  { text: "Canada Impact+ Research Training Award (Doctoral)", detail: "Natural Sciences and Engineering Research Council of Canada (NSERC) · Track: Advanced digital technologies (AI, quantum, cybersecurity)", date: "Sep. 2026" },
  { text: "Four Year Doctoral Fellowship (4YF), The University of British Columbia", date: "Sep. 2026" },
  { text: "ACM SIGSPATIAL Travel Grant", date: "2026" },
  { text: "COST (European Cooperation in Science & Technology) Grant", date: "Jul. 2025" },
  { text: "NextGenerationEU Research Scholarship (MED4PED)", date: "Feb. 2024" },
  { text: "Graduated with Full Marks and Honors, Politecnico di Milano", date: "Oct. 2023" },
  { text: "Erasmus+ Scholarship", date: "Jun. 2022" },
];

const TEACHING = [
  { role: "Teaching Assistant", text: "Urban Survey and Representation Studio (055696), Politecnico di Milano", date: "2024 – 2026" },
  { role: "Teaching Assistant", text: "Advanced Methodologies for Human-Centered Urban Design (061694), Politecnico di Milano", date: "2024" },
  { role: "Thesis Co-supervisor", text: "3 M.Sc. theses on walkability, pedestrian attention (deep learning), and older adults' active travel", date: "2024 – 2026" },
];
