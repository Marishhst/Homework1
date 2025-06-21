/* Игра «Переверни текст»
Пользователю нужно ввести текст, который будет перевернут.
Требования:
Сайт запрашивает у пользователя текст.
Сайт переворачивает введенный текст.
Сайт выводит перевернутый текст.*/


document.getElementById('button-gameReverseText').addEventListener('click', function (){

   function gameReverseText() {
    const userText = prompt("Напишите свой текст, а мы его перевернём! Введите текст:");
    
    if (!userText || userText.trim().length === 0) { // Проверка на пустой ввод
        alert('Похоже, тут ничего не написано. Попробуй снова.');
        return;
    }

    const cleanedUserText = cleanText(userText); // Удалить пробелы, привести к нижнему регистру
    const reversedText = reverseString(cleanedUserText); // Перевернуть строку задом наперёд

    let message = `Перевёрнутый текст: "${reversedText}"`;// Вывести результат

    if (cleanedUserText.toLowerCase() === reversedText.toLowerCase()) {
        message += " Ухты! Твой текст является палиндромом! Он одинаково читается в обе стороны! ";
    }  // Проверить является ли палиндромом и сообщить об эьлм

    alert(message);

    const playAgain = confirm("Хотите попробовать ещё раз?");
    if (playAgain) {
        gameReverseText(); // продолжить игру
    }
}

function cleanText(text) {
    return text.replace(/\s+/g, '').toLowerCase();
} // Удалить пробелы, привести к нижнему регистру


function reverseString(str) {
    return str.split('').reverse().join('');
} // Перевернуть строку задом наперёд

gameReverseText();// продолжить игру
});