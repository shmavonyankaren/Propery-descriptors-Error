function isPositive(a) {
    try {
        if(a > 0) {
            console.log("Yes");
        } else if(a === 0){
            throw new Error("Zero Error");
        } else if(a < 0){
            throw new Error("Negative Error");
        } else {
            throw new Error(`' ${a} ' is not a number`);
        }
    } catch (error) {
        console.log(error.message);
    }
}

isPositive(23);
isPositive(0);
isPositive(-34);
isPositive("Hello");