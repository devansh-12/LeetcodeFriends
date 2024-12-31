// background.js
console.log("Background script loaded");

// Listen for browser action clicks (if no popup is set)
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.windows.create({
    url: 'src/popup/LoginPage/login.html', // URL of your popup HTML
    type: 'popup',
    width: 420,  // Width of the popup window
    height: 600, // Height of the popup window
    left: 100,  // Optional: Left position of the window (for better UX)
    top: 100    // Optional: Top position of the window (for better UX)
  });
});
