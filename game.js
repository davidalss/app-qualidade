// Verifica se o jogador tem permissão para acessar a página de pontuação máxima
const accessPassword = '777'; // Defina sua senha aqui
const accessAttempt = prompt('Digite a senha para acessar a página de pontuação máxima:');
if (accessAttempt !== accessPassword) {
    alert('Senha incorreta! Você não tem permissão para acessar a página de pontuação máxima.');
    window.location.href = '/game.html'; // Redireciona de volta para o jogo
}

const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [];

fetch('questions.json')
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions;
        startGame();
    })
    .catch((err) => {
        console.error(err);
    });

// Constantes
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 15; // Alterado para 15 questões

// Função para iniciar o jogo
function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
    game.classList.remove('hidden');
    loader.classList.add('hidden');
}

// Função para carregar uma nova pergunta
function getNewQuestion() {
    if (questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        // Redirecionar para a página de resultado
        return window.location.assign('/end.html');
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    // Atualizar a barra de progresso
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
}

// Event listener para escolha de resposta
choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

// Função para incrementar a pontuação
function incrementScore(num) {
    score += num;
    scoreText.innerText = score;
}

// Ao clicar no botão "Salvar Pontuação Máxima", a pontuação será salva em um arquivo de texto
function saveHighScore() {
    const scoreToSave = localStorage.getItem('mostRecentScore');

    // Faz uma solicitação para o servidor para salvar a pontuação em um arquivo de texto
    // Aqui, você precisará implementar a lógica do servidor para salvar a pontuação em um arquivo de texto
    // Exemplo: enviar a pontuação para um script PHP que salva a pontuação em um arquivo de texto
    // Exemplo: enviar uma solicitação HTTP POST para um servidor Node.js que salva a pontuação em um arquivo de texto
    // Após a implementação do servidor, você pode chamar essa função ao clicar no botão "Salvar Pontuação Máxima"
}

// Função para exibir a página de pontuação máxima
function showHighScores() {
    // Verifica se a pontuação máxima foi salva no localStorage
    const highScore = localStorage.getItem('highScore');

    // Se a pontuação máxima existir, exibe-a
    if (highScore) {
        alert(`A pontuação máxima é: ${highScore}`);
    } else {
        alert('A pontuação máxima ainda não foi definida.');
    }
}
