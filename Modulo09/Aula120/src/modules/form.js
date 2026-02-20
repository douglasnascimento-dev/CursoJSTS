import generatePassword from "./generatePassword";
let divPassword = document.querySelector("#senha");

document.querySelector("#gerarSenha").addEventListener("click", () => {
  let character = document.querySelector("#qtdCaracter").value;
  if (character < 1 || character > 50) {
    divPassword.innerHTML =
      "Atenção! A senha deve ter entre 01 e 50 caracteres. Tente novamente.";
    return;
  }
  divPassword.innerHTML = "";
  let checks = document.querySelectorAll(".checks");
  let [check1, check2, check3, check4] = checks;
  divPassword.innerHTML = generatePassword(
    character,
    check1.checked,
    check2.checked,
    check3.checked,
    check4.checked
  );
});
