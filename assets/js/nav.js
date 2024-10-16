// Função para alternar o menu responsivo
const navToggle = document.querySelector('.nav-toggle'); // Botão de hambúrguer
const navMenu = document.querySelector('#nav-menu'); // Menu de navegação

navToggle.addEventListener('click', () => {
  // Alterna a classe 'active' no menu ao clicar no ícone de hambúrguer
  navMenu.classList.toggle('active');
});

// Função de scroll suave para links de navegação
const menuLinks = document.querySelectorAll('#nav-menu a[href^="#"]'); // Links com âncora

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Previne o comportamento padrão de "pular" direto
    const targetId = link.getAttribute('href'); // Obtém o ID do destino
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth' // Scroll suave
    });

    // Fecha o menu responsivo ao clicar em um link (em dispositivos móveis)
    navMenu.classList.remove('active');
  });
});

// Função para mudar o estilo do menu ao rolar a página
const header = document.querySelector('.header'); // Cabeçalho ou barra de navegação
const stickyClass = 'sticky'; // Classe que será adicionada ao scroll

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    // Adiciona a classe 'sticky' ao cabeçalho quando rolar 50px para baixo
    header.classList.add(stickyClass);
  } else {
    // Remove a classe 'sticky' quando voltar ao topo
    header.classList.remove(stickyClass);
  }
});


