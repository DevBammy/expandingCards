const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    removeClass();
    box.classList.add("active");
  });
});

function removeClass() {
  boxes.forEach((box) => {
    box.classList.remove("active");
  });
}
