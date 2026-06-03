"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    number: "01",
    title: "Especialistas, Não Generalistas",
    body: "Nossa equipe é formada por profissionais especializados em cada área. Não existe contador que cuida de tudo no improviso aqui — cada entrega é assinada por quem domina o tema.",
  },
  {
    number: "02",
    title: "Tecnologia de Ponta",
    body: "Sistemas integrados, emissão de relatórios em tempo real e dashboard para acompanhamento da saúde financeira da sua empresa. Contabilidade do século XXI.",
  },
  {
    number: "03",
    title: "Compliance Total",
    body: "Obrigações entregues no prazo, sem exceção. SPED, DCTF, DEFIS, eSocial, REINF — gerenciamos o calendário fiscal para que você nunca pague uma multa desnecessária.",
  },
  {
    number: "04",
    title: "Transparência Absoluta",
    body: "Sem letras miúdas. Você sabe exatamente o que pagamos em impostos, onde está seu dinheiro e como otimizar cada centavo. Relatórios claros, linguagem humana.",
  },
];

const differentials = [
  { val: "15+", label: "Anos de mercado" },
  { val: "500+", label: "Clientes ativos" },
  { val: "R$ 0", label: "em multas fiscais entregues" },
  { val: "24h", label: "Resposta garantida" },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-[#0d0d0d] py-28 overflow-hidden">
      {/* Big red number background */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[30vw] font-black text-[#C8102E]/3 select-none pointer-events-none leading-none"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        P
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="text-[#C8102E] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
            Por que a PERITUS
          </span>
          <h2
            style={{ fontFamily: "var(--font-playfair)" }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            Enquanto a Concorrência
            <br />
            <span className="text-[#C8102E]">Apenas Registra, Nós Blindamos.</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto" style={{ fontFamily: "var(--font-inter)" }}>
            A diferença entre uma contabilidade mediana e a PERITUS pode custar (ou
            economizar) centenas de milhares de reais.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {differentials.map((d) => (
            <div
              key={d.label}
              className="relative text-center p-8 bg-[#111] border border-white/5 rounded-sm overflow-hidden group hover:border-[#C8102E]/40 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#C8102E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div
                className="text-4xl lg:text-5xl font-black text-[#C8102E] mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {d.val}
              </div>
              <div className="text-gray-500 text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-inter)" }}>
                {d.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i + 0.3 }}
              className="flex gap-6 group"
            >
              <div
                className="flex-shrink-0 text-6xl font-black text-[#C8102E]/20 group-hover:text-[#C8102E]/40 transition-colors leading-none select-none"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {p.number}
              </div>
              <div className="pt-2">
                <h3
                  className="text-white font-bold text-xl mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                  {p.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-20 relative overflow-hidden rounded-sm p-12 bg-gradient-to-r from-[#8B0000] via-[#C8102E] to-[#8B0000] text-center"
        >
          <div className="absolute inset-0 shimmer" />
          {/* Lion silhouette */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[8rem] opacity-10 select-none">
            🦁
          </div>
          <div className="relative">
            <h3
              className="text-3xl md:text-4xl font-black text-white mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Não Alimente o Leão do Fisco.
            </h3>
            <p className="text-white/80 mb-8 text-lg" style={{ fontFamily: "var(--font-inter)" }}>
              Cada mês sem planejamento tributário é dinheiro que nunca volta.
            </p>
            <a
              href="https://wa.me/557999491000?text=Olá! Vim pelo site e gostaria de uma consultoria gratuita com a PERITUS."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-[#C8102E] font-black uppercase tracking-wider text-sm rounded-sm hover:bg-[#0A0A0A] hover:text-white transition-all duration-300 shadow-2xl"
            >
              Começar Agora — É Gratuito
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
