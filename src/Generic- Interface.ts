// genecic interface

interface CrushInterface<T>{
    name:string,
    husband:T
}
// multiple argument
interface CrushInterface2<T, U = null>{
    name:string,
    husband:T,
    wife?: U
}

const crush1:CrushInterface<boolean>={
    name:"wife",
    husband: true,
}

const crush2:CrushInterface<string>={
    name:"Wife",
    husband: "Hasibul",
}

const crush3:CrushInterface<object>={
    name:"Wife",
    husband: {
        name:"Md Hasibul Hasan",
        age:24
    },
}

const crush4:CrushInterface<{name:string, age:number}>={
    name:"Wife",
    husband: {
        name:"Md Hasibul Hasan",
        age:24
    },
}

const crush5:CrushInterface2<boolean, string>={
  name:"Test",
  husband: true,
  wife:"Not Found!"
}