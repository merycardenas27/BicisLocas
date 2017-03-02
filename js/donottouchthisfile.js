var element = document.querySelector(".form-signup");
element.addEventListener("submit", function(event) {
  event.preventDefault();
  validateForm();
});
