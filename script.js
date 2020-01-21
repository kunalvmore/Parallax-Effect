const parallax = document.getElementById("parallax");

window.addEventListener("scroll",function (){
let offfset = window.pageYOffset;
parallax.style.backgroundPositionY = offfset * 0.7 + "px";
})