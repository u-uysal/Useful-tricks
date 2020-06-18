class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

    makeNoise(sound = 'Loud Noise') { // you can define function in class
        console.log(sound);
    }
}

let cat = new Animal('Cat', 4);

console.log(cat.legs) // 4

cat.legs = 3; // reassign

console.log(cat.legs) // 3

cat.makeNoise("meow") // meow