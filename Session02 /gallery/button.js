document.addEventListener("DOMContentLoaded", function () {
    var topButton = document.getElementById("topButton");

    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    });

    topButton.addEventListener("click", function () {
        document.body.scrollTop = 0; // Safari
        document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
    });
});