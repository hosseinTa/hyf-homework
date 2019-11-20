let numbers = [ 1, 2, 3, 4, 5, 6, 7, 9, 12, 11, 18, 3, 27, 10 ];

const newNumbers =  numbers.filter( number => number%2 === 1)
        .map ( number => number * 2 )
console.log ( newNumbers );