export const defaultPortfolio = {
  profile: {
    name: "Shubham Verma",
    role: "Full Stack & AI Developer",
    headline: "Building digital products with clarity.",
    intro: "I design and ship thoughtful digital products that turn complex ideas into clear, useful experiences.",
    image: "/profile.jpeg",
  },
  about: {
    intro: "Passionate about creating modern web applications, solving real-world problems and building impactful digital experiences.",
    cards: [
      { title: "Full Stack Development", desc: "Building scalable MERN stack applications with modern UI & backend architecture." },
      { title: "AI Integration", desc: "Exploring AI-powered solutions using OpenAI APIs and intelligent automation." },
      { title: "Growth Mindset", desc: "Focused on continuous learning, clean code practices and impactful products." },
    ],
  },
  skills: [
    { name: "HTML5", color: "#E34F26" },
    { name: "CSS3", color: "#1572B6" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "React.js", color: "#61DAFB" },
    { name: "Node.js", color: "#3C873A" },
    { name: "Express.js", color: "#172321" },
    { name: "MongoDB", color: "#47A248" },
    { name: "MySQL", color: "#00758F" },
    { name: "AI Integration", color: "#8B5CF6" },
    { name: "Git & GitHub", color: "#F1502F" },
  ],
  projects: [
    { name: "Todo App", description: "A simple and user-friendly Todo application to manage daily tasks.", tech: "React.js | JavaScript | HTML | CSS", live: "https://taskflow-pwa-psi.vercel.app/", github: "https://github.com/shubham-devx/taskflow-pwa.git" },
    { name: "Weather App", description: "Real-time weather app using API integration.", tech: "React | API | JavaScript", live: "https://weather-app-seven-psi-82.vercel.app", github: "https://github.com/shubham-devx/weather-app.git" },
    { name: "Global Intelligence Analysis", description: "Global intelligence data analysis using APIs.", tech: "Python | Pandas | OpenAI | Data Analysis", live: "https://global-intelligence-analysis.vercel.app", github: "https://github.com/shubham-devx/GLOBAL-INTELLIGENCE-ANALYSIS.git" },
    { name: "AI Gym Trainer", description: "AI-powered fitness assistant for personalized workouts.", tech: "MERN | OpenAI | Prompt Engineering", live: "https://fintness-tracker-agent-client.vercel.app", github: "https://github.com/shubham-devx" },
    { name: "Digital Temple", description: "Virtual worship platform with interactive features.", tech: "React | Router | Vercel", live: "https://digital-temple.vercel.app", github: "https://github.com/shubham-devx/digitalTemple.git" },
    { name: "SpamSense AI", description: "AI-powered SMS fraud detection system.", tech: "Python | Streamlit | Scikit-learn | NLP", live: "https://ai-scam-detector-38gup2dgmpwfpxaucro6sq.streamlit.app/", github: "https://github.com/shubham-devx/ai-scam-detector.git" },
  ],
  certifications: [
    { title: "AI Mastery Course", link: "https://drive.google.com/file/d/1zzGZamCIcNlVQdYHY2gYL78pxe8AabEK/view" },
    { title: "Internship Completion Certificate", link: "https://drive.google.com/file/d/1tdWNO6x3a4Vapvq3CKTSJA1kFPetUbb6/view" },
    { title: "Java Hybrid Development - 1Stop.ai", link: "https://drive.google.com/file/d/1vLVSmGAPPI0s5V4lyJpI982kfGNVg2pb/view" },
  ],
  resumes: [
    { title: "MERN Stack Developer", description: "Full stack development resume focused on scalable web applications and backend systems.", link: "https://drive.google.com/file/d/1jiybHq1COvWrfNhnY7B77kybguDs7e4H/view?usp=drivesdk" },
    { title: "AI / ML Developer", description: "AI-focused resume showcasing intelligent systems, APIs and machine learning projects.", link: "https://drive.google.com/file/d/1UEVjW3mJiV7IyrUjlV0NfSC6rbO_wJR8/view?usp=drivesdk" },
  ],
  contact: {
    title: "Let's Work Together",
    intro: "Open to internships, freelance projects, collaborations and exciting opportunities.",
    email: "subhamv2003@gmail.com",
    github: "https://github.com/shubham-devx",
    linkedin: "https://www.linkedin.com/in/shubham-verma-bbb84b1b9",
  },
};

export function loadPortfolio() {
  try {
    const saved = JSON.parse(window.localStorage.getItem("portfolio-data"));
    if (saved) {
      return {
        ...defaultPortfolio,
        ...saved,
        profile: { ...defaultPortfolio.profile, ...saved.profile },
        about: { ...defaultPortfolio.about, ...saved.about },
        contact: { ...defaultPortfolio.contact, ...saved.contact },
      };
    }

    const oldProfile = JSON.parse(window.localStorage.getItem("portfolio-profile"));
    return oldProfile ? { ...defaultPortfolio, profile: { ...defaultPortfolio.profile, ...oldProfile } } : defaultPortfolio;
  } catch {
    return defaultPortfolio;
  }
}

export function savePortfolio(portfolio) {
  window.localStorage.setItem("portfolio-data", JSON.stringify(portfolio));
}
