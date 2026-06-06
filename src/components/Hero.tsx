"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const metrics = [
  { num: "15+", label: "Anos de Experiência" },
  { num: "500+", label: "Empresas Atendidas" },
  { num: "R$ 0", label: "Em Multas Fiscais" },
  { num: "24h", label: "Resposta Garantida" },
];

export default function Hero() {
  const particlesRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.35 + 0.05,
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

    window.addEventListener("resize", setSize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]"
      aria-labelledby="hero-headline"
    >
      {/* ── Video background ── */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <video
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Dark overlay gradient — mantém legibilidade do texto */}
        <div className="absolute inset-0 bg-[#0A0A0A]/70" />
        {/* Gradiente lateral esquerdo para reforçar contraste do texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/50 to-transparent" />
        {/* Gradiente inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
        {/* Tint vermelho sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C8102E]/10 via-transparent to-transparent" />
      </div>

      {/* ── Grid lines ── */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#C8102E 1px, transparent 1px), linear-gradient(90deg, #C8102E 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden
      />

      {/* ── Particles ── */}
      <canvas ref={particlesRef} className="absolute inset-0 z-[2] pointer-events-none" aria-hidden />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl">
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
            id="hero-headline"
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
            className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl"
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
            className="flex flex-wrap gap-4 mb-4"
          >
            <a
              href="https://wa.me/557999491000?text=Olá! Vim pelo site e gostaria de uma consultoria gratuita com a PERITUS."
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-btn inline-flex items-center gap-3 px-8 py-4 text-white font-bold uppercase tracking-wider text-sm rounded-sm shadow-[0_0_30px_rgba(200,16,46,0.5)] hover:shadow-[0_0_50px_rgba(200,16,46,0.7)] hover:scale-105 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Proteger Minha Empresa
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-semibold uppercase tracking-wider text-sm rounded-sm hover:border-[#C8102E] hover:text-[#C8102E] backdrop-blur-sm bg-white/5 transition-all duration-300"
            >
              Ver Serviços
            </a>
          </motion.div>

          {/* Urgency micro-copy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-500 text-xs mb-12"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <span className="text-[#C8102E] font-semibold">●</span>{" "}
            Mais de 50 empresas consultaram este mês — vagas de consultoria gratuita limitadas
          </motion.p>

          {/* 4 metrics */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-0"
            role="list"
            aria-label="Números da PERITUS"
          >
            {metrics.map((s, i) => (
              <div
                key={s.label}
                role="listitem"
                className={`flex flex-col items-center px-6 py-4 backdrop-blur-sm bg-black/30 border border-white/10 ${
                  i === 0 ? "rounded-l-sm" : ""
                } ${i === metrics.length - 1 ? "rounded-r-sm" : "border-r-0"}`}
              >
                <div
                  style={{ fontFamily: "var(--font-playfair)" }}
                  className="text-3xl font-black text-[#C8102E] leading-none"
                >
                  {s.num}
                </div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 whitespace-nowrap">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        aria-hidden
      >
        <span className="text-xs text-gray-500 uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#C8102E] to-transparent" />
      </motion.div>
    </section>
  );
}
