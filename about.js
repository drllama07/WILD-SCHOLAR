document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const intro = document.querySelector(".intro");

    function checkScroll() {
        let scrollY = window.scrollY;

        // Hide intro text when scrolling down
        if (scrollY > 50) {
            intro.style.opacity = "0";
        } else {
            intro.style.opacity = "1";
        }

        sections.forEach(section => {
            let sectionTop = section.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.8) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
});




