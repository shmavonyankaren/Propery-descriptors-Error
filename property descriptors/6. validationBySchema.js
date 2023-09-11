function validator(schema) {
    const newObj = {};

    Object.keys(schema).forEach(key => {
        const { writable = false, configurable = false, enumerable = false, value, validate }  = schema[key];
    

        if(validate(value)) {
            Object.defineProperty(newObj, key, {
                configurable,
                enumerable, 
                writable,
                value,
            });
        } else {
            console.log(`The ' ${key} ' is not required property`);
        }
    });

    return newObj;
}

const schema = {
    name: {
        value: "",
        writable: false,
        configurable: true,
        enumerable: true,
        validate: (value) => typeof value === "string",
    },
    age: {
        value: 19,
        writable: true,
        configurable: true,
        enumerable: true,
        validate: (value) => typeof value === "number" && value >= 18,
    },
};

const obj = validator(schema);

console.log(obj);

obj.name = "karen";
obj.age = 34;
// console.log(obj.key);

console.log(obj);