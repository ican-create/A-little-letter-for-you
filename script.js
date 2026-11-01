
const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const letterSection = document.getElementById("letterSection");

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const lastBtn = document.getElementById("lastBtn");
const lastText = document.getElementById("lastText");

// BUKA AMPLOP
openBtn.addEventListener("click", async () => {
  envelope.classList.add("opened");

  // Tampilkan surat setelah animasi amplop
  setTimeout(() => {
    intro.classList.add("hidden");
    letterSection.classList.remove("hidden");
  }, 900);

  // Putar lagu dengan volume 50%
  bgMusic.volume = 0.5;

  try {
    await bgMusic.play();
    musicBtn.classList.remove("hidden");
    musicBtn.textContent = "♫ Musik: ON";
  } catch (error) {
    musicBtn.classList.remove("hidden");
    musicBtn.textContent = "♫ Putar musik";
  }
});

// TOMBOL MUSIK ON/OFF
musicBtn.addEventListener("click", async () => {
  if (bgMusic.paused) {
    try {
      await bgMusic.play();
      musicBtn.textContent = "♫ Musik: ON";
    } catch (error) {
      musicBtn.textContent = "♫ Gagal memutar";
    }
  } else {
    bgMusic.pause();
    musicBtn.textContent = "♫ Musik: OFF";
  }
});

// PESAN TERAKHIR
lastBtn.addEventListener("click", () => {
  lastText.classList.toggle("hidden");

  if (lastText.classList.contains("hidden")) {
    lastBtn.textContent = "ada satu hal lagi...";
  } else {
    lastBtn.textContent = "tutup pesan";
  }
});

// HATI MELAYANG
function createHeart() {
  const heart = document.createElement("span");

  heart.classList.add("floating-heart");
  heart.textContent = "♡";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 4) + "s";
  heart.style.fontSize = (12 + Math.random() * 18) + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 900);
