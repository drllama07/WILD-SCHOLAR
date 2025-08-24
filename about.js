
// Only run if Safari (no scroll-animations API)
if (!CSS.supports("animation-timeline: scroll()")) {
const specials = document.querySelectorAll('.grid-item.special');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('fade-active');
    } else {
        entry.target.classList.remove('fade-active');
    }
    });
}, { threshold: 0.5 }); // 50% visible

specials.forEach(el => observer.observe(el));
}





