const boxes = document.querySelectorAll(".scroll-el");

console.log("testing....");

checkBoxes();

window.onscroll = checkBoxes
// window.addEventListener("scroll", checkBoxes);
function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
