"use strict";
let test;
test = "Learning Type Assertion";
test.length; // this way for recommanded
test.length; // using angle bracat
// using function
const kgToGram = (value) => {
    if (typeof value === "number") {
        return value * 1000;
    }
    if (typeof value === "string") {
        return `The converted value is: ${parseFloat(value) * 1000}`;
    }
};
const kgToGram1 = kgToGram(10);
const kgToGram2 = kgToGram("10");
console.log("kgToGram1: ", kgToGram1);
console.log("kgToGram2: ", kgToGram2);
try {
}
catch (err) {
    console.log(err.message);
}
