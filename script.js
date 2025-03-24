// Menu Estático
let ultimaPosicaoScroll = window.scrollY;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const posicaoAtualScroll = window.scrollY;

    if (posicaoAtualScroll > ultimaPosicaoScroll) {
        // Rolando para baixo
        header.classList.add('hide');
        header.classList.remove('show');
    } else {
        // Rolando para cima
        header.classList.remove('hide');
        header.classList.add('show');
    }

    ultimaPosicaoScroll = posicaoAtualScroll;
});

// Botão "Voltar ao Topo"
const btnVoltarTopo = document.getElementById('voltarTopo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnVoltarTopo.style.display = 'block';
    } else {
        btnVoltarTopo.style.display = 'none';
    }
});

btnVoltarTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Carrossel de Referências
document.addEventListener('DOMContentLoaded', function() {
    const carrossel = document.querySelector('.carrossel');
    const btnAnterior = document.querySelector('.carrossel-btn.anterior');
    const btnProximo = document.querySelector('.carrossel-btn.proximo');
    const itens = document.querySelectorAll('.carrossel-item');
    let index = 0;

    function mostrarItem(indice) {
        const offset = -indice * 100;
        carrossel.style.transform = `translateX(${offset}%)`;
    }

    btnAnterior.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : itens.length - 1;
        mostrarItem(index);
    });

    btnProximo.addEventListener('click', () => {
        index = (index < itens.length - 1) ? index + 1 : 0;
        mostrarItem(index);
    });

    // Intervalo automático para o carrossel
    setInterval(() => {
        index = (index < itens.length - 1) ? index + 1 : 0;
        mostrarItem(index);
    }, 5000); // Muda a cada 5 segundos

    // Inicializa o carrossel
    mostrarItem(index);
});