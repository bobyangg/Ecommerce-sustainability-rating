var val;
var yesResponse = 0;
function fetchData(companyName) {
    alert('brand got called ' + companyName)
    // Send a POST request to the Flask server
    fetch("http://127.0.0.1:5000/api/sus", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ data: companyName }),
    })
        .then(response => response.json())
        .then(data => {
            console.log("Received response from server: ", data);
            yesResponse = 1;
            val = data['score']
            return data['score']
            // Do something with the response, or not
        })
        .catch(error => {
            console.error("Request failed: ", error);
        });
}

function onOpen() {
    chrome.storage.local.get('brandName', function (result) {
        var brandName = result.brandName;
        fetchData(brandName)
    });
}
window.addEventListener("load", onOpen);

const button = document.getElementById("btn");
button.addEventListener("click", () => {
    console.log("Button was clicked!");
    display()
});

async function display() {
    document.getElementById("ans").innerHTML = (val).toFixed(2) + "%";
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
