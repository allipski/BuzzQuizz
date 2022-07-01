function loadpage1 () {
    window.scrollTo(0, 0);
    document.querySelector(".paginteira").innerHTML = `<h1>Comece pelo começo</h1>
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
    let entries = document.querySelectorAll('input');
    for (let i = 0; i < entries.length; i++){
        values[i] = entries[i].value;
    }
    validateData(values);
 }

function validateTitle(inputValue) {
    let entries = document.querySelectorAll('input');
    if (inputValue.length < 20 || inputValue.length > 65) {
        invalida(entries[0], false, "O título tem que ter mais de 20 caracteres e menos do que 65", "erroTitulo")
        return false;
    } else {
        invalida(entries[0], true, "O título tem que ter mais de 20 caracteres e menos do que 65", "erroTitulo")
        return true;
    }
}

function validateUrl(inputValue) {
    let entries = document.querySelectorAll('input');
    try {
        new URL(inputValue);
    } catch (e) {
        invalida(entries[1], false, "A URL digitada é inválida", "erroUrl")
        return false;
    }
    invalida(entries[1], true, "A URL digitada é inválida", "erroUrl")
    return true;
}

function validateQuestionNum(inputValue) {
    let entries = document.querySelectorAll('input');
    if (inputValue < 3) {
        invalida(entries[2], false, "O número mínimo de perguntas é 3", "erroNum")
        return false;
    } else {
        invalida(entries[2], true, "O número mínimo de perguntas é 3", "erroNum")
        return true;
    }
}

function validateLevels(inputValue) {
    let entries = document.querySelectorAll('input');
    if (inputValue < 2) {
        invalida(entries[3], false, "O número mínimo de níveis é 2", "erroNivel")
        return false;
    } else {
        invalida(entries[3], true, "O número mínimo de perguntas é 3", "erroNivel")
        return true;
    }
}

 function validateData(data) {
    const v1 = validateTitle(data[0])
    const v2 = validateUrl(data[1])
    const v3 = validateQuestionNum(data[2])
    const v4 = validateLevels(data[3])
    if (v1 && v2 && v3 && v4) {
        criarPerguntas()
    }
 }
 