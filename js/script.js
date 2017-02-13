var link = document.querySelector(".btn-order");
var form = document.querySelector(".form-search");

form.classList.add("hotel-search-form-hide");

link.addEventListener("click", function (event) {
  event.preventDefault();
  form.classList.toggle("hotel-search-form-hide");
});
