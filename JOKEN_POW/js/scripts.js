// Seleciona todos os elementos da página com a classe "option-image" (provavelmente imagens de pedra, papel e tesoura).
const optionImages = document.querySelectorAll(".option-image");

// Seleciona o elemento com a classe "container", que pode ser o contêiner onde o jogo acontece.
const container = document.querySelector(".container");

// Seleciona o elemento com a classe "result-text", onde o resultado do jogo será exibido (ex: "Você ganhou!").
const resultText = document.querySelector(".result-text");

// Seleciona a imagem onde será mostrado o resultado do computador.
const computerResult = document.querySelector('.computer-result img');

// Seleciona a imagem onde será mostrado o resultado do usuário.
const userResult = document.querySelector('.user-result img');

// Um array com os caminhos das imagens usadas pelo computador (pedra, papel e tesoura).
const computerImg = ['images/pedra.png', 'images/papel.png', 'images/tesoura.png'];

// Outro array com os caminhos das imagens, mas parece que esse será o usado especificamente para definir os resultados visuais.
const computerSrcImages = ['images/pedra.png', 'images/papel.png', 'images/tesoura.png'];

// Comentário explicando o mapeamento do jogo:
// (R)0 - Pedra, (P)1 - Papel, (S)2 - Tesoura
// Regras de vitória/perda:
// Pedra ganha de tesoura, mas perde para papel.
// Papel ganha de pedra, mas perde para tesoura.
// Tesoura ganha de papel, mas perde para pedra.

// Um objeto chamado 'winner' que mapeia combinações de resultados do usuário e do computador para determinar o vencedor.
const winner = {
    RR: "Empate",   // RR significa que ambos escolheram pedra
    RS: "Você ganhou!",  // RS significa que o usuário escolheu pedra e o computador tesoura (usuário ganha)
    RP: "O Computador Ganhou!", // RP significa que o usuário escolheu pedra e o computador papel (computador ganha)
    PP: "Empate",   // Ambos escolheram papel
    PR: "Você ganhou!",  // Usuário papel, computador pedra (usuário ganha)
    PS: "O Computador Ganhou!", // Usuário papel, computador tesoura (computador ganha)
    SS: "Empate",   // Ambos escolheram tesoura
    SP: "Você ganhou!",  // Usuário tesoura, computador papel (usuário ganha)
    SR: "O Computador Ganhou!!" // Usuário tesoura, computador pedra (computador ganha)
}

console.log(winner);  // Exibe o objeto 'winner' no console para verificar se foi criado corretamente.

// Função chamada quando o usuário clica em uma das imagens (pedra, papel ou tesoura).
function handleOptionClick(event) {
    // Captura a imagem que foi clicada.
    const clickedImage = event.currentTarget;

    // Obtém o índice da imagem clicada (0 para pedra, 1 para papel, 2 para tesoura).
    const userIndex = Array.from(optionImages).indexOf(clickedImage);

    // Adiciona uma classe "start" ao contêiner, talvez para aplicar uma animação.
    container.classList.add("start");

    // Exibe um texto de espera enquanto o resultado é processado.
    resultText.textContent = "...";

    // Inicialmente, ambas as imagens (usuário e computador) começam como 'pedra'.
    userResult.src = computerResult.src = 'images/pedra.png';

    // Usa um timeout para simular o "processo" do jogo, dando tempo antes de mostrar o resultado.
    setTimeout(() => {
        // Remove a classe "start" após 2 segundos.
        container.classList.remove("start");

        // Define a escolha do usuário com base na imagem clicada (pedra, papel ou tesoura).
        userResult.src = computerSrcImages[userIndex];

        // Gera um número aleatório para escolher a jogada do computador (0, 1 ou 2).
        const randomNumber = Math.floor(Math.random() * computerSrcImages.length);

        // Define a escolha do computador com base no número aleatório gerado.
        computerResult.src = computerSrcImages[randomNumber];

        // Mapeia os índices do usuário (0, 1, 2) para as letras correspondentes ('R', 'P', 'S').
        const userValue = ['R', 'P', 'S'][userIndex];

        // Mapeia os índices do computador (0, 1, 2) para as letras correspondentes ('R', 'P', 'S').
        const computerValue = ['R', 'P', 'S'][randomNumber];

        // Combina as escolhas do usuário e do computador em uma string (ex: "RP" ou "SR").
        const userComputerResult = userValue + computerValue;

        // Usa a combinação das escolhas para determinar o resultado final do objeto 'winner'.
        const resultFinal = winner[userComputerResult];

        // Exibe as escolhas no console para debug.
        console.log(userValue);
        console.log(computerValue);
        console.log(userComputerResult);
        console.log(resultFinal);

        // Define o texto de resultado na página (se foi empate ou quem venceu).
        resultText.textContent = userValue === computerValue ? "Empate" : resultFinal;

    }, 2000);  // Espera 2 segundos (2000ms) antes de mostrar o resultado.
}

console.log(container);  // Exibe o contêiner no console (para debug).

// Adiciona um evento de clique a cada uma das imagens de opções (pedra, papel, tesoura).
// Quando o usuário clica, a função handleOptionClick é executada.
optionImages.forEach(img => {
    img.addEventListener("click", handleOptionClick);
});