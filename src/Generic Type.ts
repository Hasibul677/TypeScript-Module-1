//normar type
const classRooms1:number[]=[1,2,3,4]
const classRooms2:string[]=['1','2','3','4']

const classRooms3:Array<number>=[1,2,3,4]
const classRooms4:Array<string>=['1','2','3','4']
const classRooms5:Array<boolean>=[true, false]

// we can direct assign object type as a paremeter
const userInfromation: Array<{name:string, roll:number}>=[
    {
        name:"md hasibul",
        roll:12
    }
]


//Generic Type

type GenericArray<T> = Array<T>

const classRooms6:GenericArray<number>=[1,2,3,4]
const classRooms7:GenericArray<string>=['1','2','3','4']

type GenericTyple<X,Y> = [X,Y]

const relationShip : GenericTyple<string,string>=["Hasibul","Hasan"]