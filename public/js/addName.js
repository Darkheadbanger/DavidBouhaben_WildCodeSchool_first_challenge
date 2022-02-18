const addButton = document.querySelector("#button-add");
const addText = document.querySelector("#addName");
const memberList = document.querySelector(".member-list"); // list-groupe
const elements = [];

window.onload = function () {
  if (localStorage.getItem("todo-elements") !== null) {
    let pushLocal = elements.push(localStorage.getItem("todo-elements"));
    console.log(pushLocal);
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
    if (localStorage.getItem("todo-elements") === null) {
      localStorage.setItem("todo-elements", elements);
    } else {
      localStorage.setItem("todo-elements", elements);
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
  // innerString recois un string vide avant de le populer
  memberList.innerHTML = "";
  // La méthode join créer et renvoie une nouvelle string en concatenant tous les élements d'un tableau
  // Join peut être fait comme cela aussi join(","): hello,bonjour,Hi
  // La méthode split avec virgule pour le convertir au tableau
  // [Hello, bonjour, hi]
  let newElements = elements.join().split(","); //
  console.log(newElements);
  // On parcourt le tableau vide qui été convertit de string au tableau

  for (let i = 0; i < newElements.length; i++) {
    let nameHtmlAdd = `<div class="member-item">${newElements[
      i
    ][0].toUpperCase()}${newElements[i].slice(1)}</div>`;
    memberList.innerHTML += nameHtmlAdd;
    console.log(newElements[i]);
  }
}

addButton.addEventListener("click", ajouterElement);
