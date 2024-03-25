function getCurrencyAbbreviation(countryCode) {
    const currencyMap = {
        "US": "USD",
    };
    return currencyMap[countryCode] || "No se encontró la moneda";
}

function getCountryByCurrencyAbbreviation(currencyAbbreviation) {

    const countryMap = {
        "USD": "US",
    };
    return countryMap[currencyAbbreviation] || "No se encontró el país"; 
}

let countryCode = "US"; 
console.log(getCurrencyAbbreviation(countryCode)); 
