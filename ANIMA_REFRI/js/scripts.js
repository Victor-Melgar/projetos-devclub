// Seleciona todos os elementos que têm a classe 'item', retornando uma NodeList.
let list = document.querySelectorAll('.item');

// Seleciona o botão com o ID 'next' (provavelmente o botão "Próximo").
let next = document.getElementById('next');

// Seleciona o botão com o ID 'prev' (provavelmente o botão "Anterior").
let prev = document.getElementById('prev');

// Obtém o número total de itens na lista (o número de elementos com a classe 'item').
let count = list.length;  // Por exemplo, se houver 3 itens, 'count' será 3.

// Variável para controlar o índice do item ativo (o item atualmente visível ou destacado).
let active = 0;

// Exibe no console a lista de itens, o botão 'next', o botão 'prev' e a contagem de itens, para debug.
console.log(list);
console.log(next);
console.log(prev);
console.log(count);

// Código para o botão "Próximo"
// Quando o botão "next" é clicado:
next.onclick = () => {
    // Seleciona o item que atualmente tem a classe 'active' (o item visível/selecionado).
    let activeOld = document.querySelector('.active');
    
    // Remove a classe 'active' do item atual para que ele deixe de ser o item visível/selecionado.
    activeOld.classList.remove('active');

    // Atualiza o índice do item ativo:
    // Se o índice ativo for igual ou maior que o último índice (count - 1), ele volta para o primeiro item (índice 0).
    // Caso contrário, incrementa o índice ativo para o próximo item.
    active = active >= count - 1 ? 0 : active + 1;

    // Adiciona a classe 'active' ao novo item, tornando-o o item visível/selecionado.
    list[active].classList.add('active');
}

// Código para o botão "Anterior"
// Quando o botão "prev" é clicado:
prev.onclick = () => {
    // Seleciona o item que atualmente tem a classe 'active' (o item visível/selecionado).
    let activeOld = document.querySelector('.active');

    // Remove a classe 'active' do item atual.
    activeOld.classList.remove('active');

    // Atualiza o índice do item ativo:
    // Se o índice ativo for menor ou igual a 0 (primeiro item), ele vai para o último item (count - 1).
    // Caso contrário, decrementa o índice ativo para o item anterior.
    active = active <= 0 ? count - 1 : active - 1;

    // Adiciona a classe 'active' ao novo item, tornando-o o item visível/selecionado.
    list[active].classList.add('active');
}
