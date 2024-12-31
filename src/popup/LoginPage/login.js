// Switch to Signup Form
document.getElementById('go-to-signup').addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('login-form').classList.add('hidden');
  document.getElementById('signup-form').classList.remove('hidden');
});

// Switch to Login Form
document.getElementById('go-to-login').addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('signup-form').classList.add('hidden');
  document.getElementById('login-form').classList.remove('hidden');
});

// Close the Popup Window
document.getElementById('close-button').addEventListener('click', () => {
  window.close(); // Explicit close behavior
});
