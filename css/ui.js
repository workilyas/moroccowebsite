// js/ui.js
// 1) goHome(event) — يعين علامة ثم يوجّه إلى index.html
// 2) revealFromBottom() — عند فتح index.html (بعد وجود العلامة) يعرض عناصر <main> من الأسفل للأعلى

function goHome(e) {
  if (e && e.preventDefault) e.preventDefault();
  // ضع علامة لنصف حركة الانتقال
  localStorage.setItem('animateFromBottom', '1');
  // وجه المستخدم إلى الصفحة الرئيسية
  window.location.href = 'index.html';
}

function revealFromBottom() {
  try {
    const flag = localStorage.getItem('animateFromBottom');
    if (!flag) return;
    // أزل العلامة حتى لا تتكرر الحركة في زيارات لاحقة
    localStorage.removeItem('animateFromBottom');

    const container = document.querySelector('main');
    if (!container) return;

    // عناصر قابلة للعرض داخل main — نستخدم العناصر المباشرة لتأثير واضح
    const items = Array.from(container.children).filter(n => {
      // تجاهل عناصر فارغة أو نصية صغيرة جدا
      return n.nodeType === 1 && (n.offsetHeight > 10 || n.querySelector('*'));
    });

    if (!items.length) return;

    // أضف صنف البداية لجميع العناصر
    items.forEach(item => item.classList.add('reveal-item'));

    // نفذ الظهور من الأسفل إلى الأعلى عبر إضافة الصنف revealed بترتيب عكسي
    let delay = 0;
    const step = 120; // ملليثانية بين كل عنصر
    for (let i = items.length - 1; i >= 0; i--) {
      const el = items[i];
      setTimeout(() => {
        el.classList.add('revealed');
      }, delay);
      delay += step;
    }

    // بعد انتهاء الحركة، نمرّر الصفحة لأعلى بشكل انسيابي (اختياري)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, delay + 80);
  } catch (err) {
    console.error('revealFromBottom error:', err);
  }
}

// تشغيل عند تحميل الصفحة (إن كانت index أو أي صفحة تحتوي main)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', revealFromBottom);
} else {
  revealFromBottom();
}

// اجعل الدالة متاحة عالمياً للاستدعاء مباشرة من الـ HTML
window.goHome = goHome;
