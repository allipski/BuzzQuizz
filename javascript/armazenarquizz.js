function armazenarQuizz() { 
    let novoQuizz = {
        title: values[0],
        image: values[1],
        questions: perguntas,
        levels: niveis
    };

    enviarQuizz(novoQuizz);
}

function enviarQuizz (quizz) {
    axios.post('https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes', quizz).catch(mostrarErro).then(getId);
}

function getId (data) { 
    let idQuizz;
    idQuizz = data.data.id;
    let quizzesDoUser = JSON.parse(localStorage.getItem("quizzesUsuario"));
    quizzesDoUser.push(idQuizz);
    console.log(quizzesDoUser)
    let arrayStrigified = JSON.stringify(quizzesDoUser);
    localStorage.setItem("quizzesUsuario", arrayStrigified);
}