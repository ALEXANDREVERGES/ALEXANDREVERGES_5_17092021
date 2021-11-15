const basket = JSON.parse(localStorage.getItem("peluche")) || [];

//méthode fetch GET popur récupérer données 
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

