const modelViewer = document.querySelector("model-viewer");

window.switchModel = (element, modelName) => {
  const base = "assets/" + modelName;
  modelViewer.src = base + '.glb';
  modelViewer.poster = base + '.webp';
  const slides = document.querySelectorAll(".slide");
  slides.forEach((el) => { el.classList.remove("selected"); });
  element.classList.add("selected");
};

document.querySelector(".slider").addEventListener('beforexrselect', (ev) => {
  ev.preventDefault(); // Prevent slider interaction from affecting the AR scene.
});
