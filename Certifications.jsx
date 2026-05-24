import SectionHeader from './SectionHeader'

// Add your certifications here when available
const certifications = [
  // {
  //   name: 'Certification Name',
  //   issuer: 'Issuing Organization',
  //   date: 'Month Year',
  //   credentialId: 'XXXXXXXX',
  //   link: 'https://...',
  //   icon: '🏆',
  // },
]

export default function Certifications() {
  return (
    <section id="certifications" className="px-6 md:px-14 py-24 max-w-6xl mx-auto relative z-[1]">
      <SectionHeader
        number="06"
        label="Certifications"
        title="Credentials &"
        highlight="Courses"
        subtitle="Professional certifications and online courses that supplement my academic and practical training."
      />

      {certifications.length === 0 ? (
        <div className="border border-dashed border-[rgba(99,179,237,0.2)] rounded-2xl p-12 text-center reveal">
          <div className="text-5xl mb-4 opacity-30">🏆</div>
          <p className="font-mono text-[12px] text-[#4a5568] tracking-widest">
            Certifications coming soon — add yours in{' '}
            <code className="bg-[rgba(99,179,237,0.08)] px-1.5 py-0.5 rounded text-[#90cdf4]">
              Certifications.jsx
            </code>
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-[#0d1421] to-[#0c1220] border border-[rgba(99,179,237,0.12)] rounded-xl p-6 no-underline transition-all duration-300 hover:border-[rgba(246,173,85,0.35)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] reveal"
            >
              <span className="text-3xl mb-3 block">{cert.icon}</span>
              <div className="text-[14px] font-bold text-white mb-1 leading-snug">{cert.name}</div>
              <div className="text-[12px] text-[#f6ad55] font-semibold mb-1">{cert.issuer}</div>
              <div className="font-mono text-[10px] text-[#4a5568] tracking-wider">{cert.date}</div>
              {cert.credentialId && (
                <div className="font-mono text-[9px] text-[#4a5568] mt-1">ID: {cert.credentialId}</div>
              )}
            </a>
          ))}
        </div>
      )}
    </section>
  )
}
