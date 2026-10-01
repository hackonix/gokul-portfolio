import { useEffect, useRef } from 'react';

// Animated circuit/sensor grid background using Canvas
export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let width, height;

    const nodes = [];
    const GRID = 96;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = document.documentElement.scrollHeight;
      buildNodes();
    }

    function buildNodes() {
      nodes.length = 0;
      const cols = Math.ceil(width / GRID) + 1;
      const rows = Math.ceil(height / GRID) + 1;
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          // Jitter position slightly for organic feel
          const jx = (Math.random() - 0.5) * GRID * 0.4;
          const jy = (Math.random() - 0.5) * GRID * 0.4;
          nodes.push({
            x: c * GRID + jx,
            y: r * GRID + jy,
            baseOpacity: Math.random() * 0.4 + 0.05,
            pulsePhase: Math.random() * Math.PI * 2,
            pulseSpeed: 0.005 + Math.random() * 0.01,
            size: Math.random() > 0.85 ? 2.5 : 1.5,
            active: Math.random() > 0.7,
          });
        }
      }
    }

    // Packet animation
    const packets = [];
    function spawnPacket() {
      if (nodes.length < 2) return;
      const fromIdx = Math.floor(Math.random() * nodes.length);
      // find neighbor
      const from = nodes[fromIdx];
      const candidates = nodes.filter(
        (n) => n !== from && Math.abs(n.x - from.x) < GRID * 1.5 && Math.abs(n.y - from.y) < GRID * 1.5
      );
      if (!candidates.length) return;
      const to = candidates[Math.floor(Math.random() * candidates.length)];
      packets.push({ from, to, t: 0, speed: 0.004 + Math.random() * 0.006 });
    }

    let frame = 0;
    function draw() {
      ctx.clearRect(0, 0, width, height);
      frame++;

      // Spawn packets occasionally
      if (frame % 80 === 0 && packets.length < 12) spawnPacket();

      // Draw edges between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > GRID * 1.4) continue;

          const alpha = (1 - dist / (GRID * 1.4)) * 0.04;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(59,130,246,${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        node.pulsePhase += node.pulseSpeed;
        const pulse = Math.sin(node.pulsePhase) * 0.3 + 0.7;
        const opacity = node.baseOpacity * pulse;

        if (node.active && node.size > 2) {
          // Glowing node
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(59,130,246,${opacity * 0.2})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = node.active
          ? `rgba(59,130,246,${opacity})`
          : `rgba(30,45,69,${opacity * 2})`;
        ctx.fill();
      });

      // Draw data packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.t += p.speed;
        if (p.t >= 1) { packets.splice(i, 1); continue; }

        const x = p.from.x + (p.to.x - p.from.x) * p.t;
        const y = p.from.y + (p.to.y - p.from.y) * p.t;

        // Trail
        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34,211,238,0.8)`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34,211,238,0.15)`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(document.documentElement);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
      style={{ opacity: 0.6 }}
    />
  );
}
