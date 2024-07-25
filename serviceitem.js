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
    petide.setAttribute("src", "./assets/serviceimg/002.png");
  } else if (myImgSrc === "./assets/serviceimg/002.png") {
    petide.setAttribute("src", "./assets/serviceimg/003.png");
  } else if (myImgSrc === "./assets/serviceimg/003.png") {
    petide.setAttribute("src", "./assets/serviceimg/005.png");
  } else if (myImgSrc === "./assets/serviceimg/005.png") {
    petide.setAttribute("src", "./assets/serviceimg/006.png");
  } else if (myImgSrc === "./assets/serviceimg/006.png") {
    petide.setAttribute("src", "./assets/serviceimg/007.png");
  } else if (myImgSrc === "./assets/serviceimg/007.png") {
    petide.setAttribute("src", "./assets/serviceimg/008.png");
  } else if (myImgSrc === "./assets/serviceimg/008.png") {
    petide.setAttribute("src", "./assets/serviceimg/009.png");
  } else if (myImgSrc === "./assets/serviceimg/009.png") {
    petide.setAttribute("src", "./assets/serviceimg/010.png");
  } else {
    petide.setAttribute("src", "./assets/serviceimg/001.png");
  }
}
setInterval(changeImage, 2000);
