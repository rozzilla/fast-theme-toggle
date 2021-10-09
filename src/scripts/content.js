chrome.runtime.onMessage.addListener((message) =>
  iifeHelper.applyTheme(
    message === "tab-click"
      ? !iifeHelper.isThemeEnabled()
      : iifeHelper.isThemeEnabled()
  )
);
