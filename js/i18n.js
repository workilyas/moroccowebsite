// js/app.js
// تجميع i18n + UI (goHome + revealFromBottom) + خريطة Leaflet + بعض المساعدات البسيطة
// ضع هذا الملف في js/app.js ثم استبدل استدعاءات i18n/ui/map القديمة باستدعاء هذا الملف.
// يتوقع أن تُحمّل مكتبة Leaflet قبل هذا السكربت (أو أن تتواجد على الناقل).

/* ===========================
   TRANSLATIONS (i18n)
   =========================== */
const translations = {
  ar: {
    site_title: "بوابة المغرب • اكتشف المغرب الحقيقي",
    site_description: "سافر عبر المدن العريقة والطبيعة الخلابة — دليل سياحي شامل للمغرب.",
    nav_home: "الرئيسية",
    nav_places: "المناطق",
    nav_gallery: "الصور",
    nav_about: "عن المغرب",
    nav_learn_more: "تعرف المزيد عن المغرب",
    nav_contact: "للتواصل",
    nav_services: "الخدمات",
    nav_login: "تسجيل/دخول",
    nav_account: "معلومات الحساب",
    hero_title: "اكتشف روعة المملكة المغربية",
    hero_sub: "تجارب، أماكن، ونصائح تجعل رحلتك لا تُنسى — تعرّف على المغرب الآن!",
    cta_explore: "ابدأ الاستكشاف",
    map_title: "الخريطة التفاعلية",
    feat_history: "تاريخ وتراث",
    feat_history_p: "أسواق ملونة، مدن عتيقة وقلاع تأخذك إلى الماضي.",
    feat_nature: "مناظر طبيعية خلابة",
    feat_nature_p: "جبال، سواحل وصحراء — تنوع طبيعي يخطف الأنفاس.",
    feat_food: "مأكولات أصيلة",
    feat_food_p: "طعم تقليدي في كل لقمة: طاجين، كسكس ومقبلات لذيذة.",
    places_title: "مناطق المغرب",
    marrakech: "مراكش — القلب النابض للثقافة",
    chefchaouen: "شفشاون — المدينة الزرقاء الحالمة",
    casablanca: "الدار البيضاء — مدينة التجارة والبحر",
    rabat: "الرباط — العاصمة التاريخية",
    services_title: "الخدمات التي أقدمها",
    service_web: "تصميم مواقع جذابة",
    service_logo: "هوية وشعارات احترافية",
    service_pages: "برمجة صفحات تفاعلية",
    service_dynamic: "تطوير مواقع ديناميكية",
    contact_title: "تواصل معنا",
    contact_name_placeholder: "الاسم الكامل",
    contact_email_placeholder: "الإيميل",
    contact_message_placeholder: "اكتب رسالتك وسنعاود الاتصال",
    btn_send: "أرسل الرسالة",
    login_title: "تسجيل الدخول",
    btn_login: "دخول",
    no_account: "ليس لديك حساب؟ سجل الآن",
    back: "العودة",
    footer_text: "جميع الحقوق محفوظة © بوابة المغرب — رحلات، ثقافة وتجارب."
  },
  en: {
    site_title: "Morocco Gateway • Discover Real Morocco",
    site_description: "Travel through ancient cities and breathtaking nature — your travel guide to Morocco.",
    nav_home: "Home",
    nav_places: "Places",
    nav_gallery: "Gallery",
    nav_about: "About Morocco",
    nav_learn_more: "Learn more about Morocco",
    nav_contact: "Contact",
    nav_services: "Services",
    nav_login: "Login",
    nav_account: "Account info",
    hero_title: "Discover the Beauty of Morocco",
    hero_sub: "Experiences, places and tips to make your trip unforgettable — explore Morocco now!",
    cta_explore: "Start Exploring",
    map_title: "Interactive map",
    feat_history: "Rich History",
    feat_history_p: "Colorful souks, ancient medinas and forts that tell stories.",
    feat_nature: "Stunning Nature",
    feat_nature_p: "Mountains, coasts and desert — landscapes that take your breath away.",
    feat_food: "Authentic Cuisine",
    feat_food_p: "Tradition in every bite: tagine, couscous and tasty mezze.",
    places_title: "Places in Morocco",
    marrakech: "Marrakech — The Cultural Heart",
    chefchaouen: "Chefchaouen — The Dreamy Blue City",
    casablanca: "Casablanca — Sea and Business",
    rabat: "Rabat — Historical Capital",
    services_title: "Services I Offer",
    service_web: "Beautiful web design",
    service_logo: "Professional identity & logos",
    service_pages: "Interactive page programming",
    service_dynamic: "Dynamic website development",
    contact_title: "Contact Us",
    contact_name_placeholder: "Full name",
    contact_email_placeholder: "Email",
    contact_message_placeholder: "Write your message and we'll get back to you",
    btn_send: "Send Message",
    login_title: "Login",
    btn_login: "Login",
    no_account: "No account? Register now",
    back: "Back",
    footer_text: "All rights reserved © Morocco Gateway — Travel, Culture & Experiences."
  },
  fr: {
    site_title: "Portail du Maroc • Découvrez le vrai Maroc",
    site_description: "Voyagez à travers des villes anciennes et une nature à couper le souffle — guide touristique du Maroc.",
    nav_home: "Accueil",
    nav_places: "Régions",
    nav_gallery: "Galerie",
    nav_about: "À propos",
    nav_learn_more: "En savoir plus sur le Maroc",
    nav_contact: "Contact",
    nav_services: "Services",
    nav_login: "Connexion",
    nav_account: "Infos du compte",
    hero_title: "Découvrez la beauté du Maroc",
    hero_sub: "Expériences, lieux et conseils pour rendre votre voyage inoubliable — explorez le Maroc !",
    cta_explore: "Commencer l'exploration",
    map_title: "Carte interactive",
    feat_history: "Histoire riche",
    feat_history_p: "Souks colorés, médinas anciennes et forteresses qui racontent des histoires.",
    feat_nature: "Nature spectaculaire",
    feat_nature_p: "Montagnes, côtes et désert — des paysages à couper le souffle.",
    feat_food: "Cuisine authentique",
    feat_food_p: "La tradition dans chaque bouchée : tagine, couscous et entrées savoureuses.",
    places_title: "Régions du Maroc",
    marrakech: "Marrakech — Le cœur culturel",
    chefchaouen: "Chefchaouen — La ville bleue de rêve",
    casablanca: "Casablanca — Mer et affaires",
    rabat: "Rabat — Capitale historique",
    services_title: "Services proposés",
    service_web: "Design web attractif",
    service_logo: "Identité & logos professionnels",
    service_pages: "Programmation de pages interactives",
    service_dynamic: "Développement de sites dynamiques",
    contact_title: "Contactez-nous",
    contact_name_placeholder: "Nom complet",
    contact_email_placeholder: "Email",
    contact_message_placeholder: "Écrivez votre message et nous vous répondrons",
    btn_send: "Envoyer le message",
    login_title: "Connexion",
    btn_login: "Connexion",
    no_account: "Pas de compte ? Inscrivez-vous",
    back: "Retour",
    footer_text: "Tous droits réservés © Portail du Maroc — Voyages, Culture & Expériences."
  }
};

/* ===========================
   i18n helpers
   =========================== */
function t(key, lang = null, vars = {}) {
  const L = lang || (localStorage.getItem("lang") || document.documentElement.lang || "ar");
  const dict = translations[L] || translations["ar"];
  let s = dict[key];
  if (s === undefined) {
    if (translations["en"] && translations["en"][key]) s = translations["en"][key];
    else return key;
  }
  Object.keys(vars).forEach(k => {
    s = s.replace(new RegExp("{" + k + "}", "g"), vars[k]);
  });
  return s;
}

function setLang(lang) {
  localStorage.setItem("lang", lang);
  applyLang(lang);
  window.dispatchEvent(new CustomEvent("i18n:changed", { detail: { lang } }));
}

function applyLang(lang) {
  if (!translations[lang]) { console.warn("Language not found:", lang); return; }

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const txt = t(key, lang);
    if (el.hasAttribute("data-i18n-html")) el.innerHTML = txt;
    else el.textContent = txt;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.placeholder = t(key, lang);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    const key = el.getAttribute("data-i18n-alt");
    el.alt = t(key, lang);
  });

  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    const key = el.getAttribute("data-i18n-title");
    el.title = t(key, lang);
  });

  const titleEl = document.querySelector("title[data-i18n]");
  if (titleEl) document.title = t(titleEl.getAttribute("data-i18n"), lang);
  else document.title = t("site_title", lang);

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t("site_description", lang));

  if (lang === "ar") {
    document.documentElement.setAttribute("dir", "rtl");
    document.documentElement.setAttribute("lang", "ar");
  } else {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.setAttribute("lang", lang);
  }
}

function initI18n() {
  const saved = localStorage.getItem("lang");
  let savedLang = "ar";
  if (saved) savedLang = saved;
  else {
    const nav = (navigator.language || navigator.userLanguage || "ar").toLowerCase();
    if (nav.startsWith("fr")) savedLang = "fr";
    else if (nav.startsWith("en")) savedLang = "en";
  }
  applyLang(savedLang);
}

/* ترجمة تلقائية للعناصر المضافة ديناميكياً */
const i18nObserver = new MutationObserver(muts => {
  const lang = localStorage.getItem("lang") || document.documentElement.lang || "ar";
  for (const m of muts) {
    if (m.addedNodes && m.addedNodes.length) {
      applyLang(lang);
      break;
    }
  }
});
i18nObserver.observe(document.documentElement, { childList: true, subtree: true });

/* expose API */
window.i18n = { t, setLang, applyLang, translations };

/* ===========================
   UI: goHome + revealFromBottom
   =========================== */
function goHome(e) {
  if (e && e.preventDefault) e.preventDefault();
  localStorage.setItem('animateFromBottom', '1');
  window.location.href = 'index.html';
}

function revealFromBottom() {
  try {
    const flag = localStorage.getItem('animateFromBottom');
    if (!flag) return;
    localStorage.removeItem('animateFromBottom');

    const container = document.querySelector('main');
    if (!container) return;

    const items = Array.from(container.children).filter(n => {
      return n.nodeType === 1 && (n.offsetHeight > 10 || n.querySelector('*'));
    });

    if (!items.length) return;

    items.forEach(item => item.classList.add('reveal-item'));

    let delay = 0;
    const step = 120;
    for (let i = items.length - 1; i >= 0; i--) {
      const el = items[i];
      setTimeout(() => { el.classList.add('revealed'); }, delay);
      delay += step;
    }

    setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, delay + 80);
  } catch (err) {
    console.error('revealFromBottom error:', err);
  }
}

window.goHome = goHome;

/* ===========================
   Map helpers (Leaflet)
   =========================== */
const cityCoords = {
  marrakech: [31.6295, -7.9811],
  chefchaouen: [35.1689, -5.2697],
  casablanca: [33.5731, -7.5898],
  rabat: [34.0209, -6.8417]
};

let _map = null;
let _markers = {};

function initMapIfNeeded() {
  const mapEl = document.getElementById('map');
  if (!mapEl) return;
  // ensure Leaflet exists
  if (typeof L === 'undefined') {
    console.warn('Leaflet not loaded yet. Map will initialize later.');
    return;
  }
  if (_map) return;

  _map = L.map('map').setView([31.7917, -7.0926], 6);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(_map);

  Object.keys(cityCoords).forEach(key => {
    const c = cityCoords[key];
    const popup = `<strong>${i18n.t(key)}</strong>`;
    const m = L.marker(c).addTo(_map).bindPopup(popup);
    _markers[key] = m;
  });
}

function focusCity(key) {
  if (!_map) initMapIfNeeded();
  const marker = _markers[key];
  if (marker) {
    _map.setView(marker.getLatLng(), 12, { animate: true });
    marker.openPopup();
  } else if (cityCoords[key]) {
    _map.setView(cityCoords[key], 10, { animate: true });
  } else {
    console.warn('Unknown city to focus:', key);
  }
}

window.focusCity = focusCity;

/* ===========================
   Contact form helper
   =========================== */
function sendMessage(e) {
  if (e && e.preventDefault) e.preventDefault();
  const form = e ? (e.target instanceof HTMLFormElement ? e.target : e.currentTarget) : document.querySelector('form');
  if (!form) { alert(i18n.t('contact_title')); return; }
  const name = form.querySelector('[data-i18n-placeholder="contact_name_placeholder"]')?.value || form.querySelector('input')?.value || '';
  // هنا يمكنك ربط POST إلى API أو إرسال عبر بريد إلكتروني
  // الآن: إظهار رسالة نجاح بسيطة
  alert(i18n.t('btn_send') + " — " + (name || ''));
  form.reset();
}
window.sendMessage = sendMessage;

/* ===========================
   Initialization
   =========================== */
function initApp() {
  initI18n();
  // try init map (if leaflet loaded)
  try { initMapIfNeeded(); } catch (err) { /* will be attempted later by mutation observer */ }

  // run revealFromBottom if needed
  revealFromBottom();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
