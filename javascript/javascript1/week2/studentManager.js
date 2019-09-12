const class07Students = [];
function addStudentToClass(studentName) {
    if (typeof(studentName) === 'string') {
        if(studentName.toLowerCase() === 'queen') {
            console.log( pushStudent(studentName) );
            return;
        }
        if ( studentName.length === 0) {
            console.log('Student name is empty.');
            return
        } else {
            if ( getNumberOfStudents(class07Students) < 6) {  
                console.log(pushStudent(studentName));
                return;
            } else {
                console.log(`Sorry, Class is full.`);
                return;
            }
        }
    } else {
        console.log('Student name should be a string.');
        return;
    }
}

function getNumberOfStudents() {
    return class07Students.length;
}

function pushStudent( studentName ) {
    const desiredFormatOfStudentName = desiredFormat(studentName);
    if( !class07Students.includes( desiredFormatOfStudentName  )) {
        class07Students.push( desiredFormatOfStudentName  ) ;

        return `Student ${studentName} added to class`;
    } else {
        return `Student ${studentName} is already in the class` ;
    }
}

function desiredFormat(studentName) {
    return studentName.charAt(0).toUpperCase() + studentName.slice(1);
}

addStudentToClass('');
addStudentToClass(5);
addStudentToClass('jack');
addStudentToClass('jack2');
addStudentToClass(5);
addStudentToClass('jack3');
addStudentToClass('jack4');
addStudentToClass('queen');
addStudentToClass('jack5');
addStudentToClass('jack5');
addStudentToClass('jack6');
addStudentToClass('');
addStudentToClass('robert1');
addStudentToClass('Queen');
addStudentToClass('Queen');
addStudentToClass('');
addStudentToClass('jack7');
addStudentToClass(5);
addStudentToClass('queen');
addStudentToClass('jack2');
console.log(class07Students);
