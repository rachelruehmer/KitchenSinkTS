var person = {
    myName: "Rachel",
    states: 50
};
console.log(person.myName);
console.log(person.states);
function add(n1, n2) {
    return n1 + n2;
}
var num1 = 4;
var num2 = 5;
console.log(add(num1, num2));
function sayHello(text) {
    if (typeof text === "string") {
        alert(text);
    }
    else {
        console.error("incorrect");
    }
}
var greeting = "Hello World!";
sayHello(greeting);
function firstCheckAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
    else {
        console.log("You may enter " + name);
    }
}
firstCheckAge("Charles", 21);
firstCheckAge("Abby", 27);
firstCheckAge("James", 18);
firstCheckAge("John", 17);
var vegetables = ["asparagus", "brussel sprouts", "broccoli", "peppers"];
for (var i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
}
var ppl = [
    { name: "Anna", age: 20 },
    { name: "Kim", age: 53 },
    { name: "James", age: 25 },
    { name: "Jeff", age: 52 }
];
for (var i = 0; i < ppl.length; i++) {
    checkAge(ppl[i].name, ppl[i].age);
}
function checkAge(name, age) {
    for (var i = 0; i < Array.length; i++) {
        if (Array[i].Age < 21) {
            console.log("Sorry," + Array[i].name + " ,you aren't old enough to view this page!");
        }
        else {
            console.log("You may enter, " + Array[i].name);
        }
    }
}
function getLength(pop) {
    var wordlength = pop.length;
    return wordlength;
}
var x = getLength('Hello World');
if (x % 2 == 0) {
    console.log('The world is nice and even!');
}
else {
    console.log('The world is an odd place!');
}
