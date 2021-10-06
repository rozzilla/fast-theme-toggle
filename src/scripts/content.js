(async () => {
  const { isThemeEnabled, applyTheme } = await import("./helper.js");

  chrome.runtime.onMessage.addListener((message) => {
    switch (message) {
      case "tab-active":
        applyTheme(isThemeEnabled());
        break;
      case "tab-click":
        applyTheme(!isThemeEnabled());
        break;
      default:
        console.warn("Unhandled Chrome tab message", message);
    }
  });
})();
