class Person {
    #name
    #age

    constructor(name, age) {
        this.#name = name
        this.#age = age
    }

    getName() {
        return this.#name
    }

    setName(name) {
        this.#name = name
    }

    getAge() {
        return this.#age
    }

    setAge(age) {
        this.#age = age
    }

    toString() {
        return `Name: ${this.#name}, Age: ${this.#age}`
    }

    equals(person) {
        return person.getName() === this.#name && person.getAge() === this.#age
    }
}

class Employee extends Person {
    #salary

    constructor({ name, age, salary }) {
        super(name, age)
        this.#salary = salary
    }

    getSalary() {
        return this.#salary
    }

    setSalary(salary) {
        this.#salary = salary
    }

    toString() {
        return `${super.toString()}, Salary: ${this.#salary}`
    }

    equals(employee) {
        return super.equals(employee) && employee.getSalary() === this.#salary
    }
}

const santa = new Employee({ name: "Santa Clause", age: 1752, salary: 0 })
console.log(santa.toString())
// → Name: Santa Clause, Age: 1752, Salary: 0