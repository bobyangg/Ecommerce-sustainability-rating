function fetchData(companyName) {
    var serverhost = 'http://127.0.0.1:5000';

    // Send a POST request to the Flask server
    fetch("http://localhost:5000/api/sus", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ data: companyName })
    })
        .then(response => response.json())
        .then(data => {
            console.log("Received response from server: ", data);
            // Do something with the response, or not
        })
        .catch(error => {
            console.error("Request failed: ", error);
        });


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

const rating = 0;


const star = Math.round(rating / 2);
if (star == 1) {
    document.getElementById("star1").style.color = gold;
} else if (star == 2) {
    document.getElementById("star2").style.color = gold;
} else if (star == 3) {
    document.getElementById("star3").style.color = gold;
} else if (star == 4) {
    document.getElementById("star4").style.color = gold;
} else if (star == 5) {
    document.getElementById("star5").style.color = gold;
}  
