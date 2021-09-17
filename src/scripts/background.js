chrome.browserAction.onClicked.addListener((tabs) =>
  chrome.tabs.sendMessage(tabs.id, "main-icon")
);
