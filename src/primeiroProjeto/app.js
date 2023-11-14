let botao = document.querySelector('button');
botao.addEventListener('click', somarUm);

let elementoH1 = document.querySelector('h1');
elementoH1.textContent = 'Contador';

function somarUm() {
    let elementoH3 = document.querySelector('h3');
    let valorAtual = parseInt(elementoH3.textContent)
    let novoValor = valorAtual + 1;
    elementoH3.textContent = novoValor;

    /*if (novoValor == 5) {
        elementoH3.style.color = 'red';
    } else {
        elementoH3.style.color = 'black';
    }*/

    let r = parseInt(Math.random() * 255);
    let g = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);

    elementoH3.style.color = `rgb(${r}, ${g}, ${b})`;
}