import Image from "next/image";

const WA_HREF =
  "https://wa.me/557999491000?text=Olá! Vim pelo site e gostaria de uma consultoria gratuita com a PERITUS.";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 pt-16 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#C8102E]/30 to-transparent" aria-hidden />

      {/* CRC / Trust bar */}
      <div className="border-b border-white/5 mb-12 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#C8102E]/10 border border-[#C8102E]/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
                  CRC/SE
                </div>
                <div className="text-gray-600 text-xs">Registro Ativo</div>
              </div>
            </div>

            <div className="w-px h-8 bg-white/5 hidden md:block" aria-hidden />

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#C8102E]/10 border border-[#C8102E]/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
                  Conselho Federal de Contabilidade
                </div>
                <div className="text-gray-600 text-xs">Membro Ativo</div>
              </div>
            </div>

            <div className="w-px h-8 bg-white/5 hidden md:block" aria-hidden />

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#C8102E]/10 border border-[#C8102E]/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
                  Empresa Verificada
                </div>
                <div className="text-gray-600 text-xs">CNPJ Ativo e Regularizado</div>
              </div>
            </div>

            <div className="w-px h-8 bg-white/5 hidden md:block" aria-hidden />

            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#C8102E]/10 border border-[#C8102E]/30 rounded-sm text-[#C8102E] text-sm font-semibold hover:bg-[#C8102E] hover:text-white transition-all duration-300"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consultoria Gratuita
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-5">
              <div className="relative w-36 h-12">
                <Image
                  src="/logo.png"
                  alt="PERITUS Assessoria Contábil"
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
            </div>
            <p
              className="text-gray-600 text-sm leading-relaxed max-w-xs mb-5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Contabilidade de alto padrão para empresas que não podem errar.
              Planejamento tributário, escritório virtual e muito mais.
              Aracaju, SE.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-600" style={{ fontFamily: "var(--font-inter)" }}>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Atendimento disponível — resposta em até 24h
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-wider mb-5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Sobre", href: "#sobre" },
                { label: "Serviços", href: "#servicos" },
                { label: "Planos", href: "#planos" },
                { label: "Escritório Virtual", href: "#virtual" },
                { label: "Depoimentos", href: "#depoimentos" },
                { label: "FAQ", href: "#faq" },
                { label: "Contato", href: "#contato" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-gray-600 hover:text-[#C8102E] transition-colors text-sm"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-wider mb-5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-gray-600" style={{ fontFamily: "var(--font-inter)" }}>
              <li>
                <span className="block">R. Terêncio Sampaio, 532</span>
                <span>Grageru — Aracaju, SE</span>
              </li>
              <li>
                <a href="tel:+5579999491000" className="hover:text-[#C8102E] transition-colors block">
                  (79) 99949-1000
                </a>
                <a href="tel:+5579991642000" className="hover:text-[#C8102E] transition-colors block">
                  (79) 99164-2000
                </a>
              </li>
              <li>
                <a href="mailto:peritus@peritusac.com" className="hover:text-[#C8102E] transition-colors break-all">
                  peritus@peritusac.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-xs" style={{ fontFamily: "var(--font-inter)" }}>
            © {year} PERITUS Assessoria Contábil. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-[#C8102E] text-xs transition-colors" style={{ fontFamily: "var(--font-inter)" }}>
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-700 hover:text-[#C8102E] text-xs transition-colors" style={{ fontFamily: "var(--font-inter)" }}>
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
