import {
  Person
} from '/person.js';
import {
  class
} from '/class.js';
class Student extends Person {
  constructor(name, age, introduce, klass) {
    super(name, age);
    this.klass = new Class();
  }
  introduce() {
    return (Person.introduce() + `I am a Student. I am at Class ${this.klass}.`);
  }
}
export {
  Student
};