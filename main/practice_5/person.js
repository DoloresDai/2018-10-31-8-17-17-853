class Person = {
  constructor(name, age, introduce) {
    this.name = name;
    this.age = age;
    this.introduce = function() {
      return (`My name is ${this.name}.I am ${this.age} years old.`);
    }
  }
}
export {
  Person
};