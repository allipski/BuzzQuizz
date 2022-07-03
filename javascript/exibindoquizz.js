let idAtual;
let niveisTitulos = []
let niveisPorcentagem = []
let niveisUrl = []
let niveisDescricao = []

function exibirQuizz(id){
    axios.get('https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes/'+id).catch(mostrarErro).then(criarPaginaQuizz);
    idAtual = id;
}

function criarPaginaQuizz(resposta){
    window.scrollTo(0, 0);
    pagina2.innerHTML = 
    `<div class="openQuizz">
        <div class="titulo">
            <img src="${resposta.data.image}">
            <div class="escurecendo"><div>
            <h4>${resposta.data.title}</h4>
        </div>
    </div>
    `
    document.querySelector(".openQuizz").insertAdjacentHTML("afterend", '<div class="master"></div>'); 
    
    for (let i = 0; i < resposta.data.questions.length; i++){
        document.querySelector(".master").innerHTML += 
        `<div class="thirdform">
            <form>
                <div class="perguntaCor perguntaCor${i}" style="background-color:  ${resposta.data.questions[i].color}">
                    <h5>${resposta.data.questions[i].title}</h5>
                </div>
                <div class="respostas respostas${i}"></div>
            </form>
        </div>`

        resposta.data.questions[i].answers.sort(comparador)
        let question = document.querySelector(".respostas"+i)
        for (let j = 0; j < resposta.data.questions[i].answers.length; j++){
            question.innerHTML += 
            `<div class="answers ${resposta.data.questions[i].answers[j].isCorrectAnswer}" onclick="respostaClicada(this)">
                <img src="${resposta.data.questions[i].answers[j].image}">
                <h6>${resposta.data.questions[i].answers[j].text}</h6>
            <div>`
        }
    }

    if (niveisPorcentagem.length === 0) {
        for (let i = 0; i < resposta.data.levels.length; i++){
            niveisTitulos.push(resposta.data.levels[i].title)
            niveisUrl.push(resposta.data.levels[i].image)
            niveisDescricao.push(resposta.data.levels[i].text)
            niveisPorcentagem.push(resposta.data.levels[i].minValue)
        }
    }
}

function comparador() { 
	return Math.random() - 0.5
}