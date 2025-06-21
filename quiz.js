/* Игра «Викторина»
Описание
создайте простую викторину с несколькими вопросами и вариантами ответов.

Требования:
Сайт предлагает несколько вопросов и вариантов ответов.
Запрашивает у пользователя ответы на каждый вопрос.
Подсчитывает и выводит количество правильных ответов.*/

document.getElementById('button-gameQuiz').addEventListener('click', function (){
function gameQuiz() {
    const quiz = [
        {
            question: "Какой цвет неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    // Спосить хочет ли играть, если нет, то завершить
    const playGame = confirm("Хотите сыграть в викторину? Нужно будет написать ЦИФРУ верного варианта ответа");
    
    if (!playGame) { 
        alert("До встречи! Буду рад видеть вас снова.");
        return; 
    }

    let score = 0; // Посчет верных ответов

    // Перебираем каждый вопрос: сам вопрос и варианты ответов, ввод ответа пользователя, преобразовать в числовой, проверить
    for (let i = 0; i < quiz.length; i++) {
        const currentQuestion = quiz[i];
        const answerOptions = currentQuestion.options.join("\n");
        const userInput = prompt(`${currentQuestion.question}\n\n${answerOptions}`);
        const userAnswer = parseInt(userInput.trim());
        
        if (userAnswer === currentQuestion.correctAnswer) {
            score++;
        }
    }

    // Сообщить результат
    alert(`Вы ответили правильно на ${score} из ${quiz.length} вопросов.`);
}

gameQuiz();

});