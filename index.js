const themeName = "fast-theme-toggle";
const main = document.querySelector("html").classList;

const isOverrideTheme = () => localStorage.getItem(themeName) === "override";

if (isOverrideTheme()) main.add(themeName);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "toggle-theme") {
    if (isOverrideTheme()) {
      main.remove(themeName);
      localStorage.removeItem(themeName);
    } else {
      main.add(themeName);
      localStorage.setItem(themeName, "override");
    }
  }
});
