// 如果不指定变量类型，则会自动推断，如果赋值使用其他变量类型，编译时会报错
let num2 = 45;
// num2 = 'string'; // error

// 会自动推断出message的类型为string
const tweetLength = (message = 'a default tweet') => {
    return message.length;
}

// 数组只能添加已有的元素的变量类型的元素
let list = [10, 22, 'hello', 6];
list.push(6);
// list.push([1,2])                // error
