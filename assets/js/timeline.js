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

    let currentIndex = 0; // Assuming you start at the first picture
    const totalPictures = 8; // Replace with the actual number of pictures
    const pictureWidth = 340; // Replace with the actual width of each picture in pixels

    function scrollRight() {
        currentIndex++;
            if (currentIndex >= totalPictures) {
        currentIndex = totalPictures - 1; // Prevent scrolling beyond the last picture
            }
    // Assuming you have a container to scroll
    const container = document.getElementById('container');
    container.scrollLeft = currentIndex * pictureWidth;

    // If we reach the next picture, stop further scrolling
    if (currentIndex === targetIndex) {
        rightButton.removeEventListener("click", scrollRight);
            }
        }

    // Add the event listener
    rightButton.addEventListener("click", scrollRight);

    // Example: If you want to stop at the next picture
    const targetIndex = currentIndex + 1;












