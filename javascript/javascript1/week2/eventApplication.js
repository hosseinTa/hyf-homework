function getEventWeekday(days) {
    const week = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 
                'Thursday' , 'Friday' , 'Saturday'];
    const today = (new Date()).getDay();
    return week[(today + days ) % 7] ;
}

console.log(getEventWeekday(6));