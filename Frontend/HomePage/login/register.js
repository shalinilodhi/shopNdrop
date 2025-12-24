document.getElementById("registerForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Registration successful! Please login.");
  window.location.href = "login.html";
});
