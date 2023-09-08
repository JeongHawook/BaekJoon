function solution(s) {
    let numbers = s.split(" ").map(Number); // Convert the split strings to numbers
    let max = -Infinity; // Initialize max with negative infinity
    let min = Infinity; // Initialize min with positive infinity

    for (let i = 0; i < numbers.length; i++) {
        if (min > numbers[i]) {
            min = numbers[i];
        }
        if (max < numbers[i]) {
            max = numbers[i];
        }
    }

    let final = min + " " + max; // Create the final string in the required format
    return final;
}

// Example usage:
const input1 = "1 2 3 4";
const input2 = "-1 -2 -3 -4";
const input3 = "-1 -1";
console.log(solution(input1)); // Output: "1 4"
console.log(solution(input2)); // Output: "-4 -1"
console.log(solution(input3)); // Output: "-1 -1"
