"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contato" className="relative bg-[#0d0d0d] py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C8102E] opacity-[0.04] rounded-full blur-[100px]" />
      </div>
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#C8102E] to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="text-[#C8102E] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Entre em Contato
            </span>
            <h2
              style={{ fontFamily: "var(--font-playfair)" }}
              className="text-4xl md:text-5xl font-black text-white leading-tight mb-5"
            >
              O Próximo Passo
              <br />
              <span className="text-[#C8102E]">É Seu.</span>
            </h2>
            <div className="w-16 h-1 bg-[#C8102E] mb-8" />

            <p className="text-gray-400 mb-10 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
              Uma conversa de 30 minutos com nossos especialistas pode revelar
              oportunidades tributárias e riscos que você nem sabia que existia.{" "}
              <strong className="text-white">É gratuito. É sem compromisso.</strong>{" "}
              É o começo de uma parceria que vai transformar sua empresa.
            </p>

            {/* Contact items */}
            <div className="space-y-5">
              {/* Address */}
              <div className="flex gap-4 items-start p-5 bg-[#111] border border-white/5 rounded-sm hover:border-[#C8102E]/30 transition-colors group">
                <div className="w-10 h-10 rounded-sm bg-[#C8102E]/10 flex items-center justify-center text-[#C8102E] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "var(--font-inter)" }}>
                    Endereço
                  </div>
                  <div className="text-gray-500 text-sm">
                    R. Terêncio Sampaio, 532 – Grageru
                    <br />
                    Aracaju – SE
                  </div>
                </div>
              </div>

              {/* Phones */}
              <div className="flex gap-4 items-start p-5 bg-[#111] border border-white/5 rounded-sm hover:border-[#C8102E]/30 transition-colors group">
                <div className="w-10 h-10 rounded-sm bg-[#C8102E]/10 flex items-center justify-center text-[#C8102E] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-2" style={{ fontFamily: "var(--font-inter)" }}>
                    Telefones
                  </div>
                  <a
                    href="tel:+5579999491000"
                    className="block text-gray-400 hover:text-[#C8102E] transition-colors text-sm"
                  >
                    (79) 99949-1000
                  </a>
                  <a
                    href="tel:+5579991642000"
                    className="block text-gray-400 hover:text-[#C8102E] transition-colors text-sm mt-1"
                  >
                    (79) 99164-2000
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start p-5 bg-[#111] border border-white/5 rounded-sm hover:border-[#C8102E]/30 transition-colors group">
                <div className="w-10 h-10 rounded-sm bg-[#C8102E]/10 flex items-center justify-center text-[#C8102E] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "var(--font-inter)" }}>
                    E-mail
                  </div>
                  <a
                    href="mailto:peritus@peritusac.com"
                    className="text-gray-400 hover:text-[#C8102E] transition-colors text-sm"
                  >
                    peritus@peritusac.com
                  </a>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/557999491000?text=Olá! Vim pelo site e gostaria de uma consultoria gratuita com a PERITUS."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-5 bg-green-900/20 border border-green-600/30 rounded-sm hover:border-green-500/50 hover:bg-green-900/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-sm bg-green-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="text-green-400 font-bold text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                    WhatsApp — Atendimento Imediato
                  </div>
                  <div className="text-gray-500 text-xs mt-0.5">Clique para iniciar conversa</div>
                </div>
                <svg className="w-4 h-4 text-green-500 ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right — Foto + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex flex-col items-center gap-6"
          >
            {/* Foto com vignette */}
            <div className="relative w-full overflow-hidden rounded-sm">
              <Image
                src="/contato-foto.png"
                alt="PERITUS — Seu parceiro de negócios"
                width={960}
                height={1280}
                className="w-full h-auto block"
              />
              {/* Vignette cinematic */}
              <div className="absolute inset-0 pointer-events-none"
                style={{
                  background: `
                    linear-gradient(to right,  #0d0d0d 0%, transparent 15%, transparent 85%, #0d0d0d 100%),
                    linear-gradient(to bottom, #0d0d0d 0%, transparent 10%, transparent 82%, #0d0d0d 100%)
                  `,
                }}
              />
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/557999491000?text=Olá! Vim pelo site e gostaria de uma consultoria gratuita com a PERITUS."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full shimmer-btn flex items-center justify-center gap-3 py-5 text-white font-black uppercase tracking-widest text-sm rounded-sm shadow-[0_0_30px_rgba(200,16,46,0.4)] hover:shadow-[0_0_50px_rgba(200,16,46,0.7)] hover:scale-[1.02] transition-all duration-300"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Quero Minha Consultoria Gratuita
            </a>

            <p className="text-gray-700 text-xs text-center" style={{ fontFamily: "var(--font-inter)" }}>
              🔒 Sem compromisso. Sem taxa. 100% Confidencial.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
