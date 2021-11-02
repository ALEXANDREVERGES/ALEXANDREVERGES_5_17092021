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
}



const btnEnvoieForm = document.querySelector(".btnEnvoieForm ");
function envoieForm(){
btnEnvoieForm .addEventListener("click",(event) =>{
  event.preventDefault();
 /*      //définition d'une classe pour fabriquer l'objet dans lequel iront 
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
    console.log("input")
    console.log(input)
 */
    let form = document.querySelector("#contact")   
    const order = {
      contact: {
        firstName: form.user_name.value,
        lastName: form.user_lastname.value,
        address: form.user_adress.value + form.user_postal.value8,
        city: form.user_city.value,
        email: form.user_mail.value,
      },
      products: basket,
    }
    console.log("order");
    console.log(order); 
    
  fetch("http://localhost:3000/api/teddies/order",{
    method:"POST",
    body: JSON.stringify(order),
    headers:{
      "Content-Type" : "application/json",
    }
  })
  fetch("http://localhost:3000/api/teddies/order")
  .then(async(res)=>{
    let resObj = response;
     console.log(resObj["orderId"]);
     localStorage.setItem("orderKey", resObj["orderId"]);      
     alert("Veuillez cliquer sur OK pour comfirmer votre commande.");
     location.replace("order.html");
  })
    
})
}
 /*function valideForm(){    
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

 
else{

return true;
}
}

*/
 



