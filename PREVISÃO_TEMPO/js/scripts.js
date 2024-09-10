// VARIÁVEIS => Um espaço da memória do computador que guardamos algo (um número, uma letra, um texto, uma imagem).
// FUNÇÃO => Um trecho de código que só é executado quando é chamado.

let chave = "cebcd482eda57fa9a6714c1c2ba91885";  // Chave da API para acessar os dados do OpenWeatherMap.

// Função que coloca os dados da API na tela.
function colocarNaTela(dados){
    console.log(dados);  // Exibe os dados recebidos da API no console (para fins de debug).

    // Altera o conteúdo do elemento com a classe 'cidade' para mostrar o nome da cidade.
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;

    // Altera o conteúdo do elemento com a classe 'temp' para mostrar a temperatura atual arredondada (em °C).
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";

    // Altera o conteúdo do elemento com a classe 'descricao' para mostrar a descrição do clima (ex: "céu limpo").
    document.querySelector(".descricao").innerHTML = dados.weather[0].description;

    // Altera o atributo 'src' do elemento com a classe 'icone' para mostrar o ícone correspondente ao clima atual.
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
}

// Função assíncrona para buscar os dados do clima de uma cidade.
async function buscarCidade(cidade){
    // Faz uma requisição à API do OpenWeatherMap usando o nome da cidade e a chave da API.
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
        cidade +  // Nome da cidade.
        "&appid=" +  // Parâmetro da chave da API.
        chave +  // Chave da API.
        "&lang=pt_br" +  // Define o idioma da resposta para português do Brasil.
        "&units=metric"  // Define as unidades de medida como métrica (Celsius).
    )
    .then(resposta => resposta.json());  // Converte a resposta da API para o formato JSON.

    colocarNaTela(dados);  // Chama a função para exibir os dados da cidade na tela.
}

// Função que é executada quando o botão é clicado.
function cliqueiNoBotao(){
    // Obtém o valor do input de cidade digitado pelo usuário.
    let cidade = document.querySelector(".input-cidade").value;

    // Chama a função para buscar os dados da cidade digitada pelo usuário.
    buscarCidade(cidade);
}
