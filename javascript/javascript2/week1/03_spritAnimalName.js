const mybutton = document.querySelector('button');
const myOutput = document.getElementById('result');

mybutton.addEventListener( 'click' , sayHello ) ;

function sayHello(){
    const spritalNames = ['Happy Bear' , 'running Wolf' , 'fighting rabit' , 'smart spider' , 'rainy night bat' , 'horny horse' , 'hairy gurilla' , 'loyal dog' , 'fat pig' , 'killer shark'];
    const userName = document.getElementById('userName').value;
    if (userName === '') {
        myOutput.textContent =  'Enter your name in the box';    
    } else {
        myOutput.textContent =  userName + ' - The ' + spritalNames[Math.floor(10*Math.random())];
    }
}