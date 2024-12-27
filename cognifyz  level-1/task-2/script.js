const button = document.getElementById('colorButton');
button.addEventListener('click', () => {
    const colors = ['#f01ab3','#1a29f0','#39e010','#e02110','#e07510','#f2eb1f','#f21f69','#66f21f','#1ff2d6','#7627d6','#992b59','#2b9955'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    button.style.backgroundColor = randomColor;
});


const now = new Date();
const hours = now.getHours();
let greeting;
if (hours < 12) {
    greeting = 'GOOD MORNING';
} else if (hours < 18) {
    greeting = 'GOOD AFTERNOON';
} else {
    greeting = 'GOOD EVENING';
}
alert(`Hello Everyone,${greeting}`);


const num1input = document.getElementById('num1');
const num2input = document.getElementById('num2');
const calculateButton = document.getElementById('calculateButton');
const results = document.getElementById('result');

calculateButton.addEventListener('click', () => {
    const num1 = parseFloat(num1input.value);
    const num2 = parseFloat(num2input.value);
    const result = num1 + num2;

    if(result) {
        results.textContent = `The addition of two numbers is:${result}`;
    } else {
        results.textContent = 'Please enter valid numbers.';
    }
});


