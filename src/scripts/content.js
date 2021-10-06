(async () => {
  const { isThemeEnabled, applyTheme, enableTabIcon } = await import(
    "./helper.js"
  );

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
})();
