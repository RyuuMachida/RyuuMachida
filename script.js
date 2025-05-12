document.getElementById("clicktest").addEventListener("click", function () {
  window.location.href = "login-ujian.html"; // Arahkan ke halaman login-ujian.html
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('message');
  
  const validUser = "Ariel Evan";
  const validPass = "evanariel150410";

  if (username === validUser && password === validPass) {
    message.style.color = "green";
    message.textContent = "Login berhasil! Mengarahkan...";
    setTimeout(() => {
      window.location.href = "dashboard.html"; // ganti sesuai halaman tujuan
    }, 1500);
  } else {
    message.style.color = "red";
    message.textContent = "Username atau password salah!";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const music = document.getElementById("bg-music");
  const toggleBtn = document.getElementById("music-toggle");

  music.volume = 0.2; // atur volume kecil
  let isPlaying = false;

  toggleBtn.addEventListener("click", function () {
    if (isPlaying) {
      music.pause();
      toggleBtn.textContent = "▶";
    } else {
      music.play();
      toggleBtn.textContent = "⏸";
    }
    isPlaying = !isPlaying;
  });
});

document.getElementById('showMoreBtn').addEventListener('click', function() {
  const moreInfo = document.getElementById('more-info');
  moreInfo.classList.toggle('hidden');
  this.textContent = moreInfo.classList.contains('hidden') ? 'Tampilkan Info Lain' : 'Sembunyikan Info';
});
