function documentReadyCallback() {
    document.querySelector(".navbar-burger").addEventListener("click", () => {
        document.querySelector(".navbar-burger").classList.toggle("is-active");
        document.querySelector(".navbar-menu").classList.toggle("is-active");
    });
}