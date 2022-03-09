let b=0;
 let slideshow = document.getElementsByClassName("slides fade");
 
 let c =slideshow.children
 
let a=slideshow

 for(let i = 0; i < a.length; ++i)
 {
    slideshow[i].style.display= "none";
 }
console.log(slideshow);
hien(b);
// an(b)
 function hien(b){
     slideshow[b].style.display="block";
 }
 function an(b){
    slideshow[b].style.display= "none";
 }
 function hienThiSlideKeTiep(){
    an(b);
    b++;
    if(b>=a.length-1)
    b=0;
    hien(b);
 }
 function hienThiSlideTruocDo(){
    an(b);
    b--;
    if(b<0)
      b=a.length-1;

    hien(b);
   
  
    
 }