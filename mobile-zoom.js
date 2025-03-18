document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 768) {
        document.querySelector("meta[name=viewport]").setAttribute(
            "content",
            "width=device-width, initial-scale=0.75"
        );
    }
});