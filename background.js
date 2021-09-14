chrome.contextMenus.create({
  title: "Toggle theme",
  contexts: ["browser_action"],
  onclick: () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, "toggle-theme");
    });
  },
});
