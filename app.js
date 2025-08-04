let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    if(nome == '') {
        alert('Erro! Por favor, insira um nome.');
    } else {
        amigos.push(nome);
        atualizarLista();
        document.getElementById('amigo').value = '';
    }
}

function atualizarLista(){
    let campoLista = document.getElementById('listaAmigos');
    campoLista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++){
        let elementoli = document.createElement('li'); //Cria o elemento
        elementoli.textContent = amigos[i]; //Adiciona conteudo ao elemento
        campoLista.appendChild(elementoli); //Adiciona o elemento com o conteudo no html
    }
}

function sortearAmigo(){
    if(amigos == ''){
        alert('Erro! Adicione nomes a lista para sortear.');
    } else{
       let sorteado = Math.floor(Math.random() * amigos.length);
       let campoSorteado = document.getElementById('resultado');
       campoSorteado.innerHTML = `O amigo secreto sorteado foi: ${amigos[sorteado]}`;
    }
}