const enabled = "enabled";
const themeName = "fast-theme-toggle";
const htmlClasses = document.querySelector("html").classList;

export const isThemeEnabled = () => localStorage.getItem(themeName) === enabled;

export const enableTabIcon = (activate) =>
  chrome.runtime.sendMessage({ mainTabIcon: activate });

export const applyTheme = (toEnable) => {
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
