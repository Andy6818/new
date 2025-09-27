const gallery = document.getElementById("gallery")
const userdata = document.getElementById("user_data")

const products = [
    
{

    item_id: 1,
    name:"cable for iphone",
    image: "image/2.jpg",
},

{

    item_id: 2,
    name:"cable for iphone",
    image: "image/33641.jpg",
},


{

    item_id: 3,
    name:"cable for iphone",
    image: "image/33641.jpg",
},


{

    item_id: 4,
    name:"cable for iphone",
    image: "image/33641.jpg",
},



{

    item_id: 5,
    name:"cable for iphone",
    image: "image/33641.jpg",
},


{

    item_id: 6,
    name:"cable for iphone",
    image: "image/33641.jpg",
},


{

    item_id: 7,
    name:"ccble for iphone",
    image: "image/33641.jpg",
},


{

    item_id: 8,
    name:"ccble for iphone",
    image: "image/33641.jpg",
},


{

    item_id: 9,
    name:"cable for iphone",
    image: "image/33641.jpg",
},


{

    item_id: 10,
    name:"cable for iphone",
    image: "image/33641.jpg",
},

]




const form =[

{   
    user_name:"",
    user_lastname:"",
    input:"",

}
]

products.forEach( ({ item_id ,name,image,})=>
{
    gallery.innerHTML += 

    `<div class= "gallery-picture">
      <h2 id="name">${name}</h2>
      <img id="image"src="${image}">
      


    </div>`
})

form.forEach(({user_lastname,user_name,input,})=>{

    userdata.innerHTML += `
    <label>user_name:<input ${user_name}></label>
    <label>user_lastname:<input ${user_lastname}></label>
    `
})


