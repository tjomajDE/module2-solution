// script.js
document.getElementById("menu-toggle").addEventListener("click", function() {
    const nav = document.getElementById("collapsable-nav");
    nav.classList.toggle("navbar-collapse");
    const expanded = this.getAttribute("aria-expanded") === "true" || false;
    this.setAttribute("aria-expanded", !expanded);
});
