const dayHours = 24;
const hourMinutes = 60;
const lifeLength = 80;
const yearDays = 365.25;
const lifeMinutes = lifeLength * yearDays * dayHours * hourMinutes;

let seriesLength = 0;
let seriesPercent = 0;

const seriesDurations = [
    {
      title: 'Game of thrones',
      days: 3,
      hours: 1,
      minutes: 5,  
    },
    {
      title: 'Sopranos',
      days: 5,
      hours: 2,
      minutes: 2,
    },
    {
      title: 'The Wire',
      days: 1,
      hours: 3,
      minutes: 14,
    }
]
let total = 0;
for (let i= 0; i < seriesDurations.length ; i++) {
    seriesLength = seriesLengthCalculator(seriesDurations[i]);
    seriesPercent =  seriesLength / lifeMinutes;
    seriesPercent = 100 * seriesPercent.toFixed(5)
    console.log(`${seriesDurations[i]['title']} took ${seriesPercent}% of my life`)
    total += seriesPercent;
}

console.log(`\nIn total that is ${total.toFixed(3)}% of my life.`);

function seriesLengthCalculator(serie) {
    return serie['days'] * dayHours * hourMinutes + serie['hours'] * hourMinutes + serie['minutes'];
}