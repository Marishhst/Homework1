// Получаем контейнер и линию
const container = document.querySelector('.running-line-container');
const lines = document.querySelectorAll('.running-line');
const containerWidth = container.clientWidth;
const lineWidth = lines[0].naturalWidth || lines[0].offsetWidth;

// Скорость движения в пикселях за кадр
const speedPxPerSecond = 50;
console.log(lines);
// Последняя отметка времени
let lastTimestamp = null;

// Запускаем анимацию
function runAnimation(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;

    // Расчет прошедшего времени
    const elapsed = timestamp - lastTimestamp;
    lastTimestamp = timestamp;

    // Смещение линий
    lines.forEach(line => {
        let currentOffset = parseFloat(line.style.left) || 0;
        currentOffset += Math.round(elapsed / 1000 * speedPxPerSecond);

        // Проверка выхода за рамки
        if (currentOffset >= containerWidth) {
            currentOffset -= containerWidth + lineWidth;
        }

        line.style.left = `${currentOffset}px`;
    });

    requestAnimationFrame(runAnimation);
}

// Запускаем анимацию
requestAnimationFrame(runAnimation);

