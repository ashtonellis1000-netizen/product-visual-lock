import { useState, useEffect } from 'react'
import Link from 'next/link'

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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(7,7,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        padding: '0 2rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ textDecoration: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <LockIcon />
          <span style={{
            fontFamily: 'EB Garamond, Georgia, serif',
            fontSize: '1.1rem',
            fontWeight: 500,
            color: '#f0f0f8',
            letterSpacing: '0.01em',
          }}>
            Product Visual Lock
          </span>
        </div>
      </Link>

      {/* Desktop Nav */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '2.5rem',
      }}
        className="hidden-mobile"
      >
        {[
          { label: 'For Brands', href: '/for-brands' },
          { label: 'For Creators', href: '/gallery' },
          { label: 'How It Works', href: '/#how-it-works' },
          { label: 'Pricing', href: '/#pricing' },
        ].map(({ label, href }) => (
          <Link key={label} href={href} style={{
            fontFamily: 'Raleway, sans-serif',
            fontSize: '0.82rem',
            fontWeight: 400,
            color: 'rgba(240,240,248,0.6)',
            textDecoration: 'none',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            transition: 'color 0.3s ease',
          }}
            onMouseEnter={e => e.target.style.color = '#f0f0f8'}
            onMouseLeave={e => e.target.style.color = 'rgba(240,240,248,0.6)'}
          >
            {label}
          </Link>
        ))}

        <Link href="/for-brands" style={{
          fontFamily: 'Raleway, sans-serif',
          fontSize: '0.78rem',
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#f0f0f8',
          textDecoration: 'none',
          padding: '8px 20px',
          border: '1px solid rgba(100,103,242,0.5)',
          background: 'rgba(100,103,242,0.1)',
          transition: 'all 0.3s ease',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(100,103,242,0.25)'
            e.currentTarget.style.borderColor = '#6467F2'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(100,103,242,0.1)'
            e.currentTarget.style.borderColor = 'rgba(100,103,242,0.5)'
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
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="11" width="18" height="11" stroke="#6467F2" strokeWidth="1.5" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#6467F2" strokeWidth="1.5" />
      <circle cx="12" cy="16.5" r="1.5" fill="#6467F2" />
      <line x1="12" y1="16.5" x2="12" y2="19" stroke="#6467F2" strokeWidth="1.5" />
    </svg>
  )
}
