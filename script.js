$(document).ready(function() {
    let currentIndex = 0;
    const items = $('.carousel-item');
    const itemAmt = items.length;

    function cycleItems() {
        const item = $('.carousel-item').eq(currentIndex);
        items.fadeOut();
        item.fadeIn();
    }

    const autoSlide = setInterval(function() {
        currentIndex += 1;
        if (currentIndex > itemAmt - 1) {
            currentIndex = 0;
        }
        cycleItems();
    }, 5000);

    cycleItems();
});
