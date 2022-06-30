const quizzes =  axios.get("https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes").catch(mostrarErro).then(carregarQuizzes)

function criarPagina(){
    pagina.innerHTML += 
    `<div>
        <h2>Todos os Quizzes</h2>
        <div class="quizlistados">
        </div>
    </div>`
    
}

function carregarQuizzes(resposta){
    const quizlistados = document.querySelector(".quizlistados")
    for (let i = 0; i < resposta.data.length; i++){
        quizlistados.innerHTML += 
        // nada por enquanto
        `<div class="quizz" onClick="abrirQuizz()">
            <img src="${resposta.data[i].image}">
            <div class="gradiente"></div>
            <h3>${resposta.data[i].title}</h3>
        </div>`
    }
}

function mostrarErro(erro){
    console.log(erro)
}

criarPagina()