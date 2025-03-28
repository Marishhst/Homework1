/*Задание 1*/
for (let i = 0; i < 2; i++) {
    console.log("Привет");
}

/*Задание 2*/
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

/*Задание 3*/
let i = 7;
while (i <= 22) {
    console.log(i);
    i++;
}

/*Задание 4*/
const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};
for (let employee in obj) {
    console.log(`${employee} — зарплата ${obj[employee]} долларов.`);
}

/*Задание 5*/
let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2; 
    num++; 
}
console.log(`Результат деления: ${n}`);
console.log(`Количество итераций: ${num}`);

/*Задание 6*/
let firstFriday = parseInt(prompt("Введите дату первой пятницы месяца (число от 1 до 7):"));
let daysInMonth = parseInt(prompt("Введите количество дней в месяце:"));

for (let day = firstFriday; day <= daysInMonth; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}

/*Дополнительное задание №1*/
let k = 100;
let iterations = 0;
while (k >= 0) {
    k -= 7;
    iterations++; 
}
console.log(`Результат вычитания: ${k}`);
console.log(`Количество итераций: ${iterations}`); 

/*Дополнительное задание №2*/
const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октбярь",
    "Ноябрь",
    "Декабрь"
];
for (let i = 0; i < months.length; i++) {
    console.log(`Месяц №${i + 1}: ${months[i]}`);
}

/*Дополнительное задание №3*/
const Book = {
    title: "Гарри Поттер и философский камень",
    author: "Джоан Роулинг",
    yearOfPublication: 1997,
    genre: "Фэнтези"
};
for (let property in Book) {
    console.log(`${property}: ${Book[property]}`);
}


/*Дополнительное задание №4*/
const randomNumbers = [];
for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * 100);
    randomNumbers.push(randomNumber);
}
const minNumber = Math.min(...randomNumbers);
console.log(`Минимальное число в массиве: ${minNumber}`);