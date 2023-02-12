chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.greeting) {
        var brandName = request.greeting;
        chrome.storage.local.set({ 'brandName': brandName });
        sendResponse({ farewell: "goodbye" });
    }
});