function calculateAverage(arrayOfNumbers) {
    let sum = 0;
    for (let i =0 ; i < arrayOfNumbers.length ; i++) {
        sum += arrayOfNumbers[i];
    }
    return sum / arrayOfNumbers.length;
}

function calculateMedian(arrayOfNumbers) {
    arrayOfNumbers.sort(function(a, b){return a-b});
    console.log(arrayOfNumbers)
    if (arrayOfNumbers.length % 2 === 0) {
        const v1 = arrayOfNumbers[ arrayOfNumbers.length / 2 - 1];
        const v2 = arrayOfNumbers[ arrayOfNumbers.length / 2    ];
        return  0.5 * ( v1 + v2 )
    } else {
        return arrayOfNumbers[ Math.floor(arrayOfNumbers.length / 2) ];
    }
}

const housePrices = [300, 350, 130, 4000, 10000, 800, 210];

const myUL = document.createElement('ul');
myUL.style.marginLeft = '50px';

document.body.appendChild(myUL);

for (let i = 0 ; i < housePrices.length ; i++) {
    const newli = document.createElement('li');
    const price = housePrices[i].toString();
    newli.textContent = price;
    myUL.appendChild(newli); 
}

const averageText = document.createElement('p');
averageText.textContent = 'Average Price is : ' + calculateAverage(housePrices).toString();

const medianText = document.createElement('p');
medianText.textContent = 'The median of the prices is : ' + calculateMedian(housePrices).toString();

// console.log(averageText);
document.body.appendChild(averageText);
document.body.appendChild(medianText);
