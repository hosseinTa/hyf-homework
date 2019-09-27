function commandCleanUp(command) {
    if(command[command.length - 1 ] === '.' || command[command.length - 1 ] === '?' ) {
        command = command.slice(0 , command.length - 1 )
    }
    command = command.toLowerCase();
    splitCommand = command.split( " " );
    console.log(splitCommand);
    return splitCommand;
}

function add( addtype , item) {
    dataBase.push({'id' : addtype , 'value': item});
}

function firstLetterUpperCase(userName) {
    console.log(userName) , splitCommand;
    return userName.slice(0 , 1).toUpperCase() + userName.slice(1 , userName.length);
}

function isAboutUserName(splitCommand) {
    if( splitCommand.indexOf( 'name') - splitCommand.indexOf( 'my' ) === 1 ) {
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
        if (splitCommand[1] = 'day') {
            if (splitCommand[splitCommand.length - 1 ].includes( 'today' )) {
                reply += `Today is ${ week [ systemDate.getDay() ] }.`
            }
            if (splitCommand[splitCommand.length - 1].includes ('tomorrow')) {
                return `Tomorrow is ${ week[ 1 + systemDate.getDay() ] }.`
            }
        }
        if( isAboutUserName( splitCommand ) ) {
            const userNameIndex = findIndexOf( 'userName' );
            if(userNameIndex === -1) {
                return `I dont know your name. Maybe you should tell me your name.`
            } else {
                return `Your name is ${dataBase[userNameIndex]['value']}`
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
    if (isIndex < myIndex) {
        // THE VALUE IS MY ID
        console.log('****new method****');
        add(splitCommand.slice( myIndex + 1 , splitCommand.length ).join(' ') , splitCommand.slice(0 , isIndex).join(' ') ) ;
        console.log(dataBase);
        console.log('****end new method****');
        return `your ${splitCommand.slice( myIndex + 1 , splitCommand.length ).join(' ')} is added to database.`
    } else {
        // MY ID IS VALUE
        console.log('****new method2****');
        add(splitCommand.slice( myIndex + 1 , isIndex ).join(' ') , splitCommand.slice( isIndex + 1 , splitCommand.length).join(' '));
        console.log(dataBase);
        console.log('****end new method2****');
        return `your ${splitCommand.slice( myIndex + 1 , isIndex ).join(' ')} is added to database.`
    }
}

let dataBase = [];

console.log(getReply('add clean machine to my todo list.'));
console.log(dataBase);

console.log(getReply('joHn Doe is My name.'));
console.log(dataBase);

console.log(getReply('Hi, My name is joHn Doe.'));
console.log(dataBase);

console.log(getReply('Hi pc. My name is Rober. How are you doing.'));
console.log(dataBase);

console.log(getReply('Hi, My name is joHn Doe.'));
console.log(dataBase);

console.log(getReply('what is My name?'));
console.log(dataBase);