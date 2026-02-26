// 1
const sliderRef = document.querySelector(".slider__input");
const photoRef = document.querySelector(".slider__image");

sliderRef.addEventListener("input", _.debounce(() => {
  photoRef.style.maxWidth = sliderRef.value * 5 + "px";}, 500));

// 2
const divRef = document.querySelector("#box");


 window.addEventListener("mousemove", _.debounce((event)=>{
  const X = event.clientX;
  const Y = event.clientY;
  divRef.style.left = X  + "px";
  divRef.style.top = Y + "px";
}, 100 ))

