/*Задание 1*/
alert('Для первого задания будем определять соответвтует ли пароль паролю');
let password = 'пароль';
let userInput = prompt('Введите пароль:');
if (userInput === password) {
  alert('Пароль введен верно');
} else {
  alert('Пароль введен неправильно');
}

/*Задание 2*/
alert('Для второго задания будем определять входит ли вводимое число в диапазон от 0 до 10');
let inputB = prompt('Введите целое число от 0 до 10:');
if (isNaN(inputB)) {
  alert('Введено не число');
} else {
  let number = parseFloat(inputB);
  if (number > 0 && number < 10) {
    alert('Верно');
  } else {
    alert('Неверно');
  }
}

/*Задание 3*/
alert('Для третьего задания будем вводить два числа и определять есть ли среди них числа больше ста!');
let d = parseFloat(prompt('Введите первое число:'));
let e = parseFloat(prompt('Введите второе число:'));
if (d > 100 || e > 100) {
    console.log('Верно. Одно из чисел больше ста');
} else {
    console.log('Неверно. Оба числа меньше ста');
}
alert('Ответ в консоле');


/*Задание 4*/
alert('Для четвертого задания выводим сумму элементов а=2 и б=3');
let a = '2';
let b = '3';
alert(parseInt(a) + parseInt(b));  

/*Задание 5*/
alert('Для пятого задания будем определять принадлежность месяца к сезону');
let monthNumber = parseInt(prompt("Введите номер месяца (от 1 до 12):"));
switch (true) {
    case (monthNumber >= 1 && monthNumber <= 2) || monthNumber == 12:
        console.log("Зима");
        break;
    case monthNumber >= 3 && monthNumber <= 5:
        console.log("Весна");
        break;
    case monthNumber >= 6 && monthNumber <= 8:
        console.log("Лето");
        break;
    case monthNumber >= 9 && monthNumber <= 11:
        console.log("Осень");
        break;
    default:
        console.log("В году всего 12 месяцев, ты написал что-то не то");
        break;
}
alert('Ответ в консоле');

/*Дополнительное задание №1*/
alert('Первое дополнительное задание - определяем четное число или нет');
let inputC = prompt("Пожалуйста, введите любое число, а я определю чётное оно или нет:");
if (isNaN(inputC)) {
    alert("Вы ввели нечисловой символ.");
} else {
    let number = parseFloat(inputC);
    if (number % 2 === 0) {
        alert("Число четное");
    } else {
        alert("Число нечетное");
    }
}

/*Дополнительное задание №2*/
alert('Второе дополнительное задание - выводим разный текст в зависимости ОС');
let inputD = prompt("Каким ОС вы пользуетесь? Напишите '0' если iOS или '1', если Android ");
let clientOSD = parseFloat(inputD);
if (clientOSD === 0) {
    console.log('Установите версию приложения для iOS по ссылке.');
} else if (clientOSD === 1) {
    console.log('Установите версию приложения для Android по ссылке.');
} else {
    console.log('Не удалось определить операционную систему.');
}
alert('Ответ в консоле');

/*Дополнительное задание №3*/
alert('Третье дополнительное задание - выводим разный текст в зависимости ОС и от года выпуска телефона');

let input = prompt("Каким ОС вы пользуетесь? Напишите '0' если iOS или '1', если Android ");
let clientOS = parseFloat(input);
let input2 = prompt("Напишите год выпуска вашего устройства");
let clientDeviceYear = parseFloat(input2);

if (clientOS === 0) { 
    if (clientDeviceYear >= 2015) {
        console.log('Установите версию приложения для iOS по ссылке.');
    } else {
        console.log('Установите облегченную версию приложения для iOS по ссылке.');
    }
} else if (clientOS === 1) {
    if (clientDeviceYear >= 2015) {
        console.log('Установите версию приложения для Android по ссылке.');
    } else {
        console.log('Установите облегченную версию приложения для Android по ссылке.');
    }
} else {
    console.log('Не удалось определить операционную систему.');
}
alert('Ответ в консоле');