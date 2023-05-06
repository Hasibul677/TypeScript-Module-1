// mocking

interface IToDOList {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


// const makePromise = async(): Promise<IToDOList>=>{

//         const data =  await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         return await data.json()

// }

const makePromise = (): Promise<IToDOList>=>{
    return new Promise<IToDOList>( async (resolve, reject)=>{
        const data =  await fetch('https://jsonplaceholder.typicode.com/todos/1')

        if(data){
         resolve(data.json())
        }else{
            reject("Failed to fetch data")
        }
    })
}

// const makePromise = (): Promise<string>=>{
//     return new Promise<string>((resolve, reject)=>{
//         const data =  "test data"

//         if(data){
//             resolve(data)
//         }else{
//             reject("Failed to fetch data")
//         }
//     })
// }


const makePromiseInformation = async(): Promise<void>=>{
    const data = await makePromise();
    console.log(data)
}
makePromiseInformation()