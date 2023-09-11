function Immutable(obj) {
    return Object.freeze(obj);
}

const obj1 = {
    key1: "key1",
    key2: "key2",
    key3: "key3",
};

const obj2 = new Immutable(obj1);

obj2.key1 = "1";


console.log(Object.isFrozen(obj2));