function armazenarQuizz() { 
    const novoQuizz = {
        title: values[0],
        image: values[1],
        questions: perguntas,
        levels: niveis
    };

    console.log(novoQuizz)
    const enviarNovoQuizz = axios.post('https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes', novoQuizz);
    enviarNovoQuizz.then(console.log("deu bom"));
    enviarNovoQuizz.catch(console.log("deu ruim"));
}