var imagem = document.querySelector('img')
var botao = document.querySelector('button')
var cabecalho = document.querySelector('h1')

if (localStorage.getItem('nome')) {
    var nomeguardado = localStorage.getItem('nome')
    cabecalho.innerHTML = 'Olá, ' + nomeguardado
}


function setUsuario() {
    var nome = prompt('Por favor, digite seu nome.')
    localStorage.setItem('nome', nome)
    cabecalho.innerHTML = 'Olá, ' + nome
}

imagem.onclick = function () {
    var src = imagem.getAttribute('src')
    if (src === 'imagens/js.png') {
        imagem.setAttribute('src', 'imagens/php.jpg')
    } else {
        imagem.setAttribute('src', 'imagens/js.png')
    }
}

botao.onclick = function(){ 
    setUsuario()
 }

