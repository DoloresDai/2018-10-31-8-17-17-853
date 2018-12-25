import Person from '/person.js';
class Teacher extends Person {
  constructor(name, age, introduce, klass) {
    super(name, age);
    this.klass = klass;
  }
  introduce() {
    return this.class ? Person.introduce() + `I am a Teacher. I teach Class ${this.klass}.` : Person.introduce() + `I am a Teacher. I teach No Class.`;
  }
}
module.exports = Teacher;