"use strict";
// // interface 사용해보기
// // interface는 클래스 또는 객체를 위한
// // 타입을 지정할때 사용되는 문법
// // 클래스를 선언할 때 implements 키워드를 사용해
// // 해당 클래스가 특정 interace의 요구사항을 구현한다는 것을 명시
// // Shape 라는 interface 를 선언합니다.
// interface Shape {
//   getArea(): number; // Shape interface에는 getArea라는 함수가 꼭 있어야
// }
// class Circle implements Shape {
//   // `implements` 키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시
//   radius: number; // 멤버 변수 radius값을 설정
//   constructor(radius: number) {
//     this.radius = radius;
//   }
//   // 너비를 가져오는 함수를 구현
//   getArea() {
//     return this.radius * this.radius * Math.PI;
//   }
// }
// class Rectangle implements Shape {
//   width: number;
//   height: number;
//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }
//   getArea() {
//     return this.width * this.height;
//   }
// }
// const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];
// shapes.forEach((shape) => {
//   console.log(shape.getArea());
// });
