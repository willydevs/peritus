"use client";

const items = [
  "⚠️ Sua empresa está no radar do Fisco?",
  "🦁 A PERITUS caça oportunidades fiscais para você",
  "📊 Planejamento tributário que protege e multiplica",
  "🏢 Escritório Virtual Disponível em Aracaju",
  "⚖️ Conformidade total. Risco zero. Resultado máximo.",
  "💰 Reduza legalmente sua carga tributária",
];

export default function AlertBar() {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden bg-[#C8102E] py-3 border-y border-[#FF4D6D]/30">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 mx-8 text-sm font-semibold tracking-wide text-white"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {item}
            <span className="mx-2 opacity-50">|</span>
          </span>
        ))}
      </div>
    </div>
  );
}
