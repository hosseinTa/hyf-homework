const mySTR = '[1 , 1, 2 , 3]';
console.log(mySTR);
const myVariable = JSON.parse(mySTR)
console.log(myVariable);
console.log(myVariable[2])
console.log(JSON.stringify(myVariable))
const testVar2JSON = [{"Name" : "Kim" , "lastname" : "Larsen"} , {"Name" : "Hans" , "lastname" : "Andersen"} , 3];
console.log(JSON.stringify(testVar2JSON));

console.log(typeof(testVar2JSON[0]))
console.log(typeof(testVar2JSON[1]))
console.log(typeof(testVar2JSON[2]))
console.log(typeof(testVar2JSON))


console.log(testVar2JSON[1])
console.log(testVar2JSON[2])

console.log(testVar2JSON[0].keys)

const uu = testVar2JSON[0];
console.log(uu);
console.log(Object.keys(testVar2JSON[2]))