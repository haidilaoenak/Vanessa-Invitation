// ================= HEARTS BACKGROUND =================
const container = document.getElementById("floatingHearts");

for (let i = 0; i < 25; i++) {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = "💗";
  h.style.left = Math.random() * 100 + "%";
  h.style.animationDuration = (5 + Math.random() * 5) + "s";
  container.appendChild(h);
}

// ================= OPENING =================
function startSite() {
  document.getElementById("opening").style.display = "none";
  document.getElementById("mainContent").classList.remove("hidden");

  const music = document.getElementById("bgm");
  if (music) music.play();

  typeVerse();
}

// ================= TYPING VERSE =================
const verseText =
  "“You are altogether beautiful, my darling; there is no flaw in you.” — Song of Songs 4:7";

let verseIndex = 0;
const typingVerse = document.getElementById("typingVerse");

function typeVerse() {
  if (!typingVerse) return;

  if (verseIndex < verseText.length) {
    typingVerse.innerHTML =
      verseText.substring(0, verseIndex + 1) + '<span class="cursor">|</span>';
    verseIndex++;
    setTimeout(typeVerse, 45);
  } else {
    typingVerse.innerHTML = verseText;
  }
}

// ================= YES BUTTON =================
function acceptLove() {
  const msg = document.getElementById("message");

  msg.style.display = "block";
  msg.innerHTML = `
  <div class="yes-popup">
    <h2>그녀가 승낙했어 💖</h2>
    <p>우리의 이야기는 2026년 5월 20일에 시작돼.</p>
  </div>
`;

  launchHeartBurst();
}

// ================= HEART BURST =================
function launchHeartBurst() {
  const emojis = ["💖", "💕", "💗", "✨"];

  for (let i = 0; i < 45; i++) {
    const heart = document.createElement("div");
    heart.className = "burst-heart";
    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = "50%";
    heart.style.top = "50%";

    const x = (Math.random() - 0.5) * 650;
    const y = (Math.random() - 0.5) * 450;

    heart.style.setProperty("--x", `${x}px`);
    heart.style.setProperty("--y", `${y}px`);

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1600);
  }
}

// ================= NO BUTTON ESCAPE =================
const noBtn = document.getElementById("noBtn");

if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";
  });
}

console.log("script loaded ✅");
