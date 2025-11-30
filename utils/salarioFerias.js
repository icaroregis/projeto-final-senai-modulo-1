import { calcularInss } from './calcularInss.js';
import { calcularImpostoRenda } from './impostoRenda.js';

export function calcularSalarioFerias(salario) {
  const adicionalUmTerco = salario / 3;
  const totalFerias = salario + adicionalUmTerco;
  const inss = calcularInss(totalFerias);
  const irrf = calcularImpostoRenda(totalFerias);
  const liquidoFerias = totalFerias - inss - irrf;
  return liquidoFerias;
}
