function toggleNavbar() {
    var navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.style.display = navbarLinks.style.display === 'flex' ? 'none' : 'flex';
    var nav_icon_code = document.getElementById('nav_icon_code');
    if(nav_icon_code.innerHTML == `☰`){
        nav_icon_code.innerHTML = `✕`;
    }
    else{
        nav_icon_code.innerHTML = `☰`;
    }
}