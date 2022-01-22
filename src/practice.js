"use strict";
// // let 과 const를 사용해 특정 값을 선언할 때
// // 여러가지 기본 타입을 지정해 선언하는 연습
// let count = 0; // number
// count += 1;
// count = "갑분 문자열"; // 이러면 지금처럼 빨간줄 에러.
// const message: string = "hello world"; // string (문자열)
// const done: boolean = true; // 불리언 값
// const numbers: number[] = [1, 2, 3]; // 숫자 배열
// const messages: string[] = ["hello", "world"]; // 문자열 배열
// messages.push(1); // 위에 stirng 선언하고 숫자를 넣는건 안됨.
// let mightBeUndefined: string | undefined = undefined; // string일수도 있고, undefined일 수도
// let nullableNumber: number | null = null; // number일수도 null일수도 있음.
// let color: "red" | "orange" | "yellow" = "red"; // red, orange, yellow 중 하나
// color = "yellow";
// color = "green"; // 에러발생
// /* 타입스크립트를 사용하면 이렇게 특정변수 또는 상수의 타입을 지정가능.
//     사전에 지정한 타입이 아닌 값이 설정될 때 바로 에러 발생시킴.
//     에러가 나면 컴파일이 되지 않는다.
// */
