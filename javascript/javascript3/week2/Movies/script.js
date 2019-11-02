const sourceURL = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';
async function getMovieList() {
    const movie = await fetch(sourceURL).then(value => value.json());
    return movie;
}

getMovieList().then(data => {
    const badMovies = data.filter( data => data.rating < 7);
    console.log('badMovies');
    console.log(badMovies);
    const badMoviesAfter2000 = badMovies.filter( data => (data.rating < 7 && data.year >= 2000));
    console.log('badMoviesAfter2000');
    console.log(badMoviesAfter2000);
    const titleOfBadMoviesAfter2000 = badMoviesAfter2000.map( data => data.title);
    console.log('titleOfBadMoviesAfter2000');
    console.log(titleOfBadMoviesAfter2000);
    test = titleOfBadMoviesAfter2000;
});