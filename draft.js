function gameReverseText(str) {
    return str.split('').reverse().join('');
}

// Функция для проверки палиндрома
function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-zа-яё]/gi, '');
    return cleanedStr === gameReverseText(cleanedStr);
}

// Основная логика обработки события клика кнопки
function reverseText() {
    const input = document.getElementById("inputText").value.trim();
    if (!input.length) {
        alert("Введите какой-нибудь текст!");
        return;
    }

    // Переворачиваем строку
    const reversedText = gameReverseText(input);

    // Проверяем, является ли строка палиндромом
    let palindromeInfo = '';
    if (isPalindrome(input)) {
        palindromeInfo = '<br><strong>Это палиндром!</strong>';
    }

    // Выводим результат
    document.getElementById("output").innerHTML =
        `Ваш перевёрнутый текст: ${reversedText}${palindromeInfo}`;
}