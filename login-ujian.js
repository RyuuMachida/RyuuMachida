document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // Simulasi login (dummy check)
  if (user === "ariel evan arpansyah" && pass === "muridkelas9f") {
    window.location.href = "https://kls9.smp-pgri3.my.id/login.php";
    // Redirect atau aksi lain
  } else {
    document.getElementById("error").textContent = "Username atau password salah!";
  }
});