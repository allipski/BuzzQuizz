function calcularPontos(ultimoelemento) {
    const numeroacertos = document.querySelectorAll(".certa.clicada").length;
    const porcentagemacerto = Math.round(((numeroacertos/numerodeperguntas)*100));
    for (i = 0; i < niveisPorcentagem.length; i++) {
        if (niveisPorcentagem[i] <= porcentagemacerto && porcentagemacerto < niveisPorcentagem[i + 1]) {
            caiunonivel = i;
        } else if (niveisPorcentagem[i + 1] == null) {
            caiunonivel = i;
        } else if (porcentagemacerto < niveisPorcentagem[0]) {
            caiunonivel = 0;
        }
    }

    ultimoelemento.insertAdjacentHTML("afterend",  
    `<div class="fifthform">
        <form>
            <div class="perguntaCor" style="background-color: #EC362D">
                <h5>${porcentagemacerto}%: ${niveisTitulos[caiunonivel]}</h5>
            </div>
            <div class="respostas">
                <div class="answers">
                    <img src="${niveisUrl[caiunonivel]}">
                </div>
                <div class="answers">
                    <h6>${niveisDescricao[caiunonivel]}</h6>
                </div>
            </div>
        </form>
    </div>
    <button type="submit" onclick="exibirQuizz(${idAtual})">Acessar Quizz</button>
    <p class="gohome" onclick="criarPagina()">Voltar pra home</p>`);

    ultimoelemento.nextElementSibling.scrollIntoView({
        behavior :'smooth'
    })
}