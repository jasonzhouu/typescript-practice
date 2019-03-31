// 基本的类型
let isAwesome: boolean = true;

var fullname: string = "Jason Zhou"
var num: number = 45;
var joke: string = `Hello, ${fullname}, there are ${num} days left to go to school.`

var array: string[] = ['dog', 'cat'];
var array2: Array<string> = ['rocket', 'fluffly'];

let whoknows: any = 4;
whoknows = 'a beautiful string';

// 先定义类型，然后声明变量时可以指定这个类型
type Animal = {
    kind: string;
    weight: number;
}

let dog: Animal = {
    kind: 'mammal',
    weight: 10,
}



// 如果这个类型只用一次，可以在声明变量时直接指定
let dog2: {
    kind: string,
    weight: number,
}

dog2 = {
    kind: 'mammal',
    weight: 10,
}


// 函数的参数类型
const greeting = (person: string) => {
    console.log('Good day ' + person);
}
greeting('Jason');

const noReturn = (): void => {
    console.log('no return')
}
noReturn()
