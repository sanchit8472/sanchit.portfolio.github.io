import SectionHeader from './SectionHeader'

const interests = [
  {
    icon: '📡',
    name: 'RF & Antenna Design',
    desc: 'Designing compact, high-performance antennas for GPS, 5G, and wireless applications. Deep interest in antenna parameters: return loss, gain, radiation pattern, and broadband bandwidth optimization.',
    glowColor: 'rgba(246,173,85,0.15)',
    borderHover: 'rgba(246,173,85,0.35)',
  },
  {
    icon: '⚡',
    name: 'Embedded Systems',
    desc: 'Real-time sensor interfacing, IoT firmware development, and wireless cloud-connected monitoring systems using ESP32 and Arduino platforms.',
    glowColor: 'rgba(99,179,237,0.15)',
    borderHover: 'rgba(99,179,237,0.35)',
  },
  {
    icon: '🏭',
    name: 'Industrial Automation',
    desc: 'PLC programming, SCADA platforms, and process control in energy infrastructure. Industrial instrumentation, sensor-based monitoring, and integration of electronics with control systems.',
    glowColor: 'rgba(0,255,255,0.1)',
    borderHover: 'rgba(0,255,255,0.3)',
  },
  {
    icon: '💧',
    name: 'Hydropower Systems',
    desc: 'Hydro power generation processes, turbine-generator operations, governor control, and electro-mechanical systems in large-scale renewable energy infrastructure.',
    glowColor: 'rgba(154,205,50,0.12)',
    borderHover: 'rgba(154,205,50,0.3)',
  },
]

export default function Interests() {
  return (
    <section id="interests" className="px-6 md:px-14 py-24 max-w-6xl mx-auto relative z-[1]">
      <SectionHeader
        number="04"
        label="Interests"
        title="Areas of"
        highlight="Interest"
        subtitle="The domains that excite me and drive my learning beyond the classroom."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {interests.map((item) => (
          <div
            key={item.name}
            className="group relative overflow-hidden bg-gradient-to-br from-[#0d1421] to-[#0c1220] border border-[rgba(99,179,237,0.12)] rounded-2xl p-7 text-center transition-all duration-[350ms] hover:-translate-y-2 hover:scale-[1.03] cursor-default reveal"
            style={{ '--glow': item.glowColor, '--hover-border': item.borderHover }}
          >
            {/* Glow on hover (pseudo via inline radial) */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
              style={{ background: `radial-gradient(ellipse 80% 60% at 50% 110%, ${item.glowColor}, transparent 70%)` }}
            />
            <div
              className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[rgba(99,179,237,0.3)] transition-all duration-300 pointer-events-none"
              style={{ borderColor: undefined }}
            />

            <span className="text-4xl mb-4 block transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
              {item.icon}
            </span>
            <div className="text-[14px] font-bold text-white mb-2">{item.name}</div>
            <div className="text-[12px] text-[#718096] leading-[1.7]">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
