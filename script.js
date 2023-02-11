async function fetchData(){
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '627bcc2db0msh1079ea5154274d6p146d24jsncca5d4921b93',
            'X-RapidAPI-Host': 'you-chat-gpt.p.rapidapi.com'
        },
        body: '{"question":"what is the general consumer opinion on bp on sustainability?","max_response_time":10}'
    };
    
    const res = await fetch('https://you-chat-gpt.p.rapidapi.com/TextOnly', options)
    const record = await res.json()

    document.getElementById("ans").innerHTML = record.answer;

}
fetchData();