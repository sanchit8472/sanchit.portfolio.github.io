import SectionHeader from './SectionHeader'

const education = [
  {
    period: '2022 → 2026',
    degree: 'B.E. in Electronics & Communication Engineering',
    school: 'Netaji Subhas University of Technology (NSUT), Delhi',
    note: 'Antenna Theory · Control Systems · Embedded Systems · Analog Circuits · Microprocessors · Communication Systems · DSP',
    score: 'CGPA —',
    scoreNote: 'to be updated',
  },
  {
    period: '2021 → 2023',
    degree: 'Class XII — Science (PCMB)',
    school: 'Air Force Golden Jubilee Institute, New Delhi',
    note: 'CBSE Board · Physics, Chemistry, Mathematics and Biology',
    score: '74.2%',
  },
  {
    period: '2019 → 2021',
    degree: 'Class X',
    school: 'Air Force Golden Jubilee Institute, New Delhi',
    note: 'CBSE Board',
    score: '84%',
  },
]

export default function Education() {
  return (
    <section id="education" className="px-6 md:px-14 py-24 max-w-6xl mx-auto relative z-[1]">
      <SectionHeader
        number="05"
        label="Education"
        title="Academic"
        highlight="Background"
        subtitle="Building depth in RF engineering, embedded systems, control engineering, and industrial automation at NSUT Delhi."
      />

      <div className="flex flex-col gap-4">
        {education.map((edu, i) => (
          <div
            key={i}
            className="group relative grid grid-cols-[90px_1fr_auto] gap-6 items-center bg-gradient-to-br from-[#0d1421] to-[#0c1220] border border-[rgba(99,179,237,0.12)] rounded-xl px-7 py-6 transition-all duration-300 hover:border-[rgba(99,179,237,0.25)] hover:translate-x-1.5 overflow-hidden reveal max-md:grid-cols-1 max-md:gap-2"
          >
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#63b3ed] to-[#f6ad55] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Year */}
            <div className="font-mono text-[11px] text-[#63b3ed] tracking-wider leading-relaxed max-md:text-left">
              {edu.period}
            </div>

            {/* Info */}
            <div>
              <div className="text-[16px] font-bold text-white mb-1">{edu.degree}</div>
              <div className="text-[13px] text-[#fbd38d] font-semibold mb-1.5">{edu.school}</div>
              <div className="text-[12px] text-[#718096]">{edu.note}</div>
            </div>

            {/* Score */}
            <div
              className="bg-[rgba(246,173,85,0.08)] border border-[rgba(246,173,85,0.2)] rounded-lg px-4 py-2.5 font-mono text-[13px] text-[#f6ad55] font-bold whitespace-nowrap text-center"
            >
              {edu.score}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
