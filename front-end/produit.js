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

// insertion des informations des cartes
            const selectionProduitImage = document.getElementById("produitImage");
            selectionProduitImage.innerHTML += `
        <img src="${produit.imageUrl}" class="img" alt="${produit.name}">
        `;
            const selectionProduitName = document.getElementById("produitName");
            selectionProduitName.innerHTML += `
        <h5 class="">${produit.name}</h5>
        `;
            const selectionProduitPrice = document.getElementById("produitPrice");
            selectionProduitPrice.innerHTML += `
         <h5 class="text_info1">Prix:${produit.price}€</h5>
        `;
            const selectionProduitDescription = document.getElementById("produitDescription");
            selectionProduitDescription.innerHTML += `
        <p class="text_info1">${produit.description}</p>
        `;
            const selectionProduitColors = document.getElementById("produitColors");
            selectionProduitColors.innerHTML += `
        <select id="" class="" aria-label="choisir la couleur">
            <option value="${produit.colors[1]}"></option>
            <option value="${produit.colors[2]}"></option>
            <option value="${produit.colors[3]}"></option>
            <option value="${produit.colors[4]}"></option>
        </select>`;           
        }

        
    });