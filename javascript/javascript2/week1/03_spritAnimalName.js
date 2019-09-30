const mybutton = document.querySelector('button');
console.log(mybutton);

mybutton.addEventListener( 'click' , () => sayHello() ) ;

function sayHello(){   console.log("Hello World");  }