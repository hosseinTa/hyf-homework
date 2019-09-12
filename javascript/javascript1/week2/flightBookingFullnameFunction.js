function getFullname( firstName , lastName , useFormalName) {
    if( firstName && lastName ) {
        if( useFormalName ) {
            return `Lord ${firstName} ${lastName}`;
        } else {
            return `${firstName} ${lastName}`;
        }
    } else {
        if( (firstName + lastName).length === 0 ) {
            return `First name and last name box is empty.`;
        } else  {
            return `Either first name or last name is empty.`;
        }
    }
}



console.log(getFullname( ''     , ''        ));
console.log(getFullname( 'as'   , ''        ));
console.log(getFullname( ''     , 'ascx'    ));
console.log(getFullname( 'ca'   , 'ascx'    ));


console.log(getFullname( ''     , ''        , false));
console.log(getFullname( 'as'   , ''        , false));
console.log(getFullname( ''     , 'ascx'    , false));
console.log(getFullname( 'ca'   , 'ascx'    , false));


console.log(getFullname( ''     , ''        , true));
console.log(getFullname( 'as'   , ''        , true));
console.log(getFullname( ''     , 'ascx'    , true));
console.log(getFullname( 'ca'   , 'ascx'    , true));