"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// using new user using intersection
const intersectionUser = {
    name: "Hasibul",
    age: 24,
    role: "student",
};
// using exteds interface to new object
const userfullInfo = {
    name: "Md Hasibul Hasan",
    age: 24,
    villeage: "Pabna",
    salary: 0,
    isAdmin: false,
};
const addNumber = (num1, num2) => num1 + num2; // funtion with alias (for clean code alias is recommanded)
const iaddNumber = (num1, num2) => num1 + num2; // funtion with interface
const rollNumbers = [1, 2, 3, 4]; // with alias
const irollNumbers = [1, 2, 3, 4]; //[index] // with interface
