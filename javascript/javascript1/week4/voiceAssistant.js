function commandCleanUp(command) {
    if(command[command.length - 1 ] === '.' || command[command.length - 1 ] === '?' ) {
        command = command.slice(0 , command.length - 1 )
    }
    command = command.toLowerCase();
    splitCommand = command.split( " " );
    return splitCommand;
}

function add( addtype , item) {
    dataBase.push({'id' : addtype , 'value': item});
}

function firstLetterUpperCase(userName) {
    return userName.slice(0 , 1).toUpperCase() + userName.slice(1 , userName.length);
}

function isAboutUser(splitCommand) {
    if( splitCommand.indexOf( 'my') - splitCommand.indexOf( 'is' ) === 1 ) {
        return true;
    } else {
        return false;
    }
}

function findIndexOf(id) {
    for(let i = 0 ; i < dataBase.length ; i++ ) {
        if ( dataBase[i]['id'] === id ) {
           return i;
        }
    }
    return -1;
}

function getReply(command) {
    const addtypes = ['shopping' , 'todo' , 'favorite'];
    const week = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'];
    const systemDate = new Date();

    commandCleanUp(command);

    // Questions. Sentences that start with WHAT
    if(splitCommand[0] === 'what' ) {
        if (splitCommand[1] === 'day') {
            if (splitCommand[splitCommand.length - 1 ].includes( 'today' )) {
                reply += `Today is ${ week [ systemDate.getDay() ] }.`
            }
            if (splitCommand[splitCommand.length - 1].includes ('tomorrow')) {
                return `Tomorrow is ${ week[ 1 + systemDate.getDay() ] }.`
            }
        }
        if( isAboutUser( splitCommand ) ) {
            const lookupValue = splitCommand.slice( splitCommand.indexOf('my') + 1 , splitCommand.length).join(' ') ;
            const valueIndex = findIndexOf( lookupValue );
            if(valueIndex === -1) {
                return `I dont know your ${lookupValue}. Maybe you should give me some information about your ${lookupValue}.`
            } else {
                return `Your ${lookupValue} is ${dataBase[valueIndex]['value']}`
            }
        }
    }

    if(splitCommand[0].includes( 'where' ) || splitCommand[0].includes( 'when' )) {
        // Tobe developed later
        return 'Sorry. Ihave not developed skills to answer this question yet';
    }

    if(splitCommand[0] === 'who' || splitCommand[0] === 'which' ) {
        // Tobe developed later        
        return 'Sorry. Ihave not developed skills to answer this question yet';
    }

    if(splitCommand[0] === 'am' || splitCommand[0] === 'is' ) {
        // Tobe developed later
        return 'Sorry. Ihave not developed skills to answer this question yet';
    }

    if(splitCommand[0] === 'are' || splitCommand[0] === 'were' ) {
        // Tobe developed later
        return 'Sorry. Ihave not developed skills to answer this question yet';
    }

    if(splitCommand[0] === 'was' || splitCommand[0] === 'will' ) {
        // Tobe developed later
        return 'Sorry. Ihave not developed skills to answer this question yet';
    }

    // Commands. Sentences that start with ADD
    if(splitCommand[0] === 'add' ) {
        for (let i = 0 ; i < addtypes.length ; i++) {
            if ( splitCommand.indexOf( addtypes[i] ) !== -1 ) {
                const item = splitCommand.slice(1 , splitCommand.indexOf('to') ).join(' ');
                add( addtypes[i] , item );
                return `${ dataBase[dataBase.length - 1]['value'] } is added to your ${addtypes[i]} list.`
            }
        }
    }

    // Informative sentences
    const isIndex = splitCommand.indexOf('is');
    const myIndex = splitCommand.indexOf('my');
    let newId = '';
    let newValue = '';
    if (isIndex < myIndex) {
        // THE VALUE IS MY ID
        // ex: red is my favorite color 
        newId = splitCommand.slice( myIndex + 1 , splitCommand.length ).join(' ');
        newValue = splitCommand.slice(0 , isIndex).join(' ');
    } else {
        // MY ID IS THE VALUE
        // ex: my favorite color is red
        newId = splitCommand.slice( myIndex + 1 , isIndex ).join(' ');
        newValue = splitCommand.slice( isIndex + 1 , splitCommand.length).join(' ');
    }
    if ( findIndexOf(newId) !== -1 ) {
        // Say it is already registered
        return `Your ${newId} is already registered in database as ${dataBase[findIndexOf(newId)].value}.`
    } else {
        // add it to databaee
        add( newId , newValue );  
        return `${newValue} is added to database as your ${newId}.`
    }
}

let dataBase = [];

console.log(getReply('add clean machine to my todo list.'));
// console.log(dataBase);

console.log(getReply('add potato to my shopping list.'));
// console.log(dataBase);

console.log(getReply('what is My name?'));
// console.log(dataBase);

console.log(getReply('My mothers name is julia'));
// console.log(dataBase);

console.log(getReply('joHn Doe is My name.'));
// console.log(dataBase);

console.log(getReply('spagetti is My favorite dish.'));
// console.log(dataBase);

console.log(getReply('My favorite dish is spagetti with fish and pepper.'));
// console.log(dataBase);

console.log(getReply('My second favorite dish is spagetti with fish and pepper.'));
// console.log(dataBase);

console.log(getReply('Hi, My name is Rober.'));
// console.log(dataBase);

console.log(getReply('what is My name?'));
// console.log(dataBase);

console.log(getReply('what is My mothers name?'));
// console.log(dataBase);