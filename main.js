// Ex ---1---

// class Person {
// 	constructor(name, age) {
// 		this.name = name
// 		this.age = age
// 	}
// 	get info() {
// 		return `${this.name}s age is ${this.age}`
// 	}
// }
// const john = new Person("john", 34);
// console.log(john.info);

// Ex ---2---

// class Labrador extends Dog {
// 	constructor(name, age, gender, master) {
// 		super(name, age, gender, 'Labrador', 'Large', master, true)
// 	}
// }

// Ex ---3---

// class Animal {
// 	constructor(name, type) {
// 		this._name = name
// 		this.type = type
// 	}

// 	get name() {
// 		return this._name
// 	}

// 	set name(newName) {
// 		this._name = newName
// 	}

// 	toString() {
// 		return `${this._name} is a ${this.type}`
// 	}
// }
// var dog = new Animal('Max', 'dog')
// console.log(dog.toString())
// dog.name = 'Lassie'
// console.log(dog.toString())
