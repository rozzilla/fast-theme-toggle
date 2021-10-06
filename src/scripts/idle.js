(async () => {
  const { isThemeEnabled, applyTheme } = await import("./helper.js");

  if (isThemeEnabled()) applyTheme(true);
})();
