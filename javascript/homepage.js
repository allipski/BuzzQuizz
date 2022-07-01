const quizzes =  axios.get("https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes").catch(mostrarErro).then(carregarQuizzes)

function criarPagina(){
    pagina.innerHTML =
    `<div class="none">
        <p>Você não criou nenhum</p>
        <p> quizz ainda :(</p>
        <button onClick="loadpage1()">Criar Quizz</button>
    </div>
    
    <div class="userQuizzes">
        <h2>Seus quizzes</h2><ion-icon onClick="loadpage1()" name="add-circle"></ion-icon>
    </div>`
    
    criandoSeusQuizzes()
    pagina.innerHTML += 
    `<div>
        <h2>Todos os Quizzes</h2>
        <div class="quizlistados">
        
        </div>
    </div>`
}

function criandoSeusQuizzes(){
    const listaSerializada = localStorage.getItem("quizzesUsuario")
    quizzesUsuario = JSON.parse(listaSerializada)
    if(!quizzesUsuario){
        document.querySelector(".userQuizzes").classList.add("invisivel")
    } else {
        document.querySelector(".none").classList.add("invisivel")
        for (let i = 0; i <= quizzesUsuario.length; i++){
            axios.get("https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes/"+quizzesUsuario[i]).catch(mostrarErro).then(criarQuizzUsuario)
        }
    }   
}

function criarQuizzUsuario(resposta){
    const userQuizzes = document.querySelector(".userQuizzes")
    let id = resposta.data.id
    userQuizzes.innerHTML += 
    `<div class="quizz" onClick="exibirQuizz(${id})">
        <img src="${resposta.data.image}">
        <div class="gradiente"></div>
        <h3>${resposta.data.title}</h3>
    </div>`
}

function carregarQuizzes(resposta){
    const quizlistados = document.querySelector(".quizlistados")
    for (let i = 0; i < resposta.data.length; i++){
        let id = resposta.data[i].id
        quizlistados.innerHTML += 
        `<div class="quizz" onClick="exibirQuizz(${id})">
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