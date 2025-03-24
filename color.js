const colorToggleButton = document.getElementById("color-toggle");
const modelViewer = document.getElementById("modelViewer");

let isRed = true;

colorToggleButton.addEventListener("click", () => {
  if (isRed) {
    modelViewer.setAttribute("src", "assets/obj2blu.glb");
  } else {
    modelViewer.setAttribute("src", "assets/obj2red.glb");
  }
  isRed = !isRed;
});
