class Circle {
    constructor( xCenter , yCenter , radious , startAngle , endAngle , borderColor , fillColor , borderWidth) {
        this.xCenter    = xCenter || 10;
        this.yCenter    = yCenter || 10;
        this.radious    = radious || 10;
        this.startAngle = startAngle || 0;
        this.endAngle   = endAngle || 2* Math.PI;
        this.borderColor=borderColor || 'black'; 
        this.fillColor  = fillColor || 'black';
        this.borderWidth= borderWidth || 1;
    }
    drawCircle() {
        const myConvas = document.getElementById('myCanvas');
        let drawings = myConvas.getContext("2d");
        drawings.beginPath();
        drawings.strokeStyle = this.borderColor;
        
        drawings.lineWidth = this.borderWidth;
        drawings.moveTo(this.xCenter + this.radious , this.yCenter)
        drawings.arc( this.xCenter , this.yCenter , this.radious , this.startAngle , this.endAngle );

        drawings.fillStyle = this.fillColor
        drawings.fill();
        drawings.stroke();
        drawings.lineWidth = 1;
    }
}
class Line {
    constructor(xStart , yStart , xEnd , yEnd , color , lineThickness) {
        this.xStart = xStart;
        this.yStart = yStart;
        this.xEnd   = xEnd;
        this.yEnd   = yEnd;
        this.color  = color;
        this.lineThickness = lineThickness || 1;
    }
    drawLine() {
        const myConvas = document.getElementById('myCanvas');
        let drawings = myConvas.getContext("2d");
        drawings.beginPath();
        drawings.strokeStyle = this.color || 'black';
        drawings.lineWidth = this.lineThickness;
        drawings.moveTo(this.xStart , this.yStart)
        drawings.lineTo( this.xEnd , this.yEnd );
        drawings.stroke();
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const circle1 = new Circle ( 290 , 100 , 20 , 0 , 2*Math.PI , 'blue' , 'red' , 5)
setTimeout(circle1.drawCircle() , 5*1000)

const line1 = new Line (20 , 20 , 30 , 30 , 'brown' , 18);
line1.drawLine();

let oldMouseX = 0;
let oldMouseY = 0;  

let mouseX = 0;
let mouseY = 0;  
const myDocument = document.body;
document.addEventListener('mousemove' , handler);

function handler(e) {
    // console.log('e')

    mouseX = e.pageX;
    mouseY = e.pageY;

    // console.log(pageX, pageY);
}

function drawRandomCircle() {
    if(oldMouseX !== mouseX && oldMouseY !== mouseY) {
        const newCircle = new Circle(mouseX , mouseY , 5 + Math.floor(Math.random()*45) , 0 , 2*
            Math.PI , getRandomColor(),getRandomColor() , Math.floor(Math.random()*10))
        console.log(newCircle);
        newCircle.drawCircle()
        oldMouseX = mouseX;
        oldMouseY = mouseY;
    }else {
        const newCircle = new Circle(Math.floor(Math.random()*800) , Math.floor(Math.random()*600) , 5 +
            Math.floor(Math.random()*45) , 0 , 2*Math.PI , getRandomColor(),getRandomColor() , Math.floor(Math.random()*10))
        // console.log(newCircle);
        newCircle.drawCircle()
    }
}

setInterval( drawRandomCircle , 0.5 * 1000 );
