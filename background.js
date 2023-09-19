// In background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "copiedContent") {
    const copiedContent = message.content;
    // Process or display the copied content as needed
    console.log("Copied Content:", copiedContent);
  }
});
