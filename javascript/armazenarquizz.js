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
    let quizzesDoUser = localStorage.getItem("quizzesUsuario");
    let userKeys = localStorage.getItem("userKeys");

    // Caso a pessoa não tiver nenhum quiz zeramos seus quizes e suas keys
    if (!quizzesDoUser || !userKeys){
        quizzesDoUser = []
        userKeys = []
    } else {
        quizzesDoUser = JSON.parse(quizzesDoUser)
        userKeys = JSON.parse(userKeys)
    }

    // Salvando o id do quiz do usuario no local storage
    quizzesDoUser.push(data.data.id);
    const index = quizzesDoUser.length -1;
    let arrayStrigified = JSON.stringify(quizzesDoUser);
    localStorage.setItem("quizzesUsuario", arrayStrigified);

    // Salvando a key no local storage  
    userKeys.push(data.data.key);
    arrayStrigified = JSON.stringify(userKeys);
    localStorage.setItem("userKeys", arrayStrigified);
    loadpage2();
}