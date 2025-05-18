document.getElementById('button-gameGuessTheNumber').addEventListener('click', function (){

    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    function gameGuessTheNumber() {
        const userNumber = prompt("Мы загадали число от 1 до 100. Попробуй его отгадать! Напиши свое предположение :");
        // вводит число
        if (!userNumber || isNaN(userNumber)) { // ввел не число или не тот диапозон - заканчиваем
            alert('Что-то не так. Возвращайся как захочешь поиграть ;)');
            return; 
        }

        let guessNumber = parseInt(userNumber);
        attempts++;

        if (guessNumber === randomNumber) { // отгадал (заканчиваем)
            alert(`А ты догадливый! Всё верно - было загадано число ${randomNumber}. Тебе потребовалось ${attempts} попыток, чтобы его угадать.`);
            const playAgain = confirm("Хочешь попробовать ещё раз?"); // предлагаем еще (запускаем по новой)
            if (playAgain) {
                location.reload();
            }
        } else {
            checkHint(guessNumber); // показать подсказку
            gameGuessTheNumber(); // продолжить игру
        }
    }

    function checkHint(guessNumber) { // подсказки
        const diff = Math.abs(randomNumber - guessNumber);

        if (diff >= 20 && guessNumber > randomNumber)
            alert("Твоё число намного больше загаданного, попробуй ещё раз.");
        else if (diff < 20 && guessNumber > randomNumber)
            alert("Твоё число больше загаданного, попробуй ещё раз.");
        else if (diff >= 20 && guessNumber < randomNumber)
            alert("Твоё число намного меньше загаданного, попробуй ещё раз.");
        else if (diff < 20 && guessNumber < randomNumber)
            alert("Твоё число меньше загаданного, попробуй ещё раз.");
    }

    gameGuessTheNumber(); // продолжить игру
});