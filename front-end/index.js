//afficher les images

const img = document.getElementById('img');

fetch('http://localhost:3000/api/teddies')
.then(res => res.json())
.then(data => img.src = data[0].imageUrl)



const dataAPI = fetch('http://localhost:3000/api/teddies');
dataAPI.then(async (resData) => {
    const res = await resData.json();
    console.log(res);

    try{
        //Prix nom description 
        const price = res[0].price;
        const name = res[0].name;
        const description = res[0].description;
        console.log(price);
        console.log(name);
        console.log(description);

        //affichage texte
        const affichage_price = document.querySelector("#price");
        const affichage_name = document.querySelector("#name");
        const affichage_description = document.querySelector("#description");
        affichage_price.innerHTML = price;
        affichage_name.innerHTML = name;
        affichage_description.innerHTML = description;
    }catch(err){
        console.log(err);
    }
});

