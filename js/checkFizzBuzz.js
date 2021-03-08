const checkFizzBuzz = (num) => {
    let result;
    if (num%3 === 0 && num%5 === 0) {
        result = "FizzBuzz"
    } else if (num%3 === 0) {
        result = "Fizz"
    } else if (num%5 === 0) {
        result = "Buzz"
    };
    return result;
};