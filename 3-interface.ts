// interface

interface Person {
    firstName: string;
    lastName: string;
}

const greeter = (person: Person) => {
    console.log(`Hello, ${person.firstName} ${person.lastName}.`)
}

let user: Person = {
    firstName: "Jason",
    lastName: "Zhou",
}

greeter(user)
