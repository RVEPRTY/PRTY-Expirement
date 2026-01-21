function openTab(title, url) {
  newTab(title, url);
}

function openURL(value) {
  if (!activeTab) return;
  activeTab.iframe.src = value;
}

function handleURL(e) {
  if (e.key === "Enter") openURL(e.target.value);
}
