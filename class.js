class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greetings(){
        console.log(`Hi, ${this.name}, today you're ${this.age} years old`)
    }
}
const edu = new Person("Edward", 24);
edu.greetings()