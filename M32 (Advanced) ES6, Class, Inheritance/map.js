// Double(2X) each elements of the array

// -------Normal Way----------
const numbers = [2, 5, 23, 453, 34, 89, 33, 33, 678];
const output = [];
for (const number of numbers) {
    const double = number * 2;
    output.push(double)
}

// console.log(output);


// -----With function----
function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const double = number * 2;
        output.push(double);
    }
    return output;
}

console.log(getDoubles(numbers));