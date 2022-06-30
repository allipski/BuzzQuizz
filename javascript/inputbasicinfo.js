function loadpage1 () {
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

//loadpage1();

let values = [];

 function getInformation() {
    let entries = document.querySelectorAll('input');
    for (let i = 0; i < entries.length; i++){
        values[i] = entries[i].value;
    }
    validateData(values);
 }

function validateTitle(inputValue) {
    if (inputValue.length < 20 || inputValue.length > 65) {
        console.log(7)
        return false;
    } else {
        console.log(8)
        return true;
    }
}

function validateUrl(inputValue) {
    try {
        new URL(inputValue);
    } catch (e) {
        console.log(1)
        return false;
    }
    console.log(2)
    return true;
}

function validateQuestionNum(inputValue) {
    if (inputValue < 3) {
        console.log(3)
        return false;
    } else {
        console.log(4)
        return true;
    }
}

function validateLevels(inputValue) {
    if (inputValue < 2) {
        console.log(5)
        return false;
    } else {
        console.log(6)
        return true;
    }
}

 function validateData(data) {
    if (validateTitle(data[0]) && validateUrl(data[1]) && validateQuestionNum(data[2]) && validateLevels(data[3])) {
        criarPerguntas()
    } else {
        alert("Dados inválidos. Por favor preencha o formulário novamente.");
    }
 }
 