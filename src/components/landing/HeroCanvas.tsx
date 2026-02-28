import { useEffect, useRef } from "react";

const HeroCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let w: number, h: number;

    function resize() {
      w = canvas!.width = canvas!.offsetWidth;
      h = canvas!.height = canvas!.offsetHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    function drawLines(thickness: number) {
      ctx!.fillStyle = "#EBEAEE";
      const spacing = 24;
      for (let x = 0; x < w; x += spacing) {
        ctx!.fillRect(x - thickness / 2, 0, thickness, h);
      }
    }

    function render() {
      const t = Date.now() * 0.0004;

      ctx!.fillStyle = "#242424";
      ctx!.fillRect(0, 0, w, h);

      drawLines(2);

      ctx!.save();
      ctx!.beginPath();

      // Shape A: Sweeping Fold
      ctx!.moveTo(0, h * 0.2 + Math.sin(t * 0.8) * h * 0.4);
      ctx!.quadraticCurveTo(
        w * 0.5,
        h * 0.8 + Math.cos(t * 1.2) * h * 0.5,
        w,
        h * 0.5 + Math.sin(t * 0.5) * h * 0.4
      );
      ctx!.lineTo(w, h);
      ctx!.lineTo(0, h);

      // Shape B: Brutalist Cut
      ctx!.moveTo(w * 0.5 + Math.cos(t) * w * 0.4, 0);
      ctx!.lineTo(w * 0.5 + Math.cos(t + 1.5) * w * 0.8, h * 0.7);
      ctx!.lineTo(w * 0.8 + Math.sin(t) * w * 0.3, 0);

      ctx!.clip();
      drawLines(18);
      ctx!.restore();

      animationId = requestAnimationFrame(render);
    }

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
};

export default HeroCanvas;
