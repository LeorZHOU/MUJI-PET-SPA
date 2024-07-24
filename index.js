// let petide = document.querySelector("#petide");

// petide.addEventListener("mouseover", () => {
//   let myImgSrc = petide.getAttribute("src"); // Get the current src attribute value

//   if (myImgSrc === "./assets/petideimg.jpg") {
//     petide.setAttribute("src", "./assets/petideimg2.jpg"); // Set the new src attribute
//   } else if (myImgSrc === "./assets/petideimg2.jpg") {
//     petide.setAttribute("src", "./assets/petideimg3.jpg");
//   } else {
//     petide.setAttribute("src", "./assets/petideimg.jpg");
//   }
// });
let petide = document.querySelector("#petide");

function changeImage() {
  let myImgSrc = petide.getAttribute("src");

  if (myImgSrc === "./assets/MUJI04.jpg") {
    petide.setAttribute("src", "./assets/MUJI02.jpg");
  } else if (myImgSrc === "./assets/MUJI02.jpg") {
    petide.setAttribute("src", "./assets/MUJI01.jpg");
  } else if (myImgSrc === "./assets/MUJI01.jpg") {
    petide.setAttribute("src", "./assets/MUJI03.jpg");
  } else {
    petide.setAttribute("src", "./assets/MUJI04.jpg");
  }
}
setInterval(changeImage, 2000);

document.addEventListener("DOMContentLoaded", () => {
  let dialog = document.querySelector(".dialog");
  let btn = document.querySelector(".btn");
  btn.addEventListener("click", () => {
    dialog.style.display = "block";
  });
  let closeDialog = document.querySelector(".closeDialog");
  closeDialog.addEventListener("click", () => {
    dialog.style.display = "none";
    // console.log("Hello");
  });
});
