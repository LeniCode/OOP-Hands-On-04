// // Define the class
// class aClass {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//     // Method assigned to class
//     sayName() {
//       alert(this.name);
//     }
//     // Method assigned to class
//     sayAge() {
//       alert(this.age);
//     }
//   }
//   // Instantiating the aClass with the 'new' keyword
//   const myInstance = new aClass("andrew", 30);
//   myInstance.sayName();



// class Vehicle {
//     constructor(make, model, year){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
// }
// let myCar = new Vehicle("Nissan", "Rogue", 2017);
// console.log(myCar)



// class Person {
//     constructor(firstName, lastName) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//     }
  
//     run() {
//       console.log(this.firstName + " " + this.lastName + " is running.");
//     }
//     walk() {
//       console.log(this.firstName + " " + this.lastName + " is walking.");
//     }
//     greeting() {
//       console.log("Hello, my name is " + this.firstName + ".");
//     }
//   }
  
//   let rose = new Person("Rose", "Dawson");
//   rose.run();
//   rose.walk();
//   rose.greeting();


// class Car {
//     constructor(make, model, year) {
//       this._make = make;
//       this._model = model;
//       this._year = year;
//     }
  
//     get make() {
//       return this._make;
//     }
  
//     set make(value) {
//       const possibleMakes = ["Honda", "Toyota", "Nissan"];
  
//       if (possibleMakes.includes(value)) {
//         this._make = value;
//       } else {
//         throw Error(value + " is not a valid make");
//       }
//     }
  
//     get description() {
//       return this._year + " " + this._make + " " + this._model;
//     }
//   }
  
//   let myCar = new Car("Nissan", "Rogue", 2017);


class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greeting() {
      console.log("Hello, my name is " + this.name + " and I am " + this.age + ".");
    }
  }
  
  let andrew = new Person("Andrew", 30);
  let mike = new Person("Mike", 24);
  let frank = new Person("Frank", 29);
  andrew.greeting();
  mike.greeting();
  frank.greeting();