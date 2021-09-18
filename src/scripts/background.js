const pathImages = "/src/images";

const changeExtensionIcon = (themeEnabled) => {
  const icon = themeEnabled ? "icon128-enabled.png" : "icon128.png";

  chrome.tabs.query(
    { active: true, windowType: "normal", currentWindow: true },
    (tab) => {
      chrome.browserAction.setIcon({
        path: `/src/images/${icon}`,
        tabId: tab[0].id,
      });
    }
  );
};

chrome.browserAction.onClicked.addListener((tabs) =>
  chrome.tabs.sendMessage(tabs.id, "main-icon")
);

chrome.runtime.onMessage.addListener((msg) =>
  changeExtensionIcon(msg.fastThemeToggle)
);
