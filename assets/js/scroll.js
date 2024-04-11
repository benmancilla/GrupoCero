const navbar = document.getElementById('nav-all');
window.onscroll = () => {
    if(window.scrollY > 5) {
        navbar.classList.add('nav-shadow');
    } else {
        navbar.classList.remove('nav-shadow');
    }


    if (window.scrollY >= 650) {
        navbar.classList.remove('nav-shadow');
        navbar.classList.remove('nav-inactive-color');
        navbar.classList.add('nav-active-color');
    } else {
        navbar.classList.remove('nav-active-color');
        navbar.classList.add('nav-inactive-color');
    }
};

