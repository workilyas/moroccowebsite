const translations = {
  ar: {
    site_title: "بوابة المغرب",
    nav_home: "الرئيسية",
    nav_places: "المناطق",
    nav_gallery: "الصور",
    nav_about: "عن المغرب",
    nav_contact: "تواصل",
    nav_services: "خدمة العملاء",
    nav_login: "تسجيل الدخول",
    hero_title: "اكتشف روعة المملكة المغربية",
    hero_sub: "التاريخ • الحضارة • الطبيعة • الثقافة",
    about_title: "المملكة المغربية 🇲🇦",
    about_p: "المغرب دولة عربية إفريقية عاصمتها الرباط...",
    gallery_title: "معرض صور المغرب",
    places_title: "مناطق المغرب",
    marrakech: "مراكش",
    chefchaouen: "شفشاون",
    casablanca: "الدار البيضاء",
    rabat: "الرباط",
    services_title: "الخدمات التي أقدمها",
    service_web: "تصميم مواقع",
    service_logo: "تصميم الشعارات",
    service_pages: "برمجة صفحات",
    service_dynamic: "تطوير مواقع ديناميكية",
    contact_title: "تواصل معنا",
    btn_send: "إرسال",
    login_title: "تسجيل الدخول",
    btn_login: "دخول",
    no_account: "ليس لديك حساب؟ سجل الآن",
    dashboard_title: "المزيد عن المغرب",
    back: "العودة"
  },
  en: {
    site_title: "Morocco Gateway",
    nav_home: "Home",
    nav_places: "Places",
    nav_gallery: "Gallery",
    nav_about: "About Morocco",
    nav_contact: "Contact",
    nav_services: "Customer Service",
    nav_login: "Login",
    hero_title: "Discover the beauty of Morocco",
    hero_sub: "History • Civilization • Nature • Culture",
    about_title: "Kingdom of Morocco 🇲🇦",
    about_p: "Morocco is an Arab African country...",
    gallery_title: "Morocco Gallery",
    places_title: "Places in Morocco",
    marrakech: "Marrakech",
    chefchaouen: "Chefchaouen",
    casablanca: "Casablanca",
    rabat: "Rabat",
    services_title: "Services I Offer",
    service_web: "Web Design",
    service_logo: "Logo Design",
    service_pages: "Page Programming",
    service_dynamic: "Dynamic Website Development",
    contact_title: "Contact Us",
    btn_send: "Send",
    login_title: "Login",
    btn_login: "Login",
    no_account: "No account? Register now",
    dashboard_title: "More about Morocco",
    back: "Back"
  },
  fr: {
    site_title: "Portail du Maroc",
    nav_home: "Accueil",
    nav_places: "Régions",
    nav_gallery: "Galerie",
    nav_about: "À propos du Maroc",
    nav_contact: "Contact",
    nav_services: "Service client",
    nav_login: "Connexion",
    hero_title: "Découvrez la beauté du Maroc",
    hero_sub: "Histoire • Civilisation • Nature • Culture",
    about_title: "Royaume du Maroc 🇲🇦",
    about_p: "Le Maroc est un pays arabe africain...",
    gallery_title: "Galerie du Maroc",
    places_title: "Régions du Maroc",
    marrakech: "Marrakech",
    chefchaouen: "Chefchaouen",
    casablanca: "Casablanca",
    rabat: "Rabat",
    services_title: "Services offerts",
    service_web: "Conception de sites web",
    service_logo: "Création de logos",
    service_pages: "Programmation de pages",
    service_dynamic: "Développement de sites dynamiques",
    contact_title: "Contactez-nous",
    btn_send: "Envoyer",
    login_title: "Connexion",
    btn_login: "Connexion",
    no_account: "Pas de compte ? Inscrivez-vous",
    dashboard_title: "Plus sur le Maroc",
    back: "Retour"
  }
};

function setLang(lang) {
  localStorage.setItem("lang", lang);
  applyLang(lang);
}

function applyLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  if (lang === "ar") {
    document.documentElement.setAttribute("dir", "rtl");
    document.documentElement.setAttribute("lang", "ar");
  } else {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.setAttribute("lang", lang);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "ar";
  applyLang(savedLang);
});
function setLang(lang) {
  localStorage.setItem("lang", lang); // نخزن اللغة المختارة
  applyLang(lang);
}

function applyLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  if (lang === "ar") {
    document.documentElement.setAttribute("dir", "rtl");
    document.documentElement.setAttribute("lang", "ar");
  } else {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.setAttribute("lang", lang);
  }
}

// عند تحميل أي صفحة، نقرأ اللغة المخزنة ونطبقها
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "ar";
  applyLang(savedLang);
});