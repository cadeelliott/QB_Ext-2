// contentScript.js

// Function to navigate to a specific URL and copy its content
function navigateAndCopyContent(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      // Send the copied content back to the extension
      chrome.runtime.sendMessage({ action: "copiedContent", content: data });
    })
    .catch((error) => {
      console.error("Error fetching and copying content:", error);
    });
}

// Message listener to receive instructions from the extension
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "navigateAndCopy") {
    const urlToNavigate = message.url;
    navigateAndCopyContent(urlToNavigate);
  }
});
