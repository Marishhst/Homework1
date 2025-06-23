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

