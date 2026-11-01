
const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const letterSection = document.getElementById("letterSection");

let opened = false;

openBtn.addEventListener("click", () => {
  if (opened) return;

  opened = true;
  envelope.classList.add("open");
  openBtn.textContent = "surat sedang dibuka...";

  setTimeout(() => {
    intro.classList.add("hidden");
    letterSection.classList.remove("hidden");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, 1100);
});

const lastBtn = document.getElementById("lastBtn");
const lastText = document.getElementById("lastText");

lastBtn.addEventListener("click", () => {
  lastText.classList.toggle("hidden");

  if (lastText.classList.contains("hidden")) {
    lastBtn.textContent = "buka pesan terakhir ♡";
  } else {
    lastBtn.textContent = "tutup pesan ♡";
    lastText.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
});

// Hiasan hati yang melayang
const heartsContainer = document.getElementById("hearts");

for (let i = 0; i < 18; i++) {
  const heart = document.createElement("div");

  heart.className = "heart";
  heart.textContent = Math.random() > 0.5 ? "♡" : "♥";

  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (12 + Math.random() * 15) + "px";
  heart.style.animationDuration = (10 + Math.random() * 15) + "s";
  heart.style.animationDelay = (-Math.random() * 20) + "s";

  heartsContainer.appendChild(heart);
}
