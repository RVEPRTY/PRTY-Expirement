let tabs = [];
let activeTab = null;

function newTab(title="New Tab", url="pages/home.html") {
  const id = Date.now();

  const iframe = document.createElement("iframe");
  iframe.src = url;
  iframe.dataset.id = id;
  iframe.style.display = "none";

  document.getElementById("browser-area").appendChild(iframe);

  const tab = document.createElement("div");
  tab.className = "tab";
  tab.innerHTML = `${title} <span>✕</span>`;
  tab.onclick = e => {
    if (e.target.tagName === "SPAN") closeTab(id);
    else switchTab(id);
  };

  document.getElementById("tabs").appendChild(tab);

  tabs.push({id, iframe, tab});
  switchTab(id);
}

function switchTab(id) {
  tabs.forEach(t => {
    t.iframe.style.display = "none";
    t.tab.classList.remove("active");
  });

  const t = tabs.find(t => t.id === id);
  if (!t) return;

  t.iframe.style.display = "block";
  t.tab.classList.add("active");
  activeTab = t;
}

function closeTab(id) {
  const index = tabs.findIndex(t => t.id === id);
  if (index === -1) return;

  tabs[index].iframe.remove();
  tabs[index].tab.remove();
  tabs.splice(index, 1);

  if (tabs.length) switchTab(tabs[tabs.length-1].id);
  else newTab();
}

newTab();
