document.getElementById("toggleModel").addEventListener("click", function() {
    let modelViewer = document.getElementById("viewer");
    let currentModel = modelViewer.getAttribute("src");

    if (currentModel.includes("obj2red.glb")) {
        modelViewer.setAttribute("src", "assets/obj2blu.glb");
    } else {
        modelViewer.setAttribute("src", "assets/obj2red.glb");
    }
});
