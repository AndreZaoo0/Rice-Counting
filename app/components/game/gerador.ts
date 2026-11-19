import type { Grao } from "../../types/grao";

export function gerarGrao(
  count: number,
  centerX: number,
  baseY: number,
  width: number,
  height: number,
): Grao[] {
  return Array.from({ length: count }, (_, id) => {
    const posicaoHorizontal = Math.random() * 2 - 1;
    const alturaDisponivel =
      height * (1 - Math.pow(Math.abs(posicaoHorizontal), 0.5));

    return {
      id,
      x: centerX + (posicaoHorizontal * width) / 2,
      y: baseY - Math.random() * alturaDisponivel,
      rotation: Math.random() * Math.PI,
      status: "pilha",
    };
  });
}
