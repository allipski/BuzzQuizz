function editarQuizz(id, event){
    event.stopPropagation()
    axios.get('https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes/'+id).catch(mostrarErro).then(recarregarQuizz);   
}

let quizAntigo

function recarregarQuizz(resposta){
    quizAntigo = undefined
    quizAntigo = resposta.data
    window.scrollTo(0, 0)
    document.querySelector(".paginteira").innerHTML = `<h1>Comece pelo começo</h1>
    <div class="firstform">
        <form>
            <input type="text" placeholder="Título do seu quizz">
            <input type="text" placeholder="URL da imagem do seu quizz">
            <input type="text" placeholder="Quantidade de perguntas do quizz">
            <input type="text" placeholder="Quantidade de níveis do quizz">
        </form>
    </div>
    <button type="submit" onclick="getInformation()">Prosseguir para criar perguntas</button>`

    entries = document.querySelectorAll('input')
    for (let i = 0; i < entries.length; i++){
        if (i == 0){
            entries[i].value = resposta.data.title
        } else if (i == 1){
            entries[i].value = resposta.data.image
        } else if (i == 2){
            entries[i].value = resposta.data.questions.length
        } else {
            entries[i].value = resposta.data.levels.length
        }
       
    }
}
