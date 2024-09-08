// let packagebutton = document.getElementById("packages-btn")
// let packageslist = document.getElementById("packageslist")
// let packagecaret = document.getElementsByClassName("fa-caret-down")
// let contactcard = document.querySelectorAll(".card")
// let contactcard1 = document.getElementById("contactcard1")
// let callcard = document.getElementById("callcard")
// 

// console.log(contactcard)

// packagebutton.addEventListener("mouseover", packageHover)
// packagebutton.addEventListener("mouseleave", packageLeave)

// function packageHover(){
//     packagecaret[0].style.rotate = `360deg`
//     packageslist.style.marginTop = 0;
// }

// function packageLeave(){
//     packagecaret[0].style.rotate = `180deg`
//     packageslist.style.marginTop = `-220px`;
// }

// packageslist.addEventListener("mouseover",packageHover)
// packageslist.addEventListener("mouseleave",packageLeave)


// contactcard1.addEventListener("mouseover", function(){
//     callcard.style.display = `inline-block`
// })
// contactcard1.addEventListener("mouseleave", function(){
//     callcard.style.display = `none`
// })



// let navdown = document.getElementById("navdown");

// window.addEventListener("scroll", function(){
//     let myval = this.window.scrollY;
//     if(myval>70){
//         // navdown.style.marginTop = 0+"px"
//         navdown.style.position = "fixed"
//         navdown.style.top = 0
//     }
//     console.log(myval)
    
// })




// nav bar setting 

let aboutus = document.getElementById("contact-btn")
let myPopup = document.getElementById("myPopup")
let closepopup = document.getElementById("closepopup")
let mypopup2 = document.querySelectorAll(".popup")

aboutus.addEventListener("click", function () {
    myPopup.classList.add("show");
});
closepopup.addEventListener("click", function () {
    myPopup.classList.remove("show");
});

let nav = document.getElementById("nav");
let navcolor = "#555"
let navcolorfrom = "rgb(0 0 0 / 50%)"
window.addEventListener("scroll", function(){
  let navvalue = window.scrollY;
  if(navvalue>100){
    nav.style.background = navcolor;
  }else if(navvalue<100){
    nav.style.background = navcolorfrom;
  }
})

// window.addEventListener("click",function(event)){
//     if (event.target == myPopup) {
//         mypopup2.classList.remove("show");
//     }



// top selling start 

// let c = init("canvas"),
//   w = (canvas.width = window.innerWidth),
//   h = (canvas.height = window.innerHeight);


// class firefly{
//   constructor(){
//     this.x = Math.random()*w;
//     this.y = Math.random()*h;
//     this.s = Math.random()*2;
//     this.ang = Math.random()*2*Math.PI;
//     this.v = this.s*this.s/4;
//   }
//   move(){
//     this.x += this.v*Math.cos(this.ang);
//     this.y += this.v*Math.sin(this.ang);
//     this.ang += Math.random()*20*Math.PI/180-10*Math.PI/180;
//   }
//   show(){
//     c.beginPath();
//     c.arc(this.x,this.y,this.s,0,2*Math.PI);
//     c.fillStyle="#fddba3";
//     c.fill();
//   }
// }

// let f = [];

// function draw() {
//   if(f.length < 100){
//     for(let j = 0; j < 10; j++){
//      f.push(new firefly());
//   }
//      }

//   for(let i = 0; i < f.length; i++){
//     f[i].move();
//     f[i].show();
//     if(f[i].x < 0 || f[i].x > w || f[i].y < 0 || f[i].y > h){
//        f.splice(i,1);
//        }
//   }
// }

// let mouse = {};
// let last_mouse = {};

// canvas.addEventListener(
//   "mousemove",
//   function(e) {
//     last_mouse.x = mouse.x;
//     last_mouse.y = mouse.y;

//     mouse.x = e.pageX - this.offsetLeft;
//     mouse.y = e.pageY - this.offsetTop;
//   },
//   false
// );
// function init(elemid) {
//   let canvas = document.getElementById(elemid),
//     c = canvas.getContext("2d"),
//     w = (canvas.width = window.innerWidth),
//     h = (canvas.height = window.innerHeight);
//   c.fillStyle = "rgba(30,30,30,1)";
//   c.fillRect(0, 0, w, h);
//   return c;
// }

// window.requestAnimFrame = (function() {
//   return (
//     window.requestAnimationFrame ||
//     window.webkitRequestAnimationFrame ||
//     window.mozRequestAnimationFrame ||
//     window.oRequestAnimationFrame ||
//     window.msRequestAnimationFrame ||
//     function(callback) {
//       window.setTimeout(callback);
//     }
//   );
// });

// function loop() {
//   window.requestAnimFrame(loop);
//   c.clearRect(0, 0, w, h);
//   draw();
// }

// window.addEventListener("resize", function() {
//   (w = canvas.width = window.innerWidth),
//   (h = canvas.height = window.innerHeight);
//   loop();
// });

// loop();
// setInterval(loop, 1000 / 60);




let cardmy = document.querySelectorAll('.card')



cardmy.forEach(function(card){
  card.addEventListener("mouseover", function(){
    let imgmy = card.querySelector(".card>img");
    if(imgmy){
      imgmy.style.transform = 'scale(1.2)'
      imgmy.style.filter = 'brightness(110%)'
    }
  })
})

cardmy.forEach(function(card){
  card.addEventListener("mouseout", function(){
    let imgmy = card.querySelector(".card>img");
    if(imgmy){
      imgmy.style.transform = 'scale(1)'
      imgmy.style.filter = 'brightness(100%)'
    }
  })
})


// api data

let apidata = null;
async function fetchData() {
  try {
    let SHEET_ID = 'https://script.google.com/macros/s/AKfycbyzICs-m3FEOuZM9J3568ZrKBf5OiGUFWF5Iu_tPHpBTZTRPiQLiT1m6mlEFKLZSnus/exec';

    const response = await fetch(SHEET_ID);
    apidata = await response.json();

    console.log(apidata.data[2].Package_price)
    // let hampta = apidata.data[1].Package_price
    // console.log(hampta)
    latestPackage()
  } catch (error) {
    console.error('Error fetching data:', error);
  } 
}



function latestPackage(){
  const hamptapass_price = document.getElementById("hamptapass_price");
  const chardham_uk_price = document.getElementById("chardham_uk_price");
  const dayarabugyal_price = document.getElementById("dayarabugyal_price");
  const gaumukh_price = document.getElementById("gaumukh_price");
  const harkidoon_price = document.getElementById("harkidoon_price");
  const phulara_price = document.getElementById("phulara_price");

  if(apidata && apidata.data && apidata.data.length > 0){
    const hamptapass = apidata.data[1].Package_price;
    const chardham_uk = apidata.data[2].Package_price;
    const chardham = apidata.data[3].Package_price;
    const do_dham = apidata.data[4].Package_price;
    const dayara_bugyal = apidata.data[5].Package_price;
    const gaumukh = apidata.data[6].Package_price;
    const Harkidoon = apidata.data[7].Package_price;
    const phulara = apidata.data[8].Package_price;
    const rupinpass = apidata.data[9].Package_price;
    const spitivalley = apidata.data[10].Package_price;
    const spitishortcircuit = apidata.data[11].Package_price;
    const spiticircuittour = apidata.data[12].Package_price;
    const kedarnatha = apidata.data[13].Package_price;
    const phulararidge = apidata.data[14].Package_price;
    const do_dham_ganotriandyamunotri = apidata.data[15].Package_price;
    const winter_spiti = apidata.data[16].Package_price;
    const mentok_kangri_trek = apidata.data[17].Package_price;
    const northsikkim = apidata.data[18].Package_price;
    const kuari_pass_trek = apidata.data[19].Package_price;
    const skkim_darjelling = apidata.data[20].Package_price;
    const ladakh_road_trip = apidata.data[21].Package_price;

    hamptapass_price.innerText = hamptapass;
    chardham_uk_price.innerText = chardham_uk;
    dayarabugyal_price.innerText = dayara_bugyal;
    gaumukh_price.innerText = gaumukh;
    harkidoon_price.innerText = Harkidoon;
    phulara_price.innerText = phulara;


    
  }else{
    console.log("Data Not fetch")
  }
}

fetchData();

// console.log(document.getElementById("phulara_price"))

