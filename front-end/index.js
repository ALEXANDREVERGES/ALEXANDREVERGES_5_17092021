//afficher les images

const img = document.getElementById('img');

fetch('http://localhost:3000/api/teddies')
.then(res => res.json())
.then(data => img.src = data[0].imageUrl)



const img1 = document.getElementById('img1');

fetch('http://localhost:3000/api/teddies')
.then(res => res.json())
.then(data => img1.src = data[1].imageUrl)



const img2 = document.getElementById('img2');

fetch('http://localhost:3000/api/teddies')
.then(res => res.json())
.then(data => img2.src = data[2].imageUrl)



const img3 = document.getElementById('img3');

fetch('http://localhost:3000/api/teddies')
.then(res => res.json())
.then(data => img3.src = data[3].imageUrl)



const img4 = document.getElementById('img4');

fetch('http://localhost:3000/api/teddies')
.then(res => res.json())
.then(data => img4.src = data[4].imageUrl)






const dataAPI = fetch('http://localhost:3000/api/teddies');
dataAPI.then(async (resData) => {
    const res = await resData.json();
    console.log(res);

    try{
        //Récupérer données Prix nom description 
        const price = res[0].price;
        const name = res[0].name;
        const description = res[0].description;
        const _id = res[0]._id;
        console.log(price);
        console.log(name);
        console.log(description);
        console.log(_id);

        const price1 = res[1].price;
        const name1 = res[1].name;
        const description1 = res[1].description;
        
        console.log(price);
        console.log(name);
        console.log(description);
        console.log(_id);

        const price2 = res[2].price;
        const name2 = res[2].name;
        const description2 = res[2].description;
        
        console.log(price);
        console.log(name);
        console.log(description);
        console.log(_id);

        const price3 = res[3].price;
        const name3 = res[3].name;
        const description3 = res[3].description;
        
        console.log(price);
        console.log(name);
        console.log(description);
        console.log(_id);

        const price4 = res[4].price;
        const name4 = res[4].name;
        const description4 = res[4].description;
        
        console.log(price);
        console.log(name);
        console.log(description);
        console.log(_id);

        //affichage texte des données récupérées
        const affichage_price = document.querySelector("#price");
        const affichage_name = document.querySelector("#name");
        const affichage_description = document.querySelector("#description");
        affichage_price.innerHTML = price;
        affichage_name.innerHTML = name;
        affichage_description.innerHTML = description;

        const affichage_price1 = document.querySelector("#price1");
        const affichage_name1 = document.querySelector("#name1");
        const affichage_description1 = document.querySelector("#description1");
        affichage_price1.innerHTML = price1;
        affichage_name1.innerHTML = name1;
        affichage_description1.innerHTML = description1;

        const affichage_price2 = document.querySelector("#price2");
        const affichage_name2 = document.querySelector("#name2");
        const affichage_description2 = document.querySelector("#description2");
        affichage_price2.innerHTML = price2;
        affichage_name2.innerHTML = name2;
        affichage_description2.innerHTML = description2;

        const affichage_price3 = document.querySelector("#price3");
        const affichage_name3 = document.querySelector("#name3");
        const affichage_description3 = document.querySelector("#description3");
        affichage_price3.innerHTML = price3;
        affichage_name3.innerHTML = name3;
        affichage_description3.innerHTML = description3;

        const affichage_price4 = document.querySelector("#price4");
        const affichage_name4 = document.querySelector("#name4");
        const affichage_description4 = document.querySelector("#description4");
        affichage_price4.innerHTML = price4;
        affichage_name4.innerHTML = name4;
        affichage_description4.innerHTML = description4;
    }catch(err){
        console.log(err);
    }
});

