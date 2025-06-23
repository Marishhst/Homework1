document.getElementById('button-gameRockPaperScissors').addEventListener('click', () => {
    function gameRockPaperScissors() {

    const wantToPlay = confirm("Сыграем в 'Камень, Ножницы, Бумага?'");

    if (!wantToPlay) {
        alert('Приходи еще!');
        return;
    }

    while(true) {
        const choices = ['камень', 'ножницы', 'бумага'];

        // Запрашиваем выбор пользователя через prompt
        const playerChoice = prompt("Напиши свой выбор:\nКамень\nНожницы\nБумага");

        // Если пользователь ничего не выбрал или нажал Cancel, завершаем игру
        if (!playerChoice) {
            alert('Не хочешь сейчас играть? Приходи еще как будет желание!');
            break;
        }

        // Сделать слово пользователя одним размером
        const normalizedPlayerChoice = playerChoice.toLowerCase();

        // Сгенерировать вариант компьютера
        const computerIndex = Math.floor(Math.random() * choices.length);
        const computerChoice = choices[computerIndex];

        // Ответ в зависимости от того кто что выбрал или если написал не то слово
        let resultMessage;
        switch(normalizedPlayerChoice) {
            case 'камень':
                if(computerChoice === 'камень') {
                    resultMessage = 'Ничья!';
                } else if(computerChoice === 'ножницы') {
                    resultMessage = 'Вы победили! Камень разбивает ножницы.';
                } else {
                    resultMessage = 'Вы проиграли! Бумага покрывает камень.';
                }
                break;
            case 'ножницы':
                if(computerChoice === 'камень') {
                    resultMessage = 'Вы проиграли! Камень разбивает ножницы.';
                } else if(computerChoice === 'ножницы') {
                    resultMessage = 'Ничья!';
                } else {
                    resultMessage = 'Вы победили! Ножницы режут бумагу.';
                }
                break;
            case 'бумага':
                if(computerChoice === 'камень') {
                    resultMessage = 'Вы победили! Бумага покрывает камень.';
                } else if(computerChoice === 'ножницы') {
                    resultMessage = 'Вы проиграли! Ножницы режут бумагу.';
                } else {
                    resultMessage = 'Ничья!';
                }
                break;
            default:
                resultMessage = 'Это не считается! Вы можете выбрать только "камень", "ножницы" или "бумагу".';
        }

        // Вывести сообщение с результатои
        const finalResult = `Ваш выбор: ${normalizedPlayerChoice}.\nВыбор компьютера: ${computerChoice}.\nРезультат: ${resultMessage}`;

        alert(finalResult);

        // Предлагаем сыграть заново
        const replay = confirm("Хотите сыграть еще?");
        if(!replay) {
            alert('Спасибо за игру! До новых встреч!');
            break;
        }
    }
}

// Пример вызова игры
gameRockPaperScissors();
});