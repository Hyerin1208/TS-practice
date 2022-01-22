let studentID: number = 12345;
let studentName: string = "Hyerin Kim";
let age: number = 28;
let gender: string = "female";
let subject: string = "Javascript";
let courseCompleted: boolean = false;

// 1. enum 형식
// enum GenderType {
//   Male = "male",
//   Female = "female",
//   genderNeutral = "genderNeutral",
// }

let student1: Student = {
  studentID: 121212,
  studentName: "TaeTae Kim",
  age: 30,
  gender: "male",
  subject: "Mongo DB",
  courseCompleted: false,
};

interface Student {
  readonly studentID: number;
  studentName: string;
  age?: number;
  // 2. " 리터럴 타입 "
  gender: "male" | "female" | "genderNeutral";
  subject: string;
  courseCompleted: boolean;
  //   addComment (comment: string): string;
  addComment?: (comment: string) => string;
}

// 아래는 학생의 정보를 추가하는 함수
function getStudentDetails(studentID: number): Student {
  return {
    studentID: 123456,
    studentName: "Hyerin Kim",
    gender: "female",
    subject: "Node JS",
    courseCompleted: true,
  };
}

function saveStudentDetails(student: Student): void {
  // student.studentID = 123212;
}

saveStudentDetails(student1);
