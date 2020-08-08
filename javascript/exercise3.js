const keyTest = { key1: "value1", key2: "value2"};

for (key in keyTest) {
    console.log(`${key},${keyTest[key]}`)
}