const peterWidth  = 8;          //integer
const peterDepth  = 10;         //integer
const peterHight  = 10;         //integer
const peterGarden = 100;        //integer
const peterCost   = 2500000;    //integer

const juliaWidth  = 8;          //integer
const juliaDepth  = 10;         //integer
const juliaHight  = 10;         //integer
const juliaGarden = 100;        //integer
const juliaCost   = 1000000;    //integer


const peterHousePrice = peterWidth * peterDepth * peterWidth * 2.5 * 1000 + peterGarden * 300;
const juliaHousePrice = juliaWidth * juliaDepth * juliaHight * 2.5 * 1000 + juliaGarden * 300;

if(peterCost < peterHousePrice) {
    console.log("Peter\'s house price is " + peterHousePrice + " which is higher than the " + peterCost + " that he should pay for it.");
} else if(peterCost > peterHousePrice) {
    console.log("Peter\'s house price is " + peterHousePrice + " which is less than the " + peterCost + " that he should pay for it.");
} else {
    console.log("Peter\'s house price is " + peterHousePrice + " which is equal to the " + peterCost + " that he should pay for it.");
}

if(juliaCost < juliaHousePrice) {
    console.log("Julie\'s house price is " + juliaHousePrice + " which is higher than the " + juliaCost + " that she should pay for it.");
} else if(juliaCost > juliaHousePrice) {
    console.log("Julie\'s house price is " + juliaHousePrice + " which is less than the " + juliaCost + " that she should pay for it.");
} else {
    console.log("Julie\'s house price is " + juliaHousePrice + " which is equal to the " + juliaCost + " that she should pay for it.");
}