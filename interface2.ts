// 일반 객체를 interface 로 타입 설정하기
// 클래스가 아닌 일반 객체를 interface를 사용해 타입을 지정하는 방법을 알아보기
interface Person {
  name: string;
  age?: number; // ? 가 있는 것은 설정을해도되고, 안해도되는 값이라는 의미
}

interface Developer {
  name: string;
  age?: number;
  skills: string[];
}

const person: Person = {
  name: "김혜린",
  age: 28,
};

const expert: Developer = {
  name: "개발자",
  skills: ["javascript", "react"],
};

// Person 과 Developer형태가 유사, interface를 선언할 때는 다른 interface를 extends 해서 상속가능

// const people = Person[] = [person, expert];
