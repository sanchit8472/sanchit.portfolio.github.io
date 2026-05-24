import SectionHeader from './SectionHeader'

// Add your leadership / extracurricular roles here
const leadership = [
  // {
  //   role: 'Role / Position',
  //   org: 'Organization / Club',
  //   period: 'Month Year – Month Year',
  //   points: [
  //     'Describe what you did and the impact.',
  //     'Another key responsibility or achievement.',
  //   ],
  //   icon: '👥',
  // },
]

export default function Leadership() {
  return (
    <section id="leadership" className="px-6 md:px-14 py-24 max-w-6xl mx-auto relative z-[1]">
      <SectionHeader
        number="07"
        label="Leadership"
        title="Roles &"
        highlight="Activities"
        subtitle="Extra-curricular responsibilities, club positions, and community involvement."
      />

      {leadership.length === 0 ? (
        <div className="border border-dashed border-[rgba(99,179,237,0.2)] rounded-2xl p-12 text-center reveal">
          <div className="text-5xl mb-4 opacity-30">👥</div>
          <p className="font-mono text-[12px] text-[#4a5568] tracking-widest">
            Leadership entries coming soon — add yours in{' '}
            <code className="bg-[rgba(99,179,237,0.08)] px-1.5 py-0.5 rounded text-[#90cdf4]">
              Leadership.jsx
            </code>
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          {leadership.map((item, i) => (
            <div
              key={i}
              className="group bg-gradient-to-br from-[#0d1421] to-[#0c1220] border border-[rgba(99,179,237,0.12)] rounded-xl p-6 transition-all duration-300 hover:border-[rgba(99,179,237,0.3)] hover:translate-x-1.5 reveal"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div className="flex-1">
                  <div className="text-[16px] font-bold text-white mb-0.5">{item.role}</div>
                  <div className="text-[13px] text-[#f6ad55] font-semibold mb-1">{item.org}</div>
                  <div className="font-mono text-[11px] text-[#4a5568] mb-3">{item.period}</div>
                  <ul className="flex flex-col gap-1.5">
                    {item.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2 text-[13px] text-[#718096]">
                        <span className="text-[#63b3ed] mt-[3px] flex-shrink-0">▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
