import Person from '/person.js';
class Teacher extends Person {
  constructor(name, age, introduce, klass) {
    super(name, age);
    this.klass = klass;
  }
  introduceWith(studentJerry) {
    return this.class === studentJerry.class ? Person.introduce() + `I am a Teacher. I teach Jerry.` : Person.introduce() + `I am a Teacher. I don't teach Jerry.`;
  }
}
module.exports = Teacher;