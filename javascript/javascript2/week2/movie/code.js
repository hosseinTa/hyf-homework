// 1. Create an array of movies containing the movies with a short title 
const  shortMovieTitles = movies.filter( movies => movies.title.length < 8);

// 2. Create an array of movie titles with long movie titles
const  longMovieTitles = movies.filter( movies => movies.title.length > 10);
console.log(shortMovieTitles.length);
console.log(longMovieTitles.length);

// 3. Count the number of movies 
console.log(`Number of movies made between 1980-1989 is equal to ${movies.filter(movies => 
    (movies.year <=1989 && movies.year >=1980)).length}`);

// 4. Create a new array that has an extra key called tag.
const moviesCopy = movies;
moviesCopy.map(function(movies) {
    if(movies.rating >= 7) {
        movies.tag = 'Good';
    } else if(movies.rating < 4) {
        movies.tag = 'Bad';
    } else {
        movies.tag = 'Average';
    }
    return movies;
})

// 5. Using chaining, first filter the movies
const ratingsHigherThan6 = movies.filter( movies => movies.rating > 6)
    .map( movies => movies.rating);
console.log(ratingsHigherThan6);


// 6. Count the total number of movies
console.log(`Number of fillms that includes "Surfer", "Alien" or "Benjamin" is: ${ movies.filter(movies => ( movies.title.includes('Surfer') || 
movies.title.includes('Alien') || movies.title.includes('Benjamin'))).length}`)

// 7. Create an array of movies where a word in the title is duplicated.

