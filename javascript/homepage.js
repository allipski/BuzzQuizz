function criarPagina(){
    niveisTitulos = []
    niveisPorcentagem = []
    niveisUrl = []
    niveisDescricao = []
    axios.get("https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes").catch(mostrarErro).then(carregarQuizzes)
    window.scrollTo(0, 0);
    document.querySelector(".paginteira").innerHTML = '';
    document.querySelector(".paginteira").innerHTML = `<div class="master"></div>`;
    document.querySelector(".master").innerHTML =
    `<div class="none">
        <p>Você não criou nenhum</p>
        <p> quizz ainda :(</p>
        <button onClick="loadpage1()">Criar Quizz</button>
    </div>
    
    <div class="userQuizzes">
        <h2>Seus quizzes</h2><ion-icon onClick="loadpage1()" name="add-circle"></ion-icon>
        <div class="quizzesBox">
            
        </div>
    </div>`
    
    criandoSeusQuizzes()
    document.querySelector(".master").innerHTML += 
    `<div class="userQuizzes">
        <h2>Todos os Quizzes</h2>
        <div class="quizzesBox2">
        
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
    const userQuizzes = document.querySelector(".quizzesBox")
    userQuizzes.innerHTML += 
    `<div class="quizz2">
        <div class="quizz" onClick="exibirQuizz(${resposta.data.id})">
            <img src="${resposta.data.image}">
            <div class="gradiente"></div>
            <h3>${resposta.data.title}</h3>
            <div class="buttons">
                <ion-icon name="open-outline" onClick="editarQuizz(${resposta.data.id}, event)"></ion-icon>
                <ion-icon name="trash-outline" onClick="removerQuizz(${resposta.data.id}, event)"></ion-icon>
            </div>
        </div>
    </div>`
}

function carregarQuizzes(resposta){
    const quizlistados = document.querySelector(".quizzesBox2");
    for (let i = 0; i < resposta.data.length; i++){
        let id = resposta.data[i].id
        quizlistados.innerHTML += 
        `<div class="quizz2">
            <div class="quizz" onClick="exibirQuizz(${id})">
                <img src="${resposta.data[i].image}">
                <div class="gradiente"></div>
                <h3>${resposta.data[i].title}</h3>
            </div>
        </div>`
    }
}

function mostrarErro(erro){
    console.log(erro)
}

criarPagina()