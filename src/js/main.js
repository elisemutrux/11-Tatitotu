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

var checkAllTrigger = document.querySelector(".check-all");
var checkboxes = document.querySelectorAll(".switch input");

var checkAll = function () {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = true;
  });
};

checkAllTrigger.addEventListener("click", checkAll);

var checkRemoveTrigger = document.querySelector(".check-none");

var checkRemove = function () {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
};

checkRemoveTrigger.addEventListener("click", checkRemove);
