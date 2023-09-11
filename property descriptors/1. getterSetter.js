const obj = {
    names:[],
    set name(str) {
        const arr = str.split(", ");

        arr.forEach(val =>{
            this.names.push([val, val.length]);
        });
    },
    get name() {
        return this.names;
    }
};

obj.name = "Hamlet, Artavazd";
console.log(obj.name); // [['Hamlet', 6], ['Artavazd', 8]]