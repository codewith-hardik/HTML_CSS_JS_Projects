// script.js
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    const closeAllBtn = document.getElementById('close-all');
    const openAllBtn = document.getElementById('open-all');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    closeAllBtn.addEventListener('click', () => {
        faqItems.forEach(item =>{ 

            item.classList.remove('active');

        });
    });

    openAllBtn.addEventListener('click', () => {
        faqItems.forEach(item =>{ 

            item.classList.add('active');

        });
    });
});
