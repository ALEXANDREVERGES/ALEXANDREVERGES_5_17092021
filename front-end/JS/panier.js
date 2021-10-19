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
 //ajout du bouton supprimer, pour effacer les articles dans le panier
 //let btnSupprimer = document.querySelectorAll(".btnSupprimer");
 //for (let l = 0; l < btnSupprimer.length; l++){
  //   btnSupprimer[l].addEventListener("click", (e) => {
  //       e.preventDefault();
 //        let id_selectionner_supression = myObj_deserialized[l].idNom;
//         console.log(id_selectionner_supression)
// })}

let btnSupprimer = document.querySelectorAll(".btnSupprimer");
btnSupprimer.addEventListener("click", () =>{
    if (myObjPanier[index].quantity > 1) {
        myObjPanier[index].quantity--;
    } else {
        myObjPanier.splice(index, 1);
    }
    localStorage.setItem("peluche", JSON.stringify(myObjPanier));
    location.reload();
})
