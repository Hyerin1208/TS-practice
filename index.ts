import NamooSorter from "./NamooSorter";
import NumbersCollection from "./NumbersCollection";
import CharactersCollection from "./CharactersCollection";
import CustomerCollection from "./CustomerCollection";
import { Customer } from "./Customer";

let numCollection = new NumbersCollection([10, -7, 55, 3, 21]);
let charCollection = new CharactersCollection("TypeScript");
let customerCollection = new CustomerCollection([
  new Customer("A111", "Kim"),
  new Customer("B111", "Park"),
  new Customer("C111", "AAA"),
]);

// let sorter = new NamooSorter(numCollection);
let sorter = new NamooSorter(customerCollection);
sorter.sort();
console.log(sorter.printCollection());

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
