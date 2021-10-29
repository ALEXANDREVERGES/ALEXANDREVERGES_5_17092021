//affichage nb article dans panier sur page web
let qtTotalCalcul = [];
    for(var t=0; t < basket.length; t++){
    articlePanier = basket[t].idQuantity;
    qtTotalCalcul.push(articlePanier)
    
  }
  let redu = (accumulator, currentValue) => accumulator + currentValue;
  const qtTotal = qtTotalCalcul.reduce(redu);
    let nbArticlePanier = document.getElementById("basketPreview").textContent = qtTotal;

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