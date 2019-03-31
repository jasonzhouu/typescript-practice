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


// Interface describing an object containing an optional property
interface Person {
    name: string;
    age: number;
    favoriteColor?: string; // This property is optional
}
