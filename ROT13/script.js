let alf = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
];

function process() {
  let input = document.getElementById('inputT').value;
  let result = [];

  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    let lowerChar = char.toLowerCase();
    let index = alf.indexOf(lowerChar);

    if (index === -1) {
      result.push(char);
    } else {
      let newIndex = (index + 13) % 26;

      let cipherSymbol = alf[newIndex];
      if (input[i] === input[i].toUpperCase()) {
        result.push(cipherSymbol.toUpperCase());
      } else {
        result.push(cipherSymbol);
      }
    }
  }

  document.getElementById('output').textContent =
      `Зашифрованный текст: ${result.join('')}`;
}