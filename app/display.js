function bypassPaywall() {
	const paywall = document.getElementById('floatingContainer');
	const body = document.body;
  
	// Check if the paywall is visible and the body scroll is locked
	if (paywall && paywall.style.display === 'block') {
	  console.log('Paywall detected. Removing...');
	  paywall.style.display = 'none';
	}
	
	// 2. Force scrolling to be enabled using !important
    if (body.style.overflow !== 'auto') {
        body.style.setProperty('overflow', 'auto', 'important');
    }

    // 3. Force the data-scrolling attribute to be true
    if (body.getAttribute('data-scrolling') !== 'true') {
        body.setAttribute('data-scrolling', 'true');
    }
  }
  
const observer = new MutationObserver((mutations) => {
    // For any change detected, just run our fix function again.
    // This instantly reverts any attempt by the site to re-apply the paywall.
    bypassPaywall();
});

// Start observing the body for attribute changes (like 'style' or 'data-scrolling')
observer.observe(document.body, {
    attributes: true
});


  // Run the function every 500 milliseconds to catch the paywall when it appears.
  setInterval(bypassPaywall, 1000);
  