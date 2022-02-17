// Recuperer member-item
// recuperer btn
// Recuperer l'input
const buttonAdd = document.querySelector("#button-add");
const inputName = document.querySelector("#name");
const nameAdded = document.querySelector(".member-item");
const memberList = document.querySelector(".member-list");

function ajouterName(event) {
  // Maintenant, je dois être sur de ne pas envoyer rien quand on clique sur le bouton ajouter
  let nameText = inputName.value;
  // Si le string est vide alors on ne retourne rien
  let preventFromLoading = event.preventDefault()
  if (nameText === "") {
    return preventFromLoading;
  } else {
    preventFromLoading
    // Si non, on va retourner le text avec tout le div
    let htmlAdd = `
    <div class="member-item">${nameText}</div>
    `;
    memberList.insertAdjacentHTML("beforeend", htmlAdd);
    nameText++;
    // Vider le string après avoir finit d'ajouter le nom
    inputName.value = "";
  }
}
// On uyilise un addeventlistener en cas de clique sur le bouton "ajouter"
buttonAdd.addEventListener("click", ajouterName);
// Ici en cas que l'utilisateur appuie la tocuhe enter
buttonAdd.addEventListener("keydown", (event) => {
  if (event.key) {
    ajouterName();
  } else {
    return;
  }
});
