const week = ['Synday' , 'Monday' , 'Tuesday' , 'Wednesday' , 
                'Thirsday' , 'Friday' , 'Saturday'];
function getEventWeekday(days) {
    const today = (new Date()).getDay();
    return week[(today + days ) % 7] ;
}