let listaAmigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    if(nome == '') {
        alert('Erro! Por favor, insira um nome.');
    } else {
        listaAmigos.push(nome);
        document.getElementById('amigo').value = '';
    }
}