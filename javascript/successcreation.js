let quizzImg;

function carregarImg(data) {
    quizzImg = data.data.image;
    carregarPagina();
}

function loadpage2 () {
    const quizatual = axios.get ('https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes/'+idQuizz);
    quizatual.catch(mostrarErro).then(carregarPagina);
}

function carregarPagina(){
    window.scrollTo(0, 0);
    pagina.innerHTML = 
    `<h1>Seu quizz está pronto!</h1>
    <div class="formatquizzsuccess">
        <div class="degrade" onclick="exibirQuizz(${idQuizz})" >
            <img src=${quizzImg} />
        </div>
        <p class="titulonaimagem">Titulo do quiz</p>
    </div>
    <button type="submit" onclick="exibirQuizz(${idQuizz})">Acessar Quizz</button>
    <p class="gohome" onclick="criarPagina()">Voltar pra home</p>`;
}