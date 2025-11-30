export function calcularFgts(salarioBruto) {
  const taxaFgts = 0.08;
  const valorFgts = salarioBruto * taxaFgts;
  return valorFgts;
}
