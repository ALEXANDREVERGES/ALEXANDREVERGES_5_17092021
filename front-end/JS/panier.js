const basket = JSON.parse(localStorage.getItem("peluche")) || [];




//CALCUL PRIX TOTAL DU PANIER 
let prixTotalCalcul = [];
for (let m = 0; m < basket.length; m++){
    let prixProduitsDansLePanier = parseFloat(basket[m].idPrice);   
    
    //mettre les prix du panier dans ma varible prixTotalCalcul
    prixTotalCalcul.push(prixProduitsDansLePanier)   
}
//additionner les prix qu'il y a dans le tableau prixTotalCalcul avec la method reducer
let reducer = (accumulator, currentValue) => accumulator + currentValue;
const prixTotal = prixTotalCalcul.reduce(reducer);

let totalPrice = document.getElementById("totalPrice").textContent = prixTotal +"€";




  



//annoncé si le panier est vide + photo
 if(basket.length === null){
     const panierVide = document.getElementById("rien");
     panierVide.innerHTML =`
     <div class="containerPanier">
      <img src="img/ourson.png">
      <div class="text_info3">Votre Panier est vide !</div>
      </div>`;
 }

 //afficher les produits du panier + formulaire
 else{
     let structurePanier = [];
     for(var k = 0; k < basket.length; k++){    
        structurePanier = structurePanier +`       
        <div id="listeProduit"> 
            <div class="panierPanier">
                <table class="container_panier1">         
                    <tr>
                        <td>${basket[k].idImage}</td>
                        <td>${basket[k].idNom}</td>
                        <td>${basket[k].idCouleur}</td>
                       
                       <!--   <div class="btnInputQt">-->
                        <!-- <button class="btnInputM" type="button">-</button> -->
                         <td id="qt">${basket[k].idQuantity}</td> 
                         <!-- <button class="btnInputP" type="button">+</button>-->
                         </div>
                        <td id="prix">${basket[k].idPrice}€</td>                                              
                        <td> <button class="btn-supprimer"> <i class="fas fa-trash-alt "> Supprimer </i></button></td> 
                    </tr>                  
                </table>
            </div> 
        </div>                               
        `;
       
           
     } 
     if(k === basket.length){
         panierVide.innerHTML = structurePanier;
     } 
     
 }
//button pour supprimer tout le panier
const buttonToEmptyCart = document.querySelector(".btnSupprimerAll");
buttonToEmptyCart.addEventListener("click",() =>{
   localStorage.clear();
   location.reload();
})
/*
 //bouton - et +

document.querySelectorAll(".btnInputM").setAttribute("disabled", "disabled");

//prendre la valeur pour incrémenter décrémenter
var valueCount

//button +
document.querySelectorAll(".btnInputP").addEventListener("click", function(){

  //je récupère la value de l'input quantité
  valueCount = document.getElementById("qt").value;

  //input value  +1
  valueCount++;

  document.getElementById("qt").value = valueCount

  if(valueCount > 1){
    document.querySelectorAll(".btnInputM").removeAttribute("disabled")
    document.querySelectorAll(".btnInputM").classList.remove("disabled")
  }
})

//button +
document.querySelectorAll(".btnInputM").addEventListener("click", function(){

  //je récupère la value de l'input quantité
  valueCount = document.getElementById("qt").value;

  //input value  +1
  valueCount--;

  document.getElementById("qt").value = valueCount

  if(valueCount == 1){
    document.querySelectorAll(".btnInputM").setAttribute("disabled", "disabled")
  }
})
*/





 //bouton pour supprimer les articles du panier 
 //sélectionner les référence de tous les bouton supprimer article
let btn_supprimer = document.querySelectorAll(".btn-supprimer");


for(let l = 0; l < btn_supprimer.length; l++){
  btn_supprimer[l].addEventListener("click",(event) =>{
    event.preventDefault();

    //sélectionner ID qui va être supprimé après le click
    let id_selectionner_suppression = basket[l].id + basket[l].idCouleur;
    console.log("id_selectionner_suppression");
    console.log(id_selectionner_suppression);

    //utilisation méthod filter, je sélectionne les éléments à garder et je supprime l'élément ou le btn supprimer a été click
   const result = basket.filter(el => el.id + el.idCouleur !== id_selectionner_suppression);
    console.log(result)


    localStorage.setItem("peluche", JSON.stringify(result)); 
    location.reload();  
    alert("Votre suppression d'article a été pris en compte !") 


  })
};

//ENVOIE POST DU FORMULAIRE ET PRODUIT AU SERVER

const btnEnvoieForm = document.querySelector(".btnEnvoieForm");
console.log(btnEnvoieForm)
btnEnvoieForm.addEventListener("click",(e) =>{
  e.preventDefault();
  //définition d'une classe pour fabriquer l'objet
class Formulaire {
  constructor(firstname,lastname,adress,city,postal,email){
    this.firstname = document.querySelector("#user_name").value;
    this.lastname = document.querySelector("#user_lastname").value;
    this.adress = document.querySelector("#user_adress").value;
    this.city = document.querySelector("#user_city").value;
    this.postal = document.querySelector("#user_postal").value;
    this.email = document.querySelector("#user_mail").value;
  }
}
   const formulaireValues = new Formulaire();
   console.log("formulaireValues")
   console.log(formulaireValues)
   localStorage.setItem("formulaireValues", JSON.stringify(formulaireValues));
   const input = JSON.parse(localStorage.getItem("formulaireValues"))
   
   let products = [];
   for(var o = 0; o < basket.length; o++){
     let productsId = basket[o].id;
     products.push(productsId);
   }
   console.log("products")
   console.log(products)

   
    const contact ={
     firstname: document.querySelector("#user_name").value,
     lastname: document.querySelector("#user_lastname").value,
     adress: document.querySelector("#user_adress").value,
     city: document.querySelector("#user_city").value,
     email: document.querySelector("#user_mail").value
    }
  console.log("contact")
  console.log(contact)
  

const promise1 = fetch("http://localhost:3000/api/teddies/order", {
    method: "POST",
    body: JSON.stringify({contact, products}),
    headers: { 
      "Content-Type": "application/json" 
    },
})


promise1.then(async(response)=>{
  try{
    console.log("response")
    console.log(response)
    const contenu = await response.json();
    console.log("contenu")
    console.log(contenu)
    if(response.ok) {

      window.location = "order.html";
      localStorage.setItem("order", contenu.orderId);
      console.log("contenu orderId")
      console.log(contenu.orderId)
    }else{
      console.log(`Réponse du server : ${response.status}`);
    }

  }catch(e){
    console.log(e)
  }
})
 
 })







 



