// 函数的参数类型

// argument type
const greeting = (person: string) => {
    console.log('Good day ' + person);
}
greeting('Jason');


// return value type
const noReturn = (): void => {
    console.log('no return')
}
noReturn()


// The `name` parameter can be either a string or null
const sayHappyBirthdayOnFacebook = (name: string | null) => {
    if (name === null) {
        console.log('Happy birthday!');
    } else {
        console.log(`Happy birthday ${name}!`);
    }
};
sayHappyBirthdayOnFacebook(null); // => "Happy birthday!"
sayHappyBirthdayOnFacebook('Jeremy'); // => "Happy birthday Jeremy!"

