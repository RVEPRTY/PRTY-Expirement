const phrases = [
  "Starting the party...",
  "Loading vibes...",
  "Warming things up...",
  "PRTY incoming...",
  "Almost there..."
];

document.getElementById("loading-text").innerText =
  phrases[Math.floor(Math.random() * phrases.length)];

window.onload = () => {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
  }, 2000);
};
