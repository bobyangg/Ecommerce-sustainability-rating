async function fetchData(companyName) {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '627bcc2db0msh1079ea5154274d6p146d24jsncca5d4921b93',
            'X-RapidAPI-Host': 'you-chat-gpt.p.rapidapi.com'
        },
        body: '{"question":"what is the general consumer opinion on ' + companyName + ' on sustainability?","max_response_time":10}'
    };

    const res = await fetch('https://you-chat-gpt.p.rapidapi.com/TextOnly', options)
    const record = await res.json()

    return record.answer;

}
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension with message" + request.greeting);
        if (request.greeting != Null)
            sendResponse({ farewell: "goodbye" });
        var brand = request.greeting
        const gptAns = fetchData(brand)
    }
);

function display(){
    document.getElementById("ans").innerHTML = gptAns;
}
