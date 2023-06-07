//VEDO SE FUNZIONA:
console.log('JS OK');

//RECUPERIAMO GLI ELEMENTI DAL DOM:
const container = document.getElementsByClassName('container');
const grid = document.getElementById('grid');
const button = document.querySelector('button');

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