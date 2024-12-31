// Log to confirm the background script is running
console.log("Background script loaded");

// Listen for browser action clicks (if no popup is set)
browser.browserAction.onClicked.addListener(() => {
  console.log("Extension icon clicked");
});
