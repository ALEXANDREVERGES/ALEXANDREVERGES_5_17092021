let peluche = JSON.parse(localStorage.getItem("products"));
if(!peluche){
    console.log("Oups c'est vide");
}
var pelucheJSON = JSON.parse(peluche);
console.log(pelucheJSON);