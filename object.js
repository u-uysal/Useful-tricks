class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }


}

let cat = new Animal('Cat', 4);

console.log(cat.legs) // 4

cat.legs = 3; // reassign

console.log(cat.legs) // 3