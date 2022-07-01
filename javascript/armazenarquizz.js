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

let idQuizz;
let quizzesDoUser = JSON.parse(localStorage.getItem("quizzesUsuario"));


function getId (data) { 
    idQuizz = data.data.id;
    quizzesDoUser.push(idQuizz);
    console.log(quizzesDoUser)
    let arrayStrigified = JSON.stringify(quizzesDoUser);
    localStorage.setItem("quizzesUsuario", arrayStrigified);
}