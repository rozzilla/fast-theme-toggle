const helperUrl = chrome.runtime.getURL("src/scripts/helper.js");

(async () => {
  const { isThemeEnabled, applyTheme } = await import(helperUrl);
  chrome.runtime.onMessage.addListener((message) =>
    applyTheme(message === "tab-click" ? !isThemeEnabled() : isThemeEnabled())
  );
})();
