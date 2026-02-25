// 1
const sliderRef = document.querySelector(".slider__input");
const photoRef = document.querySelector(".slider__image");

sliderRef.addEventListener("input", _.debounce(() => {
  photoRef.style.maxWidth = sliderRef.value * 5 + "px";}, 500));

// 2
const divRef = document.querySelector("#box");
 window.addEventListener("mousemove", _.debounce(moveBox, 1000, {



}))
function moveBox() {

}