"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

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
    desc: "Decisões rápidas precisam de dados rápidos. Respondemos em até 24 horas.",
  },
];

const team = [
  { src: "/pessoas/italo-sergio.jpg", name: "Italo Sérgio", role: "Sócio-Fundador", spec: "Especialista Tributário" },
  { src: "/pessoas/daniel-1.png", name: null, role: "Contador Sênior", spec: "Dep. Pessoal & eSocial" },
  { src: "/pessoas/zelita-1.png", name: null, role: "Consultora Contábil", spec: "Planejamento Estratégico" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="sobre"
      className="relative bg-[#0A0A0A] py-28 overflow-hidden"
      aria-labelledby="about-title"
    >
      {/* Background fachada esmaecida */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/fachada.png"
          alt=""
          fill
          className="object-cover object-center opacity-10"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/60" />
      </div>

      {/* Red accent line */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#C8102E] to-transparent opacity-40" aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#C8102E] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                Sobre a PERITUS
              </span>
              <h2
                id="about-title"
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
              className="space-y-5 text-gray-400 leading-relaxed mb-10"
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

            {/* Team photos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4 mb-8"
            >
              {(team as { src: string; name: string | null; role: string; spec: string }[]).map((member, i) => (
                <div key={i} className="flex flex-col items-center gap-2 group">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#C8102E]/50 transition-colors">
                    <Image
                      src={member.src}
                      alt={`${member.role} — PERITUS`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center">
                    {member.name && (
                      <div
                        className="text-white text-xs font-bold leading-tight"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {member.name}
                      </div>
                    )}
                    <div
                      className={`leading-tight ${member.name ? "text-[#C8102E]" : "text-white"} text-xs font-semibold`}
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {member.role}
                    </div>
                    <div
                      className="text-gray-600 text-[10px] leading-tight"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {member.spec}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.55 }}
            >
              <a
                href="https://wa.me/557999491000?text=Olá! Vim pelo site e gostaria de falar com um especialista da PERITUS."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-[#C8102E]/40 text-[#C8102E] font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-[#C8102E] hover:text-white hover:border-[#C8102E] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Fale com um Especialista
              </a>
            </motion.div>
          </div>

          {/* Right: Values 2x2 grid */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
                className="relative group p-6 bg-[#111] border border-white/5 rounded-sm hover:border-[#C8102E]/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C8102E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm" aria-hidden />
                <div className="relative">
                  <div className="w-12 h-12 rounded-sm bg-[#C8102E]/10 flex items-center justify-center text-[#C8102E] mb-4 group-hover:bg-[#C8102E]/20 transition-colors">
                    {v.icon}
                  </div>
                  <h3
                    style={{ fontFamily: "var(--font-playfair)" }}
                    className="text-[#C8102E] font-bold text-base mb-2"
                  >
                    {v.title}
                  </h3>
                  <p
                    className="text-gray-500 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
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
