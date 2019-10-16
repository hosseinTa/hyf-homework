// 1. Create an array of movies containing the movies with a short title 
const  shortMovieTitles = movies.filter( movies => movies.title.length < 8);
console.log(shortMovieTitles);

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


// 6. Count the total number of movies
console.log(`Number of fillms that includes either "Surfer", "Alien" or "Benjamin" is: ${ movies.filter(movies => ( movies.title.includes('Surfer') || 
movies.title.includes('Alien') || movies.title.includes('Benjamin'))).length}`)


// 7. Create an array of movies where a word in the title is duplicated.
const dublicatesMoviesList = movies.filter( function isDuplicated(movies) {
    // const movieTitle = movies.title.toLowerCase();
    // const cleanName = movieTitle.replace(/:|;|\(|\)|-|\.|\'|\*|\!|½/g, '');
    // const titleWords = cleanName.split(' ');
    const titleWords = titleCleanUp(movies.title);
    //console.log(titleWords);
    const repeats = titleWords.reduce( function (counter , titleWords) {
        if(counter.hasOwnProperty(titleWords) ) {
            counter[titleWords] += 1;
            if((titleWords === 'the' || titleWords === 'a') || titleWords === 'of') {
                
            } 
            else {counter.duplicated = true;}
        } else {
            counter[titleWords] = 1;
        }
        return counter;
    } , {'duplicated' : false} )
    // console.log(repeats);
    if(repeats['duplicated'] === true) return true;
})
titleOfDublicatesMoviesList = dublicatesMoviesList.map( dublicatesMoviesList => dublicatesMoviesList.title);
// console.log('titleOfDublicatesMoviesList');

// console.log(titleOfDublicatesMoviesList);
const myUL = document.createElement('ul');
titleOfDublicatesMoviesList.forEach(titleOfDublicatesMoviesList => {
    const myLI = document.createElement('li');
    myLI.textContent = titleOfDublicatesMoviesList;
    myUL.appendChild(myLI);
});
document.body.appendChild(myUL);

function titleCleanUp(title) {
    const movieTitle = title.toLowerCase();
    const cleanName = movieTitle.replace(/:|;|\(|\)|-|\.|\'|\*|\!|½/g, '');
    return cleanName.split(' ');
}


// Find the word that is mostly duplicated using sort Optional
const maxfinder = movies.reduce(addWordsToCounter , {'maxDuplicatedWord' : 'rrr', 'rrr': 0});
console.log(maxfinder.maxDuplicatedWord , maxfinder[maxfinder.maxDuplicatedWord]);

function addWordsToCounter( counter , movies ) {
    const uselessWords = ['the' , 'a' , 'of' , 'in' , 'and' , 'to' , '2'];
    const titleWords = titleCleanUp(movies.title);      //clean up the title from signs like " / ½ ? ,... and split the string
    titleWords.reduce( function (counter , titleWords) {
        if(counter.hasOwnProperty(titleWords) ) {
            counter[titleWords] ++;
            if(counter[titleWords] > counter[counter.maxDuplicatedWord]){
                if(!uselessWords.includes(titleWords)) counter.maxDuplicatedWord = titleWords;
            }
        } else {
            counter[titleWords] = 1;
        }
        return counter
    } , counter);
    return counter;
}