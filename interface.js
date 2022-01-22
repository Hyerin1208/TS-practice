"use strict";
// constructor 의 파라미터 쪽에 public 또는 private accessor 를 사용하면
// 직접 하나하나 설정해주는 작업을 생략
class Circle {
    // `implements`키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시
    constructor(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    // 너비를 가져오는 함수를 구현
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);
console.log(circle.radius); // 에러없이 작동
console.log(rectangle.width); // width가 private이기 때문에 에러발생..
const shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach((shape) => {
    console.log(shape.getArea());
});
