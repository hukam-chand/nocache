const updateUrl = (tab) => {
  if (!tab || !tab.url) return;

  chrome.storage.sync.get({ paramName: 'nocache' }, (items) => {
    try {
      const url = new URL(tab.url);
      url.searchParams.set(items.paramName, generateHash(16));
      chrome.tabs.update(tab.id, { url: url.toString() });

      // Visual feedback
      chrome.action.setBadgeText({ text: 'OK', tabId: tab.id });
      chrome.action.setBadgeBackgroundColor({ color: '#4CAF50', tabId: tab.id });
      setTimeout(() => {
        chrome.action.setBadgeText({ text: '', tabId: tab.id });
      }, 1500);

    } catch (err) {
      console.error('NoCache: failed to update URL', err);
    }
  });
};

chrome.action.onClicked.addListener(updateUrl);

chrome.commands.onCommand.addListener((command) => {
  if (command === 'toggle-nocache') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        updateUrl(tabs[0]);
      }
    });
  } else if (command === 'open-incognito') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0 && tabs[0].url) {
        openInIncognito(tabs[0].url);
      }
    });
  }
});

function generateHash(length) {
  const bytes = new Uint8Array(Math.ceil(length / 2));
  crypto.getRandomValues(bytes);
  const hex = Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
  return hex.slice(0, length);
}

function openInIncognito(url) {
  if (url) {
    chrome.windows.create({
      url: url,
      incognito: true
    });
  }
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "open-incognito",
    title: "Open in Private Window",
    contexts: ["page"],
    documentUrlPatterns: ["http://*/*", "https://*/*"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "open-incognito") {
    // Use the pageUrl from info, or fallback to tab.url
    const urlToOpen = info.pageUrl || tab.url;
    openInIncognito(urlToOpen);
  }
});
