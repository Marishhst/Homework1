/*Задание 1
Преобразовать строку 'js' в верхний регистр.*/
console.log('Задание 1');

let str='js';
str=str.toUpperCase();

console.log(str);

/*Задание 2
Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив, содержащий только те элементы первого массива, которые начинаются со второй строки. Регистр символов не влияет на результат.
Используйте функции toLowerCase() и startsWith() для сравнения начала строк.*/
console.log('Задание 2');

function filter(arr, str) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().startsWith(str.toLowerCase())){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(filter(['Biology','book','biography'],'bio'));


/* Задание 3
Округлить число 32.58884:
До меньшего целого.
До большего целого.
До ближайшего целого.*/
console.log('Задание 3');

let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

/*Задание 4
Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.*/
console.log('Задание 4');
console.log(Math.min(52, 53, 49, 77, 21, 32 ));
console.log(Math.max(52, 53, 49, 77, 21, 32 ));


/*Задание 5
Создать функцию, которая выводит в консоль случайное число от 1 до 10.*/
console.log('Задание 5');
function getRandomNumberFive() {
    return Math.floor(Math.random()*10)+1;
}
console.log(getRandomNumberFive());

/*Задание 6
Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа. Длина массива должна быть в два раза меньше переданного числа.
function getRandomNumberSix(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(Math.floor(Math.random() * num));
    }
return arr;
}
console.log(getRandomNumberSix(7));*/

console.log('Задание 6');

function getRandomNumberSix(num) {
    return Array.from({length: Math.floor(num/2) }, () => Math.floor(Math.random() * num));
}

console.log(getRandomNumberSix(7));

/*Задание 7
Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.*/
console.log('Задание 7');

function getRandomIntSeven(min,max) {
    return Math.floor (Math.random() * (max - min + 1)) + min;
}

console.log(getRandomIntSeven(1, 10));


/*Задание 8
Вывести в консоль текущую дату.*/
console.log('Задание 8');

console.log(new Date());

/*Задание 9
Создать переменную currentDate, хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.*/
console.log('Задание 9');

const currentDate= new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);


/*Задание 10
Написать функцию, которая принимает дату и возвращает ее в формате:
Дата: [число] [месяц на русском] [год] — это [день недели на русском].
Время: [часы]:[минуты]:[секунды]*/
console.log('Задание 10');

function formatDate(date) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();
    const dayOfWeek = days[date.getDay()];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `
    Дата: ${day} ${months[month]} ${year} — это ${dayOfWeek}.
    Время: ${hours}:${minutes}:${seconds}`;
}

console.log(formatDate(new Date()));