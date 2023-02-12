async function fetchData(companyName) {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '65529a08b5msh25845de96de2a6bp1addb5jsn40431c261667',
            'X-RapidAPI-Host': 'you-chat-gpt.p.rapidapi.com'
        },
        body: '{"question":"what is the general consumer opinion on ' + companyName + ' on sustainability?","max_response_time":10}'
    };

    const res = await fetch('https://you-chat-gpt.p.rapidapi.com/TextOnly', options)
    alert('first await')
    const record = await res.json()
    alert(record.answer);
    alert(typeof (record.answer))
    return record.answer;


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
        gptAns = await fetchData(brand)
    }
);

function display() {
    document.getElementById("ans").innerHTML = gptAns;
}
