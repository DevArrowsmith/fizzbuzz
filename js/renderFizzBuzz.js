const renderFizzBuzz = (start, end, fizz, buzz) => {

  const fizzBuzzContainer = document.getElementById("fizzbuzz-container");

  fizzBuzzContainer.innerHTML = '';

  const sequence = processNumbers(start, end, fizz, buzz);

  sequence.forEach(number => {
    fizzBuzzContainer.insertAdjacentHTML('beforeend', `<p>${number}</p>`);
  })
};

