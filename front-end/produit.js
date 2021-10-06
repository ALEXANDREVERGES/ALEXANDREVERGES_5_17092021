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
         <h5 class="text_info1">Prix:${produit.price /100},00€</h5>
        `;
            const selectionProduitDescription = document.getElementById("produitDescription");
            selectionProduitDescription.innerHTML += `
        <p class="text_info1">${produit.description}</p>
        `;   
            const colors = document.getElementById("produitColors")
            const selectionProduitColors = document.getElementById("produitColors");
            selectionProduitDescription.innerHTML +=`
            <div class="center">   
            <div class="text_info2">Choisir la couleur :</div>
            <select id="couleurs" class="" aria-label="choisir la couleur">
            <option value="">${produit.colors[0]}</option>
            <option value="">${produit.colors[1]}</option>
            <option value="">${produit.colors[2]}</option>
            <option value="">${produit.colors[3]}</option>
            </select>
            </div> `;

          

}
    
});
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