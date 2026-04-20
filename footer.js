const footerTitles = document.querySelectorAll(".Cbn-footer-col h4");

footerTitles.forEach((title) => {
    title.addEventListener("click", () => {
        const parent = title.parentElement;
        parent.classList.toggle("Cbn-footer-active");
    });
});