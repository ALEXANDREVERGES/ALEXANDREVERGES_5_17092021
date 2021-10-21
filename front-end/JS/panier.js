const basket = JSON.parse(localStorage.getItem("peluche")) || [];


let produitPanier = localStorage.getItem("peluche");
let myObj = JSON.stringify(produitPanier);
localStorage.setItem("produitPanier", myObj);
let myObj_deserialized = JSON.parse(localStorage.getItem("produitPanier"));

//console.log(myObj_deserialized);


//annoncé si le panier est vide + photo
 if(myObj_deserialized === null){
     const panierVide = document.getElementById("panierVide");
      panierVide.innerHTML =`<div class="containerPanier">
      <img src="img/ourson.png">
      <div class="text_info3">Votre Panier est vide !</div>
      </div>`
 }
 //afficher les produits du panier + formulaire
 else{
     let structurePanier = [];
     for(k = 0; k < myObj_deserialized.length;k++){
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
 //bouton pour supprimer les articles du panier 
const btnSupprimer = document.querySelector(".btnSupprimer");
btnSupprimer.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

    //définition d'une classe pour fabriquer l'objet dans lequel iront 
    //les values du form

    
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
console.log(formulaireValues);
localStorage.setItem("formulaire", JSON.stringify(formulaireValues));

})

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