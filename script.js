document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section, header');

    // Плавный переход к соответствующему разделу
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Функция авто-определения положения экрана и подсветки пунктов в боковой панели
    function changeActiveLink() {
        let index = sections.length;

        while(--index && window.scrollY + 150 < sections[index].offsetTop) {}
        
        navLinks.forEach((link) => link.classList.remove('active'));
        
        if (index >= 0) {
            const activeId = sections[index].getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href="#${activeId}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    }

    changeActiveLink();
    window.addEventListener('scroll', changeActiveLink);
});
