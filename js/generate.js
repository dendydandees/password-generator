const generatePassword = () => {
  const resultElement = document.getElementById('result');
  const lengthElement = document.getElementById('length');
  const upperElement = document.getElementById('uppercase');
  const lowerElement = document.getElementById('lowercase');
  const numbersElement = document.getElementById('numbers');
  const symbolsElement = document.getElementById('symbols');
  const generateElement = document.getElementById('generate');
  const clipboardElement = document.getElementById('clipboard');
  const rangeValue = document.getElementById('range-value');

  rangeValue.innerHTML = lengthElement.value;
  lengthElement.oninput = () => {
    rangeValue.innerHTML = lengthElement.value;
  };

  const randomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65);
  };

  const randomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97);
  };

  const randomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  };

  const randomSymbol = () => {
    const symbols = '{}[]()#:;^,.?!|&_`~@$%/=+-';
    return symbols[Math.floor(Math.random() * symbols.length)];
  };

  const randomPassword = {
    lower: randomLower,
    upper: randomUpper,
    number: randomNumber,
    symbol: randomSymbol,
  };

  const generatePassword = (length, lower, upper, number, symbol) => {
    // Initialize password variable
    let generatedPassword = '';
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
      (item) => Object.values(item)[0],
    );

    if (typesArr.length === 0) {
      return '';
    }

    for (let i = 0; i < length; i += typesArr.length) {
      typesArr.forEach((type) => {
        const funcName = Object.keys(type)[0];

        generatedPassword += randomPassword[funcName]();
      });
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
  };

  generateElement.addEventListener('click', () => {
    const length = parseInt(lengthElement.value);
    const hasLower = lowerElement.checked;
    const hasUpper = upperElement.checked;
    const hasNumber = numbersElement.checked;
    const hasSymbol = symbolsElement.checked;

    resultElement.innerText = generatePassword(
      length,
      hasLower,
      hasUpper,
      hasNumber,
      hasSymbol,
    );
  });
};

export default {
  generatePassword
}
