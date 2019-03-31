// for
for(let i = 1; i <= 5; i++) {
    console.log(i)
}


let str: any = "hello"

// for in
for (let i in str) {
    console.log(str[i])
}

// for of
for (let s of str) {
    console.log(s)
}

let arr = ['hello', 'world']
for (let i of arr) {
    console.log(i)
}

// forEach
arr.forEach((value, index, array) => {
    console.log(value)
})

arr.every((value, index, array) => {
    console.log(value);
    return false;               // quit the iteration when return false
})
