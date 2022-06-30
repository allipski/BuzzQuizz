function exibirQuizz(id){
    axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/'+id).catch(mostrarErro).then(criarPaginaQuizz)
}

function criarPaginaQuizz(resposta){
    console.log(resposta.data)
    pagina.innerHTML = 
    `<img src="${resposta.data}">
    `
}