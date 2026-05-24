import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#projects', label: 'projects' },
  { href: '#skills', label: 'skills' },
  { href: '#experience', label: 'experience' },
  { href: '#interests', label: 'interests' },
  { href: '#education', label: 'education' },
  { href: '#contact', label: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-6 md:px-14 h-16 border-b border-[rgba(99,179,237,0.12)] transition-all duration-300 ${
        scrolled ? 'bg-[rgba(4,7,13,0.92)] backdrop-blur-2xl' : 'bg-[rgba(4,7,13,0.75)] backdrop-blur-xl'
      }`}
    >
      {/* Logo */}
      <a
        href="#hero"
        className="font-mono text-[13px] text-[#f6ad55] no-underline tracking-wider flex items-center gap-2"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#f6ad55] blink-dot inline-block" />
        Sanchit.Sharma
      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 list-none">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="font-mono text-[11px] text-[#718096] no-underline tracking-widest transition-colors duration-200 hover:text-[#fbd38d] relative group"
            >
              {label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#f6ad55] transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-0"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-px bg-[#90cdf4] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-5 h-px bg-[#90cdf4] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-px bg-[#90cdf4] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[rgba(8,13,22,0.98)] backdrop-blur-2xl border-b border-[rgba(99,179,237,0.12)] py-4 md:hidden">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 font-mono text-[12px] text-[#718096] no-underline tracking-widest hover:text-[#f6ad55] transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
