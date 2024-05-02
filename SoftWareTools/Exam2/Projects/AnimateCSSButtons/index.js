document.addEventListener('DOMContentLoaded', function() {
    const animateButton = document.querySelector(".js-button");
    animateButton.addEventListener("click", function() {
        document.querySelector(".js-grid").classList.toggle("grid--full");
    });
});
