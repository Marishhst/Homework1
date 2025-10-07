/* Игра «Генератор случайного цвета»
Описание: При каждом клике на кнопку фон страницы меняется на случайный цвет.
Требования: Создайте кнопку, которая при нажатии меняет цвет фона 
(или другого элемента) на случайный.*/

document.getElementById('button-randomColorGenerator').addEventListener('click', function (){

    // Генерация случайного цвета
function generateRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

// Главная функция для взаимодействия с пользователем
function playRandomColorGenerator() {
    // Спрашиваем пользователя, хочет ли он играть
    const response = confirm("Хочешь сыграть в Генератор случайных цветов?");

    if (response === false) {
        alert("Приходи еще!");
        return;
    }

    // Генерируем случайный цвет
    const randomColor = generateRandomColor();

    // Применяем цвет к телу страницы
    document.body.style.backgroundColor = randomColor;

    // Предложение сменить цвет еще раз
    while (true) {
        const changeResponse = prompt(
            "Хочешь поменять цвет фона еще раз?\n\n" +
            "1. Да, меняем фон на случайный цвет\n" +
            "2. Нет, верни фона цвет по умолчанию",
            ""
        );

        switch(changeResponse.trim()) {
            case "1":
                // Генерируем новый случайный цвет и применяем его
                const newRandomColor = generateRandomHexColor();
                document.body.style.backgroundColor = newRandomColor;
                break;
            case "2":
                // Восстанавливаем цвет по умолчанию
                document.body.style.backgroundColor = "";
                alert("Цвет восстановлен.");
                return;
            default:
                alert("Некорректный ввод. Попробуй еще раз.");
        }
    }
}

// Запустить игру 
playRandomColorGenerator();
});