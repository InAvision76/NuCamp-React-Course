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
    if (!this.students.includes(studentToRegister)) {
      this.students.push(studentToRegister);
      console.log(
        `registering ${studentToRegister.name} to the bootcamp ${this.name}`
      );
    } else {
      console.log(
        `${studentToRegister.name} is already registered for ${this.name}`
      );
    }
    return this.students;
  }
}