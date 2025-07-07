// complete this js code
class Person{
	
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	function greet(){
		console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
	}
}

class Employee extends Per{
	constructor(name,age,jobTitle){
		this.name= name;
		this.age = age;
		this.jobTitle = jobTitle;
	}
	function jobGreet() {
		Hello, console.log(`my name is  ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
	}
}
const person = new Person("Alice", 25);
person.greet();
const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet();

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
