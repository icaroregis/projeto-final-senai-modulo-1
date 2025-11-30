export function calculadoraSalarioMinimo(salarioBruto, inss, irrf, salarioLiquido, fgts) {
  console.log('=======================================================');
  console.log('🧮 Demonstrativo de pagamento 🧮');
  console.log('=======================================================');
  console.log(' ');
  console.log(`💰 Salário bruto:        R$ ${salarioBruto.toFixed(2)}`);
  console.log(`🔻 INSS descontado:      R$ ${inss.toFixed(2)}`);
  console.log(`🔻 IRRF descontado:      R$ ${irrf.toFixed(2)}`);
  console.log('--------------------------------------------------------');
  console.log(`💵 Salário líquido:      R$ ${salarioLiquido.toFixed(2)}`);
  console.log(`🏦 FGTS depositado:      R$ ${fgts.toFixed(2)}`);
  console.log('=======================================================');
  console.log(' ');
  console.log('=======================================================');
  console.log('🧮 Fórmula do cálculo 🧮');
  console.log('=======================================================');
  console.log(' ');
  console.log('Salário líquido = Salário bruto - INSS - IRRF');
  console.log(`Salário Líquido = R$ ${salarioBruto.toFixed(2)} - R$ ${inss.toFixed(2)} - R$ ${irrf.toFixed(2)}`);
}
