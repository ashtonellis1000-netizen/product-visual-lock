import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '4rem 2rem 3rem',
      background: '#07070f',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'EB Garamond, serif',
              fontSize: '1.1rem',
              fontWeight: 500,
              color: '#f0f0f8',
              marginBottom: '1rem',
            }}>
              Product Visual Lock
            </div>
            <p style={{
              fontFamily: 'Raleway, sans-serif',
              fontSize: '0.82rem',
              fontWeight: 300,
              color: 'rgba(240,240,248,0.45)',
              lineHeight: 1.7,
              maxWidth: '260px',
            }}>
              Visual fingerprinting infrastructure for the AI video era. Your product, locked. Every generation, consistent.
            </p>
          </div>

          {/* For Brands */}
          <div>
            <FooterHeading>For Brands</FooterHeading>
            <FooterLinks links={[
              { label: 'Enroll Your Product', href: '/for-brands' },
              { label: 'How It Works', href: '/#how-it-works' },
              { label: 'Pricing', href: '/#pricing' },
              { label: 'Case Study: BEYZO', href: '/case-study' },
            ]} />
          </div>

          {/* For Creators */}
          <div>
            <FooterHeading>For Creators</FooterHeading>
            <FooterLinks links={[
              { label: 'Browse Brand Gallery', href: '/gallery' },
              { label: 'How Payments Work', href: '/gallery#payments' },
              { label: 'Creator Guidelines', href: '/creators' },
              { label: 'Apply to Create', href: '/creators#apply' },
            ]} />
          </div>

          {/* Company */}
          <div>
            <FooterHeading>Company</FooterHeading>
            <FooterLinks links={[
              { label: 'About', href: '/about' },
              { label: 'Contact', href: 'mailto:hello@productvisuallock.com' },
              { label: 'Terms of Service', href: '/legal/terms' },
              { label: 'Privacy Policy', href: '/legal/privacy' },
            ]} />
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <span style={{
            fontFamily: 'Raleway, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 300,
            color: 'rgba(240,240,248,0.3)',
            letterSpacing: '0.04em',
          }}>
            © 2026 Product Visual Lock. All rights reserved.
          </span>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.7rem',
            color: 'rgba(90,79,255,0.5)',
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
      fontFamily: 'Raleway, sans-serif',
      fontSize: '0.7rem',
      fontWeight: 500,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'rgba(240,240,248,0.35)',
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
          fontFamily: 'Raleway, sans-serif',
          fontSize: '0.83rem',
          fontWeight: 300,
          color: 'rgba(240,240,248,0.5)',
          textDecoration: 'none',
          transition: 'color 0.25s ease',
        }}
          onMouseEnter={e => e.target.style.color = '#f0f0f8'}
          onMouseLeave={e => e.target.style.color = 'rgba(240,240,248,0.5)'}
        >
          {label}
        </Link>
      ))}
    </div>
  )
}
