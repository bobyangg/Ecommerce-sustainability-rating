var brand = document.querySelector("#bylineInfo");
var brandName = brand.text
if (brandName.startsWith('Brand: ')) {
    brandName = brandName.slice(7,)
} else if (brandName.startsWith('Visit the ')) {
    brandName = brandName.slice(10, -5)
}
alert(brandName)


var message = (async () => {
    let response = null;
    let timeout = setTimeout(() => {
        console.log("Response not received within time limit");
    }, 5000); // Timeout after 5 seconds

    while (response === null) {
        response = await chrome.runtime.sendMessage({ greeting: brandName });

        if (response && response.farewell === "goodbye") {
            clearTimeout(timeout);
            break;
        }
    }
})();


