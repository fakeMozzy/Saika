document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Дополнительно: Подсветка активного раздела при скролле
window.addEventListener('scroll', () => {
    let current = "";
    const sections = document.querySelectorAll("section");
    
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    document.querySelectorAll(".sidebar a").forEach((a) => {
        a.style.color = "#888";
        if (a.getAttribute("href").includes(current)) {
            a.style.color = "#fff";
        }
    });
});
