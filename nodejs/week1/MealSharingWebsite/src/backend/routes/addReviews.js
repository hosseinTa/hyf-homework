function addReviews(meals , reviews) {
    const reviewAddedMeals = meals.map(meals => {
        const reviewsOfMeal = reviews.filter(reviews => reviews.mealId === meals.id)
        meals.reviews = reviewsOfMeal;
        return meals;
    })
    return reviewAddedMeals;
}

module.exports = addReviews;