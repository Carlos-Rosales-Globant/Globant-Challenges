function UglyNumber(number) {
    if(!Number.isInteger(number) || number < 1) {
        return 'Please enter an integer greater or equal to one'
    }
    let counter = 0
    let arr = []
    let index = 1
    while (arr.length !== number) {
        if(index === 1) {
            arr.push(index)
            counter ++
        } else if (index % 2 === 0 || index % 3 === 0 || index % 5 === 0) {
            arr.push(index)
            counter ++
        }
        index++
    }
    return arr
}
