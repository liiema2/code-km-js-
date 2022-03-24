


function renderCats(cats){
let catList = document.getElementById("catList")
for(let i=0; i<cats.length; i++)
{
    if (cats[i].image === undefined || cats[i].image.url === undefined) { // loi data
        console.log(cats[i]);
        continue;}

    let div = document.createElement('div');
    div.style.border = '1px solid gray';
    div.style.margin="0 auto 30px auto";
    div.style.width = "500px";
    catList.appendChild(div);
    let img = document.createElement('img');
    
    img.src = cats[i].image.url;
    img.style.width = '500px';
    div.appendChild(img);

    let p=document.createElement('div');
    p.innerHTML=cats[i].name
    // p.style.padding="15px"
    p.style.paddingLeft="15px"
    p.style.paddingTop="15px"
    p.style.color="black"
    div.appendChild(p);

    let origin =document.createElement('b')
    origin.innerHTML=cats[i].origin
    origin.style.paddingLeft="15px"
    origin.style.paddingTop="15px"
    div.appendChild(origin)

    let temperament=document.createElement('div')
    temperament.innerHTML= "Temperament: "+cats[i].temperament
    temperament.style.paddingLeft="15px"
    // temperament.style.paddingTop="15px"
    div.appendChild(temperament)

    let life_span=document.createElement('div')
    life_span.innerHTML= "life_span: "+cats[i].life_span
    life_span.style.paddingLeft="15px"
    // temperament.style.paddingTop="15px"
    div.appendChild(life_span)

    let weight=document.createElement('div')
    weight.innerHTML= "weight: "+cats[i].weight.metric
    weight.style.paddingLeft="15px"
    // temperament.style.paddingTop="15px"
    div.appendChild(weight)

    let Description=document.createElement('div')
    Description.innerHTML= "Description"
    Description.style.paddingLeft="15px"
    // temperament.style.paddingTop="15px"
    div.appendChild(Description)

    let Description1=document.createElement('div')
    Description1.innerHTML= cats[i].description
    Description1.style.paddingLeft="15px"
    // temperament.style.paddingTop="15px"
    div.appendChild(Description1)
}




}


// console.log(p)

fetch('https://api.thecatapi.com/v1/breeds') // Gọi 1 GET request
.then(response => response.json()) // Xử lý kết quả trả về
.then(data => renderCats(data));
// renderCats(cats);