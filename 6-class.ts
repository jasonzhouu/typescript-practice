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


// 继承
class Man extends Person {
    drive():void {
        console.log('driving')
    }
}

let jason2 = new Man('Jason', 'Zhou')
jason2.drive()


// 多重继承
class ChineseMan extends Man {
    region: 'China';
    greet():void {
        console.log('你好')
    }
}

let jason3 = new ChineseMan('宇盛', '周');
jason3.greet()

// 重新父类的方法
class ChineseDriver extends Man {
    drive():void {
        console.log('开车')
    }
}

let jason4 = new ChineseDriver('宇盛', '周')
jason4.drive()
