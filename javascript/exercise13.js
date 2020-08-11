const isLeapYear = year => {
    if (year % 4 !== 0) {
        return false
    }
    if (year % 100 === 0) {
        return year % 400 === 0 ? true : false
    } 
    
    return true
}

console.log(isLeapYear(1996))