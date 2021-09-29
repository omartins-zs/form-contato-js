var email = document.getElementById("email");
var password = document.getElementById("password");

email.addEventListener("focus", () => {
  email.style.borderColor = "#4a5f6a";
});

email.addEventListener("blur", () => {
  email.style.borderColor = "#ecc";
});

password.addEventListener("focus", () => {
  password.style.borderColor = "#4a5f7a";
});

password.addEventListener("blur", () => {
  password.style.borderColor = "#ecc";
});
