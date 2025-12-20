// Плавная прокрутка при клике на меню
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Уведомление при скачивании APK
const downloadBtn = document.querySelector('.btn-download');
if (downloadBtn) {
    downloadBtn.addEventListener('click', function() {
        alert('Скачивание началось! Проверьте папку "Загрузки"');
    });
}

// Анимация появления карточек
const cards = document.querySelectorAll('.feature-card, .step');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s';
    observer.observe(card);
});

console.log('Gold Options сайт загружен!');
