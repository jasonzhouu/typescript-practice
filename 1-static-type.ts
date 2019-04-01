namespace StaticType {

    // 基本的类型
    let isAwesome: boolean = true;

    var fullname: string = "Jason Zhou"
    var num: number = 45;
    var joke: string = `Hello, ${fullname}, there are ${num} days left to go to school.`

    var array: string[] = ['dog', 'cat'];
    var array2: Array<string> = ['rocket', 'fluffly'];

    let whoknows: any = 4;
    whoknows = 'a beautiful string';


    // 定义类型
    type Animal = {
        kind: string;
        weight: number;
    }

    let dog: Animal = {
        kind: 'mammal',
        weight: 10,
    }

    // 综合类型
    type Student = {
        id: string;
        age: number;
    };
    type Employee = {
        companyId: string;
    };
    let person: Student & Employee = {
        age: 21,
        companyId: 'SP302334',
        id: '10033402',
    };
    console.log(person);


    // 如果这个类型只用一次，可以在声明变量时直接指定
    let dog2: {
        kind: string,
        weight: number,
    }

    dog2 = {
        kind: 'mammal',
        weight: 10,
    }
}
