"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Contabilidade Empresarial",
    desc: "Escrituração contábil impecável, balanços e demonstrativos que contam a história real do seu negócio — e apontam o caminho.",
    tags: ["Escrituração Fiscal", "DRE e Balanço", "Conciliação Bancária"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Planejamento Tributário",
    desc: "Enquanto outros pagam o que o Fisco pede, nossos clientes pagam o que a lei permite. Não é magia — é estratégia.",
    tags: ["Redução Legal de Impostos", "Enquadramento Fiscal", "IRPJ & CSLL"],
    highlight: true,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Departamento Pessoal",
    desc: "Folha de pagamento, eSocial, admissões e demissões. Sem erro, sem multa, sem dor de cabeça.",
    tags: ["Folha de Pagamento", "eSocial & FGTS", "Admissão & Rescisão"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Abertura de Empresa",
    desc: "Do zero ao CNPJ ativo em tempo recorde. Escolha do regime tributário ideal já no início — onde o jogo se define.",
    tags: ["CNPJ Rápido", "Regime Tributário Ideal", "Consultoria Inicial"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Regularização Fiscal",
    desc: "Empresa com pendências? Nós resolvemos. Negociamos, regularizamos e blindamos sua empresa para o futuro.",
    tags: ["Parcelamento de Dívidas", "Certidões Negativas", "REFIS & PERT"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    title: "Consultoria Contábil",
    desc: "Análise profunda do seu negócio. Indicadores, fluxo de caixa e tomada de decisão baseada em dados reais.",
    tags: ["Análise Financeira", "Fluxo de Caixa", "KPIs do Negócio"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicos" className="relative bg-[#0d0d0d] py-28 overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(circle, #C8102E 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C8102E] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
            O Que Fazemos
          </span>
          <h2
            style={{ fontFamily: "var(--font-playfair)" }}
            className="text-4xl md:text-5xl font-black text-white mb-5"
          >
            Arsenal Completo Para
            <br />
            <span className="text-[#C8102E]">Sua Empresa Vencer</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto" style={{ fontFamily: "var(--font-inter)" }}>
            Cada serviço foi construído para eliminar riscos, reduzir custos e
            posicionar seu negócio à frente da concorrência.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`relative group p-8 rounded-sm border transition-all duration-300 cursor-default ${
                s.highlight
                  ? "bg-[#C8102E]/10 border-[#C8102E]/50 hover:border-[#C8102E]"
                  : "bg-[#111] border-white/5 hover:border-[#C8102E]/40"
              }`}
            >
              {s.highlight && (
                <div className="absolute -top-3 left-6 bg-[#C8102E] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                  Mais Procurado
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-br from-[#C8102E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm" />

              <div className="relative">
                <div
                  className={`w-14 h-14 rounded-sm flex items-center justify-center mb-6 ${
                    s.highlight ? "bg-[#C8102E] text-white" : "bg-[#C8102E]/10 text-[#C8102E]"
                  }`}
                >
                  {s.icon}
                </div>

                <h3
                  style={{ fontFamily: "var(--font-playfair)" }}
                  className="text-white font-bold text-xl mb-3"
                >
                  {s.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-5" style={{ fontFamily: "var(--font-inter)" }}>
                  {s.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
