let caiunonivel = 0;
let numeroacertos = 0;
let porcentagemacerto = 0;

function calcularPontos(ultimoelemento) {
    numeroacertos = document.querySelectorAll(".certa.clicada").length;
    porcentagemacerto = Math.round(((numeroacertos/numerodeperguntas)*100));
    descobrirNivel();
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
    <button type="submit" onClick="exibirQuizz(${idAtual})">Reiniciar Quizz</button>
    <p class="gohome" onClick="criarPagina()">Voltar pra home</p>`);

    ultimoelemento.nextElementSibling.scrollIntoView({
        behavior :'smooth'
    })
    numerodeperguntas = 0;
}

function descobrirNivel() {
    caiunonivel = 0
    for (i = 0; i < niveisPorcentagem.length; i++) {
        if (niveisPorcentagem[i] < porcentagemacerto) {
            if (niveisPorcentagem[i] != niveisPorcentagem[caiunonivel] && niveisPorcentagem[i] > niveisPorcentagem[caiunonivel]){
                caiunonivel = i
            }
        } else if (niveisPorcentagem[i] == porcentagemacerto){
            caiunonivel = i
            return
        }
    }
}