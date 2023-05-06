"use strict";
// mocking
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const makePromise = () => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (data) {
            resolve(data.json());
        }
        else {
            reject("Failed to fetch data");
        }
    }));
};
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
const makePromiseInformation = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise();
    console.log(data);
});
