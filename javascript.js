const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 200 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const themeButton = document.getElementById("toggle-theme");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
