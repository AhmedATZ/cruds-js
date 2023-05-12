let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");

let mood ='create';
let tmb;

// get total

function getTotal()
{
    if (price.value != ''){
        let result = (+price.value + +taxes.value + +ads.value ) - +discount.value ;
        total.innerHTML=result;
        total.style.background='#040';
    } else{
        total.innerHTML='';
        total.style.background='#a00d02';
    }
}

// create prodact

let datepro;
if (localStorage.product != null){
    datepro = JSON.parse(localStorage.product)
} else{
    datepro =[];
}

submit.onclick = function(){
    let newpro ={
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    }

    if(mood==='create'){
        if(newpro.count > 1){
        for(let i = 0 ; i < newpro.count ; i++){
            datepro.push(newpro);
        }
    }else{
        datepro.push(newpro);
    }

    }else{
        datepro[   tmb   ]=newpro;
        mood='create';
        submit.innerHTML='create'
        count.style.display='block';
    }

    

    
    localStorage.setItem('product', JSON.stringify(datepro)  );
    cleardata();
    showdata();
    console.log(datepro);
}

// clear inputs

function cleardata(){
    title.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.innerHTML='';
    count.value='';
    category.value='';
}

//read 

function showdata(){
let table ='';
for( let i =0 ; i < datepro.length;i++){
    table += `<tr>
    <td> ${i} </td>
    <td> ${datepro[i].title}</td>
    <td>${datepro[i].price} </td>
    <td>${datepro[i].taxes} </td>
    <td${datepro[i].ads} </td>
    <td>${datepro[i].discount}</td>
    <td>${datepro[i].total} </td>
    <td>${datepro[i].count} </td>
    <td>${datepro[i].category} </td>
    <td><button onclick="updatedata(${i})" id="update">update</button></td>
    <td><button onclick="deletedate( ${i} )" id="delete">delete</button></td>
    </tr> `;
}
document.getElementById('tbody').innerHTML=table;
let btndelete=document.getElementById('deleteall');
if(datepro.length>0){
btndelete.innerHTML=`
<button onclick="deleteAll()">delete All (${datepro.length})</button>
`
}else{
    btndelete.innerHTML='';
}
}
showdata();

//delete

function deletedate(i){
datepro.splice(i,1);
localStorage.product=JSON.stringify(datepro);
showdata();
}

function deleteAll(){
    localStorage.clear()
    datepro.splice(0)
    showdata()
}

//update

function updatedata(i){
    title.value=datepro[i].title;
    price.value=datepro[i].price;
    taxes.value=datepro[i].taxes;
    ads.value=datepro[i].ads;
    discount.value=datepro[i].discount;
    getTotal()
    count.style.display='none';
    category.value=datepro[i].category;
    submit.innerHTML='update';
    mood = 'update';
    tmb=i;
    

}

















//search
//clean data



