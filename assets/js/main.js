document.addEventListener('DOMContentLoaded', function () 
{
    
    var counterMain = document.getElementById('counter');
    counterMain.classList.add('counter');

    var counterElement = document.createElement('h1');
    counterElement.textContent = '0';
    counterElement.id = 'counter-value';
    counterMain.appendChild(counterElement);

    var buttonsContainer = document.createElement('div');
    buttonsContainer.id = 'buttons';
    buttonsContainer.classList.add('buttons');
    counterMain.appendChild(buttonsContainer);

    var incrementButton = document.createElement('button');
    incrementButton.textContent = '+';
    incrementButton.id = 'btnIncrement';
    buttonsContainer.appendChild(incrementButton);

    var decrementButton = document.createElement('button');
    decrementButton.textContent = '-';
    decrementButton.id = 'btnDecrement';
    buttonsContainer.appendChild(decrementButton);

    var resetButton = document.createElement('button');
    resetButton.textContent = 'Reset';
    resetButton.id = 'btnReset';
    buttonsContainer.appendChild(resetButton);

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