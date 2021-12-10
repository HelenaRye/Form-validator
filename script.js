const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messsageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

// Event Listener

let isValid = false;

function validateForm() {
  // Using Constraint API
  isValid = form.checkValidity();
  // Style main message for an error
  message.textContent = "Please fill out all fields.";
  message.style.color = "red";
}

function processFormData(e) {
  e.preventDefault();
  //Validate Form
  validateForm();
}

form.addEventListener("submit", processFormData);
