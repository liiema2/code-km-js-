let b=0;
 let slideshow = document.getElementsByClassName("slides fade");
let a=slideshow
 for(let i = 0; i < a.length; ++i)
 {
    slideshow[i].style.display= "none";
 }
  

hien(b);
 function hien(b){
     slideshow[b].style.display="block";
 }
 function an(b){
    slideshow[b].style.display = "none";
 }
 function hienThiSlideKeTiep(b){
    an(b);
    b++;
    if(t>=a)
    t=0;
    hien(b);
 }
 function hienThiSlideTruocDo(b){
    an(b);
    b--;
    if(t>=a)
    t=a;
    hien(b);
 }
console.log(slideshow[b])