"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const plans = [
  {
    name: "Empresas Iniciantes",
    ideal: "MEI, ME e EPP no Simples Nacional",
    badge: null,
    cta: "Consultar Valor",
    waMsg:
      "Olá! Vim pelo site e tenho interesse no plano para empresas iniciantes. Gostaria de uma proposta.",
    features: [
      "Escrituração contábil mensal",
      "Apuração de impostos (Simples Nacional)",
      "Obrigações acessórias básicas",
      "Suporte via WhatsApp",
      "Relatório mensal simplificado",
      "Consultoria inicial gratuita",
    ],
    notIncluded: ["Departamento pessoal", "Planejamento tributário avançado"],
  },
  {
    name: "Empresas em Crescimento",
    ideal: "Lucro Presumido, ME e Médias Empresas",
    badge: "Mais Popular",
    cta: "Consultar Valor",
    waMsg:
      "Olá! Vim pelo site e tenho interesse no plano empresarial. Gostaria de uma proposta.",
    features: [
      "Escrituração contábil completa",
      "Apuração de todos os tributos",
      "SPED, DCTF, DEFIS e obrigações",
      "Departamento pessoal (até 10 func.)",
      "Planejamento tributário anual",
      "Relatórios gerenciais mensais",
      "Suporte prioritário em 24h",
      "Reunião trimestral de resultados",
    ],
    notIncluded: [],
  },
  {
    name: "Empresas Consolidadas",
    ideal: "Lucro Real, Holdings e Grupos Empresariais",
    badge: "Premium",
    cta: "Falar com Especialista",
    waMsg:
      "Olá! Vim pelo site e tenho interesse no plano premium para empresas consolidadas. Gostaria de uma proposta.",
    features: [
      "Contabilidade full service",
      "Lucro Real, LALUR e LACS",
      "Departamento pessoal ilimitado",
      "Planejamento tributário estratégico",
      "Consultoria de fusões e aquisições",
      "Dashboard financeiro em tempo real",
      "Gerente de conta dedicado",
      "Reuniões mensais presenciais",
      "Suporte emergencial 24/7",
    ],
    notIncluded: [],
  },
];

const CheckIcon = () => (
  <svg className="w-4 h-4 text-[#C8102E] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon = () => (
  <svg className="w-4 h-4 text-white/20 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="planos"
      className="relative bg-[#0d0d0d] py-28 overflow-hidden"
      aria-labelledby="pricing-title"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C8102E] opacity-[0.04] rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#C8102E] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
            Planos e Investimento
          </span>
          <h2
            id="pricing-title"
            style={{ fontFamily: "var(--font-playfair)" }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            Contabilidade de Alto Padrão
            <br />
            <span className="text-[#C8102E]">Para Cada Fase do Negócio.</span>
          </h2>
          <p
            className="text-gray-500 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Cada plano é personalizado conforme o porte e as necessidades da sua empresa.
            Fale conosco para receber uma proposta sob medida.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative rounded-sm flex flex-col transition-all duration-300 ${
                plan.badge === "Mais Popular"
                  ? "bg-[#C8102E]/10 border-2 border-[#C8102E]/60 hover:border-[#C8102E] shadow-[0_0_40px_rgba(200,16,46,0.15)]"
                  : "bg-[#111] border border-white/5 hover:border-[#C8102E]/30"
              }`}
            >
              {plan.badge && (
                <div
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${
                    plan.badge === "Mais Popular"
                      ? "bg-[#C8102E] text-white"
                      : "bg-white/10 text-white border border-white/20"
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <div className="p-8 flex-1">
                <div className="mb-6">
                  <h3
                    className="text-white font-black text-xl mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className="text-gray-500 text-xs"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {plan.ideal}
                  </p>
                </div>

                <div className="mb-6 py-5 border-y border-white/5">
                  <div
                    className="text-2xl font-black text-[#C8102E]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Proposta Personalizada
                  </div>
                  <div className="text-gray-600 text-xs mt-1">
                    Valor sob medida para o seu perfil
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckIcon />
                      <span
                        className="text-gray-400 text-sm leading-snug"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                  {plan.notIncluded.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <XIcon />
                      <span
                        className="text-gray-600 text-sm leading-snug line-through"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-8 pb-8">
                <a
                  href={`https://wa.me/557999491000?text=${encodeURIComponent(plan.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-3.5 font-bold text-sm uppercase tracking-wider rounded-sm transition-all duration-300 ${
                    plan.badge === "Mais Popular"
                      ? "bg-[#C8102E] text-white hover:bg-[#E63950] shadow-[0_0_20px_rgba(200,16,46,0.3)] hover:shadow-[0_0_30px_rgba(200,16,46,0.5)]"
                      : "border border-white/15 text-white hover:border-[#C8102E] hover:text-[#C8102E]"
                  }`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-700 text-xs mt-8"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          * Valores variam conforme o volume de documentos, número de funcionários e complexidade tributária.
          Todos os planos incluem consultoria de enquadramento sem custo.
        </motion.p>
      </div>
    </section>
  );
}
