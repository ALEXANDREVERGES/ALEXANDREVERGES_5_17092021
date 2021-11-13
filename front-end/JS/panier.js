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
localStorage.setItem("totalprice", JSON.stringify(totalPrice)) ;


if(basket.length === null){
  //console.log(basket.length)
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

//Valider le formulaire
function sendForm(){
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
    
// GESTION DU FORMULAIRE

 
   const prenom = formulaireValues.firstname;
   const lenom = formulaireValues.lastname;
   const adr = formulaireValues.adress;
   const cit = formulaireValues.city;
   const post = formulaireValues.postal;
   const em = formulaireValues.email;
   
   const regexName = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
   const regexCity = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$/;
   const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
   const regexAddress = /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$/;
   const regexPostal = /[0-9]{5}/;
   const error= document.querySelector("placeholder");
   console.log(error)
if(regexName.test(prenom) == true){
  
}else{
  
  alert("Veuillez remplir correctement votre prénom")
  
};
if(regexName.test(lenom) == true){
  
}else{
  alert("Veuillez remplir correctement votre nom")
  
};
if(regexPostal.test(post) == true){
  
}else{
  alert("Veuillez remplir correctement votre code postal")
  
};
if(regexCity.test(cit) == true){
  
}else{
  alert("Veuillez remplir correctement votre ville")
  
};
if(regexAddress.test(adr) == true){
  
}else{
  alert("Veuillez remplir correctement votre adresse")
  
};
if(regexMail.test(em) == true){
  
}else{
  alert("Veuillez remplir correctement votre adresse Mail")
  
}; 

 
if (
  (regexMail.test(em) == true) &
  (regexName.test(prenom) == true) &
  (regexName.test(lenom) == true) &
  (regexCity.test(cit) == true) &
  (regexAddress.test(adr) == true)&
  (basket != 0) 
  
){
localStorage.setItem("formulaireValues", JSON.stringify(formulaireValues));

   let products = [];
   for(var o = 0; o < basket.length; o++){
     let productsId = basket[o].id;
     products.push(productsId);
   };
   console.log("products")
   console.log(products)

   
    const contact ={
     firstName: document.querySelector("#user_name").value,
     lastName: document.querySelector("#user_lastname").value,
     address: document.querySelector("#user_adress").value,
     city: document.querySelector("#user_city").value,
     email: document.querySelector("#user_mail").value
    };
  console.log("contact")
  console.log(contact)

  // APPEL API AVEC FETCH // ENVOIE DES DONNEES AVEC POST
  fetch("http://localhost:3000/api/teddies/order", {
    method: "POST",
    headers: {
        "Accept": 'application/json',
        "Content-Type": "application/json"
    },
    mode:"cors",
    body: JSON.stringify({ contact, products }),
})
    .then((response) => response.json())
    .then((data) => {
      console.log("data")
      console.log(data)
        localStorage.setItem("order", JSON.stringify(data)); 
        document.location.href = "order.html";
      
       
    })
    
   .catch((erreur) => console.log("erreur : " + erreur));
  }else{
    alert("Veuillez remplir correctement tout le formulaire pour valider votre commande.");
  }
  }
   //ENVOIE DU FORMULAIRE ET PRODUIT AU SERVER
   const btnEnvoieForm = document.querySelector(".btnEnvoieForm");
   btnEnvoieForm.addEventListener("click",(e) =>{
     e.preventDefault();
sendForm();
});  

  










 
    
 
 



