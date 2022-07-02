function removerQuizz(id){
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
            <p class="titulonaimagem">Titulo do quiz</p>
        </div>
        <button type="submit" onclick="temCerteza()">Excluir Quizz</button>
        <p class="gohome" onclick="criarPagina()">Voltar pra home</p>`;
}

function temCerteza(){ 
    if (confirm("Deseja mesmo excluir o quiz?")){
        
    } else {

    }
}