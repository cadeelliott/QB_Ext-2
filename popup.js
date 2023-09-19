// In popup.js
document.addEventListener("DOMContentLoaded", function () {
  const copyButton = document.getElementById("copyButton");
  const fetchButton = document.getElementById("fetchButton");
  const resultDiv = document.getElementById("result");

  copyButton.addEventListener("click", () => {
    const urlToCopy = "https://app.qbo.intuit.com/app/reportv2?mem_rpt_id=16"; // Replace with the URL you want to copy
    
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
