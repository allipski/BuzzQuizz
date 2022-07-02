function respostaClicada(resposta) {
    let section
    if (!resposta.parentElement.classList.contains("stop")){
        let kids = resposta.parentElement.children;
        for (let i = 0; i < kids.length; i++) {
            kids[i].classList.add("naoclicada");
            if(kids[i].classList.contains("true")){
                kids[i].classList.add("certa");
            } else {
                kids[i].classList.add("errada");
            }
        }
        resposta.classList.remove("naoclicada");
        resposta.parentElement.classList.add("stop");

        section = resposta.parentElement.parentElement.parentElement;
    }
    setTimeout (() => proximaPergunta(section), 2000);
}

function proximaPergunta(perguntaatual) {
    console.log(perguntaatual);
    perguntaatual.nextElementSibling.scrollIntoView({
        top:80,
        behavior :'smooth'
    })
}