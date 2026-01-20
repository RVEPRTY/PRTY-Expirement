// 🔴 PASTE YOUR SCRAMJET LINK HERE LATER
const SCRAMJET = "https://YOUR-PROXY.vercel.app/";

function handleSearch(e) {
  if (e.key === "Enter") {
    let q = document.getElementById("search").value;
    openSite(q);
  }
}

function openSite(query) {
  let url;

  if (query.startsWith("http")) {
    url = query;
  } else {
    url = "https://www.google.com/search?q=" + encodeURIComponent(query);
  }

  document.getElementById("home").style.display = "none";
  const iframe = document.getElementById("browser");
  iframe.style.display = "block";
  iframe.src = SCRAMJET + url;
}
