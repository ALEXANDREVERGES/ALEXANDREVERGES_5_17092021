const basket = JSON.parse(localStorage.getItem("peluche")) || [];
console.log(basket);
const order = JSON.parse(localStorage.getItem("formulaireValues")) || [];
console.log(order);
let priceOfOrder = localStorage.getItem("totalprice");
const orderid  = JSON.parse(localStorage.getItem("order")) 


const contact = document.getElementById("contact");
contact.innerHTML =`
<div class="container_order">
<div class="order">Félicitations <strong>${order.firstname}!</strong></div>  <br>Votre numéro de commande  est :"<strong>${orderid.orderId}</strong>" <br>
Pour un montant total de : <strong>${priceOfOrder}</strong> ! <br>
Elle arrivera chez vous, au "<strong>${order.adress} ${order.postal} ${order.city}</strong>". <br>
Vous allez recevoir un mail sur <strong>${order.email}</strong> lorsque votre commande sera envoyée. <br>
Merci pour votre commande !! À très bientôt !! 
<div class="title1"> Orinoco</div><br>
<button class="btnRetour"> Retour boutique </button></div>
`;


const btnRetour = document.querySelector(".btnRetour");
btnRetour.addEventListener("click",(e) =>{
     e.preventDefault();
localStorage.clear();
window.location.href = "index.html";
});  