function createPerson (name, age){4
    return{
        getName: () => name,
        setName: newName => (name = newName),
        getAge: () => age,
        setAge: newAge =>(age = newAge),
        toString: () => `Name: ${name}, Age: ${age}`,
        equals: person => person.getName() === name && person.getAge() === age,
    }
}  

function createEmployee({name,age,salary}){
    const person = createPerson(name,age)

    return{
        ...person,
        getSalary: () => salary,
        setSalary: newSalary => (salary = newSalary),
        toString: () => `${person.toString()}, Salary: ${salary}`,
        equals: employee => person.equals(employee) && employee.getSalary() === salary,
    }
}

const sne = createEmployee({name: "Sneha Koirala", age : 20, salary: 1000})
console.log(sne.toString())