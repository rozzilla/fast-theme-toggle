const themeName = "fast-theme-toggle";
const main = document.querySelector("html").classList;

const isThemeEnabled = () => localStorage.getItem(themeName) === "enabled";

if (isThemeEnabled()) main.add(themeName);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "toggle-theme") {
    if (isThemeEnabled()) {
      main.remove(themeName);
      localStorage.removeItem(themeName);
    } else {
      main.add(themeName);
      localStorage.setItem(themeName, "enabled");
    }
  }
});
