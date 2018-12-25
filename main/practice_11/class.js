 class Class = {
   constructor(number) {
     this.number = number;
   }
   getDisplayName() {
     return Class + `${this.name}`;
   }
   assignLeader(student) {
     student.klass.number === this.number ? `I am ${this.teacher.name}. I know ${this.leader.name} become Leader of Class ${this.number}.` : `It is not one of us.`;
   }
   appendMember(student, teacher) {
     student.klass.number === this.number ? `I am ${this.teacher.name}. I know ${student.name} has joined Class ${this.number}.`
   }
   isIN() {
     student.klass.number === this.number ? `I teach Class ${this.number}` : `I teach NO Class.`;
   }
 }
 module.exports = Class;