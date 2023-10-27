class Person {
  constructor(name, age, state, place,Degree,AddonCourse) {
    this.first_name = name;
    this.my_age = age;
    this.my_state = state;
    this.my_palce = place;
    this.my_Degree = Degree;
    this.pursuing = AddonCourse;
  }
}

let personal = new Person("Robin", 27, "Kerala", "Thommankuthu","B-tch","Full Stack development",);

console.log(personal);
