const s = [5, 7, 2];

function editInPlace() {
    "use strict";

    //s = [2, 5, 7];   >Error: SyntaxError: unknown: "s" is read-only
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;

    // you can not assign new array by using const but you can change by using index
}
editInPlace();

console.log(s)