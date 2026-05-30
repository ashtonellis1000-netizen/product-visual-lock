import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(0,0,0,0.07)',
      padding: '4rem 2rem 3rem',
      background: '#F7F8FA',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem',
        }}>
          <div>
            <div style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#0F0F14',
              marginBottom: '0.75rem',
              letterSpacing: '-0.01em',
            }}>
              Product Visual Lock
            </div>
            <p style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '0.82rem',
              fontWeight: 400,
              color: '#6B7080',
              lineHeight: 1.7,
              maxWidth: '260px',
            }}>
              Brand-accurate AI ads for your affiliate network. Lock your product once. Distribute everywhere.
            </p>
          </div>

          <div>
            <FooterHeading>For Brands</FooterHeading>
            <FooterLinks links={[
              { label: 'Enrol Your Product', href: '/for-brands' },
              { label: 'How It Works', href: '/#how-it-works' },
              { label: 'Pricing', href: '/#pricing' },
              { label: 'Phase 1 — 5 partners', href: '/for-brands#enroll' },
            ]} />
          </div>

          <div>
            <FooterHeading>Roster</FooterHeading>
            <FooterLinks links={[
              { label: 'Brand Roster', href: '/roster' },
              { label: 'BEYZO Case Study', href: '/#proof' },
              { label: 'Integrations', href: '/for-brands#how' },
              { label: 'Contact', href: 'mailto:hello@productvisuallock.com' },
            ]} />
          </div>

          <div>
            <FooterHeading>Company</FooterHeading>
            <FooterLinks links={[
              { label: 'GitHub', href: 'https://github.com/ashtonellis1000-netizen/product-visual-lock' },
              { label: 'Contact', href: 'mailto:hello@productvisuallock.com' },
              { label: 'Phase 1 Enrolment', href: '/for-brands#enroll' },
              { label: 'Pricing', href: '/#pricing' },
            ]} />
          </div>
        </div>

        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(0,0,0,0.07)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <span style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 400,
            color: '#9CA3AF',
            letterSpacing: '0em',
          }}>
            © 2026 Product Visual Lock. All rights reserved.
          </span>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.68rem',
            color: 'rgba(85,88,227,0.4)',
            letterSpacing: '0.05em',
          }}>
            VISUAL_FINGERPRINT_LOCKED
          </span>
        </div>
      </div>
    </footer>
  )
}

function FooterHeading({ children }) {
  return (
    <div style={{
      fontFamily: 'Inter, system-ui, sans-serif',
      fontSize: '0.7rem',
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: '#9CA3AF',
      marginBottom: '1.25rem',
    }}>
      {children}
    </div>
  )
}

function FooterLinks({ links }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {links.map(({ label, href }) => (
        <Link key={label} href={href} style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '0.83rem',
          fontWeight: 400,
          color: '#6B7080',
          textDecoration: 'none',
          transition: 'color 0.2s ease',
        }}
          onMouseEnter={e => e.target.style.color = '#0F0F14'}
          onMouseLeave={e => e.target.style.color = '#6B7080'}
        >
          {label}
        </Link>
      ))}
    </div>
  )
}
