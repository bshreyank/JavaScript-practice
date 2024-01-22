/*

Q. How to define a class with properties and
methods in JavaScript?

• A class declared with a name which acts as its identifier. We can use
the name to create new objects using the keyword new

*/

class Car{
    constructor(model, name){
        this.model = model;
        this.name = name;
    }

    start(){
        console.log(`Name of the car: ${this.name}`);
        
    }
}

bmw = new Car(620, 'Sports Edition');
bmw.start();