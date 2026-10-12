const openButton = document.getElementById("openLetter");
const intro = document.getElementById("intro");
const letter = document.getElementById("letter");
const heartsLayer = document.getElementById("floatingHearts");
const makeHeartsButton = document.getElementById("makeHearts");
const surpriseMessage = document.getElementById("surpriseMessage");

openButton.addEventListener("click", () => {
  letter.classList.remove("hidden");
  intro.classList.add("intro-opened");
  openButton.textContent = "My heart is open ♡";
  openButton.disabled = true;
  openButton.style.opacity = "0.75";
  letter.scrollIntoView({ behavior: "smooth", block: "start" });
  createHearts(16);
});

makeHeartsButton.addEventListener("click", () => {
  surpriseMessage.classList.remove("hidden");
  createHearts(34);
});

function createHearts(amount) {
  const symbols = ["♥", "♡", "❤"];
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");
    heart.className = "heart-particle";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${12 + Math.random() * 20}px`;
    heart.style.animationDuration = `${3.5 + Math.random() * 3}s`;
    heart.style.animationDelay = `${Math.random() * 1.4}s`;
    heartsLayer.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove(), { once: true });
  }
}
