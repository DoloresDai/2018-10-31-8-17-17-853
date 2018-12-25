 class Class = {
   constructor(number) {
     this.number = number;
   }
   getDisplayName() {
     return Class + `${this.name}`;
   }
   assignLeader(student) {
     student.klass.number === this.number ? this.leader = Tom;
   }
 }
 module.exports = Class;