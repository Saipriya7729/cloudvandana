const numbers = [5, 2, 9, 1, 5, 6];

numbers.sort((a, b) => b - a);
console.log("Sorted array in descending order:");
for (const number of numbers) {
    console.log(number + " ");
}