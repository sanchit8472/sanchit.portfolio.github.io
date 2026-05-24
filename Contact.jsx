import SectionHeader from './SectionHeader'

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-14 py-24 max-w-6xl mx-auto relative z-[1]">
      <div className="relative bg-gradient-to-br from-[#080d16] to-[#0d1421] border border-[rgba(99,179,237,0.12)] rounded-3xl px-8 md:px-16 py-20 overflow-hidden text-center topline-border reveal">

        {/* Background orbs */}
        <div className="absolute bottom-[-60px] right-[-60px] w-60 h-60 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(246,173,85,0.08), transparent 70%)' }} />
        <div className="absolute top-[-60px] left-[-60px] w-52 h-52 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(99,179,237,0.07), transparent 70%)' }} />

        {/* Tag */}
        <div className="inline-flex items-center gap-2 bg-[rgba(99,179,237,0.07)] border border-[rgba(99,179,237,0.18)] rounded-full px-4 py-1.5 mb-6 font-mono text-[10px] text-[#90cdf4] tracking-[0.12em] uppercase">
          📬 Available for Opportunities
        </div>

        {/* Heading */}
        <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-tight text-white mb-3.5">
          Let's <em className="not-italic gradient-gold">Connect</em>
        </h2>
        <p className="text-[15px] text-[#718096] mb-9 max-w-md mx-auto leading-[1.8]">
          Open to research collaborations, internships, and conversations about industrial electronics,
          RF engineering, and embedded systems.
        </p>

        {/* Email block */}
        <a
          href="mailto:sanchitsharma9654@gmail.com"
          className="inline-block font-mono text-[clamp(12px,2vw,17px)] text-[#f6ad55] font-bold no-underline mb-10 px-7 py-4 bg-[rgba(246,173,85,0.06)] border border-[rgba(246,173,85,0.2)] rounded-xl transition-all duration-200 hover:bg-[rgba(246,173,85,0.12)] hover:border-[rgba(246,173,85,0.4)] break-all"
        >
          sanchitsharma9654@gmail.com
        </a>

        {/* Contact links */}
        <div className="flex justify-center flex-wrap gap-3">
          {[
            { href: 'https://www.linkedin.com/in/sanchit-sharma-1ab69021a/', label: '🔗 LinkedIn', target: '_blank' },
            { href: 'mailto:sanchitsharma9654@gmail.com', label: '✉ Email Me' },
            { href: 'tel:+919654711484', label: '📞 +91 96547 11484' },
            { href: 'files/res3.pdf', label: '⬇ Resume PDF', download: true },
          ].map(({ href, label, target, download }) => (
            <a
              key={href}
              href={href}
              target={target}
              rel={target ? 'noopener noreferrer' : undefined}
              download={download ? true : undefined}
              className="inline-flex items-center gap-2 px-5 py-3 border border-[rgba(99,179,237,0.12)] rounded-lg no-underline text-[13px] text-[#e2e8f0] font-medium transition-all duration-200 hover:border-[#f6ad55] hover:text-[#f6ad55] hover:bg-[rgba(246,173,85,0.05)] hover:-translate-y-0.5"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
