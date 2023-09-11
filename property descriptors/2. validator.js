function validator(obj, rulesObj){
    let newObj = {};
    Object.keys(rulesObj).forEach(eachKeyName =>{
        
        const { enumerable = false, configurable = false, writable = false, value = obj[eachKeyName] } = rulesObj[eachKeyName];

        Object.defineProperty(newObj, eachKeyName, {
            enumerable,
            configurable,
            writable,
            value,
        });
    });

    return newObj;
}

let object1 = { 
        key1: "key1",
        key2: "key2",
};

let object2 = validator(object1, {
    key1: {
        configurable: false,
        writable: false,
        value: "static",
      },
    key2: {
        value: "nostatic",
        writable: false,
        enumerable: false,
    }
});

object2["key1"] = "karen";

console.log(object2);