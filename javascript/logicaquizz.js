function respostaClicada(resposta) {
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
    }
    
}