chrome.runtime.onMessage.addListener((message) =>
  iifeFastThemeToggleHelper.applyTheme(
    message === "tab-click"
      ? !iifeFastThemeToggleHelper.isThemeEnabled()
      : iifeFastThemeToggleHelper.isThemeEnabled()
  )
);
