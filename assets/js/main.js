document.addEventListener('DOMContentLoaded', function () 
{
    var counterElement = document.getElementById('counter-value');
    var incrementButton = document.getElementById('btnIncrement');
    var decrementButton = document.getElementById('btnDecrement');
    var resetButton = document.getElementById('btnReset');
    var buttonsContainer = document.getElementById('buttons');

    incrementButton.addEventListener('click', function () {
        counterElement.innerText = parseInt(counterElement.innerText) + 1;
    });

    decrementButton.addEventListener('click', function () {
        counterElement.innerText = parseInt(counterElement.innerText) - 1;
    });

    resetButton.addEventListener('click', function () {
        counterElement.innerText = '0';
    });
});