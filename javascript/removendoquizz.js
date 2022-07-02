function removerQuizz(id, event){
    event.stopPropagation()
    axios.get('https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes/'+id).catch(mostrarErro).then(mostrarSeuQuizz);   
}

function mostrarSeuQuizz(data) {
    window.scrollTo(0, 0);
    pagina.innerHTML = 
        `<h1>Tem certeza de que deseja deletar seu quiz?</h1>
        <div class="formatquizzsuccess">
            <div class="degrade" onclick="exibirQuizz(${data.data.id})" >
                <img src=${data.data.image} />
            </div>
            <p class="titulonaimagem">${data.data.title}</p>
        </div>
        <button type="submit" onClick="temCerteza(${data.data.id})">Excluir Quizz</button>
        <p class="gohome" onClick="criarPagina()">Voltar pra home</p>`;
}

function temCerteza(id){ 
    if (confirm("Deseja mesmo excluir o quiz?")){
        console.log(id)
        let quizzesDoUser = JSON.parse(localStorage.getItem("quizzesUsuario"))
        console.log(quizzesDoUser)
        let index = quizzesDoUser.indexOf(id)
        console.log(index)
        quizzesDoUser.splice(index, 1)
        console.log(quizzesDoUser)
        axios.delete('https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes/'+id).catch(mostrarErro)
    } else {
        criarPagina()
    }
}