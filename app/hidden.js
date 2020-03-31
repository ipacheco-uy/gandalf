const paywallId = ""; // We need and id to know if paywall is shown
window.onload = function() { // When site loads this will be called
  const content = document.getElementById(paywallId); // Find paywall
  if (content != null){
    // Send a message to the background with current url
    chrome.runtime.sendMessage({
      incognito: true, 
      url: window.location.href
      }, 
      function(response) {
        console.log("Opening page in incognito", response);
      }
    );
  }
};