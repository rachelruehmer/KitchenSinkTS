const person: {
    myName: string;
    states: number;
} = {
    myName: "Rachel",
    states: 50
}

console.log(person.myName);
console.log(person.states);

function add(n1: number, n2: number) {
    return n1 + n2;
}

const num1 = 4;
const num2 = 5;

console.log(add(num1, num2));

function sayHello(text: string) {
    if (typeof text === "string") {
        alert(text);
    } else {
        console.error("incorrect")
    }
}
let greeting = "Hello World!";
sayHello(greeting);

function firstCheckAge(name: string, age: number) {
    if (age < 21) {
        alert (`Sorry ${name}, you aren't old enough to view this page!`)
    } else {
        console.log(`You may enter ${name}`)
    }
}

firstCheckAge("Charles", 21);
firstCheckAge("Abby", 27);
firstCheckAge("James", 18);
firstCheckAge("John", 17);

const vegetables: string[] = ["asparagus", "brussel sprouts", "broccoli", "peppers"];
for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
}

interface people {
    name: string;
    age: number;
}

let ppl: Array<people> = [
    { name: "Anna", age: 20 },
    { name: "Kim", age: 53 },
    { name: "James", age: 25 },
    { name: "Jeff", age: 52 }


]

for (let i = 0; i < ppl.length; i++) {
    checkAge(ppl[i].name, ppl[i].age)
}



function checkAge(name, age) {
    for (let i = 0; i < Array.length; i++) {
        if (Array[i].Age < 21) {
            console.log("Sorry," + Array[i].name + " ,you aren't old enough to view this page!")
        } else {
            console.log("You may enter, " + Array[i].name)
        }
    }
}

function getLength(pop: string) {
    const wordlength = pop.length;
    return wordlength
}

let x = getLength('Hello World')


if (x % 2 == 0) {
    console.log('The world is nice and even!')
} else {
    console.log('The world is an odd place!')
}

