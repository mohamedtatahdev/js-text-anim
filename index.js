const target = document.getElementById("target");// Sélectionne un élément du DOM avec l'ID 'target' pour y placer les lettres.
let array = ["développeur", 
"innovant", 
"créatif",
"analytique",
"collaboratif",
"débrouillard",
"organisé",
"persévérant",
"curieux",
"flexible",
"détailleur",
"passionné",
"autonome",
"communicateur",];// Déclare un tableau contenant les mots à afficher.
// Initialise les indices pour parcourir le tableau de mots et les lettres de chaque mot.
let wordIndex = 0;
let letterIndex = 0;


const createLetter = () => {// Définit une fonction pour créer et afficher une lettre.
  const letter = document.createElement("span");  // Crée un nouvel élément span pour chaque lettre.
  target.appendChild(letter);  // Ajoute le span créé comme enfant de l'élément 'target'.

  letter.textContent = array[wordIndex][letterIndex];  // Définit le contenu textuel du span à la lettre actuelle du mot en cours.

    // Définit un délai pour supprimer la lettre après un certain temps (2800 ms).

  setTimeout(() => {
    letter.remove();
  }, 2800);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 60);
};
loop();

function createSnowflake() {
  const snowflake = document.createElement('i');
  snowflake.classList.add('fa-solid', 'fa-snowflake');
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Durée de 2 à 5 secondes
  snowflake.style.opacity = Math.random();
  snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';

  document.body.appendChild(snowflake);
console.log(snowflake)
  // Supprimer le flocon de neige après qu'il ait traversé l'écran
}

// Créer un nouveau flocon de neige toutes les 100 ms
setInterval(createSnowflake, 100);
