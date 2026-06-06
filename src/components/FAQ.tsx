"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Quanto custa a contabilidade na PERITUS?",
    a: "O valor varia conforme o porte da empresa, regime tributário e serviços necessários. Trabalhamos com planos a partir de R$ 197/mês para MEI e microempresas. Oferecemos uma consultoria gratuita para entender seu perfil e apresentar uma proposta personalizada — sem surpresas e sem letras miúdas.",
  },
  {
    q: "Posso trocar de contabilidade sem complicações?",
    a: "Sim, e é mais simples do que parece. Cuidamos de todo o processo de transição: comunicação ao contador anterior, captação dos documentos, migração de sistemas e continuidade das obrigações fiscais sem interrupção. Você não precisa se preocupar com nada — nós gerenciamos cada etapa.",
  },
  {
    q: "O escritório virtual é aceito pela Receita Federal?",
    a: "Sim. Nosso endereço em Grageru é aceito para abertura e manutenção de CNPJ perante a Receita Federal, SEFAZ/SE e Prefeitura de Aracaju. É um endereço comercial nobre, 100% regularizado, que transmite credibilidade para seus clientes e parceiros.",
  },
  {
    q: "Em quanto tempo consigo abrir minha empresa?",
    a: "Dependendo do tipo de empresa e atividade, o processo leva de 3 a 15 dias úteis. MEIs e empresas no Simples Nacional costumam ser mais rápidas. Já cuidamos de todo o trâmite: escolha da razão social, CNPJ, inscrição estadual e municipal, alvarás e enquadramento tributário ideal desde o início.",
  },
  {
    q: "Como funciona o planejamento tributário?",
    a: "Analisamos o histórico fiscal da sua empresa, o regime atual (Simples, Lucro Presumido ou Real) e identificamos oportunidades de economia que a legislação permite. Muitos empresários pagam 10% a 40% a mais do que deveriam simplesmente por estarem no regime errado. Após a análise, apresentamos um relatório com o potencial de economia e implementamos as mudanças estratégicas.",
  },
  {
    q: "Vocês atendem empresas de outros estados?",
    a: "Sim. Atendemos clientes em todo o Brasil de forma 100% digital. Documentos são enviados eletronicamente, reuniões são feitas por videoconferência e toda a comunicação flui por canais ágeis. Empresas de São Paulo, Rio de Janeiro, Bahia e outras regiões já fazem parte do nosso portfólio.",
  },
  {
    q: "O que acontece se minha empresa tiver pendências fiscais?",
    a: "Regularizamos. Identificamos todas as pendências, negociamos parcelamentos com a Receita Federal e demais órgãos, obtemos certidões negativas e blindamos sua empresa para o futuro. Nosso serviço de regularização fiscal já resolveu situações de CNPJ irregular em menos de 30 dias.",
  },
  {
    q: "Como é feito o atendimento com a PERITUS?",
    a: "Atendimento direto com especialistas — sem filtros, sem atendentes, sem burocracia. Respondemos em até 24 horas em dias úteis. Utilizamos WhatsApp, e-mail e reuniões presenciais ou por videoconferência. Cada cliente tem um especialista dedicado que conhece o negócio em profundidade.",
  },
];

function AccordionItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border rounded-sm transition-all duration-300 ${
        open ? "border-[#C8102E]/40 bg-[#C8102E]/5" : "border-white/5 bg-[#111]"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left group"
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
      >
        <span
          className={`font-semibold text-base leading-snug transition-colors ${
            open ? "text-white" : "text-gray-300 group-hover:text-white"
          }`}
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {faq.q}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
            open
              ? "border-[#C8102E] bg-[#C8102E] text-white rotate-45"
              : "border-white/20 text-gray-400 group-hover:border-[#C8102E] group-hover:text-[#C8102E]"
          }`}
          aria-hidden
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p
              className="px-6 pb-6 text-gray-400 text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="faq"
      className="relative bg-[#0A0A0A] py-28 overflow-hidden"
      aria-labelledby="faq-title"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#C8102E] opacity-[0.03] rounded-full blur-[100px] -translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#C8102E] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
            Dúvidas Frequentes
          </span>
          <h2
            id="faq-title"
            style={{ fontFamily: "var(--font-playfair)" }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            Tudo Que Você Quer Saber
            <br />
            <span className="text-[#C8102E]">Antes de Decidir.</span>
          </h2>
          <p
            className="text-gray-500 max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Respostas diretas para as perguntas que todo empresário faz antes de
            escolher um escritório contábil.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <AccordionItem key={i} faq={faq} index={i} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p
            className="text-gray-500 text-sm mb-5"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Não encontrou a resposta que precisava?
          </p>
          <a
            href="https://wa.me/557999491000?text=Olá! Vim pelo site e tenho uma dúvida sobre os serviços da PERITUS."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-[#C8102E]/40 text-[#C8102E] font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-[#C8102E] hover:text-white transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar com Especialista
          </a>
        </motion.div>
      </div>
    </section>
  );
}
