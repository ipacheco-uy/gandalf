# gandalf

You shall not redirect
<p align="center">
  <img width="460" height="300" src="https://images-na.ssl-images-amazon.com/images/I/61IjX9fG2sL._AC_UY445_.jpg">
</p>


* ## Need to open site in incognito when a html div is present?

  Edit hidden.js const "paywallId" with the value of the div that signals you want to start private mode. Then add your url to    the content_scripts matches list (the one that contains "display.js"

* ## Need to return to visible some content that was visible until page loaded?

  Edit display.js const "content" with a className (or an id) of what content we want to make visible (you can easily edit to do the opposite)

* ## Need to block some sites from loading?

  Add your site to the "background.js" const "filter"
