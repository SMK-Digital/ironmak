// Inicializa o WOW.js
new WOW().init();

// Função para carregar componentes
function loadComponent(id, file) {
    let element = document.getElementById(id);
    if (!element) {
        console.error(`Elemento com ID ${id} não encontrado.`);
        return Promise.reject(new Error(`Elemento com ID ${id} não encontrado.`));
    }
    
    return fetch(file)  // Retorna a Promise
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar ${file}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            element.innerHTML = data; // Define o conteúdo carregado
        })
        .catch(error => {
            console.error(`Erro ao carregar componente ${file}:`, error);
        });
}


// Carregar os componentes na página
document.addEventListener("DOMContentLoaded", function() {
    Promise.all([
        loadComponent('header-placeholder', 'components/header.html'),
        // loadComponent('hero-placeholder', 'components/hero.html'),
        // loadComponent('sections-placeholder', 'components/sections.html'),
        loadComponent('footer-placeholder', 'components/footer.html')
    ]).then(() => {
        // Inicializa a navbar após carregar os componentes
        initializeNavbarToggle();
    });
});


//Navbar fixa
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 45) {
        $('.navbar').addClass('sticky-top');
    } else {
        $('.navbar').removeClass('sticky-top');
    }
});

// Função para inicializar a alternância da navbar
function initializeNavbarToggle() {
    const toggleBtn = document.querySelector('.toggle__btn');
    const toggleBtnIcon = document.querySelector('.toggle__btn i');
    const dropDownMenu = document.querySelector('.dropdown__menu');

    // Verifica se os elementos existem
    if (!toggleBtn || !toggleBtnIcon || !dropDownMenu) return;

    toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');

        toggleBtnIcon.classList.toggle('bi-x-lg', isOpen);
        toggleBtnIcon.classList.toggle('bi-bars', !isOpen);
    };

    // Fecha o menu ao clicar em qualquer link dentro dele
    dropDownMenu.querySelectorAll('a').forEach(link => {
        link.onclick = function () {
            dropDownMenu.classList.remove('open');
            toggleBtnIcon.classList.add('bi-bars');
            toggleBtnIcon.classList.remove('bi-x-lg');
        };
    });
}


// Abre submenus ao passar o mouse
// document.querySelectorAll('.dropdown-submenu').forEach(function (element) {
//     element.addEventListener('mouseover', function (e) {
//         let submenu = element.querySelector('.dropdown-menu');
//         submenu.classList.add('show');
//     });
    
//     element.addEventListener('mouseout', function (e) {
//         let submenu = element.querySelector('.dropdown-menu');
//         submenu.classList.remove('show');
//     });
// });


