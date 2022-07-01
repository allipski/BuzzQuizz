function loadpage2 () {
    // codigo para pegar img do servidor vai aqui
    // const quizatual = axios.get ('https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes/ID_DO_QUIZZ');
    // quizatual.then(getCoverFromQuizz(quizatual));
    // quizatual.catch();

    // codigo pra carregar o html da pagina
    pagina.innerHTML = 
    `<h1>Seu quizz está pronto!</h1>
    <div class="formatquizzsuccess">
        <div class="degrade" onclick="loadQuizz()" >
            <img src="https://daora.app/media/resize/1920x1080/pasta/2/6255dc61eb84f.jpg" />
        </div>
        <p class="titulonaimagem">Titulo do quiz</p>
    </div>
    <button type="submit" onclick="loadQuizz()">Acessar Quizz</button>
    <p class="gohome" onclick="criarPagina()">Voltar pra home</p>`;
}