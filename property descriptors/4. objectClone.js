function objectClone(obj){
    const cloneObj = Object.create(obj);
    Object.keys(obj).forEach(key =>{
        const { enumerable, configurable, writable, value } = Object.getOwnPropertyDescriptor(obj, key);

        Object.defineProperty(cloneObj, key, {
            enumerable,
            writable,
            configurable,
            value,
        });
    });

    return cloneObj;
}

const obj1 = {
    key1: "key1",
    key2: "key2",
};

Object.defineProperty(obj1, "key1", {
    writable: false,
    configurable: false,
    value: "newKey1",
});

const clonedObj1 = objectClone(obj1);

console.log(Object.getOwnPropertyDescriptors(clonedObj1));
console.log(Object.getOwnPropertyDescriptors(obj1));
