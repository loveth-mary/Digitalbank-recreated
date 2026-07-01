function toggleMenu() {
    const menu = document.querySelector(".menu");
    const hamburger = document.querySelector(".hamburger");

    menu.classList.toggle("active");

    hamburger.classList.toggle("fa-bars");

    hamburger.classList.toggle("fa-xmark");
}