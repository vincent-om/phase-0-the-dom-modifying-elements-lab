// Write your code here!
const mainElement = document.querySelector('#main');
mainElement.remove();

const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.textContent = "Vincent is the champion";