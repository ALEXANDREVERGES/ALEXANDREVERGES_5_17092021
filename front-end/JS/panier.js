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
        <div class="container_form">
        <div class="eltForm">
        
        <div >
        <form class="form">
        <h2>Votre adresse de livraison</h2>
            <div class="">
                <div class="bold" id="">
                    <label for="name">Prénom* :</label>
                    <input type="text" placeholder="Prénom" id="" name="user_name" required> 
                </div><br>
                <div class="bold" id="">
                    <label for="lastname">Nom* :</label>
                    <input type="text" placeholder="Nom" id="" name="user_lastname" required>
                </div>
            </div> <br>       
            <div class="">
                <div class="bold" id="">
                    <label for="postal">Code postal* :</label>
                    <input type="text" placeholder="Code postal" id="" name="user_postal" required>
                </div><br>
                <div class="bold" id="">
                    <label for="city">Ville* :</label>
                    <input type="text" placeholder="Ville" id="" name="user_city" required>
                </div>
            </div><br>
            <div class="bold" id="">
                <label for="adress">Adresse* :</label>
                <input type="text" placeholder="Adresse de livraison" id="" name="user_adress" required>
            </div><br>
            <div class="bold" id="">
                <label for="mail">Adresse mail* :</label>
                <input type="email" placeholder="Adresse@mail" id="" name="user_mail" required>
            </div><br>
            <div class="bold" id="">
                <label for="phone" >N° de téléphone* :</label>
                <input type="tel" placeholder="Numéro de téléphone" id="" name="phone" required >
            </div><br>
            <div class="containerRemplir">
            <div class="remplir">*à remplir obligatoirement</div>
            </div>
            <br><div></div>
            <div class="containerCommander">
                    <button id="" class="" >Commander</button>
            </div>
            </div>
        </form>

        <div class="">
            <p class=""></p>
        </div>
        
        
    </div>
</div>
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
