        // Importando a biblioteca readline-sync
const readline = require('readline-sync');

        // Capturando o número de pessoas na mesa
const numeroPessoas = readline.questionInt('Digite o numero de pessoas na mesa: ');

        // Capturando o valor total da conta
let valorTotal = readline.questionFloat('Digite o valor total da conta: ');

        // Capturando o método de pagamento
let metodoPagamento = readline.questionInt(`Qual e o metodo de pagamento (1 - PIX 2 - dinheiro 3 - cartao)? `);

// Atribuindo o valor do desconto a uma variavel
let totalDesconto= "Nao ha desconto para pagamento via cartao";

// Criando uma variavel para exibir a forma de pagamento
let PixDinheiroCartao = "";

// Variavel para calcular e exibir o valor final com desconto
let valorDesconto = 0;

        //Façã sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO

// aqui o desconto de 10% é definido caso atenda as exigencias 
if (metodoPagamento == 1 || metodoPagamento == 2) {
  valorDesconto = (valorTotal / 100) * 90
} 

// aqui tiramos o direito de desconto do cartao
  else if (metodoPagamento == 3) {
  valorDesconto = valorTotal
}

// Aqui alteramos o valor da variavel caso atenda as exigencias
if (metodoPagamento == 1 || metodoPagamento == 2) {
  totalDesconto = "10%"
}

// Aqui alteramos o valor da variavel PixDinheiroCartao de acordo com o que foi inserido na variavel metodoPagamento
if (metodoPagamento == 1) {
  PixDinheiroCartao = "PIX"
} else if  (metodoPagamento == 2) {
  PixDinheiroCartao = "Dinheiro"
} else {
  PixDinheiroCartao = "Cartao"
}

// Variavel para calcular quanto cada um da mesa deverá pagar caso quiserem dividir
let valorDividido = valorDesconto/numeroPessoas;


        // Exibindo os resultados
// aqui o codigo limita as opções de pagamento impedindo que seja incluido um numero diferente 
if (metodoPagamento != 1 && metodoPagamento != 2 && metodoPagamento != 3) {
  console.log(`==================================================`)
  console.log('Metodo de pagamento nao aceito!');
  console.log(`==================================================`)
} else {
  console.log(``)
  console.log(`==================================================`)
  console.log(`A conta ficou no valor de R$${valorTotal}`)
  console.log(`O metodo de pagamento foi ${PixDinheiroCartao}`)
  console.log(`Entao o desconto aplicado foi de: ${totalDesconto}`)
  console.log(`Com isto o valor final fica R$${valorDesconto}`)
  console.log(`Caso queiram dividir entre os ${numeroPessoas} o valor seria de R$${valorDividido}`)
  console.log(`==================================================`)
}









//console.log(totalDesconto);
//console.log(numeroPessoas);
//console.log(valorTotal);
//console.log(metodoPagamento);