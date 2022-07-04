let pagina = document.querySelector(".master");
let pagina2 = document.querySelector(".paginteira");
let perguntas = [];
let c;

function criarPerguntas(quizAntigo){
    window.scrollTo(0, 0);
    pagina2.innerHTML = ``;
    pagina2.innerHTML = `<div class="master"></div>`;
    document.querySelector(".master").innerHTML = `<h1>Crie suas perguntas</h1>`

    for (let i = 1; i <= values[2]; i++){
        document.querySelector(".master").innerHTML += 
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

    const pergunta = pagina.querySelector(".pergunta1")
    pergunta.classList.remove("minimizado")
    pergunta.classList.add("visivel")

    document.querySelector(".master").innerHTML += `<button onClick="proseguirCriarNiveis()">Prosseguir para criar níveis</button>`

    if (quizAntigo){
        let numPerguntas = document.querySelectorAll('.secondform').length
        let entradas = document.querySelectorAll('input')
        let c
        if (quizAntigo.questions.length == numPerguntas){
            c = quizAntigo.questions.length
        } else {
            if (quizAntigo.questions.length > numPerguntas){
                c = numPerguntas
            } else {
                c = quizAntigo.questions.length
            }
        }
        
        for (let k = 0; k < c; k++){
            for (let i = 0; i < 10; i++){
                if (i%10 == 0){
                    entradas[i+(k*10)].value = quizAntigo.questions[k].title
                } else if (i%10 == 1){
                    entradas[i+(k*10)].value = quizAntigo.questions[k].color
                } else {
                    for (let j = 0; j < 4; j++){
                        if (quizAntigo.questions[k].answers[j]){
                            entradas[i+(k*10)].value = quizAntigo.questions[k].answers[j].text
                            i++
                            entradas[i+(k*10)].value = quizAntigo.questions[k].answers[j].image
                            i++
                        } else if (j == 3){
                            i++
                        } else {
                            i+=2
                        }
                       
                    }
                }
            }
        }
    }
}

function abrirBloco(elemento){
    elemento.parentNode.parentNode.classList.remove("minimizado")
    const blocoAnterior = document.querySelector(".visivel")
    blocoAnterior.classList.remove("visivel")
    blocoAnterior.classList.add("minimizado")
    elemento.parentNode.parentNode.classList.add("visivel")
}

function validarCor(n){
    let valida = true
    let cor = document.querySelector(".visivel .cor")
    if (!cor.value){
        valida = false
    } else if (cor.value.startsWith("#") && cor.value.length == 7){
        let array = cor.value.split('')
        for (let i = 1;i < 7;i++){
            if ((array[i] == "A") || (array[i] == "a") || (array[i] == "B") || (array[i] == "b") || (array[i] == "C") || (array[i] == "c") || (array[i] == "D") || (array[i] == "d") || (array[i] == "E") || (array[i] == "e") || (array[i] == "F") || (array[i] == "f") || (array[i] == "1") || (array[i] == "2") || (array[i] == "3") || (array[i] == "4") || (array[i] == "5") || (array[i] == "6") || (array[i] == "7") || (array[i] == "8") || (array[i] == "9") || (array[i] == "0")){
            } else {
                valida = false
                i = 8
            }
        }
    }  else {
        valida = false
    }

    invalida(cor, valida, "A cor deve estar na forma hexadecimal", "erroCor"+n);
    return valida
}

function validarPergunta (n) {
    const formulacao = document.querySelector(".visivel .pergunta")
    let valida = true
    
    if (formulacao.value.length < 20) {
        valida = false
    } 

    invalida(formulacao, valida, "A pergunta deve ter no mínimo 20 caracteres", "erroPergunta"+n)
    return valida
}

function validarRespostas(n) {
    const resposta1 = document.querySelector(".visivel .resposta1")
    const resposta2 = document.querySelector(".visivel .resposta2")
    const resposta3 = document.querySelector(".visivel .resposta3")
    const resposta4 = document.querySelector(".visivel .resposta4")
    let valida1 = true
    let valida2 = true
    
    if (resposta1.value == "") {
        valida1 = false
    } else {
        c++
    }

    invalida(resposta1, valida1, "A resposta correta não pode ser vazia", "erroResposta1"+n)
    

    if (resposta2.value == "" && resposta3.value == "" && resposta4.value == "") {
        valida2 = false
    } else {
        c++
    }
    
    invalida(resposta2, valida2, "É necessário ter pelo menos 1 resposta correta e 1 errada", "erroResposta2"+n);
    invalida(resposta3, valida2, "É necessário ter pelo menos 1 resposta correta e 1 errada", "erroResposta3"+n);
    invalida(resposta4, valida2, "É necessário ter pelo menos 1 resposta correta e 1 errada", "erroResposta4"+n);

    if (valida1 && valida2){
        return valida2
    }
}

function validarUrls() {
    let valida = true
    let verificador = 0
    for (let i = 1; i < 5; i++){
        const urls = document.querySelector(".visivel .url"+i)
        const resposta = document.querySelector(".visivel .resposta"+i)
        if (resposta.value != ""){
            valida = validateUrl(urls.value)
            invalida(urls, valida, "A URL tem que ser válida", "erroUrl"+i)
            if (valida ){
                if (verificador < 2){
                    verificador++
                    c++
                }
            } else  {
                c--
            }
        }
    }

    return valida
}

function proseguirCriarNiveis() {
    c = 0
    const blocoAnterior = document.querySelector(".visivel");
    let bloco;
    for (let i = 1; i <= values[2]; i++){
        blocoAnterior.classList.remove("visivel")
        blocoAnterior.classList.add("minimizado")
        bloco = document.querySelector(".pergunta"+i)
        bloco.classList.add("visivel")  
        if (validarCor(i)){
            c++
        }
        if (validarPergunta(i)){
            c++
        }
        validarRespostas(i)
        validarUrls()
        bloco.classList.remove("visivel")
        blocoAnterior.classList.add("visivel")
        blocoAnterior.classList.remove("minimizado")

        if (c == values[2] * 6){ 
            
            // Separando os valores ja na forma que vao ser entregues a API
            for (let i = 1; i <= values[2]; i++){
                let respostas = []
                for (let j = 1; j <= 4 ; j++){
                    if (document.querySelector(".pergunta"+i+" .resposta"+j).value){
                        respostas[j-1] = {
                            text: document.querySelector(".pergunta"+i+" .resposta"+j).value,
                            image: document.querySelector(".pergunta"+i+" .url"+j).value
                        }

                        if (j == 1){
                            respostas[j-1].isCorrectAnswer = true
                        } else {
                            respostas[j-1].isCorrectAnswer = false
                        }
                    }
                }
                perguntas[i-1] = {
                    title:  document.querySelector(".pergunta"+i+" .pergunta").value,
                    color: document.querySelector(".pergunta"+i+" .cor").value,
                    answers: respostas
                } 
            }
           
            criarNiveis(quizAntigo)
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