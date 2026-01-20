const phrases = [
  "Starting the party...",
  "Loading vibes...",
  "Warming up speakers...",
  "Spawning fun...",
  "AfterPRTY incoming..."
];

document.getElementById("loading-text").innerText =
  phrases[Math.floor(Math.random() * phrases.length)];

window.onload = () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 2000);
};
