const dogYearOfBirth = 1986;                //integer
const dogYearFuture  = 2067;                //integer
const shouldShowResultInDogYears = true;   //boolean
const dogYear = dogYearFuture - dogYearOfBirth;
if(shouldShowResultInDogYears) {
    console.log(' \"Your dog will be '+ 7*dogYear + ' dog years old in ' + dogYearFuture + '\" ');   
} else {
    console.log(' \"Your dog will be '+ dogYear + ' human years old in ' + dogYearFuture + '\" ');
}