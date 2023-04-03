const controls = document.querySelectorAll(".control");

let currentItem = 0;

// let count = 1;
// document.getElementById(".item").checked = true;


// // Passar imagens automaticamente
// setInterval(function () {
//     nextImage();
// }, 4000)

// function nextImage() {
//     count++;
//     if (count > 3) {
//         count = 1;
//     }

//     document.getElementById("item" + count).checked = true;

// }


const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
control.addEventListener("click", (e) => {
     isLeft = e.target.classList.contains("arrow-left");

     if (isLeft) {
       currentItem -= 1;
     } else {
       currentItem += 1;
     }

     if (currentItem >= maxItems) {
       currentItem = 0;
     }

    if (currentItem < 0) {
       currentItem = maxItems - 1;
     }

     items.forEach((item) => item.classList.remove("current-item"));

     items[currentItem].scrollIntoView({
         behavior: "smooth",
         inline: "center"
       });
  
       items[currentItem].classList.add("current-item");
     });
   });