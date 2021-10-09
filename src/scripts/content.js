(async () => {
  const { isThemeEnabled, applyTheme } = await import("./helper.js");

  chrome.runtime.onMessage.addListener((message) =>
    applyTheme(message === "tab-click" ? !isThemeEnabled() : isThemeEnabled())
  );
})();
