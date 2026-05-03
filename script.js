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
function startSite(){
  document.getElementById("opening").style.display = "none";
  document.getElementById("mainContent").classList.remove("hidden");

  const music = document.getElementById("bgm");
  if (music) music.play();

  typeVerse(); // mulai efek ketik
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
function acceptLove(){
  const msg = document.getElementById("message");

  msg.style.display = "block";
  msg.innerHTML = `
    <div class="yes-popup">
      <h2>She said yes 💖</h2>
      <p>Our story starts on May 20, 2026.</p>
    </div>
  `;

  launchHeartBurst();
}

// ================= NO BUTTON ESCAPE 😈 =================
const noBtn = document.getElementById("noBtn");

if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";
  });
}

// ================= CONFETTI =================
function launchConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];

  for (let i = 0; i < 150; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 8 + 4,
      speed: Math.random() * 3 + 2,
      color: `hsl(${Math.random() * 360}, 80%, 70%)`
    });
  }

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach(p => {
      p.y += p.speed;

      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
    });

    requestAnimationFrame(update);
  }

  update();
}

// ================= DEBUG =================
console.log("script loaded ✅");
function launchLoveConfetti() {
  const emojis = ["💖", "💗", "💕", "🌸", "✨", "🎉"];

  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = (2 + Math.random() * 2) + "s";
    confetti.style.fontSize = (16 + Math.random() * 18) + "px";

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 4000);
  }
}
function launchHeartBurst() {
  const emojis = ["💖", "💕", "💗", "✨"];

  for (let i = 0; i < 35; i++) {
    const heart = document.createElement("div");
    heart.className = "burst-heart";
    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = "50%";
    heart.style.top = "50%";

    const x = (Math.random() - 0.5) * 500;
    const y = (Math.random() - 0.5) * 400;

    heart.style.setProperty("--x", `${x}px`);
    heart.style.setProperty("--y", `${y}px`);

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1600);
  }
}
