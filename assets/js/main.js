// Inicializa o WOW.js
new WOW().init();

// Função para carregar componentes
function loadComponent(id, file) {
    let element = document.getElementById(id);
    fetch(file)
        .then(response => response.text())
        .then(data => element.innerHTML = data);
}

// Carregar os componentes na página
document.addEventListener("DOMContentLoaded", function() {
    loadComponent('header-placeholder', 'components/header.html');
    loadComponent('hero-placeholder', 'components/hero.html');
    loadComponent('sections-placeholder', 'components/sections.html');
    loadComponent('footer-placeholder', 'components/footer.html');
});


// Navbar fixa
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 45) {
        $('.navbar').addClass('sticky-top shadow-sm');
    } else {
        $('.navbar').removeClass('sticky-top shadow-sm');
    }
});

// Abre submenus ao passar o mouse
document.querySelectorAll('.dropdown-submenu').forEach(function (element) {
    element.addEventListener('mouseover', function (e) {
        let submenu = element.querySelector('.dropdown-menu');
        submenu.classList.add('show');
    });
    
    element.addEventListener('mouseout', function (e) {
        let submenu = element.querySelector('.dropdown-menu');
        submenu.classList.remove('show');
    });
});