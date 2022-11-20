const modal = document.querySelector("#myModal");
const btn = document.querySelectorAll(".btn");
const closeModal = document.getElementsByClassName("modalClose")[0];

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    modal.style.display = "block";
  });
}
btn.onclick = function () {
  modal.style.display = "block";
};
closeModal.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
