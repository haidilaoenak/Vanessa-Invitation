const container=document.getElementById("floatingHearts");

// hearts
for(let i=0;i<25;i++){
  const h=document.createElement("div");
  h.className="heart";
  h.innerHTML="💗";
  h.style.left=Math.random()*100+"%";
  h.style.animationDuration=(5+Math.random()*5)+"s";
  container.appendChild(h);
}

// open
function startSite(){
  document.getElementById("opening").style.display="none";
  document.getElementById("mainContent").classList.remove("hidden");
  document.getElementById("bgm").play();

  typeVerse();
}

// yes
function acceptLove(){
  const msg = document.getElementById("message");
  msg.style.display = "block";
  msg.innerHTML = "She said yes... and my heart just exploded 💖🎉";

  launchConfetti();
}

// no kabur 😈
const noBtn=document.getElementById("noBtn");
noBtn.addEventListener("mouseover",()=>{
  noBtn.style.position="absolute";
  noBtn.style.left=Math.random()*80+"%";
  noBtn.style.top=Math.random()*80+"%";
});
const verseText =
  "“You are altogether beautiful, my darling; there is no flaw in you.” — Song of Songs 4:7";

let verseIndex = 0;
const typingVerse = document.getElementById("typingVerse");

function typeVerse() {
  if (verseIndex < verseText.length) {
    typingVerse.innerHTML =
      verseText.substring(0, verseIndex + 1) + '<span class="cursor">|</span>';
    verseIndex++;
    setTimeout(typeVerse, 55);
  } else {
    typingVerse.innerHTML = verseText;
  }
}
function launchConfetti() {
  const canvas = document.getElementById("confettiCanvas");
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
      if (p.y > canvas.height) p.y = -10;

      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
    });

    requestAnimationFrame(update);
  }

  update();
}
