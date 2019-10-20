// 1. Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
const arrayOfFunction = [
    ()=>console.log('Function1') ,
    ()=>console.log('Function2') ,
    ()=>console.log('Function3')
];

arrayOfFunction.forEach(arrayOfFunction => arrayOfFunction());

// 2. Create a function as a const and try creating a function normally. Call both functions.
const constFunction = function fuctionConst() {
    console.log('asConstFunction');
}
function normalFunction() {
    console.log('NormalFunction');
}

constFunction();
normalFunction();

// 3. Create an object that has a key whose value is a function. Try calling this function.
const objectOfFunction = {'discount20Percent' : price => console.log(0.8*price) ,
 'discount30Percent' : price => console.log(0.7*price) };
objectOfFunction['discount20Percent'](1000);
objectOfFunction['discount30Percent'](1000);
