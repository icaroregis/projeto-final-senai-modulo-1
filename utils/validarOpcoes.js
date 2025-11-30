import readline from 'readline-sync';

export function validarOpcoes() {
  let opcao;
  do {
    opcao = readline.question('Escolha uma opção (0 a 11): ');
    if (!/^(0|[1-9]|10|11)$/.test(opcao)) {
      console.log('Opção inválida! Digite de 1 a 11 para escolher as opções do menu, ou zero para sair do sistema.');
    }
  } while (!/^(0|[1-9]|10|11)$/.test(opcao));
  return opcao;
}
