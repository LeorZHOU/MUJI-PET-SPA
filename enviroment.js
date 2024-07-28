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

  if (myImgSrc === "./assets/enviromentimg/en2.jpg") {
    petide.setAttribute("src", "./assets/enviromentimg/en3.jpg");
  } else if (myImgSrc === "./assets/enviromentimg/en3.jpg") {
    petide.setAttribute("src", "./assets/enviromentimg/en4.jpg");
  } else {
    petide.setAttribute("src", "./assets/enviromentimg/en2.jpg");
  }
}
setInterval(changeImage, 2000);