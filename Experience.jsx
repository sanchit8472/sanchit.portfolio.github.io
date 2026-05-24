import SectionHeader from './SectionHeader'

const experiences = [
  {
    role: 'Industrial Trainee',
    roleSubtitle: 'Power Plant Operations & Automation',
    org: 'JSW Energy Ltd.',
    orgDetail: 'Karcham Wangtoo Hydroelectric Project, Himachal Pradesh',
    badge: '1,000 MW Hydro',
    period: 'May 2026 – July 2026',
    location: 'On-site · Power House, Karcham Wangtoo',
    highlights: [
      'Completed industrial training at the 1,000 MW Karcham Wangtoo Hydroelectric Project — one of India\'s largest run-of-river hydro installations — gaining comprehensive exposure to power plant operations and electro-mechanical systems.',
      'Studied and documented the working principles of major plant subsystems: Pelton/Kaplan turbines, synchronous generators, governor control systems, GIS switchyard, power transformers, cooling systems, HVAC, and auxiliary equipment.',
      'Acquired hands-on understanding of PLC-based automation using Siemens PLCs, SCADA platforms, HMI interfacing, alarm management, real-time monitoring, and control logic governing plant-wide operations.',
      'Observed and analyzed control room operations, protection relay coordination, switchyard switching procedures, and inter-system communication between electrical, mechanical, and automation departments.',
      'Developed working knowledge of the full hydro power generation cycle, industrial safety protocols, condition monitoring of critical rotating machinery, and data acquisition for predictive maintenance.',
    ],
    accentColor: '#f6ad55',
    accentBg: 'rgba(246,173,85,0.08)',
    accentBorder: 'rgba(246,173,85,0.25)',
    tags: ['PLC Automation', 'SCADA', 'HMI', 'Power Systems', 'Control Engineering', 'Hydropower'],
  },
  {
    role: 'Research Intern',
    roleSubtitle: 'Antenna Design & RF Simulation',
    org: 'Netaji Subhas University of Technology (NSUT)',
    orgDetail: 'RF Research Laboratory, Delhi',
    badge: 'RF Lab',
    period: 'June 2025 – August 2025',
    location: 'On-site · NSUT RF Lab, Delhi',
    highlights: [
      'Designed and optimized compact Dielectric Resonator Antennas (DRAs) for GPS L2, GPS L5, and 5.8 GHz Wi-Fi bands using CST Studio Suite, focusing on miniaturization and broadband performance.',
      'Iteratively refined resonator geometry, feed network structures, and substrate material parameters to achieve optimal impedance matching and maximize radiation efficiency across target frequency bands.',
      'Conducted comprehensive full-wave EM simulations, extracting S-parameters, realized gain, −10 dB bandwidth, VSWR, and far-field radiation patterns for each design iteration.',
      'Participated in Vector Network Analyzer (VNA) measurements during physical antenna prototype testing, correlating simulation results with real-world RF characterization data.',
    ],
    accentColor: '#63b3ed',
    accentBg: 'rgba(99,179,237,0.08)',
    accentBorder: 'rgba(99,179,237,0.25)',
    tags: ['CST Studio Suite', 'DRA', 'GPS L2/L5', 'EM Simulation', 'VNA', 'RF Design'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-14 py-24 max-w-6xl mx-auto relative z-[1]">
      <SectionHeader
        number="03"
        label="Experience"
        title="Research &"
        highlight="Internships"
        subtitle="Hands-on industrial training and research internships spanning RF engineering and large-scale power plant automation."
      />

      {/* Timeline */}
      <div className="relative pl-9 timeline-line">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="relative mb-12 last:mb-0 reveal timeline-dot"
          >
            {/* Card */}
            <div
              className="bg-gradient-to-br from-[#0d1421] to-[#0c1220] border rounded-2xl p-7 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:-translate-y-0.5"
              style={{ borderColor: exp.accentBorder }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${exp.accentColor}, transparent)` }}
              />

              {/* Role */}
              <div className="mb-1">
                <span className="text-[19px] font-extrabold text-white leading-tight">{exp.role}</span>
                <span className="ml-2 text-[14px] font-normal text-[#718096]">— {exp.roleSubtitle}</span>
              </div>

              {/* Org */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-[15px] font-semibold" style={{ color: exp.accentColor }}>
                  {exp.org}
                </span>
                <span className="text-[13px] text-[#718096]">· {exp.orgDetail}</span>
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[9px] border tracking-widest"
                  style={{ background: exp.accentBg, borderColor: exp.accentBorder, color: exp.accentColor }}
                >
                  <span className="w-1 h-1 rounded-full blink-dot" style={{ background: exp.accentColor }} />
                  {exp.badge}
                </span>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-5 font-mono text-[11px] text-[#4a5568]">
                <span
                  className="px-3 py-0.5 rounded-full border"
                  style={{ background: exp.accentBg, borderColor: exp.accentBorder, color: exp.accentColor }}
                >
                  {exp.period}
                </span>
                <span>{exp.location}</span>
              </div>

              {/* Highlights */}
              <ul className="flex flex-col gap-2.5 mb-5">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-[14px] text-[#718096] leading-relaxed">
                    <span className="flex-shrink-0 mt-[3px]" style={{ color: '#63b3ed' }}>▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-2.5 py-1 rounded border"
                    style={{ background: exp.accentBg, borderColor: exp.accentBorder, color: exp.accentColor }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
