export function calcularInss(salarioBruto) {
  let aliquota = 0;
  let deducao = 0;
  let inss = 0;

  switch (true) {
    case salarioBruto >= 1518.0:
      aliquota = 0.075;
      deducao = 0;
      inss = salarioBruto * aliquota - deducao;
      break;
    case salarioBruto >= 1518.01 && salarioBruto <= 2793.88:
      aliquota = 0.09;
      deducao = 22.77;
      inss = salarioBruto * aliquota - deducao;
      break;
    case salarioBruto >= 2793.89 && salarioBruto <= 4190.83:
      aliquota = 0.12;
      deducao = 106.59;
      inss = salarioBruto * aliquota - deducao;
      break;
    case salarioBruto >= 4190.84 && salarioBruto <= 8157.41:
      aliquota = 0.14;
      deducao = 190.4;
      inss = salarioBruto * aliquota - deducao;
      break;
    case salarioBruto > 8157.41:
      const valorFixo = 951.62;
      inss = salarioBruto - valorFixo;
      break;
    default:
      console.log('Salário bruto inválido para cálculo do INSS.');
      return 0;
  }

  return inss;
}
