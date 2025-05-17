// import "./index.html";
// import "./style.css";

let colorInputBox = document.getElementById("color-input");
colorInputBox.placeholder = "test"
colorInputBox.borderRadius = (colorInputBox.offsetHeight / 2)

colorInputBox.addEventListener("input", function(event) {
    console.log(event.target.value);
})