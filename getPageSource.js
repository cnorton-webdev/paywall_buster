function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function onWindowLoad(url) {
    if (url.includes("washingtonpost.com")) {
        checkWPPaywall();
    }
}

async function checkWPPaywall() {
    await sleep(1000);
    var pwElement = document.querySelector("div[data-qa='paywall']");
    if (typeof pwElement == "object") {
        pwElement.remove();
    }
}

window.onload = onWindowLoad(document.URL);
