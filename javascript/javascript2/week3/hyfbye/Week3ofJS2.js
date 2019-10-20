const arrayOfPrices = testProductNames.map(testProductNames=>testProductNames.price)
console.log('arrayOfPrices');
console.log(arrayOfPrices);

sendPricesToServer(arrayOfPrices , text => console.log(text));