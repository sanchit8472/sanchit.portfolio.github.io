import { useEffect, useRef } from 'react'
import SectionHeader from './SectionHeader'

const skillGroups = [
  {
    category: 'Core Engineering',
    icon: '📡',
    color: '#f6ad55',
    borderColor: 'rgba(246,173,85,0.2)',
    bgColor: 'rgba(246,173,85,0.06)',
    skills: [
      {
        name: 'RF & Antenna Design',
        level: 'Advanced',
        levelClass: 'advanced',
        fillClass: 'fill-advanced',
        percent: 80,
        tools: ['CST Studio Suite', 'Ansys HFSS'],
        abilities: ['DRA Design', 'RF Simulation', 'S-Parameter Analysis', 'Impedance Matching', 'Radiation Pattern Analysis'],
      },
      {
        name: 'PCB & Circuit Design',
        level: 'Intermediate',
        levelClass: 'intermediate',
        fillClass: 'fill-intermediate',
        percent: 65,
        tools: ['KiCad', 'LTspice'],
        abilities: ['PCB Layout', 'Circuit Schematics', 'Circuit Simulation', 'Circuit Analysis'],
      },
    ],
  },
  {
    category: 'Automation & Control',
    icon: '🏭',
    color: '#4fd1c5',
    borderColor: 'rgba(79,209,197,0.2)',
    bgColor: 'rgba(79,209,197,0.06)',
    skills: [
      {
        name: 'Industrial Automation & Power Systems',
        level: 'Intermediate',
        levelClass: 'intermediate',
        fillClass: 'fill-intermediate',
        percent: 60,
        tools: ['Siemens PLC', 'SCADA Systems', 'HMI Interfacing', 'PLC Programming'],
        abilities: ['Hydro Power Plant Operations', 'Turbine-Generator Systems', 'Governor Control', 'Transformer Systems', 'GIS Switchyard', 'HVAC Systems', 'Control Engineering'],
      },
    ],
  },
  {
    category: 'Tools & Software',
    icon: '💻',
    color: '#63b3ed',
    borderColor: 'rgba(99,179,237,0.2)',
    bgColor: 'rgba(99,179,237,0.06)',
    skills: [
      {
        name: 'Programming Languages',
        level: 'Intermediate',
        levelClass: 'intermediate',
        fillClass: 'fill-intermediate',
        percent: 65,
        tools: ['Python', 'C / C++', 'LaTeX'],
        abilities: ['Data Processing', 'Scripting & Automation', 'Technical Documentation'],
      },
    ],
  },
  {
    category: 'Embedded Systems',
    icon: '⚡',
    color: '#68d391',
    borderColor: 'rgba(104,211,145,0.2)',
    bgColor: 'rgba(104,211,145,0.06)',
    skills: [
      {
        name: 'Embedded Systems & IoT',
        level: 'Intermediate',
        levelClass: 'intermediate',
        fillClass: 'fill-intermediate',
        percent: 70,
        tools: ['ESP32', 'Arduino'],
        abilities: ['Microcontroller Programming', 'Sensor Interfacing', 'IoT System Integration', 'Real-time Data Monitoring'],
      },
    ],
  },
]

const levelColors = {
  beginner: { bg: 'rgba(74,85,104,0.15)', border: 'rgba(74,85,104,0.4)', text: '#a0aec0', dot: '#a0aec0' },
  intermediate: { bg: 'rgba(43,108,176,0.15)', border: 'rgba(43,108,176,0.5)', text: '#63b3ed', dot: '#63b3ed' },
  advanced: { bg: 'rgba(44,122,123,0.15)', border: 'rgba(44,122,123,0.5)', text: '#4fd1c5', dot: '#4fd1c5' },
  expert: { bg: 'rgba(217,119,6,0.15)', border: 'rgba(217,119,6,0.5)', text: '#f6ad55', dot: '#f6ad55' },
}

const fillGradients = {
  'fill-beginner': 'linear-gradient(90deg,#4a5568,#718096)',
  'fill-intermediate': 'linear-gradient(90deg,#2b6cb0,#63b3ed)',
  'fill-advanced': 'linear-gradient(90deg,#2c7a7b,#4fd1c5)',
  'fill-expert': 'linear-gradient(90deg,#f6ad55,#fbd38d)',
}

function SkillBar({ skill }) {
  const barRef = useRef(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          bar.style.width = skill.percent + '%'
        }, 200)
        observer.disconnect()
      }
    }, { threshold: 0.3 })
    observer.observe(bar.parentElement)
    return () => observer.disconnect()
  }, [skill.percent])

  const lc = levelColors[skill.levelClass] || levelColors.intermediate

  return (
    <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(99,179,237,0.12)] rounded-xl p-5 transition-all duration-300 hover:border-[rgba(99,179,237,0.4)] hover:translate-x-1.5">
      {/* Header */}
      <div className="flex justify-between items-center mb-3 gap-3 flex-wrap">
        <div className="text-[14px] font-semibold text-[#e2e8f0]">{skill.name}</div>
        <span
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full font-mono text-[11px] font-medium tracking-wider border whitespace-nowrap"
          style={{ background: lc.bg, borderColor: lc.border, color: lc.text }}
        >
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: lc.dot }} />
          {skill.level}
        </span>
      </div>

      {/* Bar track */}
      <div className="h-1.5 bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden mb-3">
        <div
          ref={barRef}
          className="sk-fill"
          style={{ background: fillGradients[skill.fillClass] }}
        />
      </div>

      {/* Sub-tags */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="font-mono text-[9px] tracking-widest px-2 py-0.5 rounded bg-[rgba(99,179,237,0.08)] border border-[rgba(99,179,237,0.2)] text-[#90cdf4] flex-shrink-0">
            🛠 Tools
          </span>
          {skill.tools.map(t => (
            <span key={t} className="font-mono text-[10px] px-2 py-0.5 bg-[rgba(255,255,255,0.03)] border border-[rgba(99,179,237,0.15)] rounded text-[#718096]">
              {t}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="font-mono text-[9px] tracking-widest px-2 py-0.5 rounded bg-[rgba(246,173,85,0.07)] border border-[rgba(246,173,85,0.18)] text-[#fbd38d] flex-shrink-0">
            ⚙️ Skills
          </span>
          {skill.abilities.map(a => (
            <span key={a} className="font-mono text-[10px] px-2 py-0.5 bg-[rgba(255,255,255,0.03)] border border-[rgba(246,173,85,0.12)] rounded text-[#718096]">
              {a}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-14 py-24 max-w-6xl mx-auto relative z-[1]">
      <SectionHeader
        number="02"
        label="Skills"
        title="Technical"
        highlight="Expertise"
        subtitle="Grouped by domain — from RF simulation and embedded systems to industrial automation and power engineering."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillGroups.map((group) => (
          <div key={group.category} className="reveal">
            {/* Group header */}
            <div
              className="flex items-center gap-2.5 mb-4 pb-3 border-b"
              style={{ borderColor: group.borderColor }}
            >
              <span className="text-xl">{group.icon}</span>
              <h3
                className="font-mono text-[12px] font-semibold tracking-widest uppercase"
                style={{ color: group.color }}
              >
                {group.category}
              </h3>
            </div>

            <div className="flex flex-col gap-3">
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
