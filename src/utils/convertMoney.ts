export function convertMoney(value: number) {
  return value.toLocaleString('pt-BR', { minimumFractionDigits: 2});
}