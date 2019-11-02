async function delayPromise(resolveAfter) {
    mypromise =  new Promise( function (res , rej ) {
        setTimeout( () => res('I am called asynchronously') , resolveAfter *1000 );
    })
    return mypromise;
}


delayPromise(6).then(value => console.log(value))