var studentID = 12345;
var studentName = "Hyerin Kim";
var age = 28;
var gender = "female";
var subject = "Javascript";
var courseCompleted = false;
// 1. enum 형식
// enum GenderType {
//   Male = "male",
//   Female = "female",
//   genderNeutral = "genderNeutral",
// }
var student1 = {
    studentID: 121212,
    studentName: "TaeTae Kim",
    age: 30,
    gender: "male",
    subject: "Mongo DB",
    courseCompleted: false
};
// 아래는 학생의 정보를 추가하는 함수
function getStudentDetails(studentID) {
    return {
        studentID: 123456,
        studentName: "Hyerin Kim",
        gender: "female",
        subject: "Node JS",
        courseCompleted: true
    };
}
function saveStudentDetails(student) {
    // student.studentID = 123212;
}
saveStudentDetails(student1);
