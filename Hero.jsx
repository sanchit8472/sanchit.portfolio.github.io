export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 md:px-14 pt-20 pb-12 relative overflow-hidden z-[1]"
    >
      {/* Grid background */}
      <div className="grid-bg" />

      {/* Orbs */}
      <div
        className="absolute rounded-full pointer-events-none z-0"
        style={{
          width: 600, height: 600,
          background: 'rgba(99,179,237,0.055)',
          filter: 'blur(100px)',
          top: -200, right: -100,
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none z-0"
        style={{
          width: 400, height: 400,
          background: 'rgba(246,173,85,0.045)',
          filter: 'blur(100px)',
          bottom: -100, left: -50,
        }}
      />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-center relative z-[1]">

        {/* Left — Copy */}
        <div>
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 bg-[rgba(99,179,237,0.08)] border border-[rgba(99,179,237,0.2)] rounded-full px-4 py-1.5 mb-7 font-mono text-[11px] text-[#90cdf4] tracking-[0.1em] animate-fadeUp">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--cyan)] blink-dot" />
            Electronics &amp; Communication Engineering
          </div>

          {/* Name */}
          <h1
            className="text-[clamp(48px,6vw,80px)] font-black leading-none tracking-tight text-white mb-2 animate-fadeUp delay-100"
          >
            Hello, I'm
            <br />
            <span className="gradient-gold">Sanchit Sharma</span>
          </h1>

          {/* Role */}
          <p className="text-[clamp(15px,2vw,20px)] font-light text-[#718096] mb-7 animate-fadeUp delay-200">
            RF Engineer · Embedded Developer · ECE @ NSUT Delhi
          </p>

          {/* Description */}
          <p className="text-[15px] text-[#718096] max-w-xl leading-[1.9] mb-11 border-l-2 border-[rgba(99,179,237,0.25)] pl-5 animate-fadeUp delay-200">
            ECE final-year undergraduate with hands-on experience in antenna design, embedded systems,
            IoT, and large-scale power plant operations. Interned at NSUT Delhi's RF Lab and JSW Energy's
            1,000 MW Karcham Wangtoo Hydroelectric Project, gaining depth in control engineering,
            PLC automation, and industrial electro-mechanical systems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3.5 mb-12 animate-fadeUp delay-300">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#f6ad55] text-[#04070d] font-bold text-sm rounded-lg relative overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(246,173,85,0.45)]"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              ▶ Projects
            </a>
            <a
              href="files/res3.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-[rgba(99,179,237,0.3)] text-[#90cdf4] text-sm rounded-lg bg-[rgba(99,179,237,0.05)] transition-all duration-200 hover:border-[#90cdf4] hover:bg-[rgba(99,179,237,0.12)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(99,179,237,0.2)]"
            >
              ⬇ Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-[rgba(99,179,237,0.25)] text-[#e2e8f0] text-sm rounded-lg transition-all duration-200 hover:border-[#f6ad55] hover:bg-[rgba(246,173,85,0.06)] hover:-translate-y-0.5"
            >
              ✉ Contact
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 animate-fadeUp delay-450">
            {[
              { num: '2', label: 'Projects' },
              { num: '2', label: 'Internships' },
              { num: '1 GW', label: 'Plant Exposure' },
            ].map(({ num, label }) => (
              <div key={label} className="border-l-2 border-[rgba(99,179,237,0.2)] pl-3.5">
                <div className="text-[28px] font-extrabold gradient-blue font-mono">{num}</div>
                <div className="text-[11px] text-[#4a5568] tracking-wider uppercase">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Profile Card */}
        <div className="bg-gradient-to-br from-[#0d1421] to-[#0c1220] border border-[rgba(99,179,237,0.12)] rounded-2xl p-9 relative overflow-hidden topline-border animate-fadeUp delay-200">

          {/* Card Header */}
          <div className="flex items-center gap-4 mb-7">
            <div className="w-16 h-16 rounded-full border-2 border-[rgba(246,173,85,0.4)] overflow-hidden flex items-center justify-center text-3xl bg-[#0d1421] flex-shrink-0">
              <img src="files/Sanchit.jpg" alt="Sanchit Sharma" className="w-full h-full object-cover" onError={e => { e.target.style.display='none'; e.target.parentNode.textContent='👨‍💻' }} />
            </div>
            <div>
              <div className="text-[18px] font-extrabold text-white leading-tight">Sanchit Sharma</div>
              <div className="font-mono text-[10px] text-[#90cdf4] tracking-[0.1em] mt-0.5">B.E. ECE · Final Year · NSUT Delhi</div>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 bg-[rgba(0,255,0,0.05)] border border-[rgba(0,255,0,0.15)] rounded-full px-3.5 py-1.5 mb-6 font-mono text-[10px] text-[#68d391] w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#68d391] blink-dot" />
            Open to Internships &amp; Research Roles
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['CST Studio Suite','ESP32','GPS Antenna','IoT Systems','Siemens PLC','SCADA','KiCad','Python'].map(t => (
              <span key={t} className="bg-[rgba(99,179,237,0.06)] border border-[rgba(99,179,237,0.15)] rounded px-3 py-1 font-mono text-[10px] text-[#90cdf4]">
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-2.5">
            {[
              { href: 'https://www.linkedin.com/in/sanchit-sharma-1ab69021a/', label: '🔗 LinkedIn', target: '_blank' },
              { href: 'mailto:sanchitsharma9654@gmail.com', label: '✉ Email' },
              { href: 'tel:+919654711484', label: '📞 Call' },
            ].map(({ href, label, target }) => (
              <a
                key={href}
                href={href}
                target={target}
                rel={target ? 'noopener noreferrer' : undefined}
                className="flex-1 flex items-center justify-center gap-1.5 p-2.5 bg-[rgba(255,255,255,0.03)] border border-[rgba(99,179,237,0.12)] rounded-lg no-underline text-[12px] text-[#718096] transition-all duration-200 hover:border-[#f6ad55] hover:text-[#f6ad55] hover:bg-[rgba(246,173,85,0.05)]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
