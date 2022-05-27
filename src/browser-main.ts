import getMessage from './lib/get-message';

const main = document.createElement('main');

main.innerHTML = `
  <h1>${getMessage()}</h1>
`;

document.body.append(main);
