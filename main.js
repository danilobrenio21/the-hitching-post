document.addEventListener("DOMContentLoaded", function () {
    // Scroll Reveal Animation Logic
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Automatically apply reveal class to major content containers
    const revealElements = document.querySelectorAll('.content-box, .page-hero h2, .page-hero p');
    revealElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});
