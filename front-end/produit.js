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
    addCard(data);
    addColors(data);
    addToCart();
    // fonction pour la création de la card de la page produit
    function addCard(product) {

        // insertion des information de la card du produit
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

    // fonction pour l'ajout de la couleur du produit
    function addColors(product) {
        const versionChoice = document.getElementById("option");
        for (let colors of product.colors) {
            versionChoice.innerHTML += `<option value="${colors}">${colors}</option>`;
        }
    }
    const productCardImg = document.querySelector("#productImage");
    const productCardName = document.querySelector("#productName");
    const productCardPrice = document.querySelector("#productPrice");
    const bearNumber = document.querySelector("#bearNum");
    const colorSelect = document.querySelector("#color-select");

    function addToCart() {
        const addToCartBtn = document.querySelector(".add-to-cart");
        const confirmation = document.querySelector(".added-to-cart-confirmation");
        const textConfirmation = document.querySelector(".confirmation-text");
        
        addToCartBtn.addEventListener("click", () => {
          if (bearNumber.value > 0 && bearNumber.value < 100) {
            // ------ Création du produit qui sera ajouté au panier
            let productAdded = {
              image: productCardImg.innerHTML,
              nom: productCardName.innerHTML,
              price: productCardPrice.innerHTML,
              quantity: parseFloat(document.querySelector("#bearNum").value),
              couleur: document.querySelector("#option").value,
            };
            // ----------------- Gestion du localStorage
      let arrayProductsInCart = [];     
      // Si le localStorage existe, on récupère son contenu, on l'insère dans le tableau arrayProductsInCart, puis on le renvoit vers le localStorage avec le nouveau produit ajouté.
      if (localStorage.getItem("products") !== null) {
        arrayProductsInCart = JSON.parse(localStorage.getItem("products"));        
        // Si le Localstorage est vide, on le crée avec le produit ajouté
      } 
        arrayProductsInCart.push(productAdded);
        localStorage.setItem("products", JSON.stringify(arrayProductsInCart));    
// Message lors d'un ajout au panier
      confirmation.style.visibility = "visible";
      textConfirmation.style.background = "green";
      textConfirmation.style.border = "green";
      textConfirmation.style.color = "white";
      textConfirmation.style.textAlign = "center";
      textConfirmation.innerHTML = `Vous avez ajouté ${bearNumber.value} nounours à votre panier !`;     
    } else {
      confirmation.style.visibility = "visible";
      textConfirmation.style.background = "red";
      textConfirmation.style.border = "red";
      textConfirmation.style.color = "white";
      textConfirmation.style.whiteSpace = "normal";
      textConfirmation.style.textAlign = "center";
      textConfirmation.innerText = `La quantité doit être comprise entre 1 et 5`;
    }
  });
}
const quantitéPanier = () => {
    let quantitéPanier = document.getElementById('quantitéPanier');
    let Count = localStorage.getItem("quantity");
    Count ++;
    localStorage.setItem('quantity', Count);
    quantitéPanier.innerHTML = `${Count}`
}
});
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