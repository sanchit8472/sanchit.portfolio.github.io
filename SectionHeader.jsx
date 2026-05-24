export default function SectionHeader({ number, label, title, highlight, subtitle }) {
  return (
    <>
      <div className="reveal inline-flex items-center gap-2 font-mono text-[11px] text-[#63b3ed] tracking-[0.15em] uppercase mb-3.5">
        <span className="block w-6 h-px bg-[#63b3ed]" />
        {number}. {label}
      </div>
      <h2 className="reveal text-[clamp(32px,4vw,52px)] font-extrabold tracking-tight leading-[1.05] mb-4 text-white">
        {title} <em className="not-italic gradient-gold">{highlight}</em>
      </h2>
      {subtitle && (
        <p className="reveal text-[15px] text-[#718096] mb-14 max-w-lg leading-[1.8]">{subtitle}</p>
      )}
    </>
  )
}
