export function folhaPagamentoPorFuncionario(dadosEmpresa) {
  const totalSalariosBrutos = dadosEmpresa.funcionarios
    .reduce((acumulator, currentValue) => acumulator + currentValue.salarioBruto, 0)
    .toFixed(2);
  const totalDescontosINSS = dadosEmpresa.funcionarios
    .reduce((acumulator, currentValue) => acumulator + currentValue.inss, 0)
    .toFixed(2);
  const totalDescontosIRRF = dadosEmpresa.funcionarios
    .reduce((acumulator, currentValue) => acumulator + currentValue.irrf, 0)
    .toFixed(2);
  const totalLiquidoAPagar = dadosEmpresa.funcionarios
    .reduce((acumulator, currentValue) => acumulator + currentValue.salarioLiquido, 0)
    .toFixed(2);
  const totalFgts = dadosEmpresa.funcionarios
    .reduce((acumulator, currentValue) => acumulator + currentValue.fgts, 0)
    .toFixed(2);

  console.log(' ');
  console.log('=======================================================');
  console.log('🧾 Detalhamento por Funcionário 🧾');
  console.log('=======================================================');
  console.log(' ');

  dadosEmpresa.funcionarios.forEach((funcionario) => {
    console.log(`🆔 ID: ${funcionario.id}`);
    console.log(`🧍 Nome: ${funcionario.nome}`);
    console.log(`🧰 Cargo: ${funcionario.cargo}`);
    console.log(`💰 Salário Bruto: R$ ${funcionario.salarioBruto.toFixed(2)}`);
    console.log(`🔻 INSS: R$ ${funcionario.inss.toFixed(2)}`);
    console.log(`🔻 IRRF: R$ ${funcionario.irrf.toFixed(2)}`);
    console.log(`💵 Salário Líquido: R$ ${funcionario.salarioLiquido.toFixed(2)}`);
    console.log(`🏦 FGTS: R$ ${funcionario.fgts.toFixed(2)}`);
    console.log(' ');
  });

  console.log(' ');
  console.log('=======================================================');
  console.log('🧾 Resumo Total da Folha 🧾');
  console.log('=======================================================');
  console.log(' ');

  console.log(`Total de Salários Brutos: R$ ${totalSalariosBrutos}`);
  console.log(`Total de Descontos do INSS: R$ ${totalDescontosINSS}`);
  console.log(`Total de Descontos do IRRF: R$ ${totalDescontosIRRF}`);
  console.log('=======================================================');
  console.log(`Total Líquido a Pagar: R$ ${totalLiquidoAPagar}`);
  console.log(`Total de FGTS Depositado: R$ ${totalFgts}`);
  console.log('=======================================================');
}
