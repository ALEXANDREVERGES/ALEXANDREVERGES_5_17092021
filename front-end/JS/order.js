const basket = JSON.parse(localStorage.getItem("peluche")) || [];
console.log(basket);
const order = JSON.parse(localStorage.getItem("formulaire")) || [];
console.log(order);

const contact = document.getElementById("contact");
contact.innerHTML =`
<div class="container_order">
<div class="order"> Félicitations <strong>${order.prenom}!!!</strong><br> Votre commande n° est en cours de préparation!</div> <br>
Elle arrivera chez vous, au "<strong>${order.adresse} ${order.postal} ${order.ville}</strong>". <br>
Vous allez recevoir un mail sur <strong>${order.mail}</strong> lorsque votre commande sera envoyée. <br>
Merci pour votre commande !! À très bientôt !! 
<div class="title1"> Orinoco</div></div>
`