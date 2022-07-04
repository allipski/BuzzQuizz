function removerQuizz(id, event){
    event.stopPropagation()
    axios.get('https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes/'+id).catch(mostrarErro).then(mostrarSeuQuizz);   
}

function mostrarSeuQuizz(data) {
    window.scrollTo(0, 0);
    pagina2.innerHTML = ``
    pagina2.innerHTML = `<div class="master"></div>`
    document.querySelector(".master").innerHTML =
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
        let quizzesDoUser = JSON.parse(localStorage.getItem("quizzesUsuario"))
        let userKeys = JSON.parse(localStorage.getItem("userKeys"))
        const index = quizzesDoUser.indexOf(id)
        const headers = {headers:{ 'Secret-Key': userKeys[index]}}
        quizzesDoUser.splice(index, 1)
        const arrayStrigified = JSON.stringify(quizzesDoUser)
        localStorage.setItem("quizzesUsuario", arrayStrigified)
        axios.delete('https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes/'+id, headers).catch(mostrarErro).then(criarPagina)
    } else {
        criarPagina()
    }
}