fetch('https://api.escuelajs.co/api/v1/products').then((response)=>{
    console.log(response);
return response.json();
}).then((value)=>{
    console.log(value);

    let data = "";
    value.map((values,key)=>{
if (key < 12){
        data+=  `<div class="cards" >
        <div class="Images">
         <img src="${values.category.image} " alt="" class="Image">
        </div>
        <div class="Name-Price">
            <h5>${values.title}</h5>
            <p>${values.price}$</p>
        </div>
    </div>
     `
 } });
    document.getElementById('APIcards').innerHTML = data;
}).catch((err)=>{
    alert(err);
})