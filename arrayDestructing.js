let names = ['Dylan', 'Coding God', 'Israel'];

let [firstName, middleName, lastName] = ['Dylan', 'Coding God', 'Israel']; // array destructing



const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y); // 1,2,4




let a = 8,
    b = 6;
(() => {
    "use strict";
    [a, b] = [b, a]
})();
console.log(a);
console.log(b);




const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {

    const [, , ...arr] = list;

    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);