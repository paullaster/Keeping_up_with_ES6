function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.greetings = function(){
    console.log(`Greetings ${this.name}, you're ${this.age}`);
}

function Student(name,age, level){
    Person.call(this, name, age);
    this.level = level;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

const wisco = new Student("Wisonsin", 23, "4th year");

wisco.greetings()