var saveButton = document.querySelector(".save");

saveButton.addEventListener("click", function () {
  saveButton.classList.add("is-open");
});

var excerciceOpen = document.querySelector(".excercer-button");
var excerciceBox = document.querySelector(".excercice-body");
var excerciceClose = document.querySelector(".excercice-close");

excerciceOpen.addEventListener("click", function () {
  excerciceBox.classList.add("is-open");
});

excerciceClose.addEventListener("click", function () {
  excerciceBox.classList.remove("is-open");
});
