let test: any;
test = "Learning Type Assertion";
(test as string).length; // this way for recommanded
<string>test.length; // using angle bracat

// using function

const kgToGram = (value: string | number): number | string | undefined  => {
  if (typeof value === "number") {
    return value * 1000;
  }
  if (typeof value === "string") {
    return `The converted value is: ${parseFloat(value) * 1000}`;
  }
  
};



const kgToGram1 = kgToGram(10) as number;
const kgToGram2 = <string>kgToGram("10")

console.log("kgToGram1: ", kgToGram1);
console.log("kgToGram2: ", kgToGram2);
