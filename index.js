document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const titleBox = document.querySelector(".title-box");
    const mainTitle = document.querySelector(".title-box h1");
    const smallText = document.querySelector(".title-box p");

    let ticking = false;

    function checkScroll() {
        let scrollY = window.scrollY;

        // Title box shrinking & moving up
        if (scrollY > 100) {
            titleBox.classList.add("small");
            mainTitle.style.opacity = "0"; // Hide big title
            smallText.style.opacity = "1"; // Show small text
        } else {
            titleBox.classList.remove("small");
            mainTitle.style.opacity = "1"; // Show big title again
            smallText.style.opacity = "0"; // Hide small text
        }

    

        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(checkScroll);
            ticking = true;
        }
    }

    window.addEventListener("scroll", onScroll);
});





