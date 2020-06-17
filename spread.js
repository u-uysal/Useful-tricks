// https://www.notion.so/The-Spread-Operator-b7608512fbd844ec9f27f31740fb7298
//1. In function calls

//A
const minFunc = [13, 22, 23, 24]

console.log(minFunc) // [ 13, 22, 23, 24 ]

console.log(...minFunc) // 13 22 23 24



//B
const myName = "Ufuk";

console.log(...myName); // U f u k

//2. In array literals
// A
const parents = ["Lorie", "Steve"];
const kids = ['Jake', "Annie", "Jess"];

const fullFamily = [...parents, ...kids];
//["Lorie", "Steve", "Jake", "Annie", "Jess"]


//B 
const originals = ["Lorie", "Steve"];
const copies = originals;
originals.push("sth");
console.log(originals) // [ 'Lorie', 'Steve', 'sth' ]
console.log(copies) // [ 'Lorie', 'Steve', 'sth' ]


const originals2 = ["Ufuk", "Robin"];
const copies2 = [...originals2];

copies2.push("hey!")
console.log(originals2); // [ 'Ufuk', 'Robin' ]
console.log(copies2); // [ 'Ufuk', 'Robin', 'hey!' ]