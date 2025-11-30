import { calcularInss } from './calcularInss.js';
import { calcularImpostoRenda } from './impostoRenda.js';

export function calcularSalarioLiquido(salarioBruto) {
  const inss = calcularInss(salarioBruto);
  const irrf = calcularImpostoRenda(salarioBruto);
  const salarioLiquido = salarioBruto - inss - irrf;
  return salarioLiquido;
}
