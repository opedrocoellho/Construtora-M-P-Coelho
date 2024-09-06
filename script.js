let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showItems() {
    const container = document.querySelector('.carousel-container');
    container.style.transform = `translateX(-${currentIndex * 25}%)`;
}

function moveCarousel(step) {
    currentIndex = (currentIndex + step + items.length) % items.length;
    showItems();
}

window.onload = showItems;
