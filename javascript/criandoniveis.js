let niveis = []

function criarNiveis(quizAntigo){
    window.scrollTo(0, 0);
    pagina2.innerHTML = ``;
    pagina2.innerHTML = `<div class="master"></div>`;
    document.querySelector(".master").innerHTML = `<h1>Agora, decida os níveis</h1>`

    for (let i = 1; i <= values[3]; i++){
        document.querySelector(".master").innerHTML += 
                `<div class="secondform nivel${i} minimizado">
                    <form>
                        <h2>Nível ${i}</h2>
                        <ion-icon name="open-outline" onClick="abrirBloco(this)"></ion-icon>
                        <input type="text" class="Titulo" placeholder="Título do nível">
                        <input type="text" class="porcentagem" placeholder="% de acerto mínima">
                        <input type="text" class="url" placeholder="URL da imagem do nível">
                        <input type="text" class="descricao" placeholder="Descrição do nível">
                    </form>
                </div>`
    }

    const nivel = document.querySelector(".secondform")
    nivel.classList.remove("minimizado")
    nivel.classList.add("visivel")

    document.querySelector(".master").innerHTML += `<button onClick="criarQuizz()">Finalizar Quizz</button>`

    // Caso a pessoa tiver selecionado pra editar algum quiz ela entra nesse if e coloca os valores dentro das inputs
    if (quizAntigo){
        let numNiveis = document.querySelectorAll('.secondform').length
        let entradas = document.querySelectorAll('input')
        let c
        if (quizAntigo.questions.length == numNiveis){
            c = quizAntigo.questions.length
        } else {
            if (quizAntigo.questions.length > numNiveis){
                c = numNiveis
            } else {
                c = quizAntigo.questions.length
            }
        }
        
        for (let k = 0; k < c; k++){
            entradas[0+(k*4)].value = quizAntigo.levels[k].title
            entradas[1+(k*4)].value = quizAntigo.levels[k].minValue
            entradas[2+(k*4)].value = quizAntigo.levels[k].image
            entradas[3+(k*4)].value = quizAntigo.levels[k].text
        }
    }
}

function validarTitulo(n) {
    const titulo = document.querySelector(".visivel .Titulo")
    let valida = true
    
    if (titulo.value.length < 10) {
        valida = false
    } 
    
    invalida(titulo, valida, "O título deve ter no mínimo 10 caracteres", "erroTitulo"+n)
    return valida
}

function validarPorcentagem() {
    let valida
    let zero = false
    let porcentagem = document.querySelector(".visivel .porcentagem")
    for (let i = 1; i <= values[3]; i++){
        valida = true
        porcentagem = document.querySelector(".nivel"+i+" .porcentagem")
        if (isNaN(porcentagem.value) == false && porcentagem.value != "" && porcentagem.value >= 0 && porcentagem.value <= 100){
            if (porcentagem.value == 0){
                zero = true
            } else if (!zero && i == 3){
                valida = false
                porcentagem = document.querySelector(".visivel .porcentagem")
                invalida(porcentagem, valida, "Pelo menos uma das porcentagens da questão tem que ser 0", "erroPorcentagem"+i)
            } else {
                invalida(porcentagem, valida, "A porcentagem deve ser um número entre 0 e 100", "erroPorcentagem"+i)
            }
        } else {
            valida = false
            invalida(porcentagem, valida, "A porcentagem deve ser um número entre 0 e 100", "erroPorcentagem"+i)
        }
    }

    return valida
}

function validarUrl(n) {
    let valida = true
    const url = document.querySelector(".visivel .url")
    valida = validateUrl(url.value)
    invalida(url, valida, "A URL tem que ser válida", "erroUrl"+n)
    return valida
}

function validarDescricao(n) {
    const descricao = document.querySelector(".visivel .descricao")
    let valida = true
    
    if (descricao.value.length < 30) {
        valida = false
    } 

    invalida(descricao, valida, "A descrição deve ter no mínimo 30 caracteres", "erroDescricao"+n)
    return valida
}

function criarQuizz(){
    let c = 0
    const blocoAnterior = document.querySelector(".visivel");
    let bloco;
    
    for (let i = 1; i <= values[3]; i++){
        blocoAnterior.classList.remove("visivel")
        blocoAnterior.classList.add("minimizado")
        bloco = document.querySelector(".nivel"+i)
        bloco.classList.add("visivel")
        if (validarTitulo(i)){
            c++
        }
        if (validarPorcentagem()){
            c++
        }
        if (validarDescricao(i)){
            c++
        }
        if (validarUrl(i)){
            c++
        }
        bloco.classList.remove("visivel")
        blocoAnterior.classList.add("visivel")
        blocoAnterior.classList.remove("minimizado")
        if (c == values[3] * 4){

            // Separando os valores ja na forma que vao ser entregues a API
            for (let i = 1; i <= values[3]; i++){    
                niveis[i-1] = {
                    title:  document.querySelector(".nivel"+i+" .Titulo").value,
                    image: document.querySelector(".nivel"+i+" .url").value,
                    text: document.querySelector(".nivel"+i+" .descricao").value,
                    minValue: document.querySelector(".nivel"+i+" .porcentagem").value
                }
            }
            
            armazenarQuizz()
        }
    }
}