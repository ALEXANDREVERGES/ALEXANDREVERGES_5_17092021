//affichage nb article dans panier sur page web
let qtTotalCalcul = [];
    for(var t=0; t < basket.length; t++){
    articlePanier = basket[t].idQuantity;
    qtTotalCalcul.push(articlePanier)
    
  }
  let redu = (accumulator, currentValue) => accumulator + currentValue;
  const qtTotal = qtTotalCalcul.reduce(redu);
    let nbArticlePanier = document.getElementById("basketPreview").textContent = qtTotal;