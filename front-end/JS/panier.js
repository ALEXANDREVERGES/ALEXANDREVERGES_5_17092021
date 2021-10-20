let produitPanier = localStorage.getItem("peluche");
let myObj = JSON.stringify(produitPanier);
localStorage.setItem("produitPanier", myObj);
let myObj_deserialized = JSON.parse(localStorage.getItem("produitPanier"));

console.log(myObj_deserialized);


//annoncé si le panier est vide 
 if(myObj_deserialized === null){
     const panierVide = document.getElementById("panierVide");
      panierVide.innerHTML =`<div class="containerPanier">
      <img src="img/ourson.png">
      <div class="text_info3">Votre Panier est vide !</div>
      </div>`
 }
 //afficher les produits du panier
 else{
     let structurePanier = [];
     for(k = 0; k < produitPanier.length;k++){
        structurePanier = `
        <div class="container_panier">
        <div class="produitPanier">${myObj_deserialized}<button class="btnSupprimer">Supprimer</button></div>
        </div>
        `;
       
           
     } 
     if(k === myObj_deserialized.length){
         panierVide.innerHTML = structurePanier;
     }
 }


const btnSupprimer = document.querySelector(".btnSupprimer");
btnSupprimer.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
