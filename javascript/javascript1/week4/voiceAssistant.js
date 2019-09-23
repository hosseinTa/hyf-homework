let dataBase = [];




function commandCleanUp(command) {
    if(command[command.length - 1 ] === '.' || command[command.length - 1 ] === '?' ) {
        console.log(command.length);
        command = command.slice(0 , command.length - 1 )
    }
    command = command.toLowerCase();
    splitCommand = command.split( " " );
    console.log(splitCommand);
    return splitCommand;
}

function add( addtype , splitCommand) {
    const work = splitCommand.slice(1 , splitCommand.indexOf('to') ).join(' ');
    dataBase.push({'id' : addtype , 'value': work});
}

function getReply(command) {
    const addtypes = ['shopping' , 'todo' , 'favorite'];
    const week = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'];
    const systemDate = new Date();

    commandCleanUp(command);
    
    if(splitCommand[0] === 'what' ) {
        if (splitCommand[1] = 'day') {
            if (splitCommand[splitCommand.length - 1 ].includes( 'today' )) {
                return `Today is ${ week [ systemDate.getDay() ] }.`
            }
            if (splitCommand[splitCommand.length - 1].includes ('tomorrow')) {
                return `Tomorrow is ${ week[ 1 + systemDate.getDay() ] }.`
            }
        }
    }

    
    if(splitCommand[0] === 'add' ) {
        for (let i = 0 ; i < addtypes.length ; i++) {
            if ( splitCommand.indexOf( addtypes[i] ) !== -1 ) {
                add( addtypes[i] , splitCommand );
                return `${ dataBase[dataBase.length - 1]['value'] } is added to your ${addtypes[i]} list.`
            }
        }
    }


    
}

console.log(getReply('add driving lisence to my shopping activities.'));
console.log(dataBase);
