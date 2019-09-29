function average(arrayOfNumbers) {
    let sum = 0;
    for (let i =0 ; i < arrayOfNumbers.length ; i++) {
        sum += arrayOfNumbers[i];
    }
    return sum / arrayOfNumbers.length;
}

function median(arrayOfNumbers) {
    arrayOfNumbers.sort();
    console.log(arrayOfNumbers)
    if (arrayOfNumbers.length % 2 === 0) {
        const v1 = arrayOfNumbers[ arrayOfNumbers.length / 2 - 1];
        const v2 = arrayOfNumbers[ arrayOfNumbers.length / 2    ];
        return  0.5 * ( v1 + v2 )
    } else {
        return arrayOfNumbers[ Math.floor(arrayOfNumbers.length / 2) ];
    }
}

console.log(average([55 , 20 , 30 , 10 , 40]));

console.log(median([ 2, 20 , 30 , 10 , 40]));
