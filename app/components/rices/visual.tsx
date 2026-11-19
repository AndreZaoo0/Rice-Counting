"use client";

import { useEffect, useRef } from "react";
import { gerarGrao } from "../game/gerador";
import type { Grao } from "../../types/grao";
import styles from "./visual.module.css";

const MAX_GRAOS_DESENHADOS = 100;

function desenharGraos(
  ctx: CanvasRenderingContext2D,
  graos: Grao[],
  largura: number,
  altura: number,
) {
  ctx.clearRect(0, 0, largura, altura);
  ctx.fillStyle = "#f4e4b7";

  for (const grao of graos) {
    ctx.save();
    ctx.translate(grao.x, grao.y);
    ctx.rotate(grao.rotation);
    ctx.beginPath();
    ctx.ellipse(0, 0, 2.5, 6, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

export function VisualizacaoInicial() {
  const telaRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const tela = telaRef.current;
    const ctx = tela?.getContext("2d");

    if (!tela || !ctx) return;

    const desenhar = () => {
      const { width, height } = tela.getBoundingClientRect();

      if (!width || !height) return;

      const escala = Math.min(window.devicePixelRatio || 1, 2);

      tela.width = Math.round(width * escala);
      tela.height = Math.round(height * escala);

      ctx.setTransform(escala, 0, 0, escala, 0, 0);

      const graos = gerarGrao(
        MAX_GRAOS_DESENHADOS,
        width / 20,
        height * 0.68,
        width * 0.46,
        height * 0.34,
      );

      desenharGraos(ctx, graos, width, height);
    };

    const observador = new ResizeObserver(desenhar);
    observador.observe(tela);

    return () => observador.disconnect();
  }, []);

  return (
    <canvas
      ref={telaRef}
      className={styles.telaArroz}
      aria-label="Visualização dos grãos de arroz"
    />
  );
}
