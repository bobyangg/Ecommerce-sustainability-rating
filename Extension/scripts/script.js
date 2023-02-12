function fetchData(companyName) {

}
var gptAns;

chrome.runtime.onMessage.addListener(
    async function (request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url + request.greeting :
            "from the extension with message" + request.greeting);
        if (request.greeting != null) {
            sendResponse({ farewell: "goodbye" });
        }
        else {
            alert('null');
        }
        var brand = request.greeting
        gptAns = fetchData(brand)
    }
);

function display() {
    document.getElementById("ans").innerHTML = gptAns;
}