"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const particlesRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 16, 46, ${p.opacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* Particles */}
      <canvas ref={particlesRef} className="absolute inset-0 pointer-events-none" />

      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0000] via-[#0A0A0A] to-[#0A0A0A]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#C8102E] opacity-5 rounded-full blur-[120px]" />
      </div>

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#C8102E 1px, transparent 1px), linear-gradient(90deg, #C8102E 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="order-2 lg:order-1">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#C8102E]/40 rounded-full bg-[#C8102E]/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8102E]">
              Alto Padrão — Aracaju, SE
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            style={{ fontFamily: "var(--font-playfair)" }}
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6"
          >
            <span className="text-white">O Leão</span>
            <br />
            <span className="text-[#C8102E]">Não Perdoa.</span>
            <br />
            <span className="text-white">
              A <em>Peritus</em>
            </span>
            <br />
            <span className="text-white">Cuida de Você.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            O Fisco ataca. A legislação muda. Os impostos avançam.{" "}
            <strong className="text-white">
              Enquanto isso, empresários sem contabilidade de alto padrão sangram dinheiro
            </strong>{" "}
            sem perceber. A PERITUS é a diferença entre sobreviver e dominar.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://wa.me/557999491000?text=Olá! Vim pelo site e gostaria de uma consultoria gratuita com a PERITUS."
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-btn inline-flex items-center gap-3 px-8 py-4 text-white font-bold uppercase tracking-wider text-sm rounded-sm shadow-[0_0_30px_rgba(200,16,46,0.5)] hover:shadow-[0_0_50px_rgba(200,16,46,0.7)] hover:scale-105 transition-all duration-300"
            >
              <span>Proteger Minha Empresa</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-semibold uppercase tracking-wider text-sm rounded-sm hover:border-[#C8102E] hover:text-[#C8102E] transition-all duration-300"
            >
              Ver Serviços
            </a>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start"
          >
            {[
              { num: "15+", label: "Anos de Experiência" },
              { num: "500+", label: "Empresas Atendidas" },
              { num: "R$ 0", label: "em Multas com Nossos Clientes" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div
                  style={{ fontFamily: "var(--font-playfair)" }}
                  className="text-3xl font-black text-[#C8102E]"
                >
                  {s.num}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero video */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
          className="order-1 lg:order-2 flex items-end justify-center"
        >
          <div className="relative">
            {/* Glow behind */}
            <div className="absolute -inset-6 bg-[#C8102E] opacity-10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-20 bg-[#C8102E] opacity-20 rounded-full blur-3xl" />

            {/* Video + vignette */}
            <div className="relative z-10 w-full max-w-[420px]">
              <video
                src="/hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto rounded-sm"
              />
              {/* Vignette cinematográfica */}
              <div className="absolute inset-0 pointer-events-none rounded-sm"
                style={{
                  background: `
                    linear-gradient(to right,  #0A0A0A 0%, transparent 18%, transparent 82%, #0A0A0A 100%),
                    linear-gradient(to bottom, #0A0A0A 0%, transparent 12%, transparent 80%, #0A0A0A 100%)
                  `,
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-600 uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#C8102E] to-transparent" />
      </motion.div>
    </section>
  );
}
