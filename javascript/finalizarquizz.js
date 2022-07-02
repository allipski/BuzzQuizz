function calcularPontos(ultimoelemento) {
    const numeroacertos = document.querySelectorAll(".certa.clicada").length;
    const porcentagemacerto = numeroacertos/numerodeperguntas;

    //Aqui vou colocar o código para identificar o nível que o usuário caiu

    ultimoelemento.insertAdjacentHTML("afterend",  
    `<div class="thirdform">
        <form>
            <div class="perguntaCor" style="background-color: #EC362D">
                <h5>Título do nível</h5>
            </div>
            <div class="respostas">
                <div class="answers">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/B%C3%A9b%C3%A9_Phoque_de_Weddell_-_Baby_Weddell_Seal.jpg">
                </div>
                <div class="answers">
                    <h6>Título do nívelTítulo do nívelTítulo do nívelTítulo do nívelTítulo do nível</h6>
                </div>
            </div>
        </form>
    </div>`);

    ultimoelemento.nextElementSibling.scrollIntoView({
        behavior :'smooth'
    })
}