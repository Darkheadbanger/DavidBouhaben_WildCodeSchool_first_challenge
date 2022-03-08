const addButton = document.querySelector("#button-add");
const addText = document.querySelector("#addName");
const memberList = document.querySelector(".member-list"); // list-groupe
const elements = [];

// const nameId = [{ id: 1, name: "David" }];

window.onload = function () {
  if (localStorage.getItem("todo-elements") !== null) {
    elements.push(localStorage.getItem("todo-elements"));
    // elements = JSON.parse(localStorage.getItem("todo-element"));
    afficher();
  }
};
function ajouterElement(event) {
  // Pour eviter rafraichir la page
  event.preventDefault();

  if (addText.value.trim() === "") {
    return alert("Bonjour, veuillez remplir le champ!");
  } else {
    elements.push(addText.value.trim());
    if (localStorage.getItem("todo-elements") === null) {
      localStorage.setItem("todo-elements", elements);
    } else {
      localStorage.setItem("todo-elements", elements);
    }

    addText.value = "";

    afficher();
  }
}

function afficher() {
  memberList.innerHTML = "";
  let newElements = elements.join().split(","); //possible to elements.toString().split(",")
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

export { ajouterElement, addButton };

// Ne pas occuper le delete et modification pour le moment car pas demandé, a faire si y a le temps
// Utiliser Vue js v2 pour le front, côté back utiliser node js avec express, webpack, MySQL
// Cote back créer un API REST
// Mettre en .env la connexion à mon API
// Mettre la connexion à la base de données dans le point .env
// utilisation bootstrap 5. Non
// GitHub utilisation en local
