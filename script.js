document.querySelectorAll('nav.home-nav a.scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const mobileNav = document.getElementById("mobile-nav");
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileLinks = document.querySelectorAll("#mobile-menu a");

hamburgerBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("open");

    const expanded = hamburgerBtn.getAttribute("aria-expanded") === "true";
    hamburgerBtn.setAttribute("aria-expanded", !expanded);
});

// Close menu when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        hamburgerBtn.setAttribute("aria-expanded", "false");
    });
});
