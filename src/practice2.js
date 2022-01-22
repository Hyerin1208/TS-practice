"use strict";
// 함수에서 타입 정의하기
function sum(x, y) {
    //함수의 결과물이 숫자라는것을 명시해준다. (null 을 반환한다면 오류)
    return x + y;
}
sum(1, 2);
// 숫자 배열의 총합 구하는 함수
function sumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
// 배열의 내장함수를 사용 할 때에도 타입 유추가 매우 잘 이루어진다는 것
const total = sumArray([1, 2, 3, 4, 5]);
// 아무것도 반환하지 않아야 한다면 이를 반환 타입을 void 로 설정
function returnNothing() {
    console.log("I am just saying hello world");
}
