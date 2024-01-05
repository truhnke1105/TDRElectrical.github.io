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

window.addEventListener("scroll", function(){
	let pageY= window.pageYOffset;
	let hotel = document.querySelector(".middle_section");
	hotel.style.backgroundPosition = `-${pageY * .1}px 0px`;
})

const images = document.querySelectorAll('.image-container img');
const modal = document.querySelector('.modal');

images.forEach((image) => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        modal.innerHTML = `<span class="close">&times;</span><img src="${image.src}" alt="${image.alt}">`;
    });
});

modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        modal.style.display = 'none';
    }
});

modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('close')) {
        modal.style.display = 'none';
    }
});

var map = L.map('map').setView([39.733496, -94.808159], 11);
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 13
}).addTo(map);

L.marker([39.733496, -94.808159]).addTo(map)
   .bindPopup('TDR Electrical');
