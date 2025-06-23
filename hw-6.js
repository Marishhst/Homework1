/*Задание 1
Дан массив: [1, 5, 4, 10, 0, 3].
Создайте цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 
10. После вывода значения 10 в консоль цикл должен прекратить свою работу.*/

const arr = [1, 5, 4, 10, 0, 3]
for (let i=0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 10) {
        break;
    }
}


/*Задание 2
Дан массив: [1, 5, 4, 10, 0, 3]. Найдите индекс значения 4 в этом массиве.*/

const arr = [1, 5, 4, 10, 0, 3]
for (let i=0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 4) {
        console.log(i);
        break;
    }
}

const arr = [1, 5, 4, 10, 0, 3]
 console.log(arr.indexOf(4));


/*Задание 3
Дан массив чисел: [1, 3, 5, 10, 20]. С помощью метода join
 выведите элементы массива через пробел (пустую строку ' ').*/

const arr = [1, 3, 5, 10, 20];
console.log(arr.join(' '));

/*Задание 4
С помощью вложенных циклов создайте многомерный массив вида: 
[[1, 1, 1], [1, 1, 1], [1, 1, 1]].*/

const arr = [];

for (let i = 0; i < 3; i++) {
    const arr2 = [];
    for (let i = 0; i < 3; i++) {
        arr.push(1);
    }
     arr.push(arr2);
}

console.log(arr2);

/*Задание 5
Дан массив: [1, 1, 1]. Добавьте в конец массива значения 2, 2, 2.*/

const arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr);

/*Задание 6
Дан массив: [9, 8, 7, 'a', 6, 5]. С помощью метода sort отсортируйте массив и удалите букву 'a' из массива.
Затем выведите массив.*/

const arr = [9, 8, 7, 'a', 6, 5];
arr.sort ();
arr.pop ();

console.log(arr);

/*Задание 7
Дан массив: [9, 8, 7, 6, 5].
Попросите пользователя угадать число с помощью метода 
prompt. Если значение, которое ввел пользователь, есть в массиве, выведите в 
alert «Угадал», в противном случае — «Не угадал».*/

const arr = [9, 8, 7, 6, 5];

const userNumber = +prompt('Попробуй угадать число. Введи чисоло.')
if (arr.includes(userNumber)) {
    alert ('Угадал');
} else {
    alert ('Не угадал');
}

/*Задание 8
Дана строка: 'abcdef'. Выведите в консоль 'fedcba'.
Для этого задания вам пригодится метод reverse(). 
Он располагает элементы массива в порядке, обратном исходному.*/

let str = [abcdef];
str = str.split('');
console.log(str);
str.reverse();
str = str.join('');
console.log(str);

/*Задание 9
Дан массив: [[1, 2, 3],[4, 5, 6]].
Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6]*/

const arr = [[1, 2, 3],[4, 5, 6]];
const newArr = [];
for (let i = 0; i < arr.length; i++) {
    newArr.push(...arr[i]);
}
console.log(newArr);


const arr = [[1, 2, 3],[4, 5, 6]];
console.log(arr.flat());


/*Задание 10
Создайте массив с произвольными числами (диапазон от 1 до 10).
Переберите его с помощью цикла for.
В каждой итерации выведите в консоль сумму текущего и следующего элементов массива.
Следующий элемент массива можно получить с помощью индекса: 
i + 1. Обратите внимание, что у последнего элемента нет следующего.
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
    if (arr[i+1]) {
         console.log(arr[i] + arr[i+1]);
     }
}

/*Задание 11
Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.*/

function square(arr) {
    return arr.map(item => item **2);
}
console.log(square([2, 15, 26]));

/*Задание 12
Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.*/

function getLenght(arr) {
    return arr.map(item => item.length);
}
console.log(getLenght(['one', 'hi', 'square', 'circle']));


/*Задание 13
Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив, содержащий только отрицательные значения.*/

function negativeNumbers(array) {
    return array.filter(item => item < 0);
}

console.log(negativeNumbers([1, 2, -4, 5, 6, -7, 8, 9, -10]));

/*Задание 14
Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать с помощью метода 
Math.random() в диапазоне от 0 до 10.В данном массиве найдите все четные значения и добавьте их в новый массив. Результат работы программы необходимо вывести в консоль — это будут два массива: исходный массив и массив с четными значениями.*/

function randomNumb() {
    return Math.floor(Math.random() * 10);
}

const arr = [];

for (let i = 0; i < 10; i++) {
    arr.push(randomNumb());
}

console.log(arr);

const evenArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenArr.push(arr[i]);
    }
}

console.log(evenArr);


/*Задание 15
Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью 
Math.random() в диапазоне от 1 до 10.
Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.*/

function formatNumber(num) {
    return num.toLocaleString('en-US', {minimumIntegerDigits: 2 });
}

function formatNumber(num) {
    return num.toString().padStart(2, '0'); 
}

function randomNumb() {
    return Math.floor(Math.random() * 10);
}

const arr = [];

for (let i = 0; i < 10; i++) {
    const number = randomNumb(); 
    arr.push(formatNumber(number)); 
}

console.log(arr.join(', ')); 

const sum = arr.map(str => parseInt(str)).reduce((acc, curr) => acc + curr);
const avg = sum / arr.length;

console.log(`Среднее значение: ${avg}`);

