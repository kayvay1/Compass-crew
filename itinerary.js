
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




// heading slide bar 

const slider = document.getElementById('slider');
  const leftArrow = document.getElementById('left-arrow');
  const rightArrow = document.getElementById('right-arrow');
  let currentIndex = 0;

  function showSlide(index) {
    const offset = -index * 100 + '%';
    slider.style.transform = 'translateX(' + offset + ')';
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slider.children.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
    showSlide(currentIndex);
  }


  setInterval(nextSlide, 5000);

  leftArrow.addEventListener('click', prevSlide);
  rightArrow.addEventListener('click', nextSlide);







//   myGallary 


  let imgindex = 0;
  const imgslider = document.getElementById('imgslider');
  const cards = document.querySelectorAll('.card');

  function openImage(imagePath){
    const modal1 = document.createElement('div');
    modal1.className = 'modal1';
    modal1.innerHTML = `<img src="${imagePath}" alt="Modal Image" onclick="closeImage()">`;
    document.body.appendChild(modal1);
  }

  function closeImage(){
    const modal1 = document.querySelector('.modal1');
    if (modal1) {
        modal1.parentNode.removeChild(modal1);
    }
  }

  function imgSlide(index) {
    const offset = -index * 100 + '%';
    imgslider.style.transform = 'translateX(' + offset + ')';
    imgindex = index;
  }

  function imgnextSlide() {
      imgindex = (imgindex + 1) % cards.length;
      imgSlide(imgindex);
  }

  function imgprevSlide() {
      imgindex = (imgindex - 1 + cards.length) % cards.length;
      imgSlide(imgindex);
  }





  // api data 

  // async function fetchData() {
  //   try {
  //     let SHEET_ID = 'https://script.google.com/macros/s/AKfycbyzICs-m3FEOuZM9J3568ZrKBf5OiGUFWF5Iu_tPHpBTZTRPiQLiT1m6mlEFKLZSnus/exec';
  
  //     const response = await fetch(SHEET_ID);
  //     const data = await response.json();
  
  //     console.log(data.data[1].Package_price);
  //     let hampta = data.data[1].Package_price
  //     console.log(hampta)
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }
  
  // fetchData();