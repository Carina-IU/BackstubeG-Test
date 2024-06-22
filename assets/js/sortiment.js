document.addEventListener("DOMContentLoaded", function () {
    var toggleButtons = document.querySelectorAll(".toggle-list");

    toggleButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var list = this.nextElementSibling;

            if (list.classList.contains("active")) {
                list.classList.remove("active");
                list.style.maxHeight = "0";
            } else {
                list.classList.add("active");
                list.style.maxHeight = list.scrollHeight + "px";
            }
        });
    });
});
