function reverseString(s) {
    try {
        const result = s.split("").reverse().join("");
        console.log(result);
    } catch (error) {
        console.log(error.message);
        console.log(s);
    }
}

let test1 = "Hello";
let test2 = 123;
let test3 = { key: "value" };

reverseString(test1);
reverseString(test2);
reverseString(test3);