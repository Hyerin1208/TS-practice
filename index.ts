import NamooSorter from "./NamooSorter";

let sorter = new NamooSorter([10, -7, 22, 3, 15]);
console.log(sorter.sort());

sorter = new NamooSorter("TypeScript");
console.log(sorter.sort());

// // data라는 변수 하나 선언
// let data : string | number [];

// function isString(data: string | number[]): data is string {
//     return( <string>data).split !== undefined;
// }

// data = 'TypeScript';
// if(isString(data)){
//     data.split('')
// } else {
//     // number[] 타입이 될것이고
//     // 위 타입에 어떠한 작업을 진행하면 됨.
// }
