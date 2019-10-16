// 1.Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
setTimeout( ()=> console.log('Called after 2.5 seconds') , 2.5*1000);

// 2.Create a function that takes 2 parameters: delay and stringToLog. Calling this 
// function should log out the stringToLog after delay seconds. Call the function you
//  have created with some different arguments.
function printWithDelay( delay , stringToLog ) {
    setTimeout( () => console.log(stringToLog , 'delay = ' , delay) , delay * 1000 );
}
printWithDelay( 8 , 'stringToLog 1' );

printWithDelay( 3 , 'stringToLog 2' );


// <!-- 3. Create a button in html. When clicking this button, use the function you
//     created in the previous task to log out the text: Called after 5 seconds 5
//     seconds after the button is clicked. -->
const tryMeButton = document.querySelector('button');
tryMeButton.addEventListener('click' , SpecifyPrintWithDelay);

function SpecifyPrintWithDelay() {
    return printWithDelay( 5 , 'Called after 5 seconds')
}

