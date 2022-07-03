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
    <button type="submit" onclick="exibirQuizz(${idAtual})">Reiniciar Quizz</button>
    <p class="gohome" onclick="criarPagina()">Voltar pra home</p>`);

    ultimoelemento.nextElementSibling.scrollIntoView({
        behavior :'smooth'
    })
    numerodeperguntas = 0;
}
let contador = 0;
function descobrirNivel() {
    contador = 0;
    for (i = 0; i < niveisPorcentagem.length; i++) {
        console.log(4);
        if ((niveisPorcentagem[i] <= porcentagemacerto) && (porcentagemacerto < niveisPorcentagem[i + 1]) && contador === 0) {
            caiunonivel = i;
            console.log(1);
            contador++;
        } else if (niveisPorcentagem[i + 1] == null && contador === 0) {
            caiunonivel = i;
            console.log(2);
            contador++;
        } else if (porcentagemacerto < niveisPorcentagem[0] && contador === 0) {
            caiunonivel = 0;
            console.log(3);
            contador++;
        }
    }
}