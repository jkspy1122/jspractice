//create a function to add one element into array each time being called
var output = [];
var x = 1 //first number

function fizzbuzz() {
    if (x % 3 === 0 && x % 5 === 0) {
        output.push("Fizz Buzz");
        console.log(output);
    } else if (x % 3 === 0) {
        output.push("Fizz");
        console.log(output);
    } else if (x % 5 === 0) {
        output.push("Buzz");
        console.log(output);
    } else {
        output.push(x)
        console.log(output);
    }
    x++;
}


fizzbuzz();