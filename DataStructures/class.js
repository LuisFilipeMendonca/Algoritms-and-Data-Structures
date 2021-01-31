class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
    this.scores = [];
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}.`;
  }

  markLate() {
    this.tardies++;
    return `${this.firstname} ${this.lastName} has been late ${this.tardies} times`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAvegare() {
    return Math.round(
      this.scores.reduce((acc, curr) => acc + curr, 0) / this.scores.length
    );
  }

  static enrollStudents() {
    return "Enrolling students.";
  }
}

let firstStudent = new Student("Luis", "Mendonça", 3);
let secondStudent = new Student("Filipe", "Severino", 1);

firstStudent.addScore(15);
firstStudent.addScore(20);
firstStudent.addScore(14);
console.log(firstStudent.calculateAvegare());
console.log(Student.enrollStudents());
