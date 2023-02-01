let dropdown = document.getElementById("dropdown");
let productos = document.querySelector("header nav a");

productos.addEventListener("click", function() {
  dropdown.classList.toggle("show");
});
