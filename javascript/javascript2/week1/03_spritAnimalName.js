const mybutton = document.querySelector('button');
const myOutput = document.getElementById('result');
const radioClick = document.getElementsByName('triger');
const userName = document.getElementById('userName');
switchToClick();

function sayHello(){
    const spritalNames = ['Happy Bear' , 'running Wolf' , 'fighting rabit' , 'smart spider' , 'rainy night bat' , 'horny horse' , 'hairy gurilla' , 'loyal dog' , 'fat pig' , 'killer shark'];
    if (userName.value === '') {
        myOutput.textContent =  'Enter your name in the box';    
    } else {
        myOutput.textContent =  userName.value + ' - The ' + spritalNames[Math.floor(10*Math.random())];
    }
}

function switchToClick() {
    mybutton.addEventListener( 'click' , sayHello );
    mybutton.style.visibility = 'visible' ;
    userName.removeEventListener( 'mouseenter' , sayHello );
}


function switchToHover() {
    console.log('2');

    userName.addEventListener( 'mouseenter' , sayHello );
    mybutton.removeEventListener( 'click' , sayHello );
    mybutton.style.visibility = 'hidden' ;
}

function switchToType() {
    console.log('3');
    userName.removeEventListener( 'mouseenter' , sayHello );
    mybutton.removeEventListener( 'click' , sayHello );
    mybutton.style.visibility = 'hidden' ;
    userName.addEventListener( 'input' , sayHello );
}