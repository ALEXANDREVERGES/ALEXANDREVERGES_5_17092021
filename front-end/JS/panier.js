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


/*
function valideForm(){
    const regexName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    const regexCity = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$/;
    const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
    const regexAddress = /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$/;
    
  if ( 
  (regexMail.test(contact.email) == true) &
  (regexName.test(contact.firstName) == true) &
  (regexName.test(contact.lastName) == true) &
  (regexCity.test(contact.city) == true) &
  (regexAddress.test(contact.address) == true) &
  (checkBox.checked == true)
  ) ;
  else {
    alert("Veuillez correctement renseigner le formulaire pour valider votre commande. ");
    return false;
}

}
*/


// GESTION DU FORMULAIRE
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
  
   
   const input = JSON.parse(localStorage.getItem("formulaireValues"))



   const prenom = formulaireValues.firstname;
   const lenom = formulaireValues.lastname;
   const adr = formulaireValues.adress;
   const cit = formulaireValues.city;
   const post = formulaireValues.postal;
   const em = formulaireValues.email;
   const checkBox = document.getElementById("invalidCheck2");


  function prenomControle(){
   if(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(prenom)){
     console.log("OK");
     return true;

   }else{
     console.log("KO")
     return false;
     alert("Veuillez remplir correctement votre prénom");

   };
  };

  function nomControle(){
   if(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(lenom)){
    console.log("OK")
    return true;

  }else{
    return false;
    alert("Veuillez remplir correctement votre nom");
    console.log("KO")

  };
};

function adressControle(){
  if(/^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$/.test(adr)){
    console.log("OK")
    return true;
  }else{
    return false;
    alert("Veuillez remplir correctement votre adresse");
    console.log("KO")
  };
};

function cityControle(){
  if(/^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$/.test(cit)){
    console.log("OK")
    return true;
  }else{
    return false;
    alert("Veuillez remplir correctement votre ville");
    console.log("KO")
  };
};

function emailControle(){
  if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/.test(em)){
    console.log("OK")
    return true;
  }else{
    return false;
    alert("Veuillez remplir correctement votre adresse mail");
    console.log("KO")
  };
};

function postalControle(){
  if(/[0-9]{5}/g.test(post)){
    console.log("OK")
    return true;
  }else{
    return false;
    alert("Veuillez remplir correctement votre code postal");
    console.log("KO")
  };
};

function checkControle(){
  if(checkBox == true){
    console.log("OK")
    return true;
  }else{
    return false;
    alert("Veuillez accepter les conditions générales de ventes");
    console.log("KO")
  };
};
 






  
   let products = [];
   for(var o = 0; o < basket.length; o++){
     let productsId = basket[o].id;
     products.push(productsId);
   };
   console.log("products")
   console.log(products)

   
    const contact ={
     firstname: document.querySelector("#user_name").value,
     lastname: document.querySelector("#user_lastname").value,
     adress: document.querySelector("#user_adress").value,
     city: document.querySelector("#user_city").value,
     email: document.querySelector("#user_mail").value
    };
  console.log("contact")
  console.log(contact)


  

  let orderTeddies = JSON.stringify({
    contact,
    products
  });
  console.log("orderTeddies")
  console.log(orderTeddies)

  // APPEL API AVEC FETCH // ENVOIE DES DONNEES AVEC POST
  fetch("http://localhost:3000/api/teddies/order", {
    method: "POST",
    headers: {
        "Accept": 'application/json',
        "Content-Type": "application/json"
    },
    mode:"cors",
    body: orderTeddies,
})
    .then((response) => response.json())
    .then((data) => {
      console.log("data")
      console.log(data)
        /*localStorage.clear();  */
        localStorage.setItem("order", JSON.stringify(data));
        document.location.href = "order.html";
    })
    
   .catch((erreur) => console.log("erreur : " + erreur));

  }
//ENVOIE DU FORMULAIRE ET PRODUIT AU SERVER
const btnEnvoieForm = document.querySelector(".btnEnvoieForm");
btnEnvoieForm.addEventListener("click",(e) =>{
  e.preventDefault;
  sendForm();
  prenomControle();
  nomControle();
  adressControle();
  cityControle();
  emailControle();
  postalControle();
  checkControle();
}); 
 







 
    
 
 



