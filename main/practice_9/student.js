import {
  Person
} from '/person.js';
import {
  class
} from '/class.js';
class Student extends Person {
  constructor(id, name, age, introduce, klass) {
    super(id, name, age);
    this.klass = new Class();
  }
  introduce() {
    assignLeader(leader) === Tom ? Person.introduce() + `I am a Student.I am Leader of Class 2.` : Person.introduce() + `I am a Student.I am at Class ${this.klass}.`
  }
}
module.exports = Student;