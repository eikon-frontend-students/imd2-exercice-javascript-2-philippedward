var box = document.querySelector(".change-color");

box.addEventListener("click", function () {
  box.style.backgroundColor = "blue";
});

var toggleBox = document.querySelector(".toggle-color");

let isRed = false;

toggleBox.addEventListener("click", () => {
  if (isRed) {
    toggleBox.style.backgroundColor = "orange";
  } else {
    toggleBox.style.backgroundColor = "red";
  }
  isRed = !isRed;
});

var triggerBox = document.querySelector(".trigger");
var targetBox = document.querySelector(".target");

let isVisible = true;

triggerBox.addEventListener("click", () => {
  if (isVisible) {
    targetBox.style.display = "none";
  } else {
    targetBox.style.display = "block";
  }
  isVisible = !isVisible;
});

var triggerAll = document.querySelector(".trigger-all");

triggerAll.addEventListener("click", () => {
  var box = document.querySelector(".change-color");
  if (box) {
    box.style.backgroundColor = "blue";
  }

  var toggleBox = document.querySelector(".toggle-color");
  if (toggleBox) {
    toggleBox.style.backgroundColor = "red";
  }
});

var triggerSelf = document.querySelector(".trigger-all-self");

triggerSelf.addEventListener("click", () => {
  triggerSelf.style.backgroundColor = "green";

  var box = document.querySelector(".change-color");
  if (box) {
    box.style.backgroundColor = "blue";
  }

  var toggleBox = document.querySelector(".toggle-color");
  if (toggleBox) {
    toggleBox.style.backgroundColor = "red";
  }
});
