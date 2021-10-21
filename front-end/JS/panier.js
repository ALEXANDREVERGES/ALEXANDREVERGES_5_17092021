const basket = JSON.parse(localStorage.getItem("peluche")) || [];


let produitPanier = localStorage.getItem("peluche");
let myObj = JSON.stringify(produitPanier);
localStorage.setItem("produitPanier", myObj);
let myObj_deserialized = JSON.parse(localStorage.getItem("produitPanier"));

console.log(myObj_deserialized);


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
        <form method="GET" action="order.html" onsubmit="return validateForm()" class="form">
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
const btnEnvoieForm = document.querySelector(".btnEnvoieForm ");
btnEnvoieForm .addEventListener("click",(e) =>{
    e.preventDefault();
    //définition d'une classe pour fabriquer l'objet dans lequel iront 
    //les values du form

    class Formulaire {
        constructor(prénom,nom){
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