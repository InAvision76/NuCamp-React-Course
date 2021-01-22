// // task 1
// class Student {
//   constructor(name, email, community) {
//     this.name = name;
//     this.email = email;
//     this.community = community;
//   }
// }
// class Bootcamp {
//   constructor(name, level, students = []) {
//     this.name = name;
//     this.level = level;
//     this.students = students;
//   }
// }
// ****task 2 start
class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  }
}
class Bootcamp {
  constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = students;
  }
  registerStudent(studentToRegister) {
    if (!this.students.includes(studentToRegister.email)) {
      this.students.push(studentToRegister);
      console.log(
        `registering ${studentToRegister.name} ${studentToRegister.community}`
      );
    }
    return this.students;
  }
}
// *** End of Task 2
