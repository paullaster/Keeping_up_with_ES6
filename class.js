class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greetings(){
        return (`Hi, ${this.name}, today you're ${this.age} years old`)
    }
}

class Student extends Person{
    constructor(name, age, level, course){
        super(name,age);
        this.level = level;
        this.course = course;
    }
    studentInformation(){
        const inheritedString = super.greetings();
        console.log(`${inheritedString} a level ${this.level}  ${this.course} student `);
    }
}
const edu = new Student("Edward", 24, "4", "BSc. IT");
edu.studentInformation()

class Customer extends Person{
    constructor({name ="customer",  age = "n/a", contactMethod}){
        super(name, age);
        this.contactMethod = contactMethod;
        this.accountCredit = null;
    }
    addCredit(amount){
        this.accountCredit += amount;
    }
    reduceCredit(amount){
        this.accountCredit -= amount;
    }
    static salutation(){
        console.log("Hello Hi");
    }
}

const customer1 = new Customer({contactMethod:"Email"});
const customer2 = new Customer({name:"Wiscon O", contactMethod: "mobile"});
console.log(customer1);
console.log(customer2);
console.log(customer1.accountCredit);
console.log(customer2.accountCredit);
customer1.addCredit(5000);
customer2.addCredit(10000);
customer2.addCredit(50000);
console.log(customer1.accountCredit);
console.log(customer2.accountCredit);
customer1.reduceCredit(800);
customer2.reduceCredit(800);
console.log(customer1.accountCredit);
console.log(customer2.accountCredit);