$(document).ready(function(){
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});

document.getElementById('search-icon').addEventListener('click', function () {
    const searchFormContainer = document.getElementById('search-form-container');
    searchFormContainer.style.display = searchFormContainer.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function (event) {
    const searchFormContainer = document.getElementById('search-form-container');
    const searchIcon = document.getElementById('search-icon');
    
    if (!searchFormContainer.contains(event.target) && event.target !== searchIcon) {
        searchFormContainer.style.display = 'none';
    }
});

// JavaScript for toggling the search form
document.getElementById('search-icon').addEventListener('click', function () {
    const searchFormContainer = document.getElementById('search-form-container');
    if (searchFormContainer.style.display === 'block') {
        searchFormContainer.style.display = 'none';
    } else {
        searchFormContainer.style.display = 'block';
    }
});

// Close the search form when clicking outside
document.addEventListener('click', function (event) {
    const searchFormContainer = document.getElementById('search-form-container');
    const searchIcon = document.getElementById('search-icon');

    if (searchIcon.contains(event.target)) {
        if (searchFormContainer.style.display === 'block') {
            searchFormContainer.style.display = 'none';
        } else {
            searchFormContainer.style.display = 'block';
        }
    } else if (!searchFormContainer.contains(event.target)) {
        searchFormContainer.style.display = 'none';
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.querySelector(".back-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollToTopButton.style.display = "block"; // Show the button when scrolled down 200px
        } else {
            scrollToTopButton.style.display = "none"; // Hide the button when at the top
        }
    });

    scrollToTopButton.addEventListener("click", () => {
        scrollToTop(800); // You can adjust the duration here (800 milliseconds)
    });
});

function scrollToTop(duration) {
    const start = window.scrollY;
    const startTime = performance.now();

    function scroll() {
        const now = performance.now();
        const elapsed = now - startTime;

        window.scrollTo(0, easeInOutCubic(elapsed, start, -start, duration));

        if (elapsed < duration) {
            requestAnimationFrame(scroll);
        }
    }

    requestAnimationFrame(scroll);
}

function easeInOutCubic(t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b;
    return (c / 2) * ((t -= 2) * t * t + 2) + b;
}
