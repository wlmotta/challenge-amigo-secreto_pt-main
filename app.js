//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

document.addEventListener('DOMContentLoaded', () => {
    const amigoInput = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');

    function adicionarAmigo() {
        const nome = amigoInput.value.trim();

        if (nome === "") {
            alert('Por favor, insira um nome válido.');
            return;
        }

        const li = document.createElement('li');
        li.textContent = nome;
        listaAmigos.appendChild(li);
        amigoInput.value = '';
    }

    function sortearAmigo() {
        const amigos = Array.from(listaAmigos.getElementsByTagName('li')).map(li => li.textContent);

        if (amigos.length === 0) {
            alert('A sua lista de amigos está vazia.');
            return;
        }

        resultado.innerHTML = ''; // Limpar resultados anteriores

        const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        resultado.textContent = `O amigo secreto sorteado é: ${sorteado}`;

        listaAmigos.style.display = 'none'; // Esconder a lista de nomes após o sorteio
    }

    document.querySelector('.button-add').addEventListener('click', adicionarAmigo);
    document.querySelector('.button-draw').addEventListener('click', sortearAmigo);
});
