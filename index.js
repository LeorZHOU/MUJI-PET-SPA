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
  let myImgSrc = petide.getAttribute("src"); // Get the current src attribute value

  if (myImgSrc === "./assets/petideimg.jpg") {
    petide.setAttribute("src", "./assets/petideimg2.jpg"); // Set the new src attribute
  } else if (myImgSrc === "./assets/petideimg2.jpg") {
    petide.setAttribute("src", "./assets/petideimg3.jpg");
  } else if (myImgSrc === "./assets/petideimg3.jpg") {
    petide.setAttribute("src", "./assets/petideimg4.jpg");
  } else {
    petide.setAttribute("src", "./assets/petideimg.jpg");
  }
}

// Set the interval to change the image every 2 seconds (2000 milliseconds)
setInterval(changeImage, 2000);
