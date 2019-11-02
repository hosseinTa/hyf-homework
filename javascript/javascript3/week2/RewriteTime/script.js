// Rewrite setTimeout to promises
function setTimeoutPromise(delay) {
    mypromise = new Promise(function (res, rej) {
        setTimeout(() => res(`resolved`), delay * 1000)
    })
    return mypromise;
}



setTimeoutPromise(3).then(data => console.log('Called after 3 seconds'));


//Rewrite navigator.geolocation.getCurrentPosition to promises

function getCurrentLocation() {
    locationPromise = new Promise( ( res , rej ) => {
        navigator.geolocation.getCurrentPosition((data)=>res(data) , ()=>rej('failed'));
    })
    return locationPromise;
}
getCurrentLocation()
    .then((position) => {
        // called when the users position is found
        console.log(position);
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.log(error);
    });