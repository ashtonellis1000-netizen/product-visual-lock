import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(12px)',
      borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(0,0,0,0.05)',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      padding: '0 2rem',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <LockIcon />
          <span style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '0.95rem',
            fontWeight: 600,
            color: '#0F0F14',
            letterSpacing: '-0.01em',
          }}>
            Product Visual Lock
          </span>
        </div>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="hidden-mobile">
        {[
          { label: 'For Brands', href: '/for-brands' },
          { label: 'For Creators', href: '/gallery' },
          { label: 'How It Works', href: '/#how-it-works' },
          { label: 'Pricing', href: '/#pricing' },
        ].map(({ label, href }) => (
          <Link key={label} href={href} style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '0.82rem',
            fontWeight: 500,
            color: '#6B7080',
            textDecoration: 'none',
            letterSpacing: '0em',
            transition: 'color 0.2s ease',
          }}
            onMouseEnter={e => e.target.style.color = '#0F0F14'}
            onMouseLeave={e => e.target.style.color = '#6B7080'}
          >
            {label}
          </Link>
        ))}

        <Link href="/for-brands" style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '0.8rem',
          fontWeight: 500,
          color: '#5558E3',
          textDecoration: 'none',
          padding: '8px 18px',
          border: '1px solid rgba(85,88,227,0.35)',
          background: 'rgba(85,88,227,0.06)',
          transition: 'all 0.2s ease',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(85,88,227,0.12)'
            e.currentTarget.style.borderColor = 'rgba(85,88,227,0.5)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(85,88,227,0.06)'
            e.currentTarget.style.borderColor = 'rgba(85,88,227,0.35)'
          }}
        >
          Enroll Product
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  )
}

function LockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="11" width="18" height="11" stroke="#5558E3" strokeWidth="1.5" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#5558E3" strokeWidth="1.5" />
      <circle cx="12" cy="16.5" r="1.5" fill="#5558E3" />
      <line x1="12" y1="16.5" x2="12" y2="19" stroke="#5558E3" strokeWidth="1.5" />
    </svg>
  )
}
