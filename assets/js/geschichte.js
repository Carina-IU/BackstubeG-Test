document.addEventListener("DOMContentLoaded", function () {
    const timelineContainer = document.querySelector(".timeline-container");
    const timelineItems = document.querySelector(".timeline-items");
    const items = document.querySelectorAll(".timeline-item");
    const leftButton = document.getElementById("leftButton");
    const rightButton = document.getElementById("rightButton");

    let currentIndex = 0;
    const itemWidth = items[0].offsetWidth + 20; // Breite + margin-right
    const visibleItems = Math.floor(timelineContainer.offsetWidth / itemWidth); // Anzahl der sichtbaren Elemente

    // Berechnung der maximalen Verschiebung
    const maxIndex = items.length - visibleItems;

    // Funktion zum Bewegen der Timeline nach links
    function scrollLeft() {
        if (currentIndex > 0) {
            currentIndex--;
            timelineItems.style.transition = `transform 0.5s ease`; // Übergangseffekt
            timelineItems.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }
    }

    // Funktion zum Bewegen der Timeline nach rechts
    function scrollRight() {
        if (currentIndex < maxIndex) {
            currentIndex++;
            timelineItems.style.transition = `transform 0.5s ease`; // Übergangseffekt
            timelineItems.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }
    }

    // Event Listener für Scroll-Buttons
    leftButton.addEventListener("click", function () {
        scrollLeft();
        
    });

    rightButton.addEventListener("click", function () {
        scrollRight();
    });
});

