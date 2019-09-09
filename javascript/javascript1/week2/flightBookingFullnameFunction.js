function getFullname( firstName , sureName , useFormalName) {
    if( firstName && sureName ) {
        if( useFormalName ) {
            return`Lord ${firstName} ${sureName}`;
        } else {
            return`${firstName} ${sureName}`;
        }
    } else if( firstName ) {
        return(`Sure name box is empty.`);
    } else if( sureName ) {
        return(`First name box is empty.`);
    } else {
        return(`First name and sure name box is empty.`);
    }
}
