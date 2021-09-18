chrome.browserAction.onClicked.addListener((tabs) =>
  chrome.tabs.sendMessage(tabs.id, "main-icon")
);

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.fastThemeToggle) {
    chrome.tabs.query(
      { active: true, windowType: "normal", currentWindow: true },
      (tab) => {
        chrome.browserAction.setIcon({
          path: "/src/images/icon128-enabled.png",
          tabId: tab[0].id,
        });
      }
    );
  } else {
    chrome.tabs.query(
      { active: true, windowType: "normal", currentWindow: true },
      (tab) => {
        chrome.browserAction.setIcon({
          path: "/src/images/icon128.png",
          tabId: tab[0].id,
        });
      }
    );
  }
});
