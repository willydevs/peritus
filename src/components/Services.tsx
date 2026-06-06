"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const WA_BASE = "https://wa.me/557999491000?text=";

interface Service {
  icon: React.ReactNode;
  title: string;
  desc: string;
  tags: string[];
  highlight?: boolean;
  detail: string;
  forWho: string;
  result: string;
  waMsg: string;
}

const services: Service[] = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Contabilidade Empresarial",
    desc: "Escrituração contábil impecável, balanços e demonstrativos que contam a história real do seu negócio — e apontam o caminho.",
    tags: ["Escrituração Fiscal", "DRE e Balanço", "Conciliação Bancária"],
    detail:
      "Gerenciamos toda a escrituração contábil com precisão e transparência. Relatórios mensais claros, em linguagem de empresário — sem jargão técnico desnecessário. Você recebe demonstrações financeiras confiáveis que servem para tomada de decisão, crédito bancário e auditoria.",
    forWho:
      "Empresas de todos os portes que precisam de contabilidade regular, precisa e sem surpresas.",
    result:
      "Demonstrações financeiras auditáveis, compliance fiscal garantido e visibilidade total sobre a saúde do negócio.",
    waMsg: "Olá! Vim pelo site e tenho interesse em Contabilidade Empresarial. Gostaria de uma consultoria gratuita.",
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
    detail:
      "Analisamos o regime tributário mais eficiente para o seu perfil, identificamos créditos fiscais não aproveitados e estruturamos sua empresa para pagar o mínimo legal permitido. A maioria dos empresários paga de 10% a 40% a mais do que deveria, simplesmente por estar no regime errado.",
    forWho:
      "Empresas no Simples Nacional, Lucro Presumido ou Lucro Real que querem maximizar a eficiência fiscal e aumentar a margem de lucro.",
    result:
      "Redução de 10% a 40% na carga tributária dependendo do setor. Resultados mensuráveis já no primeiro trimestre.",
    waMsg: "Olá! Vim pelo site e tenho interesse em Planejamento Tributário. Gostaria de uma consultoria gratuita.",
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
    detail:
      "Gerenciamos toda a folha de pagamento, admissões, rescisões, férias, 13º salário, FGTS e todas as obrigações do eSocial, REINF e CAGED. Processamento no prazo, sem erros, com total conformidade com a legislação trabalhista vigente.",
    forWho:
      "Empresas com colaboradores CLT que querem zero risco trabalhista e folha sempre no prazo.",
    result:
      "Folha processada sem erros, sem multas trabalhistas e sua equipe de RH livre para focar no que realmente importa.",
    waMsg: "Olá! Vim pelo site e tenho interesse em Departamento Pessoal. Gostaria de uma consultoria gratuita.",
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
    detail:
      "Do registro do nome empresarial ao CNPJ ativo: cuidamos de toda a documentação, alvarás, inscrições estadual e municipal, contratos sociais e definição do enquadramento tributário ideal para o seu negócio desde o primeiro dia.",
    forWho:
      "Empreendedores que estão abrindo sua primeira empresa ou expandindo com uma nova razão social.",
    result:
      "CNPJ ativo em tempo recorde, enquadramento tributário correto desde o início e todos os alvarás regularizados.",
    waMsg: "Olá! Vim pelo site e tenho interesse em Abertura de Empresa. Gostaria de uma consultoria gratuita.",
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
    detail:
      "Identificamos e resolvemos pendências com a Receita Federal, SEFAZ, Prefeitura e outros órgãos. Negociamos parcelamentos, obtemos certidões negativas, reversão de autuações e blindamos sua empresa para nunca mais ter pendências fiscais.",
    forWho:
      "Empresas com dívidas fiscais, certidões negativas pendentes ou em situação irregular que precisam se regularizar urgentemente.",
    result:
      "Empresa regularizada, certidões emitidas e um plano de conformidade para nunca mais ter pendências com o Fisco.",
    waMsg: "Olá! Vim pelo site e tenho interesse em Regularização Fiscal. Gostaria de uma consultoria gratuita.",
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
    detail:
      "Análise profunda dos indicadores financeiros da sua empresa, fluxo de caixa projetado, diagnóstico contábil completo e recomendações estratégicas baseadas em dados reais — não em suposições.",
    forWho:
      "Empresários que querem tomar decisões baseadas em dados concretos e não em feeling.",
    result:
      "Visibilidade total sobre a saúde financeira do negócio, KPIs relevantes mapeados e um plano de ação concreto.",
    waMsg: "Olá! Vim pelo site e tenho interesse em Consultoria Contábil. Gostaria de uma consultoria gratuita.",
  },
];

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  return (
    <div
      className="modal-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-enter relative w-full max-w-xl bg-[#111] border border-[#C8102E]/30 rounded-sm overflow-hidden">
        {/* Top bar */}
        <div className="h-1 bg-gradient-to-r from-[#C8102E] to-[#E63950]" />

        <div className="p-8">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-white border border-white/10 hover:border-white/30 rounded-full transition-colors"
            aria-label="Fechar"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Icon + title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-sm bg-[#C8102E] flex items-center justify-center text-white flex-shrink-0">
              {service.icon}
            </div>
            <h2
              id="modal-title"
              className="text-white font-black text-2xl leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {service.title}
            </h2>
          </div>

          {/* Description */}
          <p
            className="text-gray-400 text-sm leading-relaxed mb-6"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {service.detail}
          </p>

          {/* For who */}
          <div className="mb-4 p-4 bg-[#0d0d0d] border border-white/5 rounded-sm">
            <div className="text-[#C8102E] text-xs font-bold uppercase tracking-wider mb-1">
              Para quem é indicado
            </div>
            <p className="text-gray-400 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
              {service.forWho}
            </p>
          </div>

          {/* Result */}
          <div className="mb-8 p-4 bg-[#C8102E]/10 border border-[#C8102E]/20 rounded-sm">
            <div className="text-[#C8102E] text-xs font-bold uppercase tracking-wider mb-1">
              Resultado esperado
            </div>
            <p className="text-gray-300 text-sm font-medium" style={{ fontFamily: "var(--font-inter)" }}>
              {service.result}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href={`${WA_BASE}${encodeURIComponent(service.waMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 py-4 bg-[#C8102E] text-white font-black uppercase tracking-widest text-sm rounded-sm hover:bg-[#E63950] transition-colors shadow-[0_0_20px_rgba(200,16,46,0.3)]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Quero Saber Mais sobre {service.title}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeModal, setActiveModal] = useState<Service | null>(null);

  return (
    <>
      <section
        id="servicos"
        className="relative bg-[#0d0d0d] py-28 overflow-hidden"
        aria-labelledby="services-title"
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, #C8102E 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden
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
              id="services-title"
              style={{ fontFamily: "var(--font-playfair)" }}
              className="text-4xl md:text-5xl font-black text-white mb-5"
            >
              Arsenal Completo Para
              <br />
              <span className="text-[#C8102E]">Sua Empresa Vencer</span>
            </h2>
            <p
              className="text-gray-500 max-w-xl mx-auto"
              style={{ fontFamily: "var(--font-inter)" }}
            >
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
                className={`relative group p-8 rounded-sm border transition-all duration-300 flex flex-col ${
                  s.highlight
                    ? "bg-[#C8102E]/10 border-[#C8102E]/50 hover:border-[#C8102E] glow-pulse"
                    : "bg-[#111] border-white/5 hover:border-[#C8102E]/40"
                }`}
              >
                {s.highlight && (
                  <div className="absolute -top-3 left-6 bg-[#C8102E] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm animate-pulse">
                    ⭐ Mais Procurado
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-[#C8102E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm" aria-hidden />

                <div className="relative flex-1">
                  <div
                    className={`w-14 h-14 rounded-sm flex items-center justify-center mb-6 ${
                      s.highlight ? "bg-[#C8102E] text-white" : "bg-[#C8102E]/10 text-[#C8102E]"
                    }`}
                    aria-hidden
                  >
                    {s.icon}
                  </div>

                  <h3
                    style={{ fontFamily: "var(--font-playfair)" }}
                    className="text-white font-bold text-xl mb-3"
                  >
                    {s.title}
                  </h3>

                  <p
                    className="text-gray-500 text-sm leading-relaxed mb-5"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {s.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
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

                {/* Saiba Mais CTA */}
                <button
                  onClick={() => setActiveModal(s)}
                  className={`relative w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold uppercase tracking-wider rounded-sm border transition-all duration-300 ${
                    s.highlight
                      ? "border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white"
                      : "border-white/10 text-gray-400 hover:border-[#C8102E] hover:text-[#C8102E]"
                  }`}
                  aria-label={`Saiba mais sobre ${s.title}`}
                >
                  Saiba Mais
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {activeModal && (
          <ServiceModal service={activeModal} onClose={() => setActiveModal(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
