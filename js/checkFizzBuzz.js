const checkFizzBuzz = (num, fizz, buzz) => {
    let result;
    if (num%fizz === 0 && num%buzz === 0) {
        result = "FizzBuzz"
    } else if (num%fizz === 0) {
        result = "Fizz"
    } else if (num%buzz === 0) {
        result = "Buzz"
    } else {
        result = num
    };
    return result;
};