// Lấy các button group
let result = document.getElementById("result");
let btnGroups = document.getElementsByClassName("btn-group");
let btnWindows = btnGroups[0].children;
let btnScreens = btnGroups[1].children;
let btnLocations = btnGroups[2].children;
let btnHistories = btnGroups[3].children;
let btnNavigators = btnGroups[4].children;
let btnTimings = btnGroups[5].children;

// Thử nghiệm các hàm xử lý window
// ========================================================================

// width x height
btnWindows[0].addEventListener("click", function () {
  // code here...
 let h= window.innerHeight;
 let w= window.innerWidth;
let a= document.getElementById("result");
a.innerHTML= "w x h của window ="+ w +"x"+h;
});

let myWindow;

// open
btnWindows[1].addEventListener("click", function () {
  let width = window.prompt("Nhập chiều ngang của cửa sổ.");
  let height = window.prompt("Nhập chiều cao của cửa sổ.");
  myWindow = window.open(
    "index.html",
    "New Window",
    "width=" + width + ",height=" + height
  );
  myWindow.document.write("Kmin Academy");
});

// close
btnWindows[2].addEventListener("click", function () {
  let wclose=window.close(index.html);
});

// move to
btnWindows[3].addEventListener("click", function () {
  myWindow.moveTo(10,10);
});

// resize to
btnWindows[4].addEventListener("click", function () {
  myWindow.resizeTo(100,100);
});

// Thử nghiệm các hàm xử lý screen
// ========================================================================

// width x height
btnScreens[0].addEventListener("click", function () {
  let width=screen.width;
  let height=screen.height;
  let a= document.getElementById("result");
a.innerHTML= width +"x"+height;
});

// availWidth x availHeight
btnScreens[1].addEventListener("click", function () {
  let a= document.getElementById("result");
  a.innerHTML= "availWidth x availHeight (screen)= "+screen.width+"x"+screen.height ;
});

// colorDepth
btnScreens[2].addEventListener("click", function () {
  let a= document.getElementById("result");
  a.innerHTML="Color depth = " +screen.colorDepth;
  
});

// Thử nghiệm các hàm xử lý location
// ========================================================================

// href
btnLocations[0].addEventListener("click", function () {
  let href=location.href;
  let a= document.getElementById("result")
  a.innerHTML="href = "+href;
});

// hostname
btnLocations[1].addEventListener("click", function () {
  // code here...
 let hostname= location.hostname ;
 let a= document.getElementById("result")
 a.innerHTML="hostname = "+hostname;
});

// pathname
btnLocations[2].addEventListener("click", function () {
  let pathname= location.pathname;
  let a= document.getElementById("result")
  a.innerHTML="pathname = "+pathname;
});

// protocol
btnLocations[3].addEventListener("click", function () {
  let protocol = location.protocol;
  let a= document.getElementById("result")
  a.innerHTML="protocol = "+protocol;
});

// port
btnLocations[4].addEventListener("click", function () {
  let port = location.port;
  let a= document.getElementById("result")
  a.innerHTML="port = "+port;
});

// Thử nghiệm các hàm xử lý history
// ========================================================================

// back
btnHistories[0].addEventListener("click", function () {
  // code here...
  

  history.back()

});

// forward
btnHistories[1].addEventListener("click", function () {
  history.forward()
});

// Thử nghiệm các hàm xử lý navigator
// ========================================================================

// language
btnNavigators[0].addEventListener("click", function () {
  // code here...

  let language=   navigator.language;
  let a= document.getElementById("result")
  a.innerHTML="  language = "+  language;
});

// onLine
btnNavigators[1].addEventListener("click", function () {
  let  online = navigator.onLine;
  let a= document.getElementById("result")
  a.innerHTML="  online = "+  online;
});

// cookieEnabled
btnNavigators[2].addEventListener("click", function () {
  let  cookieEnabled = navigator.cookieEnabled;
  let a= document.getElementById("result")
  a.innerHTML="  cookieEnabled = "+  cookieEnabled;
});

// Thử nghiệm các hàm xử lý Timing
// ========================================================================

let timeoutId;
btnTimings[0].addEventListener("click", function () {
  // code here...
  



});
btnTimings[1].addEventListener("click", function () {
 clearTimeout(mysettimeout);
});

let intervalId;
btnTimings[2].addEventListener("click", function () {
 

  var today = new Date();
   
   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  
  let p ;
 
   document.getElementById("result").innerHTML = time;

});
btnTimings[3].addEventListener("click", function () {
  // code here...
});
