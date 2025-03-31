document.addEventListener("DOMContentLoaded", function () {
    const intro = document.querySelector(".intro");

    function checkScroll() {
        let scrollY = window.scrollY;

        // Hide intro text when scrolling down
        if (scrollY > 50) {
            intro.style.opacity = "0";
        } else {
            intro.style.opacity = "1";
        }
    }

    window.addEventListener("scroll", checkScroll);
});




