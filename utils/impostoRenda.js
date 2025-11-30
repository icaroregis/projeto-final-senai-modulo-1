export function calcularImpostoRenda(salarioBruto) {
  let aliquota = 0;
  let deducao = 0;
  let irrf = 0;

  switch (true) {
    case salarioBruto < 2428.8:
      aliquota = 0;
      deducao = 0;
      irrf = 0;
      break;
    case salarioBruto >= 2428.81 && salarioBruto <= 2826.65:
      aliquota = 0.075;
      deducao = 182.16;
      irrf = salarioBruto * aliquota - deducao;
      break;
    case salarioBruto >= 2826.66 && salarioBruto <= 3751.05:
      aliquota = 0.15;
      deducao = 394.16;
      irrf = salarioBruto * aliquota - deducao;
      break;
    case salarioBruto >= 3751.06 && salarioBruto <= 4664.68:
      aliquota = 0.225;
      deducao = 675.49;
      irrf = salarioBruto * aliquota - deducao;
      break;
    case salarioBruto > 4664.68:
      aliquota = 0.275;
      deducao = 908.73;
      irrf = salarioBruto * aliquota - deducao;
      break;
    default:
      console.log('Base de cálculo inválida para cálculo do Imposto de Renda.');
      return 0;
  }

  return irrf;
}
