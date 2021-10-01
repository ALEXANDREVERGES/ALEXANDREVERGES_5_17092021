//Création de key localstorage pour sstocker les données

//localStorage.setItem("_id0","5be9c8541c9d440000665243");
//localStorage.setItem("_id1","5beaa8bf1c9d440000a57d94");
//localStorage.setItem("_id2","5beaaa8f1c9d440000a57d95");
//localStorage.setItem("_id3","5beaabe91c9d440000a57d96");
//localStorage.setItem("_id4","5beaacd41c9d440000a57d97");

//localStorage.setItem("name0","Norbert");
//localStorage.setItem("name1","Arnold");
//localStorage.setItem("name2","Lenny and Carl");
//localStorage.setItem("name3","Gustav");
//localStorage.setItem("name4","Garfunkel");

//localStorage.setItem("price0","2900");
//localStorage.setItem("price1","3900");
//localStorage.setItem("price2","5900");
//localStorage.setItem("price3","4500");
//localStorage.setItem("price4","5500");

//localStorage.setItem("imageUrl0","http://localhost:3000/images/teddy_1.jpg");
//localStorage.setItem("imageUrl1","http://localhost:3000/images/teddy_2.jpg");
//localStorage.setItem("imageUrl2","http://localhost:3000/images/teddy_3.jpg");
//localStorage.setItem("imageUrl3","http://localhost:3000/images/teddy_4.jpg");
//localStorage.setItem("imageUrl4","http://localhost:3000/images/teddy_5.jpg");

//localStorage.setItem("description0","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
//localStorage.setItem("description1","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
//localStorage.setItem("description2","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
//localStorage.setItem("description3","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
//localStorage.setItem("description4","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");


function afficher(_id0, name0, price0, imageUrl0, description0){
    console.log('_id0:' + _id0);
    console.log('name0:' + name0);
    console.log('price0:' + price0);
    console.log('imageUrl0:' + imageUrl0);
    console.log('description0:' + description0);   
};
afficher('5be9c8541c9d440000665243','Norbert','2900','http://localhost:3000/images/teddy_1.jpg','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

function afficher1(_id1,name1, price1, imageUrl1, description1){
    console.log('_id1:' + _id1);
   console.log('name1:' + name1);
    console.log('price1:' + price1);
    console.log('imageUrl1:' + imageUrl1);
    console.log('description1:' + description1);   
};
afficher1('5beaa8bf1c9d440000a57d94','Arnold','3900','http://localhost:3000/images/teddy_2.jpg','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

function afficher2(_id2,name2, price2, imageUrl2, description2){
    console.log('_id2:' + _id2);
    console.log('name2:' + name2);
    console.log('price2:' + price2);
    console.log('imageUrl2:' + imageUrl2);
    console.log('description2:' + description2);
};
afficher2('5beaaa8f1c9d440000a57d95','Lenny and Carl','5900','http://localhost:3000/images/teddy_3.jpg','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');



function afficher3(_id3,name3, price3, imageUrl3, description3){
    console.log('_id3:' + _id3);
    console.log('name3:' + name3);
    console.log('price3:' + price3);
    console.log('imageUrl3:' + imageUrl3);
    console.log('description3:' + description3);   
};
afficher3('5beaabe91c9d440000a57d96','Gustav','4500','http://localhost:3000/images/teddy_4.jpg','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');



function afficher4(_id4,name4, price4, imageUrl4, description4){
    console.log('_id4:' + _id4);
    console.log('name4:' + name4);
    console.log('price4:' + price4);
    console.log('imageUrl4:' + imageUrl4);
    console.log('description4:' + description4);   
};
afficher4('5beaacd41c9d440000a57d97','Garfunkel','5500','http://localhost:3000/images/teddy_5.jpg','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');





//récupération ID avec URL seach params








//fetch('http://localhost:3000/api/teddies')
//.then(res => res.json())
//.then(data =>  data[0]._id)
//.catch(error => alert("Erreur : " + error));




//------------------------------------------

//const API = fetch('http://localhost:3000/api/teddies');
//dataAPI.then(async (resData) => {
   // const res = await resData.json();
    //console.log(res);

   // try{
        //const afficher = res[0]._id;
       //console.log(afficher);
       //const affichage_afficher = document.querySelector("#article");
        //affichage_afficher.innerHTML = article;
    //}catch(err){
       // console.log(err);
//}
//});
