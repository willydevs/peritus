"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Carlos Eduardo Melo",
    role: "CEO – Distribuidora Melo & Filhos",
    avatar: "CM",
    image: "/pessoas/daniel-1.png",
    stars: 5,
    text: "Antes da PERITUS, eu achava que estava pagando impostos corretamente. Depois de 3 meses com eles, descobri que estava perdendo R$ 4.800 por mês em créditos tributários que nunca aproveitei. Hoje esse dinheiro financia minha expansão.",
  },
  {
    name: "Fernanda Souza",
    role: "Sócia – Clínica Souza & Almeida",
    avatar: "FS",
    image: "/pessoas/zelita-1.png",
    stars: 5,
    text: "Mudança de regime tributário com a PERITUS economizou 22% da nossa carga fiscal. Em 12 meses, isso se traduz em mais de R$ 60 mil no bolso. Contabilidade que paga o próprio honorário várias vezes.",
  },
  {
    name: "Ricardo Teles",
    role: "Fundador – Construtora Teles",
    avatar: "RT",
    image: "/pessoas/eu-1.png",
    stars: 5,
    text: "Já passei por 4 escritórios de contabilidade em Aracaju. A PERITUS é a única que realmente entende de negócio. Não ficam só emitindo guia — eles pensam junto com você no crescimento da empresa.",
  },
  {
    name: "Ana Paula Dantas",
    role: "Diretora – Escola Premium Kids",
    avatar: "AD",
    image: null,
    stars: 5,
    text: "O escritório virtual foi a melhor decisão que tomei ao abrir minha empresa. Endereço nobre, sem custo de aluguel, e toda a contabilidade resolvida pela PERITUS. Começar nunca foi tão simples.",
  },
  {
    name: "Marcelo Barbosa",
    role: "Empresário – Grupo MB Logística",
    avatar: "MB",
    image: null,
    stars: 5,
    text: "Estava com o CNPJ irregular e com medo de operação da Receita. Em 30 dias a PERITUS regularizou tudo, negociou parcelamento e ainda encontrou uma restituição que eu nem sabia que tinha direito. Profissionalismo em outro nível.",
  },
  {
    name: "Juliana Farias",
    role: "Proprietária – Studio JF Estética",
    avatar: "JF",
    image: null,
    stars: 5,
    text: "Atendimento rápido, linguagem clara e sempre disponível quando preciso. Finalmente entendo meu negócio financeiramente. A PERITUS me deu segurança para tomar decisões grandes sem medo.",
  },
];

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Testimonials() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 1 },
        "(min-width: 1024px)": { slidesToScroll: 1 },
      },
    },
    [autoplay.current]
  );

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="depoimentos" className="relative bg-[#0A0A0A] py-28 overflow-hidden">
      {/* Quote mark bg */}
      <div
        className="absolute left-0 top-0 text-[30rem] font-black text-[#C8102E]/3 leading-none select-none pointer-events-none"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        "
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={sectionRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span className="text-[#C8102E] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
            Depoimentos
          </span>
          <h2
            style={{ fontFamily: "var(--font-playfair)" }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            Quem Escolheu a PERITUS
            <br />
            <span className="text-[#C8102E]">Não Volta Atrás.</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto" style={{ fontFamily: "var(--font-inter)" }}>
            Resultados reais de empresários reais que decidiram parar de improvisar
            com a contabilidade.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <div className="embla" ref={emblaRef}>
            <div className="embla__container" style={{ display: "flex", gap: "1.5rem" }}>
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="embla__slide px-3 md:basis-1/2 lg:basis-1/3"
                  style={{ minWidth: 0 }}
                >
                  <div
                    className="h-full p-8 bg-[#111] border border-white/5 rounded-sm relative overflow-hidden group hover:border-[#C8102E]/30 transition-all duration-300"
                  >
                    {/* Top accent */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C8102E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Quote */}
                    <div className="text-5xl text-[#C8102E]/30 font-black leading-none mb-4 select-none" style={{ fontFamily: "var(--font-playfair)" }}>
                      "
                    </div>

                    {/* Stars */}
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: t.stars }).map((_, s) => (
                        <StarIcon key={s} />
                      ))}
                    </div>

                    {/* Text */}
                    <p
                      className="text-gray-400 text-sm leading-relaxed mb-6 flex-1"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      &ldquo;{t.text}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-[#C8102E] flex items-center justify-center">
                        {t.image ? (
                          <Image src={t.image} alt={t.name} width={40} height={40} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-white text-sm font-bold">{t.avatar}</span>
                        )}
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                          {t.name}
                        </div>
                        <div className="text-gray-600 text-xs">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#C8102E] hover:text-[#C8102E] transition-all duration-300 group"
              aria-label="Anterior"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <span className="text-gray-600 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
              Arraste ou use as setas
            </span>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#C8102E] hover:text-[#C8102E] transition-all duration-300 group"
              aria-label="Próximo"
            >
              <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
