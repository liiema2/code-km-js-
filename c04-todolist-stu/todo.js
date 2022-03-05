function newElement()
{   
 
    let b= document.getElementById("myInput").value
    let c=document.getElementsByTagName("li")
   
   let ul = document.getElementsByTagName("ul")[0]
     let li=document.createElement("li")

    ul.appendChild(li);
    c[c.length-1].innerHTML=b;
    
    
}

