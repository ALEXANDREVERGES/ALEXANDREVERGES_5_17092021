// récupération de l'id du produit
const searchParams = new URLSearchParams(location.search);
const newId = searchParams.get("_id");

//modification de l'adresse d'appel à l'API
const newUrl = `http://localhost:3000/api/teddies/${newId}`;

fetch(newUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.name);   
        const product = data;
        console.log(product.name);
        addCards(data);
        addColors(data);

// fonction pour la création de la carte de la page produit
function addCards(product) {

// insertion des informations des cartes sur la page web
  const selectionProductImage = document.getElementById("productImage");
  selectionProductImage.innerHTML += `
  <img src="${product.imageUrl}" class="img1" alt="${product.name}">
  `;
  const selectionProductName = document.getElementById("productName");
  selectionProductName.innerHTML += `
  <h5 class="name1">${product.name}</h5>
  `;
  const selectionProductPrice = document.getElementById("productPrice");
  selectionProductPrice.innerHTML += `
  <h5 class="text_info1">Prix : ${product.price /100},00€</h5>
  `;
  const selectionProductDescription = document.getElementById("productDescription");
  selectionProductDescription.innerHTML += `
  <p class="text_info1">${product.description}</p>
   `;   
            
}
function addColors(product) {
  const versionChoice = document.getElementById("option");
  for (let colors of product.colors) {
      versionChoice.innerHTML += `
      <option value="${colors}">${colors}</option>
      `;
  }
}

      

//PANIER
//ajouter le produit dans le panier

const buttonAddBasket = document.getElementById("btnAddBasket");
buttonAddBasket.addEventListener("click", (e) => {
  e.preventDefault();       
  const list = document.getElementById("option");
  const quantity = document.getElementById("quantity");

// créer un nouveau produit
let objectProduct = new Product(
  newId,
  product.name,
  product.description,
  product.price,
  list.value,
  quantity.value,
  product.imageUrl
);
// vérifie s'il est déja présent
// si oui, deja Present en true et sauvegarde sa place dans le localStorage
let isAlreadyPresent;
let indexModification;
for (products of basket) {
if (products.name == objectProduct.name && products.option == objectProduct.option) {    
    isAlreadyPresent = true;
    indexModification = basket.indexOf(products);}
else {
    isAlreadyPresent = false;}            
}
// si déja Present incrémente seulement la quantité
if (isAlreadyPresent) {
    basket[indexModification].quantity =
      +basket[indexModification].quantity + +objectProduct.quantity;
    localStorage.setItem("teddies", JSON.stringify(basket));}
// si non, ajoute le produit au localStorage
else {
    basket.push(objectProduct);
    localStorage.setItem("teddies", JSON.stringify(basket));}       
basketPreview();
})
.catch(e => {
const card = document.getElementById("product");   
card.style.display = "none";
document.querySelector(".error").innerHTML += `
<h1 class=""><b>"Le produit demandé est introuvable "<b></h1>
`;
})});





//---------------ANIMATION TITRES---------------------------------------// 
//Wrap every letter in a span
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