/*Задание 1*/
let a = 10;
alert(a);
a = 20;
alert(a);

/*Задание 2*/
const firstIphone = 2007;
alert(firstIphone);

/*Задание 3*/
let foundersName = 'Brendon Eich';
alert(foundersName);

/*Задание 4*/
let c = 10;
let b = 2;
let sum = c + b;
let difference = c - b;
let product = c * b;
let quotient = c / b;
alert("Сумма: " + sum);
alert("Разность: " + difference);
alert("Произведение: " + product);
alert("Частное: " + quotient);

/*Задание 5*/
let result = 2 ** 5;
alert(result); 

/*Задание 6 Переименовала ab в de*/
let d = 9;
let e = 2;
let remainder = d % e;
alert(remainder);

/*Задание 7*/
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

/*Задание 8*/
let age = prompt("Сколько вам лет?");
if (age === null || age.trim() === "") {
    alert("Вы не ввели свой возраст.");
} else {
    let ageNumber = parseInt(age);
    if (!isNaN(ageNumber)) {
        alert(`Вам ${ageNumber} лет.`);
    } else {
        alert("Некорректное значение возраста.");
    }
}

/*Задание 9*/
const user = {
    name: 'Марина Александровна',
    age: 18,
    isAdmin: false
};
console.log(user);

/*Задание 10*/
let name = prompt("Как вас зовут?");
alert(`Привет, ${name}!`);

/*Задание дополнительное*/
let number = prompt("Загадайте любое число:");

let doubledNumber = 2 * number;
alert(`Умножим число на два: ${doubledNumber}`);

let plusTen = doubledNumber + 10;
alert(`Прибавим 10: ${plusTen}`);

let dividedByTwo = plusTen / 2;
alert(`Разелим на 2: ${dividedByTwo}`);

let finalResult = dividedByTwo - number;
alert(`Из результа вычитаем заданное число: ${finalResult}`);

alert("Ответ равен 5!");