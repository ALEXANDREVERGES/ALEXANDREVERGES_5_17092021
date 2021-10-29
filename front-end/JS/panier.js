const basket = JSON.parse(localStorage.getItem("peluche")) || [];

//affichage nb article dans panier sur page web
let qtTotalCalcul = [];
    for(var t=0; t < basket.length; t++){
    articlePanier = basket[t].idQuantity;
    qtTotalCalcul.push(articlePanier)
    
  }
  let redu = (accumulator, currentValue) => accumulator + currentValue;
  const qtTotal = qtTotalCalcul.reduce(redu);
    let nbArticlePanier = document.getElementById("basketPreview").textContent = qtTotal;


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
}


 




const btnEnvoieForm = document.querySelector(".btnEnvoieForm ");
function envoieForm(){
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
          
      }
  }
  const formulaireValues = new Formulaire();
  localStorage.setItem("formulaire", JSON.stringify(formulaireValues));
  const input = JSON.parse(localStorage.getItem("formulaire"));
  
  
    
const aEnvoyer={
    basket,
    formulaireValues
  }
  
  console.log(aEnvoyer)

const promise1 = fetch("http://localhost:3000/api/teddies/order",{
  method: "POST",
  body: JSON.stringify(aEnvoyer),
  headers:{  
    "Content-Type" : "application/json",
  },
});
console.log("promise1")
console.log(promise1)


//pour voir le résultat du serveur dans la console
promise1.then(async(response) =>{
  try{
   
    const contenu = await response.json();
  
  }catch(e){
  
  }
})

const promise2 = fetch("http://localhost:3000/api/teddies/order")
promise2.then(async(response)=>{
  try{
    console.log("promise2");
    console.log(promise2);
    const donneesServeur = await response.json();
    console.log("donneesServeur");
    console.log(donneesServeur);

  }catch(e){
    console.log(e);
  }
})
  


/*let productsBought = [];
    productsBought.push(bEsket);*/
    


 /*const contact =  {
    firstName: input.prenom,
    lastName: input.nom,
    city: input.city,
    address: input.adresse,
    email: input.mail,
  };*/

/*console.log(order);
 //-------  Envoi de la requête POST au back-end --------
      // Création de l'entête de la requête
        fetch("http://localhost:3000/api/teddies/order",{
        method: "POST",
        body: JSON.stringify(contact, productsBought),
        headers: { 
          "Accept": "application/json",
            "Content-Type": "application/json"
         },
      })
      .then(response => response.json())
      .then(function(response){
        var objRetour = response;
        console.log(objetRetour["orderId"]);
        localStorage.setItem("orderKey", objRetour["orderId"]);
        document.location.href = "order.html";
      })
      .catch(function(error){

        console.log(error)

    })
     
        
       /*  fetch("http://localhost:3000/api/teddies/order", options)
         .then((response) => response.json())
         .then((data) => {
          // localStorage.clear();
           console.log(data)
           localStorage.setItem("orderId", data.orderId);
           document.location.href = "";

}) .catch((err) => {
    alert("Il y a eu une erreur : " + err);
  });*/
});

}
envoieForm();
/* function valideForm(){    
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

 
else{

return true;
}
}
*/

 



