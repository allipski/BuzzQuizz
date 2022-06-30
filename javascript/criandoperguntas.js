let pagina = document.querySelector(".paginteira")

function criarPerguntas(){
    pagina.innerHTML = `<h1>Crie suas perguntas</h1>`

    for (let i = 1; i <= values[2]; i++){
        pagina.innerHTML += 
                `<div class="secondform pergunta${i} minimizado">
                    <form>
                        <ion-icon name="open-outline" onClick="abrirBloco(this)"></ion-icon>
                        <h2>Pergunta ${i}</h2>
                        <input type="text" class="pergunta" placeholder="Texto da pergunta">
                        <input type="text" class="cor" placeholder="Cor de fundo da pergunta">
                        <h2>Resposta correta</h2>
                        <input type="text" class="resposta1" placeholder="Resposta correta">
                        <input type="text" class="url1" placeholder="URL da imagem">
                        <h2>Respostas incorretas</h2>
                        <input type="text" class="resposta2" placeholder="Resposta incorreta 1">
                        <input type="text" class="url2" placeholder="URL da imagem 1">
                        <div class="pular"></div>
                        <input type="text" class="resposta3" placeholder="Resposta incorreta 2">
                        <input type="text" class="url3" placeholder="URL da imagem 2">
                        <div class="pular"></div>
                        <input type="text" class="resposta4" placeholder="Resposta incorreta 3">
                        <input type="text" class="url4" placeholder="URL da imagem 3">
                    </form>
                </div>`
    }

    const pergunta = document.querySelector(".pergunta1")
    pergunta.classList.remove("minimizado")
    pergunta.classList.add("visivel")

    pagina.innerHTML += `<button onClick="proseguirCriarNiveis()">Prosseguir para criar níveis</button>`
}

function abrirBloco(elemento){
    elemento.parentNode.parentNode.classList.remove("minimizado")
    const blocoAnterior = document.querySelector(".visivel")
    blocoAnterior.classList.remove("visivel")
    blocoAnterior.classList.add("minimizado")
    elemento.parentNode.parentNode.classList.add("visivel")
}

function validarCor(){
    let valida = true
    let cor = document.querySelector(".visivel .cor")
    if (!cor.value){
        valida = false
    } else if (cor.value.startsWith("#") && cor.value.length == 7){
        let array = cor.value.split('')
        for (let i = 1;i < 7;i++){
            if ((array[i] == "A") || (array[i] == "a") || (array[i] == "B") || (array[i] == "b") || (array[i] == "C") || (array[i] == "c") && (array[i] == "D") || (array[i] == "d") || (array[i] == "E") || (array[i] == "e") || (array[i] == "F") || (array[i] == "f") || (array[i] == "1") || (array[i] == "2") || (array[i] == "3") || (array[i] == "4") || (array[i] == "5") || (array[i] == "6") || (array[i] == "7") || (array[i] == "8") || (array[i] == "9") || (array[i] == "0")){
            
            } else {
                valida = false
                i = 8
            }
        }
    }  else {
        valida = false
    }

    invalida(cor, valida, "A cor deve estar na forma hexadecimal", "erroCor");
    return valida
}

function validarPergunta () {
    const formulacao = document.querySelector(".visivel .pergunta")
    let valida = true
    
    if (formulacao.value.length < 20) {
        valida = false
    } 

    invalida(formulacao, valida, "A pergunta deve ter no mínimo 20 caracteres", "erroPergunta")
    return valida
}

function validarRespostas() {
    const resposta1 = document.querySelector(".visivel .resposta1")
    const resposta2 = document.querySelector(".visivel .resposta2")
    const resposta3 = document.querySelector(".visivel .resposta3")
    const resposta4 = document.querySelector(".visivel .resposta4")
    let valida1 = true
    let valida2 = true
    
    if (resposta1.value == "") {
        valida1 = false
    } 

    invalida(resposta1, valida1, "A resposta correta não pode ser vazia", "erroResposta1")
    

    if (resposta2.value == "" && resposta3.value == "" && resposta4.value == "") {
        valida2 = false
    } 

    invalida(resposta2, valida2, "É necessário ter pelo menos 1 resposta correta e 1 errada", "erroResposta2");
    invalida(resposta3, valida2, "É necessário ter pelo menos 1 resposta correta e 1 errada", "erroResposta3");
    invalida(resposta4, valida2, "É necessário ter pelo menos 1 resposta correta e 1 errada", "erroResposta4");

    if (valida1 && valida2){
        return(valida2)
    }
}

function validarUrls() {
    let valida = true
    for (let i = 1; i < 5; i++){
        const urls = document.querySelector(".visivel .url"+i)
        const resposta = document.querySelector(".visivel .resposta"+i)
        if (resposta.value != ""){
             valida = validateUrl(urls.value)
            invalida(urls, valida, "A URL tem que ser válida", "erroUrl"+i)
        }
    }

    return valida
}

function proseguirCriarNiveis() {
    validarCor()
    validarPergunta()   
    validarRespostas()
    validarUrls()
    let c = 1;
    for (let i = 1; i <= values[2]; i++){
        let bloco = document.querySelector(".visivel")
        bloco.classList.remove("visivel")
        bloco.classList.add("minimizado")
        bloco = document.querySelector(".pergunta"+i)
        bloco.classList.add("visivel")
        bloco.classList.remove("minimizado")
        if (validarCor() && validarPergunta() &&  validarRespostas() && validarUrls()) {
            c++
        }

        if (c == values[2]){
            criarNiveis()
        }
    }
}

function invalida(input, valida, mensagemErro, nomeErro){
    var erro = document.querySelector("."+nomeErro);
    if(erro) {
        erro.parentNode.removeChild(erro)
    }

    if (valida == false){
        input.classList.add("invalida")
        input.insertAdjacentHTML('afterend', '<p class='+nomeErro+'>'+mensagemErro+'</p>')
    } else {
        input.classList.remove("invalida")
    }
}