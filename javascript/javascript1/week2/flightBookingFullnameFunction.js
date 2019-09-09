function getFullname( firstName , sureName , useFormalName) {
    if( firstName && sureName ) {
        if( useFormalName ) {
            return`Lord ${firstName} ${sureName}`;
        } else {
            return`${firstName} ${sureName}`;
        }
    } else if( firstName ) {
        console.log(`Sure name is missing.`);
    } else if( sureName ) {
        console.log(`First name is missing.`);
    } else {
        console.log(`First name and sure name is missing.`);
    }
}
console.log(getFullname( 'Hossein', '', false));
