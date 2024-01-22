/*
Q. Explain the difference between Object.freeze() vs const?

• const, applies to bindings ("variables"). It creates an immutable binding,
i.e. you cannot assign a new value to the binding.

• Object.freeze works on values, and more specifically, object values. It
makes an object immutable, i.e. you cannot change its properties.

*/

//const month = "Jan"
//month = "Feb"
//console.log(month);     //TypeError: Assignment to constant variable.

//=======================================>>>>

let person = {
    name: "Shreyank"
}

Object.freeze(person);       //it will not let the value change.
person.name= "Hello World";

console.log(person);        //Shreyank
