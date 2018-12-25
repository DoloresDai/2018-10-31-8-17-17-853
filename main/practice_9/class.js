 class Class = {
   constructor(number) {
     this.number = number;
   }
   getDisplayName() {
     return Class + `${this.name}`;
   }
   assignLeader(student) {
     student.klass.number === this.number ? this.leader = this.name : `It is not one of us.`;
   }
   appendMember(student) {
     assignLeader(student);
   }
 }
 module.exports = Class;