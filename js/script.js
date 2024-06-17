document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById("nav-brand__iconsId");
    const navMenuId = document.getElementById("nav-menuId");

    menuToggle.addEventListener("click", () => {
        navMenuId.classList.toggle("active");
    });
});