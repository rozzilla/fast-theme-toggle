const themeName = "fast-theme-toggle";
const main = document.querySelector("html").classList;

const isThemeEnabled = () => localStorage.getItem(themeName) === "enabled";

if (isThemeEnabled()) {
  main.add(themeName);
  chrome.runtime.sendMessage({ fastThemeToggle: true });
}

chrome.runtime.onMessage.addListener(() => {
  if (isThemeEnabled()) {
    main.remove(themeName);
    localStorage.removeItem(themeName);
    chrome.runtime.sendMessage({ fastThemeToggle: false });
  } else {
    main.add(themeName);
    localStorage.setItem(themeName, "enabled");
    chrome.runtime.sendMessage({ fastThemeToggle: true });
  }
});
