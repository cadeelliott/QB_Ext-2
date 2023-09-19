// In popup.js
document.addEventListener("DOMContentLoaded", function () {
  const copyButton = document.getElementById("copyButton");

  copyButton.addEventListener("click", () => {
    const urlToCopy = "https://example.com"; // Replace with the URL you want to copy
    
    // Send a message to the content script to navigate and copy content
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        function: (url) => {
          chrome.runtime.sendMessage({ action: "navigateAndCopy", url });
        },
        args: [urlToCopy],
      });
    });
  });
});
