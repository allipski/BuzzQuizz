let pagina = document.querySelector(".paginteira")

function criarPerguntas(){
    pagina.innerHTML = `<h1>Crie suas perguntas</h1>`

    for (let i = 1; i < 4; i++){
        pagina.innerHTML += 
                `<div class="secondform minimizado">
                    <form>
                        <ion-icon name="open-outline" onClick="abrirPergunta(this)"></ion-icon>
                        <h2>Pergunta ${i}</h2>
                        <input type="text" placeholder="Texto da pergunta">
                        <input type="text" placeholder="Cor de fundo da pergunta">
                        <h2>Resposta correta</h2>
                        <input type="text" placeholder="Resposta correta">
                        <input type="text" placeholder="URL da imagem">
                        <h2>Respostas incorretas</h2>
                        <input type="text" placeholder="Resposta incorreta 1">
                        <input type="text" placeholder="URL da imagem 1">
                        <div class="pular"></div>
                        <input type="text" placeholder="Resposta incorreta 2">
                        <input type="text" placeholder="URL da imagem 2">
                        <div class="pular"></div>
                        <input type="text" placeholder="Resposta incorreta 3">
                        <input type="text" placeholder="URL da imagem 3">
                    </form>
                </div>`
    }

    const pergunta = document.querySelector(".secondform")
    pergunta.classList.remove("minimizado")
    pergunta.classList.add("visivel")
}

criarPerguntas();

function abrirPergunta(elemento){
    elemento.parentNode.parentNode.classList.remove("minimizado")
    const perguntaAnterior = document.querySelector(".visivel")
    perguntaAnterior.classList.remove("visivel")
    perguntaAnterior.classList.add("minimizado")
    elemento.parentNode.parentNode.classList.add("visivel")
}