

var numBtns = document.querySelector(".numBtns");
var nextBtn = document.querySelector(".nextBtn");
var container = document.querySelector(".imgscontainer");
var carouselEls = document.querySelectorAll(".card");
var closeBtns = document.querySelectorAll(".btn-close");

// *** put all the button elements into an array
var btns = document.querySelectorAll(".numBtns button");

var IMGS_NUM = container.children.length;
var NUM_IMG_PER_SLIDE = 3;
var currentImgIndex = 0;

// *** for tracking the current page index
var currentPage = 0;

numBtns.addEventListener("click", handleNumberClick);
nextBtn.addEventListener("click", handleNextClick);

// add the click handler to each carousel item
for (var elIdx = 0; elIdx < carouselEls.length; elIdx++) {
  carouselEls[elIdx].addEventListener("click", handleExpand);
}

for (var btnIdx = 0; btnIdx < closeBtns.length; btnIdx++) {
  closeBtns[btnIdx].addEventListener("click", handleClose);
}


// On click we append the expanded class to the element
function handleExpand(event) {
  event.preventDefault();
  event.stopPropagation();
  
  if (event.currentTarget) {
    event.currentTarget.classList.add('expanded');
    // document.getElementById("hide").style.display = "none";

  }
}

function handleClose(event) {
  event.preventDefault();
  event.stopPropagation();
  
  if (event.currentTarget) {
    event.currentTarget.parentElement.classList.remove('expanded')
    // document.getElementById("hide").style.display = "block";

  }
}

function handleNumberClick(event) {
  var btnNumText = event.target.innerText;
  currentImgIndex = (parseInt(btnNumText) - 1) * NUM_IMG_PER_SLIDE;
  goToImgNum(currentImgIndex);
}

function handleNextClick() {
  if (currentImgIndex + NUM_IMG_PER_SLIDE >= IMGS_NUM) {
    return;
  }
  currentImgIndex += NUM_IMG_PER_SLIDE;
  goToImgNum(currentImgIndex);
}

function goToImgNum(index) {
  // *** calculate current page
  currentPage = index / NUM_IMG_PER_SLIDE;

  // *** logging just to check which image and page we are on
  console.log(currentPage);

  // *** remove the 'current' class from all buttons
  btns.forEach((btn) => btn.classList.remove("current"));

  // *** add 'current' class to button for this page
  btns[currentPage].classList.add("current");

  container.children[index].scrollIntoView({
    behavior: "smooth",
    inline: "start"
  });
}