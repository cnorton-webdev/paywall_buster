chrome.webRequest.onBeforeSendHeaders.addListener
	(
		function (url_data) {
			return paywallCheck(url_data);
		},
		{
			urls:
				["*://*.tribdss.com/*", "*://www.tribdss.com/*", "*://tribdss.com/*", " *://pwapi.washingtonpost.com/*", "*://www.washingtonpost.com/*", "*://*.washingtonpost.com/*", "*://washingtonpost.com/*"]
		},
		["blocking", "requestHeaders"]
	);

chrome.webRequest.onBeforeRequest.addListener
	(
		function (url_data) {
			return paywallCheck(url_data);
		},
		{
			urls:
				["*://*.tribdss.com/*", "*://www.tribdss.com/*", "*://tribdss.com/*", " *://pwapi.washingtonpost.com/*", "*://www.washingtonpost.com/*", "*://*.washingtonpost.com/*", "*://washingtonpost.com/*"]
		},
		["blocking", "requestBody"]
	);

function paywallCheck(url_data) {
	var url = url_data.url;
	if (url.includes("tribdss.com")) {
		return { cancel: true };
	} else if (url.includes("pwapi") && url.includes("washingtonpost.com")) {
		return { cancel: true };
	}
	return;
}
