function getEventWeekday(days , today) {
    const week = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 
    'Thursday' , 'Friday' , 'Saturday'];
    today = today || (new Date()).getDay();
    return week[(today + days ) % 7] ;
}

console.log(getEventWeekday( 6 ,  ));
console.log(getEventWeekday( 6 ,  5));