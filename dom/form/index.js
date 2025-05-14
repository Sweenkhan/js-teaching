const form = document.getElementById('registerForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');
const confirmPassInput = document.getElementById('confirmPassword');
const formMsg = document.getElementById('formMessage');

function showError(input, message) {
  document.getElementById(`${input.id}Error`).textContent = message;
}

function clearError(input) {
  document.getElementById(`${input.id}Error`).textContent = '';
}

function validateName() {
  const value = nameInput.value.trim();
  if (value === '') {
    showError(nameInput, 'Name is required');
    return false;
  }
  clearError(nameInput);
  return true;
}

function validateEmail() {
  const value = emailInput.value.trim();
  const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (value === '') {
    showError(emailInput, 'Email is required');
    return false;
  }
  if (!regex.test(value)) {
    showError(emailInput, 'Invalid email format');
    return false;
  }
  clearError(emailInput);
  return true;
}

function validatePassword() {
  const value = passInput.value;
  if (value.length < 6) {
    showError(passInput, 'Password must be at least 6 characters');
    return false;
  }
  clearError(passInput);
  return true;
}

function validateConfirmPassword() {
  if (confirmPassInput.value !== passInput.value) {
    showError(confirmPassInput, 'Passwords do not match');
    return false;
  }
  clearError(confirmPassInput);
  return true;
}

form.addEventListener('input', () => {
  validateName();
  validateEmail();
  validatePassword();
  validateConfirmPassword();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formMsg.textContent = '';

  const valid =
    validateName() &&
    validateEmail() &&
    validatePassword() &&
    validateConfirmPassword();

  if (valid) {
    formMsg.style.color = 'green';
    formMsg.textContent = 'Registration successful!';
    form.reset();
  } else {
    formMsg.style.color = 'red';
    formMsg.textContent = 'Please fix the errors above.';
  }
});
