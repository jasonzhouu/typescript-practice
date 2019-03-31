class Person {
    firstName: string;
    lastName: string;

    constructor(i: string, j: string) {
        this.firstName = i;
        this.lastName = j;
    }

    getName():void {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

let jason = new Person('Jason', 'Zhou');
jason.getName();
console.log(jason.firstName)
