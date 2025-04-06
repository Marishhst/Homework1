/*ДЗ ФУНКЦИИ*/
console.log("Задание 1, вариант 1");
console.log("Привет");
console.log("Привет");

/*Задание 1, через цикл*/
console.log("Задание 1, вариант 2");
let count = 0;

while (count < 2) {
    console.log("Привет");
    count++;
}

/*Задание 2*/
console.log("Задание 2");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

/*Задание 3*/
console.log("Задание 3");
for (let i = 7; i <= 22; i++) {
    console.log(i);
}

/*Задание 4*/
console.log("Задание 4");
const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};

for (let name in obj) {
    if (obj.hasOwnProperty(name)) { 
        console.log(`${name} — зарплата ${obj[name]} долларов`);
    }
}

/*Задание 5*/
console.log("Задание 5");
let n = 1000;
let num = 0; 

while (n >= 50) {
    n /= 2; 
    num++;  
}

console.log(`Результат: ${n}`);
console.log(`Количество итераций: ${num}`);

/*Задание 6*/
console.log("Задание 6");

const firstFridayDay = 4; /* как в апреле, чтобы проверить*/

function isFriday(date) {
    return date.getDay() === 5; 
}

const today = new Date();
const currentMonth = today.getMonth(); 
const currentYear = today.getFullYear(); 

for (let day = firstFridayDay; day <= 31; day += 7) {
    const date = new Date(currentYear, currentMonth, day); 
    
    if (date.getMonth() === currentMonth && isFriday(date)) {
        console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
    }
}