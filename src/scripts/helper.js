const enabled = "enabled";
const themeName = "fast-theme-toggle";
const htmlClasses = document.querySelector("html").classList;

export const isThemeEnabled = () => localStorage.getItem(themeName) === enabled;

export const applyTheme = (toEnable) => {
  if (toEnable) {
    htmlClasses.add(themeName);
    localStorage.setItem(themeName, enabled);
  } else {
    htmlClasses.remove(themeName);
    localStorage.removeItem(themeName);
  }

  chrome.runtime.sendMessage({ mainTabIcon: toEnable });
};

document.addEventListener("fullscreenchange", () => {
  if (isThemeEnabled()) {
    document.fullscreenElement
      ? htmlClasses.remove(themeName)
      : htmlClasses.add(themeName);
  }
});

if (isThemeEnabled()) applyTheme(true);
