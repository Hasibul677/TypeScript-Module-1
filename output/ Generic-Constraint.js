"use strict";
const addMeWithMyCrush7 = (myInfo) => {
    const crush = "don't know";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const myInfo1 = {
    name: "Hasibul",
    age: 24,
};
const result7 = addMeWithMyCrush7(myInfo1);
