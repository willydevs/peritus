"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Segurança Total",
    desc: "Compliance rigoroso para que sua empresa nunca seja pega de surpresa pelo Fisco.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Crescimento Estratégico",
    desc: "Planejamento tributário que libera capital para você escalar seu negócio.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Atendimento Premium",
    desc: "Relação direta com especialistas. Sem atendentes, sem burocracia interna.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Respostas Ágeis",
    desc: "Decisões rápidas precisam de dados rápidos. Estamos sempre disponíveis.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre" className="relative bg-[#0A0A0A] py-28 overflow-hidden">
      {/* Red accent line */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#C8102E] to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#C8102E] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                Sobre a PERITUS
              </span>
              <h2
                style={{ fontFamily: "var(--font-playfair)" }}
                className="text-4xl md:text-5xl font-black text-white leading-tight mb-6"
              >
                Não Somos Apenas
                <br />
                <span className="text-[#C8102E]">Contadores.</span>
                <br />
                Somos seu Escudo.
              </h2>
              <div className="w-16 h-1 bg-[#C8102E] mb-8" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5 text-gray-400 leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <p>
                A{" "}
                <strong className="text-white">PERITUS Assessoria Contábil</strong> foi
                construída sobre uma premissa simples: empresários que constroem grandes
                negócios merecem uma contabilidade à altura.
              </p>
              <p>
                Com equipe altamente especializada e visão estratégica, atuamos ao lado
                dos nossos clientes como{" "}
                <strong className="text-white">
                  verdadeiros parceiros de crescimento
                </strong>
                , não apenas registrando o passado, mas construindo o futuro financeiro
                da sua empresa.
              </p>
              <p>
                Em Aracaju, quando o assunto é{" "}
                <strong className="text-[#C8102E]">
                  proteção patrimonial, eficiência fiscal e crescimento sustentável
                </strong>
                , uma referência se impõe: PERITUS.
              </p>
            </motion.div>
          </div>

          {/* Right: Values grid */}
          <div className="grid grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
                className="relative group p-6 bg-[#111] border border-white/5 rounded-sm hover:border-[#C8102E]/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C8102E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-sm bg-[#C8102E]/10 flex items-center justify-center text-[#C8102E] mb-4">
                    {v.icon}
                  </div>
                  <h3
                    style={{ fontFamily: "var(--font-playfair)" }}
                    className="text-white font-bold text-base mb-2"
                  >
                    {v.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
