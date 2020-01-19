class Circle {
    constructor( radious ) {
        this.radious = radious;
    }
    getDiameter() {
        return 2*this.radious;
    }
    getCircumference() {
        return 2*this.radious*Math.PI;

    }
    getArea() {
        return Math.PI*this.radious*this.radious;
    }
}

const circle1 = new Circle(1);
console.log(circle1.getDiameter());
console.log(circle1.getCircumference());
console.log(circle1.getArea());