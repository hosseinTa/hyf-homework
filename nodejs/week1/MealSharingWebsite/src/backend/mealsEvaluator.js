function filterCheapMeals(meals) {
    const cheapMeals = meals.filter(meals => {
        return isCheap(meals);
    })
    return cheapMeals;
}

function filterHighCapacityMeals(meals) {
    const cheapMeals = meals.filter(meals => {
        return canFitLotsOfPeople(meals);
    })
    return cheapMeals;
}

function giveOneRandom(array) {
    const randomNumber = Math.floor(Math.random()*array.length);

    const randomArray = [array[randomNumber]]; 
    return randomArray;
}

function isCheap(meals) {
    return meals.price < 80; 
}

function canFitLotsOfPeople(meals) {
    return meals.maxNumberOfGuests > 10; 
}

module.exports = [filterCheapMeals , filterHighCapacityMeals , giveOneRandom];