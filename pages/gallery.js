import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ALL_CAMPAIGNS = [
  { id: 1, brand: 'BEYZO', product: 'Oversized Drop-Shoulder Hoodie', category: 'Apparel', payout: 180, status: 'OPEN', color: '#1a1a2e', accent: '#7c3aed', emoji: '🧥', videosApproved: 0, videosTotal: 12, brief: 'Street-style lifestyle video. 15–30 seconds. Urban environment — alley, rooftop, or skate spot. Model wearing hoodie, confident movement. TikTok or Reels format.', platform: 'TikTok · Reels', deadline: '2026-06-15', enrolled: '2026-05-28' },
  { id: 2, brand: 'LUMĒ', product: 'Vitamin C Brightening Serum', category: 'Skincare', payout: 120, status: 'OPEN', color: '#1a180e', accent: '#d97706', emoji: '✨', videosApproved: 3, videosTotal: 12, brief: 'Morning routine aesthetic. 10–20 seconds. Clean bathroom setting, natural light. Show product alongside visible skincare result. Calm, premium tone.', platform: 'TikTok · Reels · Pinterest', deadline: '2026-06-20', enrolled: '2026-05-22' },
  { id: 3, brand: 'STRĪD', product: 'Carbon Trail Runner — Black/White', category: 'Footwear', payout: 220, status: 'OPEN', color: '#0f1a0f', accent: '#16a34a', emoji: '👟', videosApproved: 7, videosTotal: 12, brief: 'Performance running content. 20–45 seconds. Trail or track environment. Emphasise shoe detail and movement. Fast cuts, dynamic energy. YouTube Shorts or Reels.', platform: 'YouTube Shorts · Reels', deadline: '2026-06-10', enrolled: '2026-05-20' },
  { id: 4, brand: 'COVE', product: '40oz Insulated Bottle — Matte Slate', category: 'Lifestyle', payout: 90, status: 'REVIEWING', color: '#0f1520', accent: '#0ea5e9', emoji: '🫙', videosApproved: 10, videosTotal: 12, brief: 'Minimal lifestyle. Desk setup, hike, or yoga studio. 10–20 seconds. Calm aesthetic, soft audio. Product as part of daily ritual. Reels or TikTok.', platform: 'TikTok · Reels', deadline: '2026-06-08', enrolled: '2026-05-18' },
  { id: 5, brand: 'ARCHĒ', product: 'Slim Fit Cargo Trouser — Olive', category: 'Apparel', payout: 150, status: 'OPEN', color: '#171a0f', accent: '#65a30d', emoji: '👖', videosApproved: 1, videosTotal: 10, brief: 'Streetwear editorial. Lookbook-style movement shots. City backdrop. 15–30 seconds. Muted colour grading. TikTok or Reels.', platform: 'TikTok · Reels', deadline: '2026-06-25', enrolled: '2026-05-27' },
  { id: 6, brand: 'NOX', product: 'Cold Brew Concentrate — Classic Black', category: 'Beverage', payout: 100, status: 'OPEN', color: '#0f0e0e', accent: '#92400e', emoji: '☕', videosApproved: 2, videosTotal: 8, brief: 'Morning ritual content. Kitchen or café aesthetic. 10–20 seconds. Close-up pouring shots, ice, lifestyle feel. Product featured prominently throughout.', platform: 'TikTok · Reels · Pinterest', deadline: '2026-06-18', enrolled: '2026-05-25' },
]

const CATEGORIES = ['All', 'Apparel', 'Skincare', 'Footwear', 'Lifestyle', 'Beverage']

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortBy, setSortBy] = useState('payout')
  const [selectedCampaign, setSelectedCampaign] = useState(null)

  const filtered = ALL_CAMPAIGNS
    .filter(c => activeCategory === 'All' || c.category === activeCategory)
    .filter(c => c.status !== 'CLOSED')
    .sort((a, b) => {
      if (sortBy === 'payout') return b.payout - a.payout
      if (sortBy === 'newest') return new Date(b.enrolled) - new Date(a.enrolled)
      if (sortBy === 'deadline') return new Date(a.deadline) - new Date(b.deadline)
      return 0
    })

  return (
    <>
      <Head>
        <title>Brand Gallery — Product Visual Lock</title>
      </Head>

      <Navbar />

      <div style={{ paddingTop: '100px', paddingBottom: '3rem', padding: '100px 2rem 3rem', borderBottom: '1px solid rgba(0,0,0,0.07)', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: '#5558E3', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Creator Gallery
          </div>
          <h1 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: '#0F0F14', marginBottom: '0.75rem', lineHeight: 1.1, letterSpacing: '-0.025em' }}>
            Open briefs. Locked products. Real payouts.
          </h1>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.9rem', fontWeight: 400, color: '#6B7080', maxWidth: '520px', lineHeight: 1.7 }}>
            Select a brand, generate a video using their locked product fingerprint, submit for approval, and receive payment — no technical knowledge required.
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
            <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.72rem', color: '#9CA3AF' }}>Sort:</span>
            {[{ val: 'payout', label: 'Highest Payout' }, { val: 'newest', label: 'Newest' }, { val: 'deadline', label: 'Deadline' }].map(({ val, label }) => (
              <button key={val} onClick={() => setSortBy(val)} style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.72rem', fontWeight: sortBy === val ? 600 : 400, color: sortBy === val ? '#0F0F14' : '#9CA3AF', background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px 8px', transition: 'color 0.15s ease' }}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem', background: '#FFFFFF' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1px', background: 'rgba(0,0,0,0.07)' }}>
          {filtered.map(campaign => (
            <CampaignCard key={campaign.id} campaign={campaign} onClick={() => setSelectedCampaign(campaign)} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '6rem 2rem', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.9rem', fontWeight: 400, color: '#9CA3AF' }}>
            No open campaigns in this category at present. Please check back shortly.
          </div>
        )}
      </div>

      {selectedCampaign && (
        <CampaignModal campaign={selectedCampaign} onClose={() => setSelectedCampaign(null)} />
      )}

      <Footer />
    </>
  )
}

function CampaignCard({ campaign, onClick }) {
  const slotsLeft = campaign.videosTotal - campaign.videosApproved
  const progress = (campaign.videosApproved / campaign.videosTotal) * 100

  return (
    <div onClick={onClick} style={{ background: '#FFFFFF', padding: '2rem', cursor: 'pointer', transition: 'background 0.2s ease', position: 'relative' }}
      onMouseEnter={e => e.currentTarget.style.background = '#F7F8FA'}
      onMouseLeave={e => e.currentTarget.style.background = '#FFFFFF'}
    >
      <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.55rem', letterSpacing: '0.08em', padding: '3px 8px', background: campaign.status === 'OPEN' ? 'rgba(22,163,74,0.07)' : 'rgba(234,179,8,0.07)', border: `1px solid ${campaign.status === 'OPEN' ? 'rgba(22,163,74,0.2)' : 'rgba(234,179,8,0.2)'}`, color: campaign.status === 'OPEN' ? '#16a34a' : '#ca8a04' }}>
        {campaign.status === 'OPEN' ? '● OPEN' : '◐ REVIEWING'}
      </div>

      <div style={{ width: '60px', height: '60px', background: campaign.color, border: `1px solid ${campaign.accent}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', marginBottom: '1.5rem', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: '-5px', border: `1px solid ${campaign.accent}25`, borderRadius: '50%', animation: 'fingerprint-pulse 4s ease-in-out infinite' }} />
        {campaign.emoji}
      </div>

      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem', color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
        {campaign.brand} · {campaign.category}
      </div>

      <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '1rem', fontWeight: 600, color: '#0F0F14', lineHeight: 1.3, marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
        {campaign.product}
      </div>

      <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.78rem', fontWeight: 400, color: '#9CA3AF', lineHeight: 1.6, marginBottom: '1.5rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
        {campaign.brief}
      </p>

      <div style={{ marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
          <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.7rem', fontWeight: 400, color: '#9CA3AF' }}>{campaign.videosApproved}/{campaign.videosTotal} videos approved</span>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: '#B8BCC8' }}>{slotsLeft} slots left</span>
        </div>
        <div style={{ height: '2px', background: 'rgba(0,0,0,0.07)' }}>
          <div style={{ height: '100%', width: `${progress}%`, background: campaign.accent, transition: 'width 0.5s ease' }} />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
        <div>
          <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '1.4rem', fontWeight: 700, color: '#0F0F14', letterSpacing: '-0.02em' }}>${campaign.payout}</div>
          <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.68rem', fontWeight: 400, color: '#9CA3AF' }}>per approved video</div>
        </div>
        <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.68rem', fontWeight: 400, color: '#B8BCC8', textAlign: 'right' }}>{campaign.platform}</div>
      </div>
    </div>
  )
}

function CampaignModal({ campaign, onClose }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(15,15,20,0.45)', backdropFilter: 'blur(8px)' }} />

      <div style={{ position: 'relative', background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.1)', maxWidth: '620px', width: '100%', maxHeight: '85vh', overflowY: 'auto', padding: '2.5rem', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', color: '#9CA3AF', cursor: 'pointer', fontSize: '1.1rem', lineHeight: 1 }}>✕</button>

        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem', color: 'rgba(85,88,227,0.5)', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
          FINGERPRINT_ID: {campaign.brand.toLowerCase()}_{campaign.id}_locked
        </div>

        <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{campaign.emoji}</div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          {campaign.brand} · {campaign.category}
        </div>
        <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#0F0F14', marginBottom: '2rem', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
          {campaign.product}
        </h2>

        <div style={{ background: '#F7F8FA', border: '1px solid rgba(0,0,0,0.07)', padding: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem', color: '#5558E3', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>BRIEF</div>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.88rem', fontWeight: 400, color: '#6B7080', lineHeight: 1.7 }}>{campaign.brief}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(0,0,0,0.07)', marginBottom: '2rem' }}>
          {[{ label: 'Payout', value: `$${campaign.payout}` }, { label: 'Platform', value: campaign.platform.split('·')[0].trim() }, { label: 'Deadline', value: campaign.deadline }].map(({ label, value }) => (
            <div key={label} style={{ padding: '1rem', background: '#FFFFFF' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.55rem', color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>{label}</div>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '1rem', fontWeight: 600, color: '#0F0F14', letterSpacing: '-0.01em' }}>{value}</div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.55rem', color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Visual Fingerprint</div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {['COLOR_LOCKED', 'SILHOUETTE_LOCKED', 'LOGO_LOCKED', 'TEXTURE_LOCKED'].map(tag => (
              <span key={tag} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.56rem', color: '#5558E3', border: '1px solid rgba(85,88,227,0.2)', padding: '3px 8px', letterSpacing: '0.05em' }}>
                ✓ {tag}
              </span>
            ))}
          </div>
        </div>

        <div style={{ border: '1px solid rgba(85,88,227,0.15)', background: 'rgba(85,88,227,0.04)', padding: '1.25rem 1.5rem', marginBottom: '1rem' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem', color: '#5558E3', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
            PHASE 1 — CREATOR ACCESS OPENING SOON
          </div>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.82rem', fontWeight: 400, color: '#6B7080', lineHeight: 1.6, marginBottom: '1rem' }}>
            Generation is not yet open. We are seeding 3–5 brands first to ensure real payment is available when creators go live. Join the waitlist to be notified first.
          </p>
          <a href={`mailto:hello@productvisuallock.com?subject=Creator Waitlist — ${campaign.brand} ${campaign.product}&body=I want to generate videos for this brief.`} style={{ display: 'block', width: '100%', textAlign: 'center', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.82rem', fontWeight: 600, color: '#FFFFFF', background: '#5558E3', textDecoration: 'none', padding: '12px 24px', transition: 'background 0.2s ease', boxSizing: 'border-box', letterSpacing: '-0.01em' }}
            onMouseEnter={e => e.currentTarget.style.background = '#4446C5'}
            onMouseLeave={e => e.currentTarget.style.background = '#5558E3'}
          >
            Join Creator Waitlist →
          </a>
        </div>

        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.7rem', fontWeight: 400, color: '#B8BCC8', textAlign: 'center', lineHeight: 1.6 }}>
          Product fingerprint loads automatically when you generate. No technical setup required.
          <br />Watermark applied until brand approval and payment clears via Stripe.
        </p>
      </div>
    </div>
  )
}
