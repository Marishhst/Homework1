document.getElementById('button-gameSimpleArithmetic').addEventListener('click', function (){

    function gameSimpleArithmetic() {
        const wantToPlay = confirm("Хотите сыграть?");

        if (!wantToPlay) {
            alert("Приходи ещё!");
            return;
        }

        /* Генерируем пример */
        function generateMathExample() {
            let num1 = Math.floor(Math.random() * 15) + 1;
            let num2 = Math.floor(Math.random() * 15) + 1;
            const operations = ["+", "-", "*", "/"];
            let operation = "";

            do {
                operation = operations[Math.floor(Math.random() * operations.length)];

                switch(operation) {
                    case "+":
                        break;
                    case "-":
                        if(num1 > num2) break;
                        else [num1, num2] = [num2, num1];
                        break;
                    case "*":
                        break;
                    case "/":
                        // Надо чтобы делилось без остатка
                        if((num1 >= num2) && (num1 % num2 === 0)) break;
                        else {
                            // Если с остатком, то подбираем другое число
                            num1 = num2 * Math.floor(Math.random() * 15) + num2;
                        }
                }
            } while(!operation);

            const exampleString = `${num1} ${operation} ${num2}`;
            const result = eval(exampleString);
            return {example: exampleString, answer: result};
        }

        /* Взаимодействие с пользователем */
        function gameUser() {
            const trueAnswer = generateMathExample();
            const userAnswer = Number(prompt(`${trueAnswer.example}`));

            if(userAnswer === trueAnswer.answer) {
                alert(`Верно, ${trueAnswer.example} = ${trueAnswer.answer}`);
            } else {
                alert(`Неверно, ${trueAnswer.example} = ${trueAnswer.answer}`);
            }

            /* Взаимодействие с пользователем: ЕЩЁ или ХВАТИТ */
            const tryAgain = confirm("Попробовать ещё раз?");
            if(tryAgain) {
                gameUser(); // Повторить игру
            } else {
                alert("Спасибо за игру! Приходи ещё!");
            }
        }

        /*Игра заново */
        gameUser();
    }
    gameSimpleArithmetic(); 
});