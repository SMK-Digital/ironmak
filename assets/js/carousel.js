//Carousel
const thumbs = document.querySelectorAll('.thumb li');
const infoSlider = document.querySelectorAll('.info-slider');
const imgSlider = document.querySelectorAll('.img-slider');
const items = document.querySelectorAll('.item');

let index = 0;

thumbs.forEach((thumb, ind) => {
    thumb.addEventListener('click', () => {
        
        index = ind;

        // Transição dos sliders
        infoSlider.forEach(slide => {
            slide.style.transform = `translateY(${index * -100}%)`;
        });
        imgSlider.forEach(slide => {
            slide.style.transform = `translateX(${index * -100}%)`;
        });

        // Remoção e adição de 'active' com um pequeno atraso
        const activeItem = document.querySelector('.item.active');
        if (activeItem) activeItem.classList.remove('active');

        setTimeout(() => {
            items[index].classList.add('active');
        }, 100);


        const selectItem = document.querySelector('.select.active');
        if (selectItem) selectItem.classList.remove('active');

        setTimeout(() => {
            thumb.classList.add('active');
        }, 100);
    });
});

function autoPlayCarousel() {
    setInterval(() => {
        index = (index + 1) % thumbs.length; // Avança o índice e reseta ao final

        // Atualiza o slider e os elementos ativos
        infoSlider.forEach(slide => {
            slide.style.transform = `translateY(${index * -100}%)`;
        });
        imgSlider.forEach(slide => {
            slide.style.transform = `translateX(${index * -100}%)`;
        });

        // Atualiza a classe ativa dos itens
        const activeItem = document.querySelector('.item.active');
        if (activeItem) activeItem.classList.remove('active');
        items[index].classList.add('active');

        const selectItem = document.querySelector('.thumb .active');
        if (selectItem) selectItem.classList.remove('active');
        thumbs[index].classList.add('active');
    }, 3000); // Define o tempo em milissegundos (3000ms = 3s)
}

// Inicia o autoplay
autoPlayCarousel();