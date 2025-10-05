// ============================
// Part 1: Event Handling
// ============================

// Show/hide message on button click
const toggleMessageBtn = document.getElementById("toggleMessageBtn");
const message = document.getElementById("message");

toggleMessageBtn.addEventListener("click", () => {
  message.classList.toggle("hidden");
});

// ============================
// Part 2: Interactive Elements
// ============================

// 1. Light/Dark Mode Toggle
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 2. Counter Game
let count = 0;
const counterDisplay = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");

increaseBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counterDisplay.textContent = count;
});

// ============================
// Part 3: Form Validation
// ============================

const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent page reload
  let isValid = true;

  // Name Validation: must not be empty
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email Validation: must match regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password Validation: at least 6 characters
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // If all fields are valid
  if (isValid) {
    formSuccess.textContent = "✅ Form submitted successfully!";
    form.reset(); // clear form
  } else {
    formSuccess.textContent = "";
  }
});
