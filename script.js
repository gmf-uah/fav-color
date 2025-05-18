// import "./index.html";
// import "./style.css";

const fuse = new Fuse(cssColors)
console.log(fuse.search("antiq"))

let colorInputBox = document.getElementById("color-input");
colorInputBox.placeholder = cssColors[Math.floor(Math.random() * cssColors.length)];
colorInputBox.borderRadius = (colorInputBox.offsetHeight / 2)

colorInputBox.addEventListener("input", function(event) {

    console.log(event.target.value);
})