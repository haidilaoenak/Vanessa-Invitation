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
  document.getElementById("message").style.display="block";
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