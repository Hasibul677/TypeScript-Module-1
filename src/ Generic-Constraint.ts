
const addMeWithMyCrush7=<T extends {name:string, age:number}>(myInfo:T)=>{
    const crush = "don't know";
    const newData = {...myInfo, crush}
    return newData
    }


 type MyInfo ={
    name:string,
    age:number
 }   

 const myInfo1:MyInfo ={
    name:"Hasibul",
    age:24,
}

const result7 =addMeWithMyCrush7(myInfo1);

