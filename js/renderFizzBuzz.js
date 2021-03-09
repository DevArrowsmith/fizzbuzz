const renderFizzBuzz = (start, end, fizz, buzz) => {

  const fizzBuzzContainer = document.getElementById("fizzbuzz-container");

  fizzBuzzContainer.innerHTML = '';

  const sequence = processNumbers(start, end, fizz, buzz);

  fizzBuzzContainer.insertAdjacentHTML('beforeend', `
    <p>Your FizzBuzz Sequence:</p>
    <p>${sequence}</p>
  `);
  
};

