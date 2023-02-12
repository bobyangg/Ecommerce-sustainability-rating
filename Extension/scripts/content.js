var brand = document.querySelector("#bylineInfo");
var brandName = brand.text
if (brandName.startsWith('Brand: ')) {
    brandName = brandName.slice(7,)
} else if (brandName.startsWith('Visit the ')) {
    brandName = brandName.slice(10, -5)
}
alert(brandName)

var message = (async () => {
    const response = await chrome.runtime.sendMessage({ greeting: brandName });
    // do something with response here, not outside the function
    var some = response
    console.log(response);

})();