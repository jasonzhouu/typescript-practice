// interface

interface Person {
    firstName: string;
    lastName: string;
}

let user: Person = {
    firstName: "Jason",
    lastName: "Zhou",
}

const greeter = (person: Person) => {
    console.log(`Hello, ${person.firstName} ${person.lastName}.`)
}

greeter(user)


// Interface describing an object containing an optional property
interface OptionalPerson {
    name: string;
    age: number;
    favoriteColor?: string; // This property is optional
}

let b: OptionalPerson = {
    name: 'jason',
    age: 26,
}

// enforce that a class meets a particular contract
interface ClockInterface {
    hour: number;
    minute: number;
    currentTime: string;
}
class Clock implements ClockInterface {
    hour: number;
    minute: number;
    currentTime: string;
    constructor(h: number, m: number) {
        this.hour = h;
        this.minute = m;
        this.currentTime = `${this.hour}:${this.minute}`
    }
}

let a = new Clock(10, 12);
console.log(a.currentTime);
