const filter = {
  urls: [
    '*://*.evolok.net/*']
};

const webRequestFlags = [
  'blocking',
];

window.chrome.webRequest.onBeforeRequest.addListener(
  page => ({ cancel: true }),
  filter,
  webRequestFlags,
);

window.chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // Check if the message is ours
    if (request.incognito === true){
      // Create incognito window with the requested url
      openIncognito = chrome.windows.create({"url": request.url, "incognito": request.incognito});
      sendResponse({msg: "Time to read"});
    }
  });


