"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const officeImages = [
  { src: "/banner1.jpg",       alt: "PERITUS Escritório Virtual" },
  { src: "/banner2.jpg",       alt: "PERITUS Escritório Virtual" },
  { src: "/banner3.jpg",       alt: "PERITUS Escritório Virtual" },
  { src: "/banner4.jpg",       alt: "PERITUS Escritório Virtual" },
  { src: "/fachada.png",       alt: "Fachada PERITUS Escritório Virtual" },
  { src: "/sala-reuniao.webp", alt: "Sala de Reuniões PERITUS" },
];

const perks = [
  { icon: "📍", title: "Endereço Comercial Nobre", desc: "R. Terêncio Sampaio, 532 – Grageru, Aracaju. Um endereço que transmite credibilidade instantânea." },
  { icon: "📞", title: "Linha Telefônica Exclusiva", desc: "Receba e faça ligações com número comercial registrado em seu nome empresarial." },
  { icon: "📬", title: "Gerenciamento de Correspondências", desc: "Toda correspondência recebida é digitalizada e enviada a você em tempo real." },
  { icon: "🏢", title: "Salas de Reunião", desc: "Acesso a salas de reunião profissionais quando precisar receber clientes ou parceiros." },
  { icon: "⚡", title: "Ativação Imediata", desc: "Seu escritório virtual ativo em menos de 24 horas. Comece a operar hoje." },
  { icon: "💼", title: "CNPJ Aceito", desc: "Endereço aceito para abertura e manutenção de CNPJ em todas as esferas fiscais." },
];

function OfficeCarousel() {
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative mb-6 overflow-hidden rounded-sm"
      style={{ width: "130%", marginLeft: "-15%" }}
    >
      {/* Slides */}
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {officeImages.map((img) => (
            <div key={img.src} className="min-w-0" style={{ flex: "0 0 100%" }}>
              <Image
                src={img.src}
                alt={img.alt}
                width={1280}
                height={853}
                className="w-full h-auto block"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Vignette laterais */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to right, #111 0%, transparent 12%, transparent 88%, #111 100%)",
        }}
      />

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {officeImages.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              selected === i ? "bg-[#C8102E] w-5" : "bg-white/30"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function VirtualOffice() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="virtual" className="relative bg-[#0A0A0A] py-28 overflow-hidden">
      {/* Red vertical strip */}
      <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#C8102E] to-transparent opacity-30" />

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#C8102E] opacity-[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Building illustration */}
            <div className="relative bg-[#111] border border-white/5 rounded-sm p-8 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C8102E] to-transparent" />

              <OfficeCarousel />

              {/* Map pin visual */}
              <div className="flex items-start gap-4 mb-8 p-5 bg-[#C8102E]/10 border border-[#C8102E]/20 rounded-sm">
                <div className="text-3xl">📍</div>
                <div>
                  <div className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-playfair)" }}>
                    Escritório PERITUS
                  </div>
                  <div className="text-gray-400 text-sm mt-1" style={{ fontFamily: "var(--font-inter)" }}>
                    R. Terêncio Sampaio, 532 – Grageru
                    <br />
                    Aracaju – SE
                  </div>
                </div>
              </div>

              {/* Fake map lines */}
              <div className="space-y-3 opacity-30 mb-8">
                {[100, 60, 80, 45, 90, 35].map((w, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <div className="w-3 h-px bg-[#C8102E]" />
                    <div className={`h-px bg-white/40`} style={{ width: `${w}%` }} />
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
                {[
                  { n: "24h", l: "Ativação" },
                  { n: "100%", l: "Legal" },
                  { n: "₢ 0", l: "Infraestrutura" },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <div className="text-2xl font-black text-[#C8102E]" style={{ fontFamily: "var(--font-playfair)" }}>{s.n}</div>
                    <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{s.l}</div>
                  </div>
                ))}
              </div>

              {/* Shimmer overlay */}
              <div className="absolute inset-0 shimmer pointer-events-none opacity-50" />
            </div>
          </motion.div>

          {/* Content side */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#C8102E] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                Escritório Virtual
              </span>
              <h2
                style={{ fontFamily: "var(--font-playfair)" }}
                className="text-4xl md:text-5xl font-black text-white leading-tight mb-4"
              >
                Presença de
                <br />
                <span className="text-[#C8102E]">Gigante.</span>
                <br />
                Custo de
                <span className="text-[#C8102E]"> Inteligente.</span>
              </h2>
              <div className="w-16 h-1 bg-[#C8102E] mb-6" />
              <p
                className="text-gray-400 leading-relaxed mb-10"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Ter um endereço comercial em Grageru — o bairro mais valorizado de
                Aracaju — não precisa mais custar uma fortuna. Com o escritório virtual
                da PERITUS, sua empresa projeta a imagem que merece, sem as despesas
                fixas de uma sede física.
              </p>
            </motion.div>

            {/* Perks */}
            <div className="grid grid-cols-1 gap-4">
              {perks.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * i + 0.2 }}
                  className="flex gap-4 p-4 bg-[#111] border border-white/5 rounded-sm hover:border-[#C8102E]/30 transition-colors group"
                >
                  <span className="text-2xl flex-shrink-0">{p.icon}</span>
                  <div>
                    <div className="text-white font-semibold text-sm group-hover:text-[#C8102E] transition-colors" style={{ fontFamily: "var(--font-inter)" }}>
                      {p.title}
                    </div>
                    <div className="text-gray-600 text-xs mt-1 leading-relaxed">{p.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-8"
            >
              <a
                href="#contato"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0A0A0A] font-bold uppercase tracking-wider text-sm rounded-sm hover:bg-[#C8102E] hover:text-white transition-all duration-300"
              >
                Quero Meu Escritório Virtual
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
