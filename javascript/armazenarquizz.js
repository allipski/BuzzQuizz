function armazenarQuizz() { 
    let novoQuizz = {
        title: values[0],
        image: values[1],
        questions: perguntas,
        levels: niveis
    };
    enviarQuizz(novoQuizz);
}


function teste () {
let testando = {
	title: "Fazendo mais um teste nessa bodega",
	image: "https://s5.static.brasilescola.uol.com.br/be/2021/10/foca.jpg",
	questions: [
		{
			title: "Título da pergunta 1",
			color: "#FFFFFF",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://s5.static.brasilescola.uol.com.br/be/2021/10/foca.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://s5.static.brasilescola.uol.com.br/be/2021/10/foca.jpg",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "Título da pergunta 2",
			color: "#FFF111",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://s5.static.brasilescola.uol.com.br/be/2021/10/foca.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://s5.static.brasilescola.uol.com.br/be/2021/10/foca.jpg",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "Título da pergunta 3",
			color: "#FFF444",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://s5.static.brasilescola.uol.com.br/be/2021/10/foca.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://s5.static.brasilescola.uol.com.br/be/2021/10/foca.jpg",
					isCorrectAnswer: false
				}
			]
		}
	],
	levels: [
		{
			title: "Título do nível 1",
			image: "https://s5.static.brasilescola.uol.com.br/be/2021/10/foca.jpg",
			text: "Descrição do nível 1",
			minValue: 0
		},
		{
			title: "Título do nível 2",
			image: "https://s5.static.brasilescola.uol.com.br/be/2021/10/foca.jpg",
			text: "Descrição do nível 2",
			minValue: 50
		}
	]
}

enviarQuizz(testando);

}

function enviarQuizz (quizz) {
    let enviarNovoQuizz = axios.post('https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes', quizz);
    enviarNovoQuizz.catch().then(getId);
}

let idQuizz;

function getId (data) {
    idQuizz = data;
    console.log(idQuizz);
}