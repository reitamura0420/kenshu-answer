const isPhoneNumber = phone => {
    const reg = /^0[789]0-[0-9]{4}-[0-9]{4}$/
    return phone.match(reg) !== null
}

console.log(isPhoneNumber("080-1111-2222"))
