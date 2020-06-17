let incomes = [62000, 67000, 75000];
let total = 0;

for (const income of incomes) {
    console.log(income) //62000   67000     75000      204000
    total += income;
}

console.log(total);



let fullName = "Dylan Coding God Israel";


for (const char of fullName) {
    console.log(char);
}


let incomes = [62000, 67000, 75000];

for (let income of incomes) {
    income += 5000; // you cant set new value by using for - of loop
}

console.log(incomes);