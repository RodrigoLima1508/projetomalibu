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
    // A variável 'carrossel' seleciona o elemento que deve ser movido (o "track")
    const carrossel = document.querySelector('.carrossel');
    const btnAnterior = document.querySelector('.carrossel-btn.anterior');
    const btnProximo = document.querySelector('.carrossel-btn.proximo');
    const itens = document.querySelectorAll('.carrossel-item');
    let index = 0;

    function mostrarItem(indice) {
        // Calcula o deslocamento em porcentagem (ex: 0%, -100%, -200%, etc.)
        const offset = -indice * 100;
        // Aplica o deslocamento horizontal no .carrossel
        carrossel.style.transform = `translateX(${offset}%)`;
    }

    btnAnterior.addEventListener('click', () => {
        // Volta para o último item se estiver no primeiro
        index = (index > 0) ? index - 1 : itens.length - 1;
        mostrarItem(index);
    });

    btnProximo.addEventListener('click', () => {
        // Volta para o primeiro item se estiver no último
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
