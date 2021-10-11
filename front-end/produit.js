// récupération de l'id du produit
const searchParams = new URLSearchParams(location.search);
const newId = searchParams.get("_id");

//modification de l'adresse d'appel à l'API
const newUrl = `http://localhost:3000/api/teddies/${newId}`;

fetch(newUrl)
    .then((response) => response.json())
    .then((data) => {
        const produit = data;
        addCards(data);
       

// fonction pour la création de la carte de la page produit
        function addCards(produit) {

// insertion des informations des cartes sur la page web
            const selectionProduitImage = document.getElementById("produitImage");
            selectionProduitImage.innerHTML += `
        <img src="${produit.imageUrl}" class="img1" alt="${produit.name}">
        `;
            const selectionProduitName = document.getElementById("produitName");
            selectionProduitName.innerHTML += `
        <h5 class="name1">${produit.name}</h5>
        `;
            const selectionProduitPrice = document.getElementById("produitPrice");
            selectionProduitPrice.innerHTML += `
         <h5 class="text_info1">Prix : ${produit.price /100},00€</h5>
        `;
            const selectionProduitDescription = document.getElementById("produitDescription");
            selectionProduitDescription.innerHTML += `
        <p class="text_info1">${produit.description}</p>
        `;   
            const colors = document.getElementById("produitColors");
            const selectionProduitColors = document.getElementById("produitColors");
            for (let c = 0; c < produit.colors.length; c++){
            selectionProduitColors.innerHTML +=`
            <select>
            <option select="selected" value=""></option> 
            <option value"${c}">${produit.colors[c]}</option>            
            </select>
            </div> `;          
}}
});    

//PANIER

//Récupération données sélectionnées par l'utilisateur au click avec onchange
//et envoie au localstorage lors du choix

function getSelectValue() {
  var selectedValue = document.getElementById("produitColors").value;
  console.log(selectedValue);
  localStorage.setItem('couleurChoisi', selectedValue);
  document.location.reload
}
getSelectValue();

function qtValue() {
  var selecteValue = document.getElementById("quantity").value;
  console.log(selecteValue);
  localStorage.setItem('quantitéChoisi', selecteValue);
  document.location.reload
}
qtValue();



//Envoyer les données au localstorage avec onclick

const local = JSON.parse(localStorage.getItem("peluche"));
bouton.onclick = () =>{
 const peluche = {
   nom: produitName.value,
   prix: produitPrice.value,
   image: produitImage.value
 };

 localStorage.setItem("peluche", JSON.stringify(peluche));
}













//---------------ANIMATION TITRES---------------------------------------//
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 1500,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml7',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  var timeout;