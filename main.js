const menuBTN = document.getElementById("menu_btn");
const navLinks = document.getElementById("nav_links");
const menuBTNicon = menuBTN.querySelector("i");

menuBTN.addEventListener("click", (e) => {

    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBTNicon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");

});


navLinks.addEventListener("click", (e) => {

    navLinks.classList.remove("open");
    menuBTNicon.setAttribute("class", "ri-menu-line");
});

const navSearch = document.getElementById("nav_search");

navSearch.addEventListener("click", (e) =>{
    navSearch.classList.toggle("open");
});




const slides = document.querySelectorAll('.slider-slide');
const dots = document.querySelectorAll('slider-dot')
let currentindex = 0;

function showslide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i== index);
    });

    dots.forEach((dot,i)=> {

        dot.classList.toggle('active', i=== index);

    });

    const slidewrapper = document.querySelector('.slider-wrapper');
    slidewrapper.style.transform = 'translateX(-${index * 100}%)';
}

function nextslide(){

    currentindex = (currentindex +1) % slides.length;
    showslide(currentindex);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentindex = index;
        showslide(currentindex);
    });

});

showslide(currentindex);

const autoslideinterval = 5000;
setInterval (nextslide, autoslideinterval); 