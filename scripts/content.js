// import { fetchData } from script.js
var brand = document.querySelector("#bylineInfo");
var brandName = brand.text
if (brandName.startsWith('Brand: ')) {
    brandName = brandName.slice(7,)
} else if (brandName.startsWith('Visit the ')) {
    brandName = brandName.slice(10, -5)
}
alert(brandName)
// fetchData(brandName)
