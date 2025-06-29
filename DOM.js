// Задание 1. Скрытие и показ текста
const firstTitle = document.querySelector('#first-task');
const firstToggleButton = document.querySelector('#first-btn');

firstToggleButton.addEventListener('click', function() {
    if(firstTitle.style.display === 'none') { 
        firstTitle.style.display = ''; 
        this.textContent = 'Скрыть';
    } else { 
        firstTitle.style.display = 'none'; 
        this.textContent = 'Показать';
    }
});

// Задание 2. Изменение стиля элемента
function randomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

const secondParagraph = document.querySelector('#second-task');
const secondBlueColorBtn = document.querySelector('#second-btn');
secondBlueColorBtn.addEventListener('click', function () {
    secondParagraph.style.color = 'blue'; // Для синего цвета
});

const secondRandomColorBtn = document.querySelector('#second-btn-random');
secondRandomColorBtn.addEventListener('click', function () {
    secondParagraph.style.color = randomColor(); // Для случайного цвета
});

// Задание 3. Динамическое изменение текста
const thirdParagraph = document.querySelector('#third-task');
const thirdBlueColorBtn = document.querySelector('#third-btn');
thirdBlueColorBtn.addEventListener('click', function () {
    thirdParagraph.textContent = "Привет, Мир!";
});

// Задание 4. Поиск и изменение элементов по классу
const fourthButton = document.querySelector('#fourth-btn');

fourthButton.addEventListener('click', function() {
    const elementsToChange = document.querySelectorAll('.description');

    elementsToChange.forEach(function(element) {
        element.textContent = 'Измененный текст';
    });
});

// Задание 5. Работа с querySelectorAll
document.getElementById('fifth-btn').addEventListener('click', function() {
    const elements = document.querySelectorAll('.description');
    elements.forEach(function(element) {
    element.textContent = 'Новый текст';
    });
});

// Задание 6. Добавление нового элемента в DOM
document.getElementById('sixth-btn').addEventListener('click', function () {
    let newParagraph = document.createElement('p');
    newParagraph.textContent = 'Новый абзац';
    document.body.appendChild(newParagraph);
});

// Задание 7. Удаление элемента
document.getElementById('seventh-btn').addEventListener('click', function () {
    var firstDescriptionElement = document.querySelector('.description');
    if(firstDescriptionElement){
        firstDescriptionElement.remove();
        }
});