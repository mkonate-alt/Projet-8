const openMenu = () => {
    const menu = document.querySelector(".header-menu");
    const isActive = menu.classList.toggle("active");
    const icon = document.querySelector(".header-menu-mobile .material-icons");

    if (icon) {
        icon.innerHTML = isActive ? "close" : "menu";
    }

    console.log(isActive ? "Menu ouvert" : "Menu fermé");
};