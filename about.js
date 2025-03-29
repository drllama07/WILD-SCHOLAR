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

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    sections.forEach((section) => {
        const slides = section.querySelectorAll(".slide");
        let currentIndex = 0;

        const leftArrow = section.querySelector(".left-arrow");
        const rightArrow = section.querySelector(".right-arrow");

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle("active", i === index);
            });
        }

        leftArrow.addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        });

        rightArrow.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        });

        // Initialize first slide
        showSlide(currentIndex);
    });
});



