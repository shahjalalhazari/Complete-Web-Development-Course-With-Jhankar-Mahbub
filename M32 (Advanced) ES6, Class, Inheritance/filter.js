const numbers = [2, 5, 36, 90, 88, 23, 453, 34, 89, 33, 33, 678];

/** Filter is uses for filter something from a array based on condition. */
const big = numbers.filter(number => number > 15);
console.log(big);
const tiny = numbers.filter(number => number < 55);
console.log(tiny);
const even = numbers.filter(number => number % 2 === 0);
console.log(even);