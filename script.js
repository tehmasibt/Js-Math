let num1, num2, result;

document.getElementById('num1').addEventListener('input', function() {
    num1 = parseFloat(this.value);
});
document.getElementById('num2').addEventListener('input', function() {
     num2 = parseFloat(this.value);
});
document.getElementById('addButton').addEventListener('click', function() {
    result = num1 + num2;
});
document.getElementById('subtractButton').addEventListener('click', function() {
    result = num1 - num2;
});
document.getElementById('multiplyButton').addEventListener('click', function() {
    result = num1 * num2;
});
document.getElementById('divideButton').addEventListener('click', function() {
    if (num2 !== 0) {
        result = num1 / num2;
        } else {
            result = '0-a bolme yoxdur.';
        }
});
document.getElementById('resultButton').addEventListener('click', function() {
    this.innerText = 'Nəticə: ' + result;
});