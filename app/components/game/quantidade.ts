export function aleatorizarQuantidade(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function quantidadeGerada() {
  return aleatorizarQuantidade(39000, 48000);
}
