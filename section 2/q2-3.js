const range = (init, end, condition = 1) => {
    let Arr = []
    if (init < end) {
        for (i = init; i <= end; i = i + condition) {
            Arr.push(i)
        }
    } else {
        for (i = init; i >= end; i = i + condition) {
            Arr.push(i)
        }
    }
    return Arr
}

const sum = Arr => {
    let result = 0
    Arr.map(item => result += item)
    return result
}

console.log(range(10,1,-1))
// console.log(sum(range(15, 10)))
