const sendButton = document.querySelector(".sendbtn");
const commentinputBox = document.querySelector(".commentbox");
const commentArea = document.querySelector(".comment-areas ul");
//comments Functionality
const comments = (text) => {
  if (text) {
    let uservalue = `
     <li class="commentslist">
     <p>${text}</p>
    </li>
     `;
    commentArea.innerHTML += uservalue;
    commentinputBox.value = "";
  } else {
    alert("You must write anything!!!");
  }
};
sendButton.addEventListener("click", () => {
  comments(commentinputBox.value);
});

commentArea.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteoption")) {
    e.target.parentElement.remove();
  }
});

//making slider
const showImage = document.querySelector(".image-for-show");
const imageThumbnails = document.querySelectorAll(".image-thumnail img");

imageThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    showImage.src = e.target.src;
    e.target.classList.toggle("imageBorder");
  });
});

//Main slidr functonality
const previousArrow = document.querySelector(".leftArrow");
const nextArrow = document.querySelector(".rightArrow");

let images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
];

let counting = 0;

nextArrow.addEventListener("click", () => {
  counting++;
  if (counting >= images.length) {
    counting = 0;
    showImage.src = images[counting];
  } else {
    showImage.src = images[counting];
  }
});

previousArrow.addEventListener("click", () => {
  counting--;
  if (counting < 0) {
    counting = images.length - 1;
    showImage.src = images[counting];
  } else {
    showImage.src = images[counting];
  }
});

//Footer slider Functionality
const thumbnailpreviousArrow = document.querySelector(".thumbnailleftArrow");
const thumbnailnextArrow = document.querySelector(".thumbnailrightArrow");

thumbnailnextArrow.addEventListener("click", () => {
  counting++;
  if (counting >= images.length) {
    counting = 0;
    showImage.src = images[counting];
  } else {
    showImage.src = images[counting];
  }
});

thumbnailpreviousArrow.addEventListener("click", () => {
  counting--;
  if (counting < 0) {
    counting = images.length - 1;
    showImage.src = images[counting];
  } else {
    showImage.src = images[counting];
  }
});
// Zoom In and Out Functionalty
const plus = document.querySelector("#zoomIn");
const minus = document.querySelector("#zoomOut");

plus.addEventListener("click", () => {
  var zoomIn = document.getElementById("mainImg");
  var currWidth = zoomIn.clientWidth;
  zoomIn.style.width = currWidth + 300 + "px";
});
minus.addEventListener("click", () => {
  var zoomOut = document.getElementById("mainImg");
  var currWidth = zoomOut.clientWidth;
  zoomOut.style.width = currWidth - 300 + "px";
});
//Download Functionality
const download = document.querySelector("#download");

function prepHref(linkElement) {
  const mainImg = document.getElementById("mainImg");
  var myImage = mainImg;
  linkElement.href = myImage.src;
}
