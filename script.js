// ⚙️ Variaveis de Elementos
const header = document.getElementById('header');
const btnVoltarTopo = document.getElementById('voltarTopo');

// 📌 Menu Estático (Melhorado: Mais leve e eficiente)
let ultimaPosicaoScroll = 0;

window.addEventListener('scroll', () => {
    const posicaoAtualScroll = window.scrollY;

    // Lógica para esconder/mostrar o Header
    if (posicaoAtualScroll > 150) { // Esconde se rolar para baixo após 150px
        if (posicaoAtualScroll > ultimaPosicaoScroll) {
            header.classList.add('hide');
        } else {
            header.classList.remove('hide');
        }
    } else {
        header.classList.remove('hide'); // Mostra no topo
    }

    // Lógica para o botão "Voltar ao Topo"
    if (posicaoAtualScroll > 300) {
        btnVoltarTopo.style.display = 'block';
    } else {
        btnVoltarTopo.style.display = 'none';
    }

    ultimaPosicaoScroll = posicaoAtualScroll;
});

// Botão "Voltar ao Topo" (Mantido)
btnVoltarTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 📌 Menu Hamburger para Mobile
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.getElementById('main-navigation');

menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('open');

    // Mudar o ícone do botão
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times'); // Substitui o ícone por 'X' ao abrir
});

// Fechar menu ao clicar em um link (apenas no mobile)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768 && navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
            // Resetar o ícone
            const icon = menuToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });
});


// 📌 Carrossel de Referências (Lógica aprimorada)
document.addEventListener('DOMContentLoaded', function() {
    const carrossel = document.querySelector('.carrossel');
    const btnAnterior = document.querySelector('.carrossel-btn.anterior');
    const btnProximo = document.querySelector('.carrossel-btn.proximo');
    const itens = document.querySelectorAll('.carrossel-item');
    const totalItens = itens.length;
    let index = 0;
    let intervaloCarrossel;

    if (totalItens === 0 || !carrossel) return; // Garante que o carrossel exista

    function mostrarItem(indice) {
        // Garante que o índice esteja dentro dos limites
        if (indice < 0) {
            index = totalItens - 1;
        } else if (indice >= totalItens) {
            index = 0;
        } else {
            index = indice;
        }
        
        // Calcula o deslocamento
        const offset = -index * 100;
        carrossel.style.transform = `translateX(${offset}%)`;
    }

    function proximoSlide() {
        mostrarItem(index + 1);
    }
    
    function slideAnterior() {
        mostrarItem(index - 1);
    }

    btnAnterior.addEventListener('click', () => {
        slideAnterior();
        resetarIntervalo();
    });

    btnProximo.addEventListener('click', () => {
        proximoSlide();
        resetarIntervalo();
    });

    // Início do intervalo automático
    function iniciarIntervalo() {
        intervaloCarrossel = setInterval(proximoSlide, 5000); // Muda a cada 5 segundos
    }

    // Reseta o intervalo ao interagir manualmente
    function resetarIntervalo() {
        clearInterval(intervaloCarrossel);
        iniciarIntervalo();
    }

    // Inicializa o carrossel
    mostrarItem(index);
    iniciarIntervalo();
});
