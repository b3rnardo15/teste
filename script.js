let card = document.getElementById("card");
document.querySelector("#yes").addEventListener("click", function () {
    let question = document.getElementById("question");
    let message = document.getElementById("answer");
    let gif = document.getElementById("gif");

    // Adiciona música romântica
    window.open('https://youtu.be/nAGDqGfb75s?si=F3ZDliYilHHvEmaX', '_blank');
    
    // Remove alterações no card
    card.style.backgroundImage = "";
    card.style.backgroundSize = "";
    card.style.backgroundPosition = "";
    card.style.backgroundRepeat = "";
    card.style.position = "";
    card.style.left = "";
    card.style.top = "";
    card.style.width = "";
    card.style.height = "";
    card.style.zIndex = "";

    // Mostra o gif na resposta
    gif.src = "surpressaaaeuvoltei.gif";
    gif.style.display = "block";

    question.style.display = "none";
    message.style.display = "flex";
    
    // Adiciona efeito de confete/corações
    createHearts();
});

// Movimento aleatório do botão 'não'
document.querySelector("#no").addEventListener("mouseover", function () {
    let width = window.innerWidth - 50;
    let height = window.innerHeight - 50;

    this.style.position = "absolute";
    this.style.top = Math.random() * width + "px";
    this.style.left = Math.random() * height + "px";
});



// Função para criar corações flutuantes
function createHearts() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💖';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
            heart.style.opacity = Math.random();
            heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1000';
            heart.style.animation = 'fall 3s linear forwards';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 200);
    }
}

// CSS para animação dos corações (adicionado via JavaScript)
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        0% {
            transform: translateY(-100vh) rotate(0deg);
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

