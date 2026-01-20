function setTheme(t) {
  localStorage.setItem("theme", t);
}

function setCloak(c) {
  if (c === "classlink") {
    document.title = "ClassLink";
    changeFavicon("https://classlink.com/favicon.ico");
  }
  if (c === "google") {
    document.title = "Google";
    changeFavicon("https://google.com/favicon.ico");
  }
}

function changeFavicon(src) {
  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.href = src;
}
