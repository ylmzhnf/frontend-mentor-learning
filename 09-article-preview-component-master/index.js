const shareButton = document.querySelector(".share-btn");
const activeButton = document.querySelector(".active-share-btn");
const closeButton = document.querySelector(".active-btn");

shareButton.addEventListener("click", function () {
  activeButton.classList.toggle("display");
});
closeButton.addEventListener("click", function () {
  activeButton.classList.toggle("display");
});
