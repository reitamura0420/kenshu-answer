const calculateFibonacciSequence = count => {
    const valueList = [1, 1];
    
    for (let step = 0; step < count - 2; step++) {
        valueList.push(valueList[step] + valueList[step + 1])
    }
    
    return valueList.slice(0, count);
}

console.log(calculateFibonacciSequence(10))