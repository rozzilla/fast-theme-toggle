var iifeHelper = (() => {
  const enabled = "enabled";
  const themeName = "fast-theme-toggle";
  const htmlClasses = document.querySelector("html").classList;

  const isThemeEnabled = () => localStorage.getItem(themeName) === enabled;

  const applyTheme = (toEnable) => {
    if (toEnable) {
      htmlClasses.add(themeName);
      localStorage.setItem(themeName, enabled);
    } else {
      htmlClasses.remove(themeName);
      localStorage.removeItem(themeName);
    }

    chrome.runtime.sendMessage({ mainTabIcon: toEnable });
  };

  if (isThemeEnabled()) applyTheme(true);

  return {
    isThemeEnabled,
    applyTheme,
  };
})();
