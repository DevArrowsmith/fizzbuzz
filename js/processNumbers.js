const processNumbers = (start, end, fizz, buzz) => {
    let result = [];
    for (let i = start; i < parseInt(end) + 1; i++) {
        result.push(checkFizzBuzz(i, fizz, buzz));
    };
    return result;
};

window.processNumbers = processNumbers;