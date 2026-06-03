import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 py-16 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#C8102E]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10">
                <Image src="/logo.png" alt="PERITUS" fill className="object-contain" />
              </div>
              <span
                style={{ fontFamily: "var(--font-playfair)" }}
                className="text-xl font-black tracking-[0.15em] text-white"
              >
                PERITUS
              </span>
            </div>
            <p
              className="text-gray-600 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Contabilidade de alto padrão para empresas que não podem errar.
              Aracaju, SE.
            </p>
          </div>

          {/* Links */}
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
                { label: "Escritório Virtual", href: "#virtual" },
                { label: "Depoimentos", href: "#depoimentos" },
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
                <span className="block">R. Terêncio Sampaio, 532 – Grageru</span>
                <span>Aracaju – SE</span>
              </li>
              <li>
                <a href="tel:+5579999491000" className="hover:text-[#C8102E] transition-colors">
                  (79) 99949-1000
                </a>
              </li>
              <li>
                <a href="tel:+5579991642000" className="hover:text-[#C8102E] transition-colors">
                  (79) 99164-2000
                </a>
              </li>
              <li>
                <a href="mailto:peritus@peritusac.com" className="hover:text-[#C8102E] transition-colors">
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
            {/* CRC badge */}
            <span className="text-xs text-gray-700 border border-white/10 px-2 py-1 rounded-sm">
              CRC/SE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
