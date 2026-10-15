// All portfolio text lives here. Edit freely.

export const education = {
  school: "Chennai Institute of Technology",
  location: "Chennai, India",
  degree: "Bachelor of Engineering in Computer Science",
  specialization: "Specialization in Artificial Intelligence and Machine Learning",
  years: "2023 – 2027",
  cgpa: "8.285",
};

export const experience = [
  {
    role: "Machine Learning Intern",
    org: "CodeAlpha",
    period: "May 2024 – June 2024",
    points: [
      "Built two machine learning models for real-world applications: heart disease prediction and handwritten recognition, reaching 80% accuracy.",
      "Developed a machine learning application using Python, TensorFlow and supporting libraries.",
      "Worked on data analysis, model training and performance optimization.",
    ],
    tech: ["Python", "TensorFlow", "Data Analysis"],
  },
  {
    role: "Image Processing Intern",
    org: "Centre for Additive Manufacturing (CoE)",
    period: "Nov 2024 – Dec 2024",
    points: [
      "Developed a defect detection system for additive manufacturing machines using defect image datasets.",
      "Applied preprocessing and segmentation techniques to identify abnormal thermal patterns that indicate defects.",
    ],
    tech: ["Python", "OpenCV", "NumPy", "Segmentation"],
  },
];

// category: used by the project filter. image: put a file in src/assets and import it, or leave null.
export const projects = [
  {
    title: "DroneX: Drone Detection and Recognition System",
    date: "May 2026 – Aug 2026",
    category: "AI & Vision",
    icon: "radar",
    featured: true,
    summary:
      "A web application that detects drones in uploaded images and supports authority-assisted drone verification using the OpenDroneID / Remote ID concept.",
    tech: ["YOLOv8X", "Computer Vision", "Flask", "React.js", "OpenDroneID"],
    contributions: [
      "Built a YOLOv8X model pipeline that detects drones in uploaded images.",
      "Implemented a Flask backend with REST APIs that process images and return detection results.",
      "Displayed detection results with confidence scores in a React.js interface.",
      "Integrated the OpenDroneID / Remote ID concept to help tell authorized and unauthorized drones apart.",
    ],
    note: "Remote ID verification in this project uses simulated demo data. It is not a live surveillance system.",
    image: null,
    github: "GITHUB_PROJECT_URL_HERE",
    demo: "DEMO_URL_HERE",
  },
  {
    title: "SmartBin: Smart Waste Detection System",
    date: "Sep 2025 – Nov 2025",
    category: "AI & Vision",
    icon: "recycle",
    summary:
      "A computer vision system that classifies waste as organic or non-organic to support smart waste segregation.",
    tech: ["YOLOv8", "OpenCV", "Deep Learning", "Computer Vision"],
    contributions: [
      "Trained a YOLOv8 model to detect and categorize waste as organic or non-organic.",
      "Used OpenCV to display bounding boxes, class labels and confidence scores.",
    ],
    image: null,
    github: "GITHUB_PROJECT_URL_HERE",
    demo: "DEMO_URL_HERE",
  },
  {
    title: "HR Analysis Dashboard",
    date: "Jun 2025 – Jul 2026",
    category: "Analytics",
    icon: "chart",
    summary:
      "An interactive Power BI dashboard that summarizes workforce data to support HR decision-making and planning.",
    tech: ["Power BI", "DAX", "Data Modeling"],
    contributions: [
      "Analyzed employee headcount by department, business unit and gender.",
      "Used data modeling and DAX measures for metrics such as total employees, gender distribution and department-wise counts.",
      "Visualized employee trends for workforce planning.",
    ],
    image: null,
    github: "GITHUB_PROJECT_URL_HERE",
    demo: "DEMO_URL_HERE",
  },
  {
    title: "View Once: Automated Schedule Reminder System",
    date: "Oct 2024 – Dec 2024",
    category: "Web",
    icon: "bell",
    summary:
      "A schedule reminder application that helps users manage their time with automated notifications.",
    tech: ["Node.js", "Nodemailer", "Twilio API", "MongoDB", "HTML", "CSS", "JavaScript"],
    contributions: [
      "Built the reminder application with Node.js, Nodemailer, the Twilio API and MongoDB.",
      "Designed a user-friendly interface with HTML, CSS and JavaScript.",
    ],
    image: null,
    github: "GITHUB_PROJECT_URL_HERE",
    demo: "DEMO_URL_HERE",
  },
];

export const skills = [
  { group: "Programming", items: ["Python", "JavaScript"] },
  { group: "Frontend", items: ["HTML", "CSS", "React.js"] },
  { group: "Backend", items: ["Flask", "Node.js"] },
  { group: "Databases", items: ["MongoDB", "MySQL"] },
  { group: "AI / Machine Learning", items: ["YOLOv8X", "OpenCV", "AI Models", "Generative AI", "RAG"] },
  { group: "Analytics", items: ["Power BI", "DAX"] },
  { group: "Tools", items: ["GitHub", "Figma", "Canva"] },
];

export const certifications = [
  { title: "Networking Essentials", issuer: "Cisco", date: "Nov 2023" },
  { title: "Introduction to Networks (CCNA 1)", issuer: "Cisco", date: "Nov 2025" },
  { title: "Reinforcement Learning (Elite)", issuer: "NPTEL", date: "Nov 2025" },
  { title: "Affective Computing (Elite)", issuer: "NPTEL", date: "Apr 2026" },
  { title: "JLPT N4 Japanese Language Certification", issuer: "Language certification", date: "Jul 2026" },
];

export const achievements = [
  { title: "Finalist, SDG Hackathon 2025", detail: "AI and healthcare focused project." },
  { title: "Finalist, Hack Hustle 2024", detail: "AI and healthcare focused project." },
  { title: "Intercollege Smart India Hackathon (SIH) Finalist", detail: "Reached the finals at the intercollege round." },
  {
    title: "Springer journal article: Submitted",
    detail: "“Machine Learning as a Reliable Tool for Compressive Strength Prediction in PA6-CF.” Currently submitted, not yet published.",
  },
];

export const leadership = [
  { title: "Takshashila Symposium", detail: "Organized web development technical events." },
  { title: "HNM Committee", detail: "Served as Decor Team Organizer and club member." },
  { title: "Ishoni Nihongo", detail: "Active member, helping manage Kendo workshops and coordinate events." },
  { title: "Competitions", detail: "Participated in speech and sports competitions and earned certificates for outstanding participation and achievement." },
];

export const languages = [
  { name: "Tamil", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Japanese", level: "JLPT N4 certified; N3 in progress" },
];
