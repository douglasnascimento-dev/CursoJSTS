const logPagamento = "Pagamento efetuado com o cartão 1234-5678-9012-3456 as 14h. Falha no cartão 9876 5432 1098 7654.";

// Construa a RegEx
const regExpCC = /(\d{4})([\- ]?)(\d{4})([\- ]?)(\d{4})([\- ]?)(\d{4})/g;

// Substitua os 3 primeiros blocos por ****
console.log(logPagamento.replace(regExpCC, (match, gp1, gp2, gp3, gp4, gp5, gp6, gp7) => {
  console.log(match, gp1, gp2, gp3, gp4, gp5, gp6, gp7)
  return `****${gp2}****${gp4}****${gp6}${gp7}`
}));

// Saída conseguida: Pagamento efetuado com o cartão ****-****-****-3456 as 14h. Falha no cartão **** **** **** 7654.

// Saída Esperada:
// Pagamento efetuado com o cartão ****-****-****-3456 as 14h. Falha no cartão **** **** **** 7654.
// 
// 
// 

let regExpIP = ([2][0-5][0-5])
let regExpIP = ([1][0-9][0-9])
let regExpIP = ([1-9][0-9])
let regExpIP = ([0-9])
let regExpIP = /((([2][0-5][0-5])|([1][0-9][0-9])|([1-9][0-9])|([0-9]))\.){3}(([2][0-5][0-5])|([1][0-9][0-9])|([1-9][0-9])|([0-9]))/



