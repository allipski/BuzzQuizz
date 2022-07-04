function carregarPagina(data) {
    console.log(data)
    window.scrollTo(0, 0);
    pagina2.innerHTML = ``;
    pagina2.innerHTML = `<div class="master"></div>`;
    document.querySelector(".master").innerHTML = 
    `<h1>Seu quizz está pronto!</h1>
    <div class="formatquizzsuccess">
        <div class="degrade" onclick="exibirQuizz(${data.data.id})" >
            <img src=${data.data.image} />
        </div>
        <p class="titulonaimagem">${data.data.title}</p>
    </div>
    <button type="submit" onclick="exibirQuizz(${data.data.id})">Acessar Quizz</button>
    <p class="gohome" onclick="criarPagina()">Voltar pra home</p>`;
}

function loadpage2 () {
    let quizzesDoUser = JSON.parse(localStorage.getItem("quizzesUsuario"));
    let idQuizz = quizzesDoUser[quizzesDoUser.length -1];
    const quizatual = axios.get ('https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes/'+idQuizz);
    quizatual.catch(mostrarErro).then(carregarPagina);
}