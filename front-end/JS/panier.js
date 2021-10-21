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
        <div class="container_form">
        <div class="eltForm">
        
        <div >
       

        <!---------- formulaire ------->
        <form onsubmit="return valideForm()" name="form"  class="form">
        <h2>Votre adresse de livraison</h2>
            <div class="">
                <div class="bold" id="">
                <label for="name">Prénom* :</label>
                    <input type="text" placeholder="Prénom" id="user_name" name="user_name" required> 
                </div><br>
                <div class="bold" id="">
                    <label for="lastname">Nom* :</label>
                    <input type="text" placeholder="Nom" id="user_lastname" name="user_lastname" required>
                </div>
            </div> <br>       
            <div class="">
                <div class="bold" id="">
                    <label for="postal">Code postal* :</label>
                    <input type="text" placeholder="Code postal" id="user_postal" name="user_postal" required>
                </div><br>
                <div class="bold" id="">
                    <label for="city">Ville* :</label>
                    <input type="text" placeholder="Ville" id="user_city" name="user_city" required>
                </div>
            </div><br>
            <div class="bold" id="">
                <label for="adress">Adresse* :</label>
                <input type="text" placeholder="Adresse de livraison" id="user_adress" name="user_adress" required>
            </div><br>
            <div class="bold" id="">
                <label for="mail">Adresse mail* :</label>
                <input type="email" placeholder="Adresse@mail" id="user_mail" name="user_mail" required>
            </div><br>
            <div class="bold" id="">
                <label for="phone" >N° de téléphone* :</label>
                <input type="tel" placeholder="Numéro de téléphone" id="phone" name="phone" required >
            </div><br>
            <div class="containerRemplir">
            <div class="remplir">*à remplir obligatoirement</div>
            </div>
            <br><div></div>
            <div class="containerCommander">
                    <a href="order.html"><button class="btnEnvoieForm">Commander</button></a>
            </div>
            </div>
        </form>
    </div>
</div>
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
    //les values du form
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
    alert("Mettez votre prénom."); 
    prenom.focus(); 
    return false; 
}    
if (nom.value == "")                                  
{ 
    alert("Mettez votre nom."); 
    nom.focus(); 
    return false; 
}    
if (postal.value == "")                               
{ 
    alert("Mettez votre code postal."); 
    postal.focus(); 
    return false; 
}  
if (ville.value == "")                               
{ 
    alert("Mettez votre ville."); 
    ville.focus(); 
    return false; 
}              
if (adresse.value == "")                               
{ 
    alert("Mettez votre adresse."); 
    adresse.focus(); 
    return false; 
}        
if (mail.value == "")                                   
{ 
    alert("Mettez une adresse email valide."); 
    mail.focus(); 
    return false; 
}    
if (mail.value.indexOf("@", 0) < 0)                 
{ 
    alert("Mettez une adresse email valide."); 
    mail.focus(); 
    return false; 
}    
if (mail.value.indexOf(".", 0) < 0)                 
{ 
    alert("Mettez une adresse email valide."); 
    mail.focus(); 
    return false; 
}    
if (telephone.value == "")                           
{ 
    alert("Mettez votre numéro de téléphone."); 
    phone.focus(); 
    return false; 
}    

return true; 

}

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
