document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    const openIcon = menuBtn.querySelector('.open');
    const closeIcon = menuBtn.querySelector('.close');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('show');
        openIcon.classList.toggle('hide');
        closeIcon.classList.toggle('show');
    });
});

let petide = document.querySelector("#petide");

function changeImage() {
  let myImgSrc = petide.getAttribute("src");

  if (myImgSrc === "./assets/serviceimg/001.png") {
    petide.setAttribute("src", "./assets/serviceimg/002.jpg");
  } else if (myImgSrc === "./assets/serviceimg/002.jpg") {
    petide.setAttribute("src", "./assets/serviceimg/003.jpg");
  } else if (myImgSrc === "./assets/serviceimg/003.jpg") {
    petide.setAttribute("src", "./assets/serviceimg/005.jpg");
  } else if (myImgSrc === "./assets/serviceimg/005.jpg") {
    petide.setAttribute("src", "./assets/serviceimg/006.jpg");
  } else if (myImgSrc === "./assets/serviceimg/006.jpg") {
    petide.setAttribute("src", "./assets/serviceimg/007.jpg");
  } else if (myImgSrc === "./assets/serviceimg/007.jpg") {
    petide.setAttribute("src", "./assets/serviceimg/008.jpg");
  } else if (myImgSrc === "./assets/serviceimg/008.jpg") {
    petide.setAttribute("src", "./assets/serviceimg/009.jpg");
  } else if (myImgSrc === "./assets/serviceimg/009.jpg") {
    petide.setAttribute("src", "./assets/serviceimg/010.jpg");
  } else if (myImgSrc === "./assets/serviceimg/010.jpg"){
    petide.setAttribute("src", "./assets/serviceimg/011.jpg");
  } else if (myImgSrc === "./assets/serviceimg/011.jpg"){
    petide.setAttribute("src", "./assets/serviceimg/012.jpg");
  } else{
    petide.setAttribute("src", "./assets/serviceimg/001.png");
  }
}
setInterval(changeImage, 2000);
