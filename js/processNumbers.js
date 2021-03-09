const processNumbers = (start, end) => {
    let result = [];
    for (let i = start; i < end + 1; i++) {
        result.push(checkFizzBuzz(i, 3, 5));
    };
    console.log(result);
    return result;
};