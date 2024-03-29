const basket = JSON.parse(localStorage.getItem("peluche")) || [];

// récupération de l'id du produit
const searchParams = new URLSearchParams(location.search);
const newId = searchParams.get("_id");
//  La propriété en lecture seule searchParams de l'interface URL retourne un objet URLSearchParams 
//permettant d'accéder aux arguments décodés de la requête GET contenu dans l'URL.


//modification de l'adresse d'appel à l'API
const newUrl = `http://localhost:3000/api/teddies/${newId}`;

fetch(newUrl)
.then((response) => response.json())
.then((data) => {
	
    const product = data;	

    addCard(product);
    addColors(product);
    addToCart();
    
    // fonction pour la création de la card de la page produit
    function addCard(product) {

        // insertion des information de la card du produit   
        const selectionProductName = document.getElementById("productName");
            selectionProductName.innerHTML += `${product.name}`;

        const selectionProductImage = document.getElementById("productImage");
        selectionProductImage.innerHTML += `<img class="img1"   src="${product.imageUrl}">` 
         
            const selectionProductPrice = document.getElementById("productPrice");
            selectionProductPrice.innerHTML += `${product.price/100}€`;

            const selectionProductDescription = document.getElementById("productDescription");
            selectionProductDescription.innerHTML += `
        <p class="text_info1">${product.description}</p>
        `;   
    }
   

    // fonction pour l'ajout de la couleur du produit
    function addColors(product) {
        const versionChoice = document.getElementById("option");
        //for...of permet de créer une boucle Array qui parcourt un objet itérable 
        for (let colors of product.colors) {
            versionChoice.innerHTML += `<option class="btn_ajout" value="${colors}">${colors}</option>`;
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
          const choixQt = bearNumber.value;
         
          
          if (bearNumber.value > 0 && bearNumber.value < 100) {
            // ------ Création du produit qui sera ajouté au panier
            let productAdded = {
              idImage: productCardImg.innerHTML,
              idNom: productCardName.innerHTML,
              idPrice: parseFloat(productCardPrice.innerHTML) * parseFloat(document.querySelector("#bearNum").value),
              idQuantity: parseFloat(document.querySelector("#bearNum").value),
              idCouleur: document.querySelector("#option").value,
              id:newId,
            };     
                
            // ----------------- Gestion du localStorage
          let arrayPeluche = []; 
// Si le localStorage existe, on récupère son contenu,
// on l'insère dans le tableau arrayPeluche
//puis on le renvoit vers le localStorage avec le nouveau produit ajouté.
      if (localStorage.getItem("peluche") !== null) {   

        arrayPeluche = JSON.parse(localStorage.getItem("peluche")); }         
        // Si le Localstorage est vide, on le crée avec le produit ajouté    
        arrayPeluche.push(productAdded);
        localStorage.setItem("peluche", JSON.stringify(arrayPeluche));   
      location.reload();
      alert('Votre article a été ajouté au panier ! Merci // Si vous voulez voir vos produits, cliquez sur "Voir Panier" ')

      
    } 
    else {
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


});

