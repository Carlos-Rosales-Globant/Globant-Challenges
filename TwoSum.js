class TwoSum {
    values = []
    
    add(value) {
        this.values.push(value)
    }

    find(value) {
        let index1 = null
        let index2 = null
        for (index1 = 0; index1 < this.values.length; index1++) { 
            let total = value - this.values[index1]
            for (index2 = index1 + 1; index2 < this.values.length; index2++) {
                let total2 = total - this.values[index2]
                if(total2 === 0) {
                    return `index1: ${index1 !== null ? index1 + 1 : index1}, index2: ${index2 ? index2 + 1 : index2}`
                }
            }
        }
        return `There is not an exiting pair that can be sum to return: ${value}`
        
    }

    getValues() {
        return this.values
    }
}

const arr1 = new TwoSum

arr1.add(2)
arr1.add(3)
arr1.add(4)

console.log(arr1.find(6))

console.log(arr1.getValues())