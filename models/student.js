function Student(id, name, email, dob, course, math, physic, chemistry) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.dob = dob;
  this.course = course;
  this.math = math;
  this.physic = physic;
  this.chemistry = chemistry;

  this.calcGPA = function () {
    return (this.math + this.physic + this.chemistry) / 3;
  };
}



// var ob = {
//   id:1,
//   name:'Nguyễn A',
// }
// ob.showInfo = function () {

// }