let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);  // Lösche das letzte Zeichen
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        if (displayValue.includes('/0')) {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); // Video bei Division durch 0
        } else {
            const result = eval(displayValue);
            document.getElementById('display').value = result;
            displayValue = String(result);
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function rotateNumbers() {
    const buttons = document.querySelector('.buttons');
    setInterval(() => {
        buttons.style.transform = buttons.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
    }, 60000);  // Dreht die Tasten alle 60 Sekunden um 180 Grad
}

window.onload = rotateNumbers;
