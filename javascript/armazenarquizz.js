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
    axios.post('https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes', quizz).catch().then(getId);
}

let idQuizz;

function getId (data) {
    idQuizz = data;
    console.log(idQuizz);
}