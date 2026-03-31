// Selectionner les éléments du DOM
const compteur = document.getElementById('compteur');
const incrementBtn = document.getElementById('increase');
const decrementBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

//Initialise le compteur à 0
let counter = 0;

// Ajouter les évènements aux boutons

incrementBtn.addEventListener('click', () => {
    counter++;
    compter();
});

decrementBtn.addEventListener('click', () => {
    counter--;
    compter();
});

resetBtn.addEventListener('click', () => {
    counter = 0;
    compter();
});

// Fonctions Ajout des évènements aux boutons
function compter(){
    compteur.textContent = counter;
}

