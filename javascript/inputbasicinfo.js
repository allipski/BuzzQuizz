let entries;

function loadpage1 () {
    window.scrollTo(0, 0);
    document.querySelector(".master").innerHTML = `<h1>Comece pelo começo</h1>
    <div class="firstform">
        <form>
            <input type="text" placeholder="Título do seu quizz">
            <input type="text" placeholder="URL da imagem do seu quizz">
            <input type="text" placeholder="Quantidade de perguntas do quizz">
            <input type="text" placeholder="Quantidade de níveis do quizz">
        </form>
    </div>
    <button type="submit" onclick="getInformation()">Prosseguir para criar perguntas</button>`;
}

let values = [];

 function getInformation() {
    entries = document.querySelectorAll('input');
    for (let i = 0; i < entries.length; i++){
        values[i] = entries[i].value;
    }
    validateData(values);
 }

function validateTitle(inputValue) {
    if (inputValue.length < 20 || inputValue.length > 65) {
        return false;
    } else {
        return true;
    }
}

function validateUrl(inputValue) {
    try {
        new URL(inputValue);
    } catch (e) {
        return false;
    }
    return true;
}

function validateQuestionNum(inputValue) {
    let entries = document.querySelectorAll('input');
    if (inputValue < 3) {
        return false;
    } else {
        return true;
    }
}

function validateLevels(inputValue) {
    let entries = document.querySelectorAll('input');
    if (inputValue < 2) {
        return false;
    } else {
        return true;
    }
}

 function validateData(data) {
    const v1 = validateTitle(data[0])
    if (!v1){
        invalida(entries[0], false, "O título tem que ter mais de 20 caracteres e menos do que 65", "erroTitulo")
    } else {
        invalida(entries[0], true, "O título tem que ter mais de 20 caracteres e menos do que 65", "erroTitulo")
    }
    const v2 = validateUrl(data[1])
    if (!v2){
        invalida(entries[1], false, "A URL digitada é inválida", "erroUrl")
    } else {
        invalida(entries[1], true, "A URL digitada é inválida", "erroUrl")
    }
    const v3 = validateQuestionNum(data[2])
    if (!v3){
        invalida(entries[2], false, "O número mínimo de perguntas é 3", "erroNum")
    } else {
        invalida(entries[2], true, "O número mínimo de perguntas é 3", "erroNum")
    }
    const v4 = validateLevels(data[3])
    if (!v4){
        invalida(entries[3], false, "O número mínimo de níveis é 2", "erroNivel")
    } else {
        invalida(entries[3], true, "O número mínimo de perguntas é 3", "erroNivel")
    }
    if (v1 && v2 && v3 && v4) {
        criarPerguntas()
    }
 }
 