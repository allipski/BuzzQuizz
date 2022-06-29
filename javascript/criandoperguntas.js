let pagina = document.querySelector(".paginteira")

function criarPerguntas(){
    pagina.innerHTML = `<h1>Crie suas perguntas</h1>`

    for (let i = 1; i < 4; i++){
        pagina.innerHTML += 
                `<div class="secondform minimizado">
                    <form>
                        <ion-icon name="open-outline" onClick="abrirPergunta(this)"></ion-icon>
                        <h2>Pergunta ${i}</h2>
                        <input type="text" class="pergunta" placeholder="Texto da pergunta">
                        <input type="text" class="cor" placeholder="Cor de fundo da pergunta">
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

    pagina.innerHTML += `<button onClick="proseguirCriarNiveis()">Prosseguir para criar níveis</button>`
}

criarPerguntas();

function abrirPergunta(elemento){
    elemento.parentNode.parentNode.classList.remove("minimizado")
    const perguntaAnterior = document.querySelector(".visivel")
    perguntaAnterior.classList.remove("visivel")
    perguntaAnterior.classList.add("minimizado")
    elemento.parentNode.parentNode.classList.add("visivel")
}

function validarCor(){
    let valida = true
    let cor = document.querySelector(".visivel .cor")
    if (cor.value.startsWith("#") && cor.value.length == 7){
        let array = cor.value.split('')
        for (let i = 1;i < 7;i++){
            if ((array[i] == "A") || (array[i] == "a") || (array[i] == "B") || (array[i] == "b") || (array[i] == "C") || (array[i] == "c") && (array[i] == "D") || (array[i] == "d") || (array[i] == "E") || (array[i] == "e") || (array[i] == "F") || (array[i] == "f") || (array[i] == "1") || (array[i] == "2") || (array[i] == "3") || (array[i] == "4") || (array[i] == "5") || (array[i] == "6") || (array[i] == "7") || (array[i] == "8") || (array[i] == "9")){
                console.log("aqui")
            } else {
                valida = false
                i = 8
            }
        }
    }  else {
        valida = false
    }

    invalida(cor, valida, "A cor deve estar na forma hexadecimal", "erroCor");
}

function validarPergunta () {
    const formulacao = document.querySelector(".visivel .pergunta")
    let valida = true
    
    if (formulacao.value.length < 20) {
        valida = false
    } 

    invalida(formulacao, valida, "A pergunta deve ter no mínimo 20 caracteres", "erroPergunta")
}

function invalida(input, valida, mensagemErro, nomeErro){
    var erro = document.querySelector("."+nomeErro);
    if(erro) {
        erro.parentNode.removeChild(erro);
    }

    if (valida == false){
        console.log("aqui")
        input.classList.add("invalida")
        input.insertAdjacentHTML('afterend', '<p class='+nomeErro+'>'+mensagemErro+'</p>')
    } else {
        input.classList.remove("invalida")
    }
}

function validarRespostas () {
    const resposta = document.querySelector(".resposta")
    let valida = true
    
    if (resposta) {
        valida = false
    } 

    var erroResposta = document.querySelector(".erroResposta");
    if(erroResposta) {
        erroResposta.parentNode.removeChild(erroResposta);
    }

    if (valida == false){
        resposta.classList.add("invalida")
        resposta.insertAdjacentHTML('afterend', '<p class="erroResposta">A pergunta deve ter no mínimo 20 caracteres</p>')
    } else {
        resposta.classList.remove("invalida")
    }
}

function proseguirCriarNiveis() {
    validarCor()
    validarPergunta()   
    validarRespostas()
}