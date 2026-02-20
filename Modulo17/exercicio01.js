const cpfs = `
12345678900
98765432111
11122233344
`;

const regExpCPF = /((\d){3})((\d){3})((\d){3})/g;
const regExpCPF = /(\d{3})(\d{3})(\d{3})(\d{2})/g;
console.log(cpfs.replace(regExpCPF, '$1.$2.$3-$4'));

// console.log(cpfs.replace(regExpCPF, "$1.$3.$5-"));

const logs = `
[INFOINFO] Sistema iniciado.
[ERROR] Falha na conexão.
[WARNWARNWARN] Uso de memória alto.
[ERRORERROR] Tentativa de invasão.
`;

// Construa uma RegEx que identifique as palavras repetidas (INFO, WARN ou ERROR)
const regExpLogs = /(INFO|ERROR|WARN)+/g;
// pq isso não funciona /(INFO|ERROR|WARN){0, 1}/g;?

// console.log(logs.replace(regExpLogs, '$1')); 
// Resultado esperado: [INFO], [ERROR], [WARN]...


const texto = "A versão v1.2 é estável, mas a v2.0.4 tem bugs. Evite a v1.0.";

// Deve dar match em: "v1.2", "v2.0.4" e "v1.0"
const regExpVersao = /v\d\.\d(\.\d)?/g;

// console.log(texto.match(regExpVersao));

const entrada = "O valor é R$ 50,00, mas com desconto fica 45,00. O frete é R$  12,50";

// A RegEx deve encontrar o padrão completo (com ou sem R$)
const regExpPreco = /(R\$)? (\d\d,\d\d)/g;

// Substitua por apenas o valor numérico (pode usar $1, $2 ou função de callback)
//console.log(entrada.replace(regExpPreco, '$2'));

