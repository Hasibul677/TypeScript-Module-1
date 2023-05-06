"use strict";
// Arrow function
const createArray1 = (param) => {
    return [param];
};
const createArray2 = (param) => {
    return [param];
};
const createArray3 = (param1, param2) => {
    return [param1, param2];
};
const result1 = createArray1("Bangladesh1");
const result2 = createArray2("Bangladesh2");
const result3 = createArray2(true);
const result4 = createArray3(true, ["test"]);
// Spread operator
const crush = "don't know";
const myInfo = {
    name: "Hasibul",
    age: 24,
    salary: 200
};
const newdata = Object.assign(Object.assign({}, myInfo), { crush });
//without generic
const addMeWithMyCrush = (myInfo) => {
    const crush = "don't know";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
// with generic
const addMeWithMyCrush1 = (myInfo) => {
    const crush = "don't know";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const result5 = addMeWithMyCrush(myInfo);
const result6 = addMeWithMyCrush1(myInfo);
