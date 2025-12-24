document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const role = document.querySelector('input[name="role"]:checked').value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (role === "vendor" && email === "vendor@test.com" && password === "1234") {
    alert("Vendor login successful");
    window.location.href = "../index.html"; // later → vendor dashboard
  } 
  else if (role === "customer" && email === "customer@test.com" && password === "1234") {
    alert("Customer login successful");
    window.location.href = "../index.html"; // later → customer orders
  } 
  else {
    alert("Invalid credentials");
  }
});
