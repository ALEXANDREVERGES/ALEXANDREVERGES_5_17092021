const basket = JSON.parse(localStorage.getItem("peluche")) || [];




//CALCUL PRIX TOTAL DU PANIER 
let prixTotalCalcul = [];
for (let m = 0; m < basket.length; m++){
    let prixProduitsDansLePanier = parseFloat(basket[m].idPrice) * basket[m].idQuantity;   
    //mettre les prix du panier dans ma varible prixTotalCalcul
    prixTotalCalcul.push(prixProduitsDansLePanier)   
}
//additionner les prix qu'il y a dans le tableau prixTotalCalcul avec la method reducer
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const prixTotal = prixTotalCalcul.reduce(reducer);

let totalPrice = document.getElementById("totalPrice").textContent = prixTotal +"€";



//affichage nb article dans panier sur page web
    for(var t=0; t < basket.length; t++){
    articlePanier = basket.length;
    let nbArticlePanier = document.getElementById("basketPreview").textContent = articlePanier;
  
}


//annoncé si le panier est vide + photo
 if(basket === null){
     const panierVide = document.getElementById("rien");
      rien.innerHTML =`<div class="containerPanier">
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
                        <td id="qt">${basket[k].idQuantity}</td> 
                        <td id="prix">${basket[k].idPrice}€</td>                
                        <td></td>             
                      <!--  <td> <button class="btnSupprimer"> <i class="fas fa-trash-alt "> Supprimer </i></button></td> -->
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
 


const btnEnvoieForm = document.querySelector(".btnEnvoieForm ");
btnEnvoieForm .addEventListener("click",() =>{
    
    
    //définition d'une classe pour fabriquer l'objet dans lequel iront 
    //les values du formulaire
class Formulaire {
    constructor(prenom,nom,postal,ville,adresse,mail,telephone){
        this.prenom = document.querySelector("#user_name").value;
        this.nom = document.querySelector("#user_lastname").value;
        this.postal = document.querySelector("#user_postal").value;
        this.ville = document.querySelector("#user_city").value;
        this.adresse = document.querySelector("#user_adress").value;
        this.mail= document.querySelector("#user_mail").value;
        this.telephone= document.querySelector("#phone").value;
    }
}
const formulaireValues = new Formulaire();
localStorage.setItem("formulaire", JSON.stringify(formulaireValues));
const input = JSON.parse(localStorage.getItem("formulaire"));


    
let productsBought = [];
    productsBought.push(basket);


const order = {
  contact: {
    firstName: input.prenom,
    lastName: input.nom,
    city: input.city,
    address: input.adresse,
    email: input.mail,
  },
  products:productsBought,
};

 //-------  Envoi de la requête POST au back-end --------
      // Création de l'entête de la requête
        const options = {
        method: "POST",
        body: JSON.stringify(order),
        headers: { 
            "Content-Type": "application/json"
         },
      };
        
         fetch("http://localhost:3000/api/teddies/order", options)
         .then((response) => response.json())
         .then((data) => {
          // localStorage.clear();
           console.log(data)
           localStorage.setItem("orderId", data.orderId);
           document.location.href = "order.html";

}) .catch((err) => {
    alert("Il y a eu une erreur : " + err);
  });
});



function valideForm(){    
    var prenom = document.forms["form"]["user_name"];
    var nom = document.forms["form"]["user_lastname"];
    var postal = document.forms["form"]["user_postal"];
    var ville = document.forms["form"]["user_city"];
    var adresse = document.forms["form"]["user_adress"];
    var mail = document.forms["form"]["user_mail"];
    var telephone = document.forms["form"]["user_phone"];


if (prenom.value == "")                                  
{ 
alert("Mettez votre prénom"); 
prenom.focus(); 
return false; 

}    
if (nom.value == "")                                  
{ 
alert("Mettez votre nom"); 
nom.focus(); 
return false; 
}    
if (postal.value == "")                               
{ 
alert("Mettez votre code postal"); 
postal.focus(); 
return false; 
}  
if (ville.value == "")                               
{ 
alert("Mettez votre ville"); 
ville.focus(); 
return false; 
}              
if (adresse.value == "")                               
{ 
alert("Mettez votre adresse"); 
adresse.focus(); 
return false; 
}        
if (mail.value == "")                                   
{ 
alert("Mettez une adresse email valide"); 
mail.focus(); 
return false; 
}    
if (mail.value.indexOf("@", 0) < 0)                 
{ 
alert("Mettez une adresse email valide"); 
mail.focus(); 
return false; 
}    
if (mail.value.indexOf(".", 0) < 0)                 
{ 
alert("Mettez une adresse email valide"); 
mail.focus(); 
return false; 
}    
if (telephone.value == "")                           
{ 
alert("Mettez votre numéro de téléphone"); 
phone.focus(); 
return false; 
}    

return true; 

}
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