const basket = JSON.parse(localStorage.getItem("peluche")) || [];
for(var t=0; t < basket.length; t++){
  articlePanier = basket.length;
  let nbArticlePanier = document.getElementById("basketPreview").textContent = articlePanier;
}

fetch('http://localhost:3000/api/teddies')
.then((res) => res.json())
.then ((data) => { 
    const produit = data;   
    addCards(data);
    
});


// fonction pour la création des cards de la page d'accueil
function addCards(data) {
 //boucle pour chaque iteration d'un produit
    for (produit of data) {
//recupère l'élément liste dans le HTML
        const cards = document.getElementById("article");
// insertion sur la page web        
        cards.innerHTML += `
        
        <div class="container">            
                <div class="carte">
                <a href="produit.html?_id=${produit._id}">
                    <p class="name">${produit.name}</p>
                    <div class="center">
                    <img class="img" src="${produit.imageUrl}"> </div>
                    <p class="text_info">Prix : ${produit.price/100},00€</p>   
                    <div class="carte_info">  
                    <p class="text_info"> ${produit.description}</p>                   
                    </div>
                </div>
            </a>
        </div>
        `;
}
}

//Animation des titres
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