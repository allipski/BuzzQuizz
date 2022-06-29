let pagina = document.querySelector(".paginteira")

function criarPerguntas(){
    pagina.innerHTML = `<h1>Crie suas perguntas</h1>`

    for (let i = 1; i < 2; i++){
        pagina.innerHTML += 
                `<div class="firstform">
                    <form>
                        <ion-icon name="open-outline" onClick="abrirPergunta()"></ion-icon>
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
}

criarPerguntas();

function abrirPergunta(){
    
}