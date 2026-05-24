import SectionHeader from './SectionHeader'

const projects = [
  {
    id: 'dra',
    badge: 'RF · Antenna',
    badgeEmoji: '📡',
    icon: '📡',
    title: 'Compact GPS L2 Dielectric Resonator Antenna',
    description:
      'Designed a rectangular microstrip-fed DRA for GPS L2 (1.2276 GHz) using CST Studio Suite with alumina ceramic (εr = 35, 32×32×18 mm). Achieved −23 dB return loss, VSWR 1.44, 55.6 Ω impedance, and 4.8 dBi gain.',
    tags: ['CST Studio Suite', 'GPS L2', 'DRA', 'VSWR', 'RF Design'],
    reportHref: 'files/dra-report.pdf',
    color: 'rgba(246,173,85,0.07)',
    borderColor: 'rgba(246,173,85,0.15)',
    tagColor: '#fbd38d',
    metrics: [
      { label: 'Return Loss', value: '−23 dB' },
      { label: 'VSWR', value: '1.44' },
      { label: 'Gain', value: '4.8 dBi' },
      { label: 'Impedance', value: '55.6 Ω' },
    ],
  },
  {
    id: 'iot',
    badge: 'IoT · Health',
    badgeEmoji: '❤️',
    icon: '❤️',
    title: 'ESP32-Based IoT Health Monitoring System',
    description:
      'Real-time physiological monitoring system built on ESP32. DS18B20 sensor for body temperature and MAX30100 for heart rate and SpO₂ monitoring, with Blynk IoT cloud dashboard for remote live tracking and threshold alerts.',
    tags: ['ESP32', 'DS18B20', 'MAX30100', 'Blynk IoT', 'C++'],
    reportHref: 'files/12.pdf',
    color: 'rgba(99,179,237,0.07)',
    borderColor: 'rgba(99,179,237,0.15)',
    tagColor: '#90cdf4',
    metrics: [
      { label: 'Sensors', value: '2' },
      { label: 'Cloud', value: 'Blynk' },
      { label: 'MCU', value: 'ESP32' },
      { label: 'Protocol', value: 'Wi-Fi' },
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-14 py-24 max-w-6xl mx-auto relative z-[1]">
      <SectionHeader
        number="01"
        label="Projects"
        title="Things I've"
        highlight="Built"
        subtitle="Engineering projects spanning RF antenna design and embedded IoT systems."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="group bg-gradient-to-br from-[#0d1421] to-[#0c1220] border border-[rgba(99,179,237,0.12)] rounded-[18px] overflow-hidden flex flex-col transition-all duration-300 hover:border-[rgba(246,173,85,0.35)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.6),0_0_60px_rgba(246,173,85,0.07)] reveal"
          >
            {/* Media placeholder / header */}
            <div className="relative h-44 flex items-center justify-center bg-[#04070d] overflow-hidden">
              {/* Background grid */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `linear-gradient(rgba(99,179,237,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,0.06) 1px, transparent 1px)`,
                  backgroundSize: '30px 30px',
                }}
              />
              <span className="text-6xl opacity-20 relative z-10 group-hover:opacity-30 transition-opacity duration-300">
                {proj.icon}
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0d1421] to-transparent" />

              {/* Badge */}
              <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 bg-[rgba(4,7,13,0.88)] backdrop-blur-md border border-[rgba(246,173,85,0.3)] rounded-full px-3 py-1 font-mono text-[9px] text-[#f6ad55] tracking-widest">
                <span className="w-1 h-1 rounded-full bg-[#f6ad55]" />
                {proj.badge}
              </div>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-[17px] font-extrabold text-white mb-2.5 leading-snug">
                {proj.title}
              </h3>
              <p className="text-[13px] text-[#718096] leading-[1.8] mb-4 flex-1">
                {proj.description}
              </p>

              {/* Metrics row */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                {proj.metrics.map(({ label, value }) => (
                  <div
                    key={label}
                    className="text-center bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-lg py-2"
                  >
                    <div className="font-mono text-[11px] font-bold" style={{ color: proj.tagColor }}>{value}</div>
                    <div className="font-mono text-[9px] text-[#4a5568] mt-0.5">{label}</div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {proj.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded px-2.5 py-1 font-mono text-[10px] border"
                    style={{
                      background: proj.color,
                      borderColor: proj.borderColor,
                      color: proj.tagColor,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-auto">
                <a
                  href={proj.reportHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md font-mono text-[10px] tracking-wider border border-[rgba(246,173,85,0.3)] text-[#f6ad55] bg-[rgba(246,173,85,0.06)] transition-all duration-200 hover:bg-[rgba(246,173,85,0.12)] hover:border-[#f6ad55] cursor-pointer no-underline"
                >
                  📖 Project Report
                </a>
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md font-mono text-[10px] tracking-wider border border-[rgba(99,179,237,0.12)] text-[#4a5568] opacity-40 cursor-default">
                  No Public Repo
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
