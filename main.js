//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

function display() {
    const person3 = {
        pizza:["Deep Dish","South Side Thin Crust"],
        tacos:"Anything not from Taco bell",
        burgers:"Portillos Burgers",
        ice_cream:["Chocolate","Vanilla","Oreo"],
        shakes:[{
            oberwise:"Chocolate",
            dunkin:"Vanilla",
            culvers:"All of them",
            mcDonalds:"Sham-rock-shake",
            cupids_candies:"Chocolate Malt"
        }]
    }
    for(const [key, value] of Object.entries(person3)) {
        console.log(value)
    }
}
console.log(display())

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method.
*/

// Create our Person Prototype
class Person {
    constructor (name, age) {
    this.name = name;
    this.age  = age;

    this.ageUp = function ageUp() {
        this.age++;
    };

    this.ageUp2 = function ageUp() {
        this.age = age + 2
    }

    this.printInfo = function printInfo() {
        console.log(this.name + " is " + this.age + " years old");
    };
}}

let jeff = new Person('jeff', 28);
let mark = new Person('mark', 30)
jeff.printInfo();
jeff.ageUp();
jeff.printInfo();
mark.printInfo();
mark.ageUp2();
mark.printInfo();


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


const strLength = (string) => {
    return new Promise((resolve, reject)=>{
        if (string.length > 10){
            resolve("Wow, that's alot of letters for 1 state!")
        } else {
            reject("Unfortunately, this state has less than 10 letters")
        }
    })
}
const result = strLength('Massachusetts')
const result2 = strLength('New York')
console.log(result)
console.log(result2)

// Codewar exercise 1: Can we divide it? (8 kyu) //
let isDivideBy = (number, a, b) => {
    if (number % a === 0 && number % b === 0) {
      return true
    } else {
      return false
    }
  }

// Codewar exercise 2: Quarter of the year (8 kyu) //
const quarterOf = (month) => {
    month = month++
    if(month == 1 | month == 2 | month == 3) {
      return 1
    } if(month == 4 | month == 5 | month == 6) {
      return 2
    } if(month == 7 | month == 8 | month === 9) {
      return 3
    } else {
      return 4
    }
  }