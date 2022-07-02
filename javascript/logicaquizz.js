let numerodeperguntas = 0;

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
        resposta.classList.add("clicada");
        resposta.parentElement.classList.add("stop");

        section = resposta.parentElement.parentElement.parentElement;
        numerodeperguntas++;
        setTimeout (() => proximaPergunta(section), 2000);
    }
}

function proximaPergunta(perguntaatual) {
    if (perguntaatual.nextElementSibling !== null) {
    perguntaatual.nextElementSibling.scrollIntoView({
        top:80,
        behavior :'smooth'
    })
    } else {
        calcularPontos(perguntaatual);
    }
}