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
    if ( isAboutUserName( splitCommand ) ) {
        let reply = '';
        let userName = splitCommand[splitCommand.indexOf('name') + 2]
        userName = firstLetterUpperCase (userName);
        
        reply += `Hi ${userName}.`
            if(splitCommand[0].includes( 'hello' ) || splitCommand[0].includes( 'hi' )) {
        }
        // Check if userName is already in there.
        // let exist = false;
        // for(let i = 0 ; i < dataBase.length ; i++ ) {
        //     if ( dataBase[i].id === 'userName') {
        //         exist = true;
        //         if (dataBase[i].value === userName) {
        //             reply += ' Ofcourse I already know your name.'
        //             break
        //         } else {
        //             reply = `It is wierd, I am confused. You prevoiusly have told me that your name is ${dataBase[i].value}`
        //             break
        //         }
        //     }
        // }

        let exist = false;
        const userNameIndex = findIndexOf('userName');
        if(userNameIndex !== -1 ) {
            exist = true;
            if (dataBase[userNameIndex].value === userName) {
                reply += ' Ofcourse I already know your name.'
            } else {
                reply = `It is wierd, I am confused. You prevoiusly have told me that your name is ${dataBase[userNameIndex].value}`
            }
        }
        if (!exist) {
            add( 'userName' , userName )
            console.log(reply);
            
            reply += ` Nice to meet you ${userName}`
        }
        return reply;
    }
}

let dataBase = [];

console.log(getReply('add clean machine to my todo list.'));
console.log(dataBase);

console.log(getReply('Hi, My name is joHn Doe.'));
console.log(dataBase);

console.log(getReply('Hi pc. My name is Rober. How are you doing.'));
console.log(dataBase);

console.log(getReply('Hi, My name is joHn Doe.'));
console.log(dataBase);

console.log(getReply('what is My name?'));
console.log(dataBase);
