const modal = document.querySelector(".navbar__mobil-list");
const body = document.querySelector("body");
const btn = document.querySelector(".navbar__btn");

btn.addEventListener("click", () => {
  modal.classList.toggle("open");
  body.classList.toggle("overflow");
  console.log("sefefwef");
});
