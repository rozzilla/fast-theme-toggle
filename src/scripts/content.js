(async () => {
  const { isThemeEnabled, applyTheme } = await import("./helper.js");

  const eventMapping = {
    "tab-active": isThemeEnabled(),
    "tab-click": !isThemeEnabled(),
  };

  chrome.runtime.onMessage.addListener((message) =>
    applyTheme(eventMapping[message])
  );
})();
