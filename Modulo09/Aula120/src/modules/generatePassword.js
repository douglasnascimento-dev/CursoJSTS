export default function generatePassword(
  character,
  number,
  symbol,
  uppercase,
  lowercase
) {
  let password = "";

  let rand = (min, max) => Math.floor(Math.random() * (max - min)) + min;


  let generateNumber = () => {
    password += String.fromCharCode(rand(48, 57));
    character--;
  };

  let generateSymbol = () => {
    let symbols = Array.from("!@#$%&*+=^~?");
    password += symbols[rand(0, symbols.length)];
    character--;
  };

  let generateUppercase = () => {
    password += String.fromCharCode(rand(65, 90));
    character--;
  };

  let generateLowercase = () => {
    password += String.fromCharCode(rand(97, 122));
    character--;
  };

  for (;character > 0; ) {
    number && generateNumber();
    symbol && generateSymbol();
    uppercase && generateUppercase();
    lowercase && generateLowercase();
  }
  return password;
}
