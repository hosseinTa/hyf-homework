const class07Students = [];
function addStudentToClass(studentName) {
    if (typeof(studentName) == 'string') {
        
        //it is at least an string variable
        if(studentName == 'Queen' || studentName == 'queen') {
            
            //Queen must be registered, no matter what
            if( isNewStudent( 'queen' ) && isNewStudent( 'Queen' ) ) {
                
                // check if queen is already registered
                //queen is new to class
                console.log( pushStudent(studentName) );
                return;

            } else {
                
                //Queen is registered before.
                console.log( `Student ${studentName} is already in the class` );
                return;

            }

        } else if ( studentName.length == 0) {
            
            //It is empty
            console.log('Student name is empty.');
            return

        } else {

            //It is not queen and name is not empty
            if(isNewStudent( studentName ) ) {
                
                //It is an ordinary new student then
                if ( getNumberOfStudents(class07Students) < 6) {
                    
                    //there is an empty slot in the class.
                    console.log(pushStudent(studentName));
                    return;

                } else {
                    
                    //class full
                    console.log(`Sorry, Class is full. We can not register ${studentName} in the class.`);
                    return;
                    
                }

            } else {
                
                //this student is already registered
                console.log( `Student ${studentName} is already in the class` );

            }

        }

    } else {
        
        //invalid name format
        console.log('Student name should be a string.');
        return;

    }
    

}

function getNumberOfStudents() {
    // You write code here
    return class07Students.length;
}

function pushStudent( studentName ) {
    class07Students.push( studentName );
    console.log(class07Students);
    return `Student ${studentName} added to class`;
}

function isNewStudent(studentName) {
    for (var i = 0 ; i < class07Students.length ; i++) {
        if( studentName == class07Students[i]) {
            return false;
        }
    }
    return true;
}

addStudentToClass(5);
addStudentToClass('jack');
addStudentToClass('jack');
addStudentToClass('jack2');
addStudentToClass(5);
addStudentToClass('jack3');
addStudentToClass('jack4');
addStudentToClass('');
addStudentToClass('jack5');
addStudentToClass('jack5');
addStudentToClass('jack6');
addStudentToClass('jack6');
addStudentToClass('');
addStudentToClass('robert1');
addStudentToClass('robert2');
addStudentToClass('robert3');
addStudentToClass('Queen');
addStudentToClass('Queen');
addStudentToClass('');
addStudentToClass('jack7');
addStudentToClass(5);
addStudentToClass('queen');
addStudentToClass('Queen');
addStudentToClass('jack2');

