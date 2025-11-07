const translations = {
  en: {
    "header.home": "Home",
    "header.about": "About",
    "header.services": "Services",
    "header.portfolio": "Portfolio",
    "header.contact": "Contact",

    "header.job": "Game Programmer",
    "header.greeting": "Hi, I'm <span>Marius</span><br>Pointeau from France",

    "about.title": "About Me",
    "about.description": "MOI MOI MOI MOI MOI MOI MOI MOI MOI",
    "about.skills": "Skills",
    "about.experience": "Experience",
    "about.education": "Education",
    "about.education.first" : "<span>2028</span><br>Mastère Game Programming at Isart DIGITAL",

    "services.title": "My Services",
    "services.first": "Game Programmer",
    "services.first.description": "C, C++, C#, Unity, Unreal",
    "services.second": "AI Programmer",
    "services.second.description": "A* algorithm",
    "services.third": "UI Programmer",
    "services.third.description": "Plein de trucs trop bien en UI la folie",

    "portfolio.title": "My Work",
    "portfolio.firstWork": "I Need Healing",
    "portfolio.firstWork.description": "TPS Console game on Unreal Engine 5.4 using C++ and blueprint",
    "portfolio.secondWork": "Guide me to the Paradise",
    "portfolio.secondWork.description": "PC game made in Game Week at Isart DIGITAL on unity 6",
    "portfolio.thirdWork": "TPS Multiplayer",
    "portfolio.thirdWork.description": "PC game made with Unreal Engine 5.6 using C++ and blueprint",

    "contact.title": "Contact Me",
    "contact.cv": "Download CV",
    "contact.submit": "Submit",

    "copyright" : "Copyright gougou GAGA",

    "learnmore": "Learn more",
    "seemore": "See more",
  },

  fr: {
    "header.home": "Accueil",
    "header.about": "À propos",
    "header.services": "Services",
    "header.portfolio": "Portfolio",
    "header.contact": "Contact",

    "header.job": "Programmeur Gameplay",
    "header.greeting": "Salut, Je suis <span>Marius</span><br>Pointeau de France",

    "about.title": "À propos de moi",
    "about.description": "MOI MOI MOI MOI MOI MOI MOI MOI MOI",
    "about.skills": "Compétences",
    "about.experience": "Expérience",
    "about.education": "Formation",
    "about.education.first" : "<span>2028</span><br>Mastère Progammation de jeu vidéo à Isart DIGITAL",

    "services.title": "Mes services",
    "services.first": "Programmeur de jeu vidéo",
    "services.first.description": "C, C++, C#, Unity, Unreal",
    "services.second": "Programmeur IA",
    "services.second.description": "A* algorithm",
    "services.third": "Programmeur UI",
    "services.third.description": "Plein de trucs trop bien en UI la folie",

    "portfolio.title": "Mes travaux",
    "portfolio.firstWork": "I Need Healing",
    "portfolio.firstWork.description": "Jeu console en TPS sur Unreal Engine en C++ et blueprint",
    "portfolio.secondWork": "Guide me to the Paradise",
    "portfolio.secondWork.description": "Jeu pc fait pendant la game week de troisième année à Isart DIGITAL sur unity 6",
    "portfolio.thirdWork": "TPS Multiplayer",
    "portfolio.thirdWork.description": "Jeu pc fait sur Unreal Engine 5.6 en C++ et blueprint",

    "contact.title": "Contactez-moi",
    "contact.cv": "Télécharger le CV",
    "contact.submit": "Envoyer",

    "copyright" : "Copyright gougou GAGA",

    "learnmore": "En savoir plus",
    "seemore": "Voir plus",
  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const translation = translations[lang][key];
    if (translation) el.innerHTML = translation;
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang") || "en";
  setLanguage(saved);
});

function toggleLanguage() {
  const current = localStorage.getItem("lang") || "en";
  setLanguage(current === "en" ? "fr" : "en");
}