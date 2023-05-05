// Arrow function

const createArray1=(param:string):string[]=>{
return [param]
}

const createArray2=<T>(param:T):T[]=>{ 
    return [param]
    }
const createArray3=<X,Y>(param1:X, param2:Y):[X,Y]=>{ 
        return [param1, param2]
        }    

const result1 = createArray1("Bangladesh1")
const result2 = createArray2<string>("Bangladesh2")
const result3 = createArray2<boolean>(true)
const result4 = createArray3< boolean, Array<string>>(true,["test"])


// Spread operator

const crush = "don't know";
const myInfo ={
    name:"Hasibul",
    age:24,
    salary:200
}

const newdata = {...myInfo, crush};

//without generic
const addMeWithMyCrush=(myInfo:object)=>{
const crush = "don't know";
const newData = {...myInfo, crush}
return newData
}

// with generic
const addMeWithMyCrush1=<T>(myInfo:T)=>{
    const crush = "don't know";
    const newData = {...myInfo, crush}
    return newData
    }

const result5 =addMeWithMyCrush(myInfo)
const result6 =addMeWithMyCrush1(myInfo)
