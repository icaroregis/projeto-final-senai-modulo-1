import readline from 'readline-sync';
import { exibirMenu } from './utils/exibirMenu.js';
import { boasVindas } from './utils/boasVindas.js';
import { calcularFgts } from './utils/calcularFgts.js';
import { calcularInss } from './utils/calcularInss.js';
import { sobreSoftware } from './utils/sobreSoftware.js';
import { validarOpcoes } from './utils/validarOpcoes.js';
import { calcularImpostoRenda } from './utils/impostoRenda.js';
import { calcularSalarioLiquido } from './utils/salarioLiquido.js';
import { calculadoraSalarioMinimo } from './utils/calculadoraSalario.js';

let opcaoEscolhida = '';
let voltarAoMenu = '';

while (opcaoEscolhida !== '0') {
  boasVindas();
  exibirMenu();
  opcaoEscolhida = validarOpcoes();
  console.log(`Você escolheu a opção ${opcaoEscolhida}.`);

  if (opcaoEscolhida === '0') {
    break;
  }

  switch (opcaoEscolhida) {
    case '1':
      do {
        sobreSoftware();
        console.log(' ');
        voltarAoMenu = readline.keyInYNStrict('Deseja voltar ao menu principal?');
      } while (!voltarAoMenu);
      break;
    case '2':
      do {
        console.log('========================================');
        console.log('🧮 Calculadora de Salário Mínimo 🧮');
        console.log('========================================');
        console.log(' ');
        const salarioBruto = parseFloat(readline.question('Digite o salário bruto: R$ '));
        const inss = calcularInss(salarioBruto);
        const irrf = calcularImpostoRenda(salarioBruto);
        const salarioLiquido = calcularSalarioLiquido(salarioBruto);
        const fgts = calcularFgts(salarioBruto);

        calculadoraSalarioMinimo(salarioBruto, inss, irrf, salarioLiquido, fgts);

        console.log(' ');
        voltarAoMenu = readline.keyInYNStrict('Deseja voltar ao menu principal?');
      } while (!voltarAoMenu);
      break;
    default:
      console.log('Opção inválida. Tente novamente.');
      break;
  }
}

console.log('Saindo do sistema. Até a próxima!');
