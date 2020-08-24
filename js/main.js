import generate from './generate.js';

const init = () => {
  generate.generatePassword();
};
document.addEventListener('DOMContentLoaded', init());
