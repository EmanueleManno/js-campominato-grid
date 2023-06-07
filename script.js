//VEDO SE FUNZIONA:
console.log('JS OK');

//RECUPERIAMO GLI ELEMENTI DAL DOM:
const container = document.querySelector('.container');
console.log(container);
const grid = document.getElementById('grid');
console.log(grid);
const button = document.querySelector('button');
console.log(button);
const cell = document.getElementsByClassName('cell');
console.log(cell);

//PREPARO I MIEI DATI INIZIALI:
const rows = 10;
const cols = 10;
const cells = rows * cols;

//METTO IN ASCOLTO IL BOTTONE:
button.addEventListener('click' , function(){
    console.log('Si gioca');
    //AL CLICK TOLTO LA CLASSE NONE AL CONTAINER:
    container.classList.remove('none');
})


