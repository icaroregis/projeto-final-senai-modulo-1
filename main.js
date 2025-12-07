import readline from 'readline-sync';
import { empresa } from './types/empresa.js';

import {
  exibirMenu,
  boasVindas,
  calcularFgts,
  calcularInss,
  sobreSoftware,
  validarOpcoes,
  calcularImpostoRenda,
  calcularSalarioLiquido,
  calculadoraSalarioMinimo,
  quadroAtualDeFuncionarios,
  mostrarInformacoesEmpresa,
  folhaPagamentoPorFuncionario,
} from './utils/index.js';

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
        console.log('🧮 Calculadora de Salário Líquido 🧮');
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
    case '3':
      do {
        console.log('=============================================');
        console.log('🏢✏️ Edição dos Dados Básicos da Empresa 🏢✏️');
        console.log('=============================================');
        console.log(' ');

        const nomeFantasia = readline.question('Digite o novo nome fantasia da empresa: ');
        const razaoSocial = readline.question('Digite a nova razão social da empresa: ');
        const novoCnpj = readline.question('Digite o novo CNPJ da empresa: ');
        const novaInscricaoEstadual = readline.question('Digite a nova Inscrição Estadual da empresa: ');
        const dataFundacao = readline.question('Digite a nova Data de Fundação da empresa (DD/MM/AAAA): ');

        empresa.nomeFantasia = nomeFantasia;
        empresa.razaoSocial = razaoSocial;
        empresa.cnpj = novoCnpj;
        empresa.inscricaoEstadual = novaInscricaoEstadual;
        empresa.dataFundacao = dataFundacao;

        console.log('Dados básicos da empresa atualizados com sucesso!');
        console.log(' ');
        voltarAoMenu = readline.keyInYNStrict('Deseja voltar ao menu principal?');
      } while (!voltarAoMenu);
      break;
    case '4':
      do {
        console.log('========================================');
        console.log('🏢✏️ Edição do Endereço da Empresa 🏢✏️');
        console.log('========================================');
        console.log(' ');

        const novoLogradouro = readline.question('Digite o novo logradouro: ');
        const novoNumero = readline.question('Digite o novo número: ');
        const novoComplemento = readline.question('Digite o novo complemento: ');
        const novoBairro = readline.question('Digite o novo bairro: ');
        const novaCidade = readline.question('Digite a nova cidade: ');
        const novoEstado = readline.question('Digite o novo estado: ');
        const novoCep = readline.question('Digite o novo CEP: ');

        empresa.endereco = {
          logradouro: novoLogradouro,
          numero: novoNumero,
          complemento: novoComplemento,
          bairro: novoBairro,
          cidade: novaCidade,
          estado: novoEstado,
          cep: novoCep,
        };

        console.log('Endereço da empresa atualizado com sucesso!');
        console.log(' ');
        voltarAoMenu = readline.keyInYNStrict('Deseja voltar ao menu principal?');
      } while (!voltarAoMenu);
      break;
    case '5':
      do {
        console.log('================================================');
        console.log('🏢✏️ Edição dos Dados de Contato da Empresa 🏢✏️');
        console.log('================================================');
        console.log(' ');

        const novoEmail = readline.question('Digite o novo e-mail: ');
        const novoTelefone = readline.question('Digite o novo telefone: ');
        const novoSite = readline.question('Digite o domínio do novo site: ');

        empresa.contato = {
          email: novoEmail,
          telefone: novoTelefone,
          site: novoSite,
        };

        console.log('Dados de contato da empresa atualizados com sucesso!');
        console.log(' ');
        voltarAoMenu = readline.keyInYNStrict('Deseja voltar ao menu principal?');
      } while (!voltarAoMenu);
      break;
    case '6':
      do {
        console.log('================================================');
        console.log('🏢✏️ Edição das Metas Anuais da Empresa 🏢✏️');
        console.log('================================================');
        console.log(' ');

        empresa.metaAnual.forEach((meta, index) => {
          const novaMeta = readline.question(`Digite a nova meta para ${meta.mes} (atual: R$ ${meta.meta}): R$ `);
          empresa.metaAnual[index].meta = parseFloat(novaMeta);
        });

        console.log('Metas anuais atualizadas com sucesso!');
        console.log(' ');
        voltarAoMenu = readline.keyInYNStrict('Deseja voltar ao menu principal?');
      } while (!voltarAoMenu);
      break;
    case '7':
      do {
        console.log('================================================');
        console.log('🏢✏️ Edição de Áreas de Atuação da Empresa 🏢✏️');
        console.log('================================================');
        console.log(' ');

        empresa.areasAtuacao.forEach((area, index) => {
          const novoNome = readline.question(`Digite o novo nome para ${area.nome}: `);
          empresa.areasAtuacao[index].nome = novoNome;
        });

        console.log('Áreas de atuação atualizadas com sucesso!');
        console.log(' ');
        voltarAoMenu = readline.keyInYNStrict('Deseja voltar ao menu principal?');
      } while (!voltarAoMenu);
      break;
    case '8':
      do {
        mostrarInformacoesEmpresa(empresa);

        console.log(' ');
        voltarAoMenu = readline.keyInYNStrict('Deseja voltar ao menu principal?');
      } while (!voltarAoMenu);
      break;
    case '9':
      do {
        console.log('========================================');
        console.log('🏢✏️ Cadastro de Novos Usuários 🏢✏️');
        console.log('========================================');
        console.log(' ');

        const nome = readline.question('Digite o nome do funcionário: ');
        const cargo = readline.question('Digite o cargo do funcionário: ');
        const salarioBruto = parseFloat(readline.question('Digite o salário do funcionário: R$ '));
        const dataAdmissao = readline.question('Digite a data de admissão do funcionário (DD/MM/AAAA): ');
        const departamento = readline.question('Digite o departamento do funcionário: ');

        empresa.funcionarios.push({
          id: empresa.funcionarios.length + 1,
          nome,
          cargo,
          salarioBruto,
          dataAdmissao,
          departamento,
          inss: calcularInss(salarioBruto),
          irrf: calcularImpostoRenda(salarioBruto),
          salarioLiquido: calcularSalarioLiquido(salarioBruto),
          fgts: calcularFgts(salarioBruto),
        });

        console.log('Funcionário Cadastrado com sucesso!');
        console.log(' ');
        voltarAoMenu = readline.keyInYNStrict('Deseja voltar ao menu principal?');
      } while (!voltarAoMenu);
      break;
    case '10':
      do {
        quadroAtualDeFuncionarios(empresa.funcionarios);

        console.log(' ');
        voltarAoMenu = readline.keyInYNStrict('Deseja voltar ao menu principal?');
      } while (!voltarAoMenu);
      break;
    case '11':
      do {
        folhaPagamentoPorFuncionario(empresa);

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
