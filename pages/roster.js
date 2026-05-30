import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ROSTER = [
  { id: 1, brand: 'BEYZO', product: 'Oversized Drop-Shoulder Hoodie', category: 'Apparel', status: 'LIVE', networks: ['LTK', 'ShareASale'], color: '#F4F4F8', accent: '#5558E3', emoji: '🧥', enrolled: '2026-05-28', tags: ['COLOR_LOCKED', 'SILHOUETTE_LOCKED', 'LOGO_LOCKED', 'TEXTURE_LOCKED'] },
  { id: 2, brand: 'LUMĒ', product: 'Vitamin C Brightening Serum', category: 'Skincare', status: 'LIVE', networks: ['LTK', 'Impact'], color: '#FAF6EE', accent: '#D97706', emoji: '✨', enrolled: '2026-05-22', tags: ['COLOR_LOCKED', 'LABEL_LOCKED', 'BOTTLE_LOCKED'] },
  { id: 3, brand: 'STRĪD', product: 'Carbon Trail Runner — Black/White', category: 'Footwear', status: 'PILOT', networks: ['In-house affiliate'], color: '#EEF6EE', accent: '#16A34A', emoji: '👟', enrolled: '2026-05-20', tags: ['COLOR_LOCKED', 'SILHOUETTE_LOCKED', 'SOLE_LOCKED', 'LOGO_LOCKED'] },
  { id: 4, brand: 'COVE', product: '40oz Insulated Bottle — Matte Slate', category: 'Lifestyle', status: 'FINGERPRINTING', networks: ['Awin', 'Refersion'], color: '#EEF2F8', accent: '#0EA5E9', emoji: '🫙', enrolled: '2026-05-29', tags: ['COLOR_LOCKED', 'FORM_LOCKED'] },
  { id: 5, brand: 'ARCHĒ', product: 'Slim Fit Cargo Trouser — Olive', category: 'Apparel', status: 'PILOT', networks: ['LTK'], color: '#F4F6EE', accent: '#65A30D', emoji: '👖', enrolled: '2026-05-27', tags: ['COLOR_LOCKED', 'SILHOUETTE_LOCKED', 'FABRIC_LOCKED'] },
  { id: 6, brand: 'NOX', product: 'Cold Brew Concentrate — Classic Black', category: 'Beverage', status: 'FINGERPRINTING', networks: ['Impact', 'In-house affiliate'], color: '#F4F2EE', accent: '#92400E', emoji: '☕', enrolled: '2026-05-25', tags: ['COLOR_LOCKED', 'LABEL_LOCKED'] },
]

const CATEGORIES = ['All', 'Apparel', 'Skincare', 'Footwear', 'Lifestyle', 'Beverage']
const STATUSES = ['All', 'LIVE', 'PILOT', 'FINGERPRINTING']

export default function Roster() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeStatus, setActiveStatus] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = ROSTER
    .filter(r => activeCategory === 'All' || r.category === activeCategory)
    .filter(r => activeStatus === 'All' || r.status === activeStatus)

  return (
    <>
      <Head>
        <title>Brand Roster — Product Visual Lock</title>
        <meta name="description" content="Brands enrolled with Product Visual Lock. Each one has a fingerprinted product distributed across their affiliate network." />
      </Head>

      <Navbar />

      <div style={{ paddingTop: '100px', paddingBottom: '3rem', padding: '100px 2rem 3rem', borderBottom: '1px solid rgba(0,0,0,0.07)', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: '#5558E3', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            — Brand Roster
          </div>
          <h1 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: '#0F0F14', marginBottom: '0.75rem', lineHeight: 1.1, letterSpacing: '-0.025em' }}>
            Brands enrolled with Visual Lock.
          </h1>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.95rem', fontWeight: 400, color: '#6B7080', maxWidth: '600px', lineHeight: 1.7 }}>
            Every brand on this roster has a fingerprinted product distributed across their affiliate network. Phase 1 is deliberately small — five Phase 1 partners become published case studies.
          </p>
        </div>
      </div>

      <div style={{ position: 'sticky', top: '64px', zIndex: 50, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(0,0,0,0.07)', padding: '0 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', padding: '0.75rem 0' }}>
          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.75rem', fontWeight: activeCategory === cat ? 500 : 400, padding: '6px 14px', background: activeCategory === cat ? 'rgba(85,88,227,0.08)' : 'transparent', border: `1px solid ${activeCategory === cat ? 'rgba(85,88,227,0.3)' : 'rgba(0,0,0,0.08)'}`, color: activeCategory === cat ? '#5558E3' : '#6B7080', cursor: 'pointer', transition: 'all 0.15s ease' }}>
                {cat}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.72rem', color: '#9CA3AF' }}>Status:</span>
            {STATUSES.map(s => (
              <button key={s} onClick={() => setActiveStatus(s)} style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.72rem', fontWeight: activeStatus === s ? 600 : 400, color: activeStatus === s ? '#0F0F14' : '#9CA3AF', background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px 8px', transition: 'color 0.15s ease' }}>
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem', background: '#FFFFFF' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1px', background: 'rgba(0,0,0,0.07)' }}>
          {filtered.map(item => (
            <RosterCard key={item.id} item={item} onClick={() => setSelected(item)} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '6rem 2rem', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.9rem', fontWeight: 400, color: '#9CA3AF' }}>
            No brands match the current filter. Please adjust your selection.
          </div>
        )}
      </div>

      {/* CTA strip */}
      <section style={{ padding: '6rem 2rem', background: '#F7F8FA', borderTop: '1px solid rgba(0,0,0,0.07)', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#0F0F14', marginBottom: '1rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
            Join the Phase 1 roster.
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.95rem', fontWeight: 400, color: '#6B7080', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Five Phase 1 partners total. Each one becomes a documented case study. Pricing is £2,000 per product enrolment with full integration into your affiliate network.
          </p>
          <Link href="/for-brands" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.85rem', fontWeight: 600, color: '#FFFFFF', textDecoration: 'none', padding: '13px 32px', background: '#5558E3', transition: 'all 0.25s ease', display: 'inline-block', letterSpacing: '-0.01em' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#4446C5'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#5558E3'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Enrol Your Product →
          </Link>
        </div>
      </section>

      {selected && <RosterModal item={selected} onClose={() => setSelected(null)} />}

      <Footer />
    </>
  )
}

function statusStyle(status) {
  if (status === 'LIVE') return { color: '#16a34a', bg: 'rgba(22,163,74,0.08)', border: 'rgba(22,163,74,0.25)' }
  if (status === 'PILOT') return { color: '#5558E3', bg: 'rgba(85,88,227,0.08)', border: 'rgba(85,88,227,0.25)' }
  return { color: '#6B7080', bg: 'rgba(107,112,128,0.08)', border: 'rgba(107,112,128,0.2)' }
}

function RosterCard({ item, onClick }) {
  const s = statusStyle(item.status)
  return (
    <div onClick={onClick} style={{ background: '#FFFFFF', padding: '2rem', cursor: 'pointer', transition: 'background 0.2s ease', position: 'relative' }}
      onMouseEnter={e => e.currentTarget.style.background = '#F7F8FA'}
      onMouseLeave={e => e.currentTarget.style.background = '#FFFFFF'}
    >
      <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.55rem', letterSpacing: '0.08em', padding: '3px 8px', background: s.bg, border: `1px solid ${s.border}`, color: s.color }}>
        {item.status}
      </div>

      <div style={{ width: '60px', height: '60px', background: item.color, border: `1px solid ${item.accent}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', marginBottom: '1.5rem', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: '-5px', border: `1px solid ${item.accent}33`, borderRadius: '50%', animation: 'fingerprint-pulse 4s ease-in-out infinite' }} />
        {item.emoji}
      </div>

      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem', color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
        {item.brand} · {item.category}
      </div>

      <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '1rem', fontWeight: 600, color: '#0F0F14', lineHeight: 1.3, marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>
        {item.product}
      </div>

      <div style={{ marginBottom: '1.25rem' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.55rem', color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Distribution</div>
        <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.82rem', fontWeight: 500, color: '#0F0F14' }}>
          {item.networks.join(' · ')}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: '#B8BCC8' }}>
          ENROLLED · {item.enrolled}
        </div>
        <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.7rem', color: '#9CA3AF' }}>View →</div>
      </div>
    </div>
  )
}

function RosterModal({ item, onClose }) {
  const s = statusStyle(item.status)
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(15,15,20,0.45)', backdropFilter: 'blur(8px)' }} />

      <div style={{ position: 'relative', background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.1)', maxWidth: '620px', width: '100%', maxHeight: '85vh', overflowY: 'auto', padding: '2.5rem', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', color: '#9CA3AF', cursor: 'pointer', fontSize: '1.1rem', lineHeight: 1 }}>✕</button>

        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem', color: 'rgba(85,88,227,0.5)', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
          FINGERPRINT_ID: {item.brand.toLowerCase()}_{item.id}_locked
        </div>

        <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{item.emoji}</div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          {item.brand} · {item.category}
        </div>
        <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#0F0F14', marginBottom: '0.5rem', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
          {item.product}
        </h2>
        <div style={{ display: 'inline-block', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.08em', padding: '4px 10px', background: s.bg, border: `1px solid ${s.border}`, color: s.color, marginBottom: '2rem' }}>
          {item.status}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'rgba(0,0,0,0.07)', marginBottom: '2rem' }}>
          {[
            { label: 'Distribution', value: item.networks.join(', ') },
            { label: 'Enrolled', value: item.enrolled },
          ].map(({ label, value }) => (
            <div key={label} style={{ padding: '1rem 1.25rem', background: '#FFFFFF' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.55rem', color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>{label}</div>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.88rem', fontWeight: 600, color: '#0F0F14', letterSpacing: '-0.01em' }}>{value}</div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.55rem', color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Visual Fingerprint</div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {item.tags.map(tag => (
              <span key={tag} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.56rem', color: '#5558E3', border: '1px solid rgba(85,88,227,0.2)', padding: '3px 8px', letterSpacing: '0.05em' }}>
                ✓ {tag}
              </span>
            ))}
          </div>
        </div>

        <div style={{ border: '1px solid rgba(85,88,227,0.15)', background: 'rgba(85,88,227,0.04)', padding: '1.25rem 1.5rem' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem', color: '#5558E3', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
            BRAND OWNER
          </div>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.82rem', fontWeight: 400, color: '#6B7080', lineHeight: 1.6, marginBottom: '1rem' }}>
            Want a fingerprint distributed across your affiliate network? Phase 1 enrolment is open.
          </p>
          <Link href="/for-brands" style={{ display: 'block', width: '100%', textAlign: 'center', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.82rem', fontWeight: 600, color: '#FFFFFF', background: '#5558E3', textDecoration: 'none', padding: '12px 24px', transition: 'background 0.2s ease', boxSizing: 'border-box', letterSpacing: '-0.01em' }}
            onMouseEnter={e => e.currentTarget.style.background = '#4446C5'}
            onMouseLeave={e => e.currentTarget.style.background = '#5558E3'}
          >
            Enrol Your Product →
          </Link>
        </div>
      </div>
    </div>
  )
}
