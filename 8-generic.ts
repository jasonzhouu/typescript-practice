const fillArray = <T>(len: number, elem: T) => {
    let arr = new Array<T>(len)
    return arr[0] = elem
}

const newArray = fillArray<string>(3, 'hi')
console.log(newArray)
