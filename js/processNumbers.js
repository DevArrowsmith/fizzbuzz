const processNumbers = (start, end, fizz, buzz) => {
    let result = [];
    for (let i = start; i < end + 1; i++) {
        result.push(checkFizzBuzz(i, fizz, buzz));
    };
    return result;
};