let notes = [];

function addNote( content , id ){
    // notes.push( {"content" : content , "id" : id} );
    notes.push( {content , id} )
}

addNote('this is the first note.' , 235 )
addNote('this is the second note.' , 87 )
addNote('this is the third note.' , 6 )
addNote('this is the forth note.' , 79 )
addNote('this is the fifth note.' , 1002 )
addNote('this is the sixth note.' , 87 )
console.log(notes);

function getNoteFromId(id) {
    let finding = []
    for( let i = 0 ; i < notes.length ; i++ ) {
        if (notes[i]['id'] === id ) {
            finding.push(notes[i]);
        }
    }
    if(finding.length === 0) {
        console.log( 'Error. No note with such an ID.' )
        return;
    } else{
        console.log(finding);
        return;
    }
}

console.log('\ngetNoteFromId(6)');
getNoteFromId(6)

console.log('\ngetNoteFromId(1002)');
getNoteFromId(1002)

console.log('\ngetNoteFromId(87)');
getNoteFromId(87)

console.log('\ngetNoteFromId(12)');
getNoteFromId(12)

console.log('\ngetNoteFromId(235)');
getNoteFromId(235)




function getAllNotes() {
    let notesArray = [];
    for (let i = 0 ; i < notes.length ; i++ ) {
        notesArray.push(notes[i]['content']);
    }
    return notesArray;
}
console.log(getAllNotes());

function logOutNotesFormatted() {
    for (let i = 0 ; i < notes.length ; i++) {
        console.log(`The note with id: ${notes[i]['id']}, has the following note text: \"${notes[i]['content']}\"`);
    }
}
logOutNotesFormatted();