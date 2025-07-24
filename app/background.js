// Service worker for Manifest V3
// The declarativeNetRequest rules in rules.json now handle URL blocking

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // Check if the message is ours
    if (request.incognito === true){
      // Create incognito window with the requested url
      chrome.windows.create({"url": request.url, "incognito": request.incognito});
      sendResponse({msg: "Time to read"});
    }
  });


