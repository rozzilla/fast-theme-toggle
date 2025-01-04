const changeExtensionIcon = async (themeEnabled) => {
  const icon = themeEnabled ? "icon128-enabled.png" : "icon128.png";

  const tabs = await chrome.tabs.query({
    active: true,
    windowType: "normal",
    currentWindow: true,
  });

  if (tabs[0]) {
    await chrome.action.setIcon({
      path: `/src/images/${icon}`,
      tabId: tabs[0].id,
    });
  }
};

chrome.action.onClicked.addListener((tab) =>
  chrome.tabs
    .sendMessage(tab.id, "tab-click")
    .catch((msg) => console.debug(msg))
);

chrome.tabs.onActivated.addListener((activeInfo) =>
  chrome.tabs
    .sendMessage(activeInfo.tabId, "tab-active")
    .catch((msg) => console.debug(msg))
);

chrome.runtime.onMessage.addListener((msg) =>
  changeExtensionIcon(msg.mainTabIcon)
);
