export function quadroAtualDeFuncionarios(funcionarios) {
  if (!funcionarios || funcionarios.length === 0) {
    console.log('Nenhum funcionário cadastrado.');
    return;
  }

  const primeiroFuncionario = funcionarios[0];
  const ultimoFuncionario = funcionarios[funcionarios.length - 1];

  let listaCompleta = '';
  funcionarios.forEach((funcionario) => {
    listaCompleta += `
   🆔 ID: ${funcionario.id}
   🧍 Nome: ${funcionario.nome}
   🧰 Cargo: ${funcionario.cargo}
   💰 Salário: R$ ${funcionario.salarioLiquido}
   📅 Data de Admissão: ${funcionario.dataAdmissao}
   🏢 Departamento: ${funcionario.departamento}
\n`;
  });

  const template = `
=============================================================
                👥 QUADRO DE FUNCIONÁRIOS 👥
=============================================================

Total de Funcionários: ${funcionarios.length}

🥇 Primeiro Funcionário:
🆔 ID: ${primeiroFuncionario.id}
🧍 Nome: ${primeiroFuncionario.nome}
🧰 Cargo: ${primeiroFuncionario.cargo}
💰 Salário: R$ ${primeiroFuncionario.salarioLiquido}
📅 Data de Admissão: ${primeiroFuncionario.dataAdmissao}
🏢 Departamento: ${primeiroFuncionario.departamento}

🏁 Último Funcionário:
🆔 ID: ${ultimoFuncionario.id}
🧍 Nome: ${ultimoFuncionario.nome}
🧰 Cargo: ${ultimoFuncionario.cargo}
💰 Salário: R$ ${ultimoFuncionario.salarioLiquido}
📅 Data de Admissão: ${ultimoFuncionario.dataAdmissao}
🏢 Departamento: ${ultimoFuncionario.departamento}

📋 Lista Completa:
${listaCompleta}
=============================================================
`;
  console.log(template);
}
