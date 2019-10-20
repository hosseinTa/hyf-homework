// 1.Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
setTimeout( ()=> console.log('Called after 2.5 seconds') , 2.5*1000);

// 2.Create a function that takes 2 parameters: delay and stringToLog. Calling this 
// function should log out the stringToLog after delay seconds. Call the function you
//  have created with some different arguments.
function printWithDelay( delay , stringToLog ) {
    setTimeout( () => console.log(stringToLog , 'delay = ' , delay) , delay * 1000 );
}
printWithDelay( 8 , 'stringToLog 1' );

printWithDelay( 3 , 'stringToLog 2' );


// <!-- 3. Create a button in html. When clicking this button, use the function you
//     created in the previous task to log out the text: Called after 5 seconds 5
//     seconds after the button is clicked. -->
const tryMeButton = document.querySelector('button');
tryMeButton.addEventListener('click' , SpecifyPrintWithDelay);

function SpecifyPrintWithDelay() {
    return printWithDelay( 5 , 'Called after 5 seconds')
}

// 4.Create two functions and assign them to two different variables. One function logs 
// out Earth, the other function logs out Saturn. Now create a new third function that has
//  one parameter: planetLogFunction. The only thing the third function should do is call
//   the provided parameter function. Try call the third function once with the Earth function 
//   and once with the Saturn function.

const eartthLogger = function printEarth() {
    console.log('Earth');
}

const saturnLogger = function printSaturn() {
    console.log('Saturn');
}

const planetLogFunction = function printPlanetfunction(a) {
    return a;
}

planetLogFunction(eartthLogger)();
planetLogFunction(saturnLogger)();


// 5. Create a button with the text called "Log location". When this button is clicked the 
// location (latitude, longitude) of the user should be logged out using this browser api

const locationButton = document.getElementById('locationButton');
locationButton.addEventListener('click' , printLocation );

function printLocation() {
    const userLongitude = document.createElement('p')
    const userLatitude  = document.createElement('p')

    navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        userLatitude.textContent = `This is the latitude: ${latitude}`;
        userLongitude.textContent = `This is the longitude: ${longitude}`;
    });
    const printArea = document.getElementById('resultArea')
    printArea.appendChild( userLongitude );
    printArea.appendChild( userLatitude  );
    return
}

// 7. Create a function called runAfterDelay. It has two parameters: delay and callback.
// When called the function should wait delay seconds and then call the provided callback function.
// Try and call this function with different delays and different callback functions

function runAfterDelay(runFunction , delay) {
    console.log('runFunction is executed')
    setTimeout(runFunction , delay * 1000)
}

const moonLogger = function printMoon() {
    console.log('Moon');
}

runAfterDelay(moonLogger , 3)

// 8. Check if we have double clicked on the page. A double click is defined by two clicks within 0.5
// seconds. If a double click has been detected, log out the text: "double click!"
let t0 = new Date().getTime();
console.log(t0);
document.body.addEventListener('click' , clickdetected)

function clickdetected() {
    const t1 = new Date().getTime();
    // console.log(t1);
    if( t1 - t0 < 500) {
        console.log('Double Click Is Detected!')
        t0 = t1 - 1000;
    }else {
            t0 = t1;
    }
}

// 9. Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean,
//  logFunnyJoke - function and logBadJoke - function. If you set tellFunnyJoke to true it should call 
//  the logFunnyJoke function that should log out a funny joke. And vice versa.

function jokeCreator (shouldTellFunnyJoke , logFunnyJoke , logBadJoke) {
    if(shouldTellFunnyJoke) logFunnyJoke();
    else logBadJoke();
}

function logBadJoke () {
    console.log('Very bad joke')
}


function logFunnyJoke () {
    console.log('It was funny')
}

jokeCreator(true , logFunnyJoke , logBadJoke);
jokeCreator(false , logFunnyJoke , logBadJoke);

