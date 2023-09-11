function extend(obj, addingPart) {
    const newObj = {};

    const keys = Object.keys(obj);
    const addingKeys = Object.keys(addingPart);
    for(let i = 0, j = 0; i < keys.length + addingKeys.length; i++) {
        if(i < keys.length) {
            newObj[keys[i]] = obj[keys[i]];
        } else {
            const key = addingKeys[j];
            Object.defineProperty(newObj, key, addingPart[addingKeys[j]]);
            j++;    
        }
    }

    return newObj;
}   


const myObj = { prop1: "value1" };
const newObj= extend(myObj, {
    prop2: { value: "value2", writable: false, enumerable: true },
    prop3: { value: "value3"},
    prop4: {
        get() {
            return "computed";
        },
    },
});

console.log(newObj);
console.log(Object.getOwnPropertyDescriptors(newObj));