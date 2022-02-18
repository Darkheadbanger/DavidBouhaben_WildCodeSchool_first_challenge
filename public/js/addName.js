const addButton = document.querySelector("#button-add");
const addText = document.querySelector("#addName");
const memberList = document.querySelector(".member-list"); // list-groupe
const elements = [];

window.onload = function () {
  if (JSON.parse(localStorage.getItem("todo-elements")) != null) {
    [] = JSON.parse(localStorage.getItem("todo-elements"));
    console.log("elements:", elements);
    afficher();
  }
};
function ajouterElement(event) {
  // Pour eviter rafraichir la page
  let preventDefault = event.preventDefault();

  // Si l'input n'est pas vide, on peut écrire et ajouter
  // Si non, on ne peut pas ajouter un string vide
  if (addText.value.trim() === "") {
    return preventDefault;
  } else {
    elements.push(addText.value.trim());
    // Maintenant, on doit sauvegarder tous cela dans le localstorage pour que la page mémorise les noms ajoutés
    // Si le localstorage est null alors on retourne
    if (localStorage.getItem("todo-elements") == null) {
      localStorage.setItem("todo-elements", JSON.stringify(elements));
    } else {
      localStorage.setItem("todo-elements", JSON.stringify(elements));
    }
    console.log(localStorage.getItem("todo-elements"));

    if (addText !== "") {
      // Si le string n'est pas vide, ll faut l'ajouter au tableau vide élement
      addText.value = "";
    }
    afficher();
  }
}
// Une fonction pour affihcer
function afficher() {
  memberList.innerHTML = "";
  for (let i = 0; i < elements.length; i++) {
    let nameHtmlAdd = `<div class="member-item">${
      elements[i].charAt(0).toUpperCase() + elements[i].slice(1)
    }</div>`;
    memberList.innerHTML += nameHtmlAdd;
  }
}

// function delete(index){
//     // Ici, on crée une méthode pour effacer, j'utilise la méthode splice sur l'index
//     // L'index est la position de l'element ou on a définit sur la boucle for
//     tableauVide.splice(index, 1)
// }

// function modification(index) {

// }

addButton.addEventListener("click", ajouterElement);
