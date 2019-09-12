const boughtCandyPrices = [];
const amountToSpend = Math.random() * 100;



function addCandy( candyType , weight ) {
    const types = ['sweet' , 'chocolate' , 'toffee' , 'chewingGum'];
    const typePrice = [0.5 , 0.7 , 1.1 , 0.03];
    
    const index = types.indexOf( candyType );

    if(canBuyMoreCandy(weight * typePrice[index] )) {
        boughtCandyPrices.push(weight * typePrice[index]);
        console.log(boughtCandyPrices);
    }
}

function canBuyMoreCandy(newCandyPrice) {
    // let sum = 0;
    // for (let i = 0; i < boughtCandyPrices.length ; i++) {
    //     sum += boughtCandyPrices[i];
    // }

    const sum = boughtCandyPrices.reduce(function sum(a,b) {return a+b;} , 0);

    
    if(( sum + newCandyPrice <= amountToSpend)) {
        console.log('You can buy more, so please do!')
    } else {
        console.log('Enough candy for you!')
    }
    return ( sum + newCandyPrice <= amountToSpend);
}


addCandy( 'sweet'       , 10 );         // 5
addCandy( 'chocolate'   , 15 );         // 10.5
addCandy( 'chewingGum'  , 150);         // 4.5
addCandy( 'toffee'      , 20 );         // 22
addCandy( 'toffee'      , 20 );         // 22
addCandy( 'toffee'      , 20 );         // 22
addCandy( 'toffee'      , 20 );         // 22
addCandy( 'chocolate'   , 15 );         // 0.45
addCandy( 'toffee'      , 20 );         // 22
addCandy( 'toffee'      , 20 );         // 22
addCandy( 'toffee'      , 20 );         // 22
addCandy( 'chewingGum'  , 15 );         // 0.45
addCandy( 'toffee'      , 20 );         // 22
addCandy( 'chocolate'   , 15 );         // 0.45
addCandy( 'toffee'      , 20 );         // 22
addCandy( 'chewingGum'  , 15 );         // 0.45

console.log( 'Here it is your bil    :  ' + boughtCandyPrices.reduce( function showbil( a , b ) {return a + b.toString().substr(0, 5) + '  +  ' } , '') );
console.log( 'You bought             :  ' + boughtCandyPrices.reduce(function sum(a,b) {return a+b;} , 0));
console.log( 'You could buy up to    :  ' + amountToSpend + ' DKK');