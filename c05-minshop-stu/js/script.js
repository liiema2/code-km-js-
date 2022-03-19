// import books from "./data.js";
// console.log(books);

let books = [
  {
    id: 1,
    name: "Luật tâm thức",
    price: 220000,
    provider: "Fahasha",
  },
  {
    id: 2,
    name: "Chiến binh cầu vồng",
    price: 140000,
    provider: "Fahasha",
  },
  {
    id: 3,
    name: "Nghệ thuật tập trung",
    price: 90000,
    provider: "Tuổi trẻ",
  },
  {
    id: 4,
    name: "Bye Béo",
    price: 305000,
    provider: "Kmin Books",
  },
  {
    id: 5,
    name: "Sát thủ bán hàng",
    price: 180000,
    provider: "Fahasha",
  },
  {
    id: 6,
    name: "Hoàng tử bé",
    price: 50000,
    provider: "Kmin Books",
  },
  {
    id: 7,
    name: "Tâm lý học tội phạm",
    price: 400000,
    provider: "Kmin Books",
  },
  {
    id: 8,
    name: "Hiểu về trái tim",
    price: 130000,
    provider: "Tuổi trẻ",
  },
];


//search for books

let search= document.getElementById("search").oninput =  function(){
  let results=searchByKeyword(this.value);
  randerBook(results);
  
}

// input book
function randerBook(books){

  let list = document.getElementById("list")
  list.innerHTML = ""
  
  for(let i=0; i<books.length; i++)
  {
    let div =document.createElement("div");
    div.className = "item";
    list.appendChild(div);
    
    let img = document.createElement("img");
    img.src = `./images/0${books[i].id}.jpg`;
    div.appendChild(img);
  
    let h2 =document.createElement("h2");
    h2.innerHTML=books[i].name;
    div.appendChild(h2);
    
    let p=document.createElement("p");
    p.innerHTML=`${books[i].price} vnd`;
    div.appendChild(p);
  }

  

}

randerBook(books)

//uppercase for search

function searchByKeyword( keyword) {
  keyword = keyword.toUpperCase();
  let result = [];
  for (let i = 0; i < books.length; i++) {
    let nameUpperCase = books[i].name.toUpperCase();
    if (nameUpperCase.indexOf(keyword) != -1) {
      result.push(books[i]);
    }
  }
  return result;
}

// }

// search for money the books


function searchByPrice(min, max) {
  let result = [];
  for (let i = 0; i < books.length; i++) {
    let price = books[i].price;
    if (price >= min && price <= max) {
      result.push(books[i]);
    }
  }
  return result;
}


function searchByPriceAndKeyword(min, max, keyword) {
  keyword = keyword.toUpperCase();
  let result = [];
  for (let i = 0; i < books.length; i++) {
    let nameUpperCase = books[i].name.toUpperCase();
    let price = books[i].price;
    if (nameUpperCase.indexOf(keyword) != -1 && price >= min && price <= max) {
      result.push(books[i]);
    }
  }
  return result;
}
document.getElementById('apply-price-filter').onclick=function(){
  let min = document.getElementById("min-price").value
  let max = document.getElementById("max-price").value
  let keyword = document.getElementById("search").value;
  let result = searchByPriceAndKeyword(min, max, keyword);
  randerBook(result);
  
}


function searchByAllProvider() {
  let resultFinal = [];

  let checkBox1 = document.getElementById("provider-1");
  let searchByProvider1 = [];
  if (checkBox1.checked === true) {
    let labelText = document.getElementById("provider-1").labels[0].textContent;
    searchByProvider1 = searchByProvider(labelText);
   
    for (let i = 0; i < searchByProvider1.length; i++) {
      resultFinal.push(searchByProvider1[i]);
    }
  }

  let checkBox2 = document.getElementById("provider-2");
  let searchByProvider2 = [];
  if (checkBox2.checked === true) {
    let labelText = document.getElementById("provider-2").labels[0].textContent;
    searchByProvider2 = searchByProvider(labelText);
  
    for (let i = 0; i < searchByProvider2.length; i++) {
      resultFinal.push(searchByProvider2[i]);
    }
  }

  let checkBox3 = document.getElementById("provider-3");
  let searchByProvider3 = [];
  if (checkBox3.checked === true) {
    let labelText = document.getElementById("provider-3").labels[0].textContent;
    searchByProvider3 = searchByProvider(labelText);

    for (let i = 0; i < searchByProvider3.length; i++) {
      resultFinal.push(searchByProvider3[i]);
    }
  }

  randerBook(resultFinal);
}
document.getElementById("provider-1").onchange = function () {
  searchByAllProvider();
};

document.getElementById("provider-2").onchange = function () {
  searchByAllProvider();
};

document.getElementById("provider-3").onchange = function () {
  searchByAllProvider();
};

function searchByProvider(provider) {
  let result = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].provider === provider) {
      result.push(books[i]);
    }
  }
  return result;
}

document.getElementById("yellow").onclick = () =>{
  let header = document.getElementsByTagName("header")[0]
  header.style.background=" linear-gradient(to right,#992154,#fcbf16)"


  
}
document.getElementById("yellow").onclick = () =>{
  let header = document.getElementsByTagName("header")[0]
  header.style.background=" linear-gradient(to right,#992154,#fcbf16)"


  
}
document.getElementById("red").onclick = () =>{
  let header = document.getElementsByTagName("header")[0]
  header.style.background=" linear-gradient(to right,#fcbf16,#992154)"


  
}
document.getElementById("blue").onclick = () =>{
  let header = document.getElementsByTagName("header")[0]
  header.style.background=" linear-gradient(to right,#fcbf16,#173451)"


  
}
document.getElementById("gradient").onclick = () =>{
  let header = document.getElementsByTagName("header")[0]
  header.style.background=" linear-gradient(to right,#fcbf16,#992154)"


  
}



