/*
    OBJETIVO - quando clicarmos no botão temos que mostrar uma imagem de fundo correspondente

    Passo 1 - Pegar os elementos do botão no html;
    Passo 2 - Identificar o clique do usuário;
    Passo 3 - Desmarcas o botão selecionado anterior;
    Passo 4 - Marcar o botão clicado;
    Passo 5 - Esconder a imagem anterior;
    Passo 6 - Fazer aparecer a nova imagem correpondente ao botão selecionado.
*/

// Passo 1 - Pegar os elementos do botão no html
const botoesCarrossel = document.querySelectorAll('.botao')
const imagens = document.querySelectorAll('.imagem')

// Passo 2 - Identificar o clique do usuário
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        // Passo 3
        desativarBotaoSelecionado()

        // Passo 4
        selecionarBotaoCarrossel(botao)

        // Passo 5
        removerImagemAtiva()

        // Passo 6
        novaImagemAtiva(indice)
    })
})

function novaImagemAtiva(indice) {
    imagens[indice].classList.add('ativa')
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado')
}

function removerImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa")
    imagemAtiva.classList.remove('ativa')
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado')
    botaoSelecionado.classList.remove('selecionado')
}
