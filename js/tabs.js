let tabs = [];
let activeTab = null;

function newTab(url = "") {
  const id = Date.now();

  const iframe = document.createElement("iframe");
  iframe.src = url;
  iframe.dataset.id = id;
  iframe.style.display = "none";

  document.body.appendChild(iframe);

  const tab = document.createElement("div");
  tab.className = "tab";
  tab.innerText = "New Tab";
  tab.dataset.id = id;

  tab.onclick = () => switchTab(id);

  document.getElementById("tabs").insertBefore(
    tab,
    document.getElementById("tabs").lastElementChild
  );

  tabs.push({ id, iframe, tab });

  switchTab(id);
}

function switchTab(id) {
  tabs.forEach(t => {
    t.iframe.style.display = "none";
    t.tab.classList.remove("active");
  });

  const tab = tabs.find(t => t.id === id);
  if (!tab) return;

  tab.iframe.style.display = "block";
  tab.tab.classList.add("active");
  activeTab = tab;
}

function loadURL(url) {
  if (!activeTab) newTab();
  activeTab.iframe.src = url;
}

newTab();
