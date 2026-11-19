import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Orbit, Waves, Compass } from 'lucide-react';
import { soundFx } from '../utils/sound';

type Mode = 'mesh' | 'torus' | 'particles';

interface InteractiveCoreCanvasProps {
  backgroundMode?: boolean; // When true: runs 3D Kinetic Torus as hero background
}

export const InteractiveCoreCanvas: React.FC<InteractiveCoreCanvasProps> = ({
  backgroundMode = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeMode, setActiveMode] = useState<Mode>('torus');
  const [fps, setFps] = useState<number>(60);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isHovered: false, clickPulse: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement.clientWidth || window.innerWidth;
      height = canvas.parentElement.clientHeight || window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Mathematical points for 3D Torus / Ribbon mode
    const torusPoints: { u: number; v: number }[] = [];
    const uSteps = backgroundMode ? 38 : 32;
    const vSteps = backgroundMode ? 18 : 16;
    for (let i = 0; i < uSteps; i++) {
      for (let j = 0; j < vSteps; j++) {
        torusPoints.push({
          u: (i / uSteps) * Math.PI * 2,
          v: (j / vSteps) * Math.PI * 2,
        });
      }
    }

    // Secondary particles for mesh/flow modes
    const nodeCount = 50;
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number; baseAlpha: number }[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1.5,
        baseAlpha: Math.random() * 0.5 + 0.3,
      });
    }

    let angleX = 0.35;
    let angleY = 0.25;
    let time = 0;
    let lastTime = performance.now();
    let frameCount = 0;

    const render = (now: number) => {
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = now;
      }

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;
      if (mouseRef.current.clickPulse > 0) {
        mouseRef.current.clickPulse *= 0.92;
      }

      ctx.clearRect(0, 0, width, height);

      time += 0.012;

      // Perfectly centered in the middle of the screen
      const centerX = width / 2;
      const centerY = height / 2;

      // Mouse influence angles
      angleX += (backgroundMode ? 0.003 : 0.006) + (mouseRef.current.y / height - 0.5) * 0.02;
      angleY += (backgroundMode ? 0.005 : 0.009) + (mouseRef.current.x / width - 0.5) * 0.02;

      if (activeMode === 'torus') {
        // 3D KINETIC TORUS CONSTELLATION - Minimized in background mode
        const baseRadius = Math.min(width, height);
        const R = (backgroundMode ? baseRadius * 0.20 : baseRadius * 0.28) + mouseRef.current.clickPulse * 20;
        const r = backgroundMode ? baseRadius * 0.08 : baseRadius * 0.12;

        const projected: { x: number; y: number; z: number; color: string; size: number }[] = [];

        for (let i = 0; i < torusPoints.length; i++) {
          const pt = torusPoints[i];
          const u = pt.u + time * 0.5;
          const v = pt.v + Math.sin(time + pt.u) * 0.5;

          // Torus parametric formula
          const x0 = (R + r * Math.cos(v)) * Math.cos(u);
          const y0 = (R + r * Math.cos(v)) * Math.sin(u);
          const z0 = r * Math.sin(v);

          // 3D Euler rotations
          const radX = angleX;
          const radY = angleY;

          // Rotate around X
          const y1 = y0 * Math.cos(radX) - z0 * Math.sin(radX);
          const z1 = y0 * Math.sin(radX) + z0 * Math.cos(radX);

          // Rotate around Y
          const x2 = x0 * Math.cos(radY) + z1 * Math.sin(radY);
          const z2 = -x0 * Math.sin(radY) + z1 * Math.cos(radY);

          // Perspective camera projection
          const fov = 420;
          const scale = fov / (fov + z2 + 250);
          const px = centerX + x2 * scale;
          const py = centerY + y1 * scale;

          // Electric lime depth coloring with gentle, minimal alpha
          const isLime = (i % 3 === 0);
          const alpha = backgroundMode
            ? Math.max(0.12, Math.min(0.65, scale * 0.65))
            : Math.max(0.18, Math.min(1, scale * 0.85));

          projected.push({
            x: px,
            y: py,
            z: z2,
            color: isLime ? `rgba(197, 255, 69, ${alpha})` : `rgba(245, 243, 239, ${alpha * 0.6})`,
            size: Math.max(1, (backgroundMode ? 1.8 : 2.5) * scale),
          });
        }

        // Sort by Z for realistic 3D depth
        projected.sort((a, b) => b.z - a.z);

        // Draw connections / wireframe lines
        ctx.lineWidth = backgroundMode ? 0.5 : 0.75;
        const maxDist = backgroundMode ? 45 : 55;
        for (let i = 0; i < projected.length; i += 2) {
          const next = projected[(i + 1) % projected.length];
          const dist = Math.hypot(projected[i].x - next.x, projected[i].y - next.y);
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(197, 255, 69, ${0.1 * (projected[i].size / 2)})`;
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(next.x, next.y);
            ctx.stroke();
          }
        }

        // Draw node points
        for (const p of projected) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        }

        // Subtle orbital ring around torus
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(centerX, centerY, R * 1.55, 0, Math.PI * 2);
        ctx.stroke();

      } else if (activeMode === 'mesh') {
        // NEURAL MESH
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          n.x += n.vx;
          n.y += n.vy;

          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;

          for (let j = i + 1; j < nodes.length; j++) {
            const n2 = nodes[j];
            const dist = Math.hypot(n.x - n2.x, n.y - n2.y);
            if (dist < 110) {
              const alpha = (1 - dist / 110) * 0.35;
              ctx.beginPath();
              ctx.strokeStyle = (i + j) % 5 === 0 ? `rgba(197, 255, 69, ${alpha})` : `rgba(245, 243, 239, ${alpha * 0.5})`;
              ctx.lineWidth = 1;
              ctx.moveTo(n.x, n.y);
              ctx.lineTo(n2.x, n2.y);
              ctx.stroke();
            }
          }

          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
          ctx.fillStyle = i % 4 === 0 ? '#C5FF45' : '#F5F3EF';
          ctx.fill();
        }

      } else {
        // WAVE FIELD
        const cols = 22;
        const rows = 14;
        const spacingX = width / cols;
        const spacingY = height / rows;

        for (let c = 0; c < cols; c++) {
          for (let r = 0; r < rows; r++) {
            const baseX = c * spacingX + spacingX / 2;
            const baseY = r * spacingY + spacingY / 2;
            const wave = Math.sin(time * 2 + c * 0.3 + r * 0.2) * 15;
            const dx = mouseRef.current.x - baseX;
            const dy = mouseRef.current.y - baseY;
            const dist = Math.hypot(dx, dy);
            const repel = Math.max(0, 1 - dist / 160) * 35;
            const px = baseX - (dx / (dist || 1)) * repel;
            const py = baseY + wave - (dy / (dist || 1)) * repel;
            const isAccent = (c + r) % 6 === 0;

            ctx.beginPath();
            ctx.arc(px, py, isAccent ? 2.5 : 1.5, 0, Math.PI * 2);
            ctx.fillStyle = isAccent ? '#C5FF45' : 'rgba(245, 243, 239, 0.4)';
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    const onMouseMove = (e: MouseEvent) => {
      if (backgroundMode) {
        mouseRef.current.targetX = e.clientX;
        mouseRef.current.targetY = e.clientY;
      } else {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current.targetX = e.clientX - rect.left;
        mouseRef.current.targetY = e.clientY - rect.top;
      }
      mouseRef.current.isHovered = true;
    };

    const onMouseLeave = () => {
      mouseRef.current.targetX = width / 2;
      mouseRef.current.targetY = height / 2;
      mouseRef.current.isHovered = false;
    };

    const onClick = () => {
      mouseRef.current.clickPulse = 1.0;
      soundFx.playClick();
    };

    if (backgroundMode) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('click', onClick);
    } else {
      canvas.addEventListener('mousemove', onMouseMove);
      canvas.addEventListener('mouseleave', onMouseLeave);
      canvas.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (backgroundMode) {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('click', onClick);
      } else {
        canvas.removeEventListener('mousemove', onMouseMove);
        canvas.removeEventListener('mouseleave', onMouseLeave);
        canvas.removeEventListener('click', onClick);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeMode, backgroundMode]);

  // ── BACKGROUND MODE ── Renders the minimized 3D Torus as the ambient/interactive hero background
  if (backgroundMode) {
    return (
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-45 transition-opacity duration-700"
        style={{ display: 'block' }}
      />
    );
  }

  // ── WIDGET MODE ── Contained interactive canvas with HUD controls
  return (
    <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[540px] flex items-center justify-center select-none overflow-hidden rounded-2xl border border-white/10 bg-[#121212]/70 backdrop-blur-md group">
      {/* HUD Telemetry Overlay */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 font-mono-code text-[11px] text-[#8E8E93] bg-[#161616]/80 px-3 py-1.5 rounded-full border border-white/10">
        <span className="w-2 h-2 rounded-full bg-[#C5FF45] animate-pulse-subtle inline-block" />
        <span>SPATIAL CANVAS • {activeMode.toUpperCase()}</span>
        <span className="text-white/30">|</span>
        <span className="text-[#C5FF45]">{fps} FPS</span>
      </div>

      <div className="absolute top-4 right-4 z-10 hidden sm:flex items-center gap-1 font-mono-code text-[11px] text-[#8E8E93] bg-[#161616]/80 px-3 py-1.5 rounded-full border border-white/10">
        <Compass className="w-3 h-3 text-[#C5FF45]" />
        <span>SYS.AXIS [X: 28.61, Y: 77.20]</span>
      </div>

      {/* Mode Selector Buttons */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 bg-[#161616]/90 p-1.5 rounded-full border border-white/15 backdrop-blur-md shadow-2xl">
        <button
          onClick={() => { setActiveMode('torus'); soundFx.playHover(); }}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-code transition-all duration-300 ${activeMode === 'torus' ? 'bg-[#C5FF45] text-[#101010] font-semibold shadow-sm' : 'text-[#8E8E93] hover:text-[#F5F3EF]'}`}
        >
          <Orbit className="w-3 h-3" />
          <span>KINETIC TORUS</span>
        </button>

        <button
          onClick={() => { setActiveMode('mesh'); soundFx.playHover(); }}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-code transition-all duration-300 ${activeMode === 'mesh' ? 'bg-[#C5FF45] text-[#101010] font-semibold shadow-sm' : 'text-[#8E8E93] hover:text-[#F5F3EF]'}`}
        >
          <Sparkles className="w-3 h-3" />
          <span>NEURAL MESH</span>
        </button>

        <button
          onClick={() => { setActiveMode('particles'); soundFx.playHover(); }}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-code transition-all duration-300 ${activeMode === 'particles' ? 'bg-[#C5FF45] text-[#101010] font-semibold shadow-sm' : 'text-[#8E8E93] hover:text-[#F5F3EF]'}`}
        >
          <Waves className="w-3 h-3" />
          <span>WAVE FIELD</span>
        </button>
      </div>

      {/* Main Interactive HTML5 Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair relative z-0 transition-opacity duration-500"
      />

      {/* Micro instructions badge */}
      <div className="absolute bottom-4 right-4 z-10 hidden md:block text-[10px] font-mono-code text-[#8E8E93]/70 pointer-events-none">
        [CLICK TO PULSE • DRAG TO ROTATE]
      </div>
    </div>
  );
};
