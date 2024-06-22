document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".timeline-item");

    items.forEach(function (item) {
        item.addEventListener("click", function () {
            this.classList.toggle("active");
            const content = this.querySelector(".timeline-content");
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});