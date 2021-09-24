const enabled = "enabled";
const themeName = "fast-theme-toggle";
const htmlClasses = document.querySelector("html").classList;

const isThemeEnabled = () => localStorage.getItem(themeName) === enabled;

const enableTabIcon = (activate) =>
  chrome.runtime.sendMessage({ mainTabIcon: activate });

const applyTheme = (toEnable) => {
  if (toEnable) {
    htmlClasses.add(themeName);
    localStorage.setItem(themeName, enabled);
  } else {
    htmlClasses.remove(themeName);
    localStorage.removeItem(themeName);
  }

  enableTabIcon(toEnable);
};

if (isThemeEnabled()) applyTheme(true);

chrome.runtime.onMessage.addListener((message) => {
  switch (message) {
    case "tab-active":
      enableTabIcon(isThemeEnabled());
      break;
    case "tab-click":
      applyTheme(!isThemeEnabled());
      break;
    default:
      console.warn("Unhandled Chrome tab message", message);
  }
});
