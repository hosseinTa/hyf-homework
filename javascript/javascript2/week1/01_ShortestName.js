function shortestWord (arrayOfStrings) {
    let shortest = 0
    for ( let i = 1 ; i <arrayOfStrings.length ; i++) {
        if( arrayOfStrings[i].length < arrayOfStrings[shortest].length ) {
            shortest = i;
        }
    }
    return arrayOfStrings[shortest];
}

console.log(shortestWord(['fawawef' , 'aerg' , 'aeg' , 'ds' , 'fd']));