import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ALL_CAMPAIGNS = [
  {
    id: 1,
    brand: 'BEYZO',
    product: 'Oversized Drop-Shoulder Hoodie',
    category: 'Apparel',
    payout: 180,
    status: 'OPEN',
    color: '#1a1a2e',
    accent: '#7c3aed',
    emoji: '🧥',
    videosApproved: 0,
    videosTotal: 12,
    brief: 'Street-style lifestyle video. 15–30 seconds. Urban environment — alley, rooftop, or skate spot. Model wearing hoodie, confident movement. TikTok or Reels format.',
    platform: 'TikTok · Reels',
    deadline: '2026-06-15',
    enrolled: '2026-05-28',
  },
  {
    id: 2,
    brand: 'LUMĒ',
    product: 'Vitamin C Brightening Serum',
    category: 'Skincare',
    payout: 120,
    status: 'OPEN',
    color: '#1a180e',
    accent: '#d97706',
    emoji: '✨',
    videosApproved: 3,
    videosTotal: 12,
    brief: 'Morning routine aesthetic. 10–20 seconds. Clean bathroom setting, good natural light. Show product + glowing skin result. Peaceful, premium vibe.',
    platform: 'TikTok · Reels · Pinterest',
    deadline: '2026-06-20',
    enrolled: '2026-05-22',
  },
  {
    id: 3,
    brand: 'STRĪD',
    product: 'Carbon Trail Runner — Black/White',
    category: 'Footwear',
    payout: 220,
    status: 'OPEN',
    color: '#0f1a0f',
    accent: '#16a34a',
    emoji: '👟',
    videosApproved: 7,
    videosTotal: 12,
    brief: 'Performance running content. 20–45 seconds. Trail or track environment. Emphasise shoe detail and movement. Fast cuts, dynamic energy. YouTube Shorts or Reels.',
    platform: 'YouTube Shorts · Reels',
    deadline: '2026-06-10',
    enrolled: '2026-05-20',
  },
  {
    id: 4,
    brand: 'COVE',
    product: '40oz Insulated Bottle — Matte Slate',
    category: 'Lifestyle',
    payout: 90,
    status: 'REVIEWING',
    color: '#0f1520',
    accent: '#0ea5e9',
    emoji: '🫙',
    videosApproved: 10,
    videosTotal: 12,
    brief: 'Minimal lifestyle. Desk setup, hike, or yoga studio. 10–20 seconds. Calm aesthetic, soft audio. Product as part of daily ritual. Reels or TikTok.',
    platform: 'TikTok · Reels',
    deadline: '2026-06-08',
    enrolled: '2026-05-18',
  },
  {
    id: 5,
    brand: 'ARCHĒ',
    product: 'Slim Fit Cargo Trouser — Olive',
    category: 'Apparel',
    payout: 150,
    status: 'OPEN',
    color: '#171a0f',
    accent: '#65a30d',
    emoji: '👖',
    videosApproved: 1,
    videosTotal: 10,
    brief: 'Streetwear editorial. Lookbook-style movement shots. City backdrop. 15–30 seconds. Muted colour grading. TikTok or Reels.',
    platform: 'TikTok · Reels',
    deadline: '2026-06-25',
    enrolled: '2026-05-27',
  },
  {
    id: 6,
    brand: 'NOX',
    product: 'Cold Brew Concentrate — Classic Black',
    category: 'Beverage',
    payout: 100,
    status: 'OPEN',
    color: '#0f0e0e',
    accent: '#92400e',
    emoji: '☕',
    videosApproved: 2,
    videosTotal: 8,
    brief: 'Morning ritual content. Kitchen or café aesthetic. 10–20 seconds. Close-up pouring shots, ice, lifestyle feel. Product featured clearly throughout.',
    platform: 'TikTok · Reels · Pinterest',
    deadline: '2026-06-18',
    enrolled: '2026-05-25',
  },
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

      {/* Header */}
      <div style={{
        paddingTop: '100px',
        paddingBottom: '3rem',
        padding: '100px 2rem 3rem',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        background: '#0A0A0B',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.65rem',
            color: 'rgba(100,103,242,0.6)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            Creator Gallery
          </div>
          <h1 style={{
            fontFamily: 'EB Garamond, serif',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 400,
            color: '#f0f0f8',
            marginBottom: '0.75rem',
            lineHeight: 1.1,
          }}>
            Open briefs. Locked products. Real payouts.
          </h1>
          <p style={{
            fontFamily: 'Raleway, sans-serif',
            fontSize: '0.9rem',
            fontWeight: 300,
            color: 'rgba(240,240,248,0.45)',
            maxWidth: '540px',
          }}>
            Pick a brand. Generate a video ad using their locked product fingerprint. Submit for approval. Get paid — no technical knowledge required.
          </p>
        </div>
      </div>

      {/* Filter bar */}
      <div style={{
        position: 'sticky',
        top: '64px',
        zIndex: 50,
        background: 'rgba(7,7,15,0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        padding: '0 2rem',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          padding: '0.75rem 0',
        }}>
          {/* Categories */}
          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                fontFamily: 'Raleway, sans-serif',
                fontSize: '0.75rem',
                fontWeight: activeCategory === cat ? 500 : 300,
                letterSpacing: '0.05em',
                padding: '6px 14px',
                background: activeCategory === cat ? 'rgba(100,103,242,0.15)' : 'transparent',
                border: `1px solid ${activeCategory === cat ? 'rgba(100,103,242,0.4)' : 'rgba(255,255,255,0.08)'}`,
                color: activeCategory === cat ? '#f0f0f8' : 'rgba(240,240,248,0.45)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              fontFamily: 'Raleway, sans-serif',
              fontSize: '0.72rem',
              color: 'rgba(240,240,248,0.3)',
              letterSpacing: '0.04em',
            }}>
              Sort:
            </span>
            {[
              { val: 'payout', label: 'Highest Payout' },
              { val: 'newest', label: 'Newest' },
              { val: 'deadline', label: 'Deadline' },
            ].map(({ val, label }) => (
              <button key={val} onClick={() => setSortBy(val)} style={{
                fontFamily: 'Raleway, sans-serif',
                fontSize: '0.72rem',
                fontWeight: sortBy === val ? 500 : 300,
                color: sortBy === val ? '#f0f0f8' : 'rgba(240,240,248,0.35)',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '4px 8px',
                transition: 'color 0.2s ease',
              }}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery grid */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 2rem',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.5px',
          background: 'rgba(255,255,255,0.04)',
        }}>
          {filtered.map(campaign => (
            <CampaignCard
              key={campaign.id}
              campaign={campaign}
              onClick={() => setSelectedCampaign(campaign)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '6rem 2rem',
            fontFamily: 'Raleway, sans-serif',
            fontSize: '0.9rem',
            fontWeight: 300,
            color: 'rgba(240,240,248,0.3)',
          }}>
            No open campaigns in this category right now. Check back soon.
          </div>
        )}
      </div>

      {/* Campaign Detail Modal */}
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
    <div
      onClick={onClick}
      style={{
        background: '#0D0D0E',
        padding: '2rem',
        cursor: 'pointer',
        transition: 'background 0.25s ease',
        position: 'relative',
      }}
      onMouseEnter={e => e.currentTarget.style.background = '#161618'}
      onMouseLeave={e => e.currentTarget.style.background = '#0D0D0E'}
    >
      {/* Status */}
      <div style={{
        position: 'absolute',
        top: '1.5rem', right: '1.5rem',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.58rem',
        letterSpacing: '0.1em',
        padding: '3px 8px',
        background: campaign.status === 'OPEN' ? 'rgba(34,197,94,0.08)' : 'rgba(234,179,8,0.08)',
        border: `1px solid ${campaign.status === 'OPEN' ? 'rgba(34,197,94,0.25)' : 'rgba(234,179,8,0.25)'}`,
        color: campaign.status === 'OPEN' ? '#22c55e' : '#eab308',
      }}>
        {campaign.status === 'OPEN' ? '● OPEN' : '◐ REVIEWING'}
      </div>

      {/* Product icon */}
      <div style={{
        width: '64px', height: '64px',
        background: campaign.color,
        border: `1px solid ${campaign.accent}20`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.75rem',
        marginBottom: '1.5rem',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', inset: '-5px',
          border: `1px solid ${campaign.accent}25`,
          borderRadius: '50%',
          animation: 'fingerprint-pulse 4s ease-in-out infinite',
        }} />
        {campaign.emoji}
      </div>

      {/* Brand + category */}
      <div style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.6rem',
        color: 'rgba(240,240,248,0.28)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        marginBottom: '0.4rem',
      }}>
        {campaign.brand} · {campaign.category}
      </div>

      {/* Product name */}
      <div style={{
        fontFamily: 'EB Garamond, serif',
        fontSize: '1.15rem',
        color: '#f0f0f8',
        lineHeight: 1.3,
        marginBottom: '0.75rem',
      }}>
        {campaign.product}
      </div>

      {/* Brief preview */}
      <p style={{
        fontFamily: 'Raleway, sans-serif',
        fontSize: '0.78rem',
        fontWeight: 300,
        color: 'rgba(240,240,248,0.4)',
        lineHeight: 1.6,
        marginBottom: '1.5rem',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }}>
        {campaign.brief}
      </p>

      {/* Progress bar */}
      <div style={{ marginBottom: '1.25rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '6px',
        }}>
          <span style={{
            fontFamily: 'Raleway, sans-serif',
            fontSize: '0.7rem',
            fontWeight: 300,
            color: 'rgba(240,240,248,0.3)',
          }}>
            {campaign.videosApproved}/{campaign.videosTotal} videos approved
          </span>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.62rem',
            color: 'rgba(240,240,248,0.25)',
          }}>
            {slotsLeft} slots left
          </span>
        </div>
        <div style={{
          height: '2px',
          background: 'rgba(255,255,255,0.06)',
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            background: campaign.accent,
            transition: 'width 0.5s ease',
          }} />
        </div>
      </div>

      {/* Payout + platform */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingTop: '1rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div>
          <div style={{
            fontFamily: 'EB Garamond, serif',
            fontSize: '1.6rem',
            color: '#f0f0f8',
          }}>
            ${campaign.payout}
          </div>
          <div style={{
            fontFamily: 'Raleway, sans-serif',
            fontSize: '0.68rem',
            fontWeight: 300,
            color: 'rgba(240,240,248,0.3)',
          }}>
            per approved video
          </div>
        </div>
        <div style={{
          fontFamily: 'Raleway, sans-serif',
          fontSize: '0.68rem',
          fontWeight: 300,
          color: 'rgba(240,240,248,0.28)',
          textAlign: 'right',
        }}>
          {campaign.platform}
        </div>
      </div>
    </div>
  )
}

function CampaignModal({ campaign, onClose }) {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
    }}>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10,10,11,0.88)',
          backdropFilter: 'blur(8px)',
        }}
      />

      {/* Modal */}
      <div style={{
        position: 'relative',
        background: '#131315',
        border: '1px solid rgba(255,255,255,0.08)',
        maxWidth: '640px',
        width: '100%',
        maxHeight: '85vh',
        overflowY: 'auto',
        padding: '2.5rem',
      }}>
        {/* Close */}
        <button onClick={onClose} style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          background: 'transparent',
          border: 'none',
          color: 'rgba(240,240,248,0.4)',
          cursor: 'pointer',
          fontSize: '1.2rem',
          lineHeight: 1,
        }}>
          ✕
        </button>

        {/* Fingerprint ID */}
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.6rem',
          color: 'rgba(100,103,242,0.5)',
          letterSpacing: '0.08em',
          marginBottom: '1.25rem',
        }}>
          FINGERPRINT_ID: {campaign.brand.toLowerCase()}_{campaign.id}_locked
        </div>

        {/* Brand + Product */}
        <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{campaign.emoji}</div>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.65rem',
          color: 'rgba(240,240,248,0.3)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
        }}>
          {campaign.brand} · {campaign.category}
        </div>
        <h2 style={{
          fontFamily: 'EB Garamond, serif',
          fontSize: '1.8rem',
          fontWeight: 400,
          color: '#f0f0f8',
          marginBottom: '2rem',
          lineHeight: 1.2,
        }}>
          {campaign.product}
        </h2>

        {/* Brief */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          padding: '1.5rem',
          marginBottom: '2rem',
        }}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.6rem',
            color: 'rgba(100,103,242,0.6)',
            letterSpacing: '0.1em',
            marginBottom: '0.75rem',
          }}>
            BRIEF
          </div>
          <p style={{
            fontFamily: 'Raleway, sans-serif',
            fontSize: '0.88rem',
            fontWeight: 300,
            color: 'rgba(240,240,248,0.65)',
            lineHeight: 1.7,
          }}>
            {campaign.brief}
          </p>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'rgba(255,255,255,0.05)',
          marginBottom: '2rem',
        }}>
          {[
            { label: 'Payout', value: `$${campaign.payout}` },
            { label: 'Platform', value: campaign.platform.split('·')[0].trim() },
            { label: 'Deadline', value: campaign.deadline },
          ].map(({ label, value }) => (
            <div key={label} style={{ padding: '1rem', background: '#131315' }}>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.58rem',
                color: 'rgba(240,240,248,0.28)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '4px',
              }}>
                {label}
              </div>
              <div style={{
                fontFamily: 'EB Garamond, serif',
                fontSize: '1.1rem',
                color: '#f0f0f8',
              }}>
                {value}
              </div>
            </div>
          ))}
        </div>

        {/* Locked tags */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.58rem',
            color: 'rgba(240,240,248,0.28)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            Visual Fingerprint
          </div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {['COLOR_LOCKED', 'SILHOUETTE_LOCKED', 'LOGO_LOCKED', 'TEXTURE_LOCKED'].map(tag => (
              <span key={tag} style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.58rem',
                color: 'rgba(100,103,242,0.7)',
                border: '1px solid rgba(100,103,242,0.2)',
                padding: '3px 8px',
                letterSpacing: '0.06em',
              }}>
                ✓ {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Phase 1 creator waitlist CTA */}
        <div style={{
          border: '1px solid rgba(100,103,242,0.2)',
          background: 'rgba(100,103,242,0.05)',
          padding: '1.25rem 1.5rem',
          marginBottom: '1rem',
        }}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.6rem',
            color: 'rgba(100,103,242,0.6)',
            letterSpacing: '0.1em',
            marginBottom: '0.5rem',
          }}>
            PHASE 1 — CREATOR ACCESS OPENING SOON
          </div>
          <p style={{
            fontFamily: 'Raleway, sans-serif',
            fontSize: '0.82rem',
            fontWeight: 300,
            color: 'rgba(240,240,248,0.5)',
            lineHeight: 1.6,
            marginBottom: '1rem',
          }}>
            Generation is not open yet — we're seeding 3–5 brands first so there's real money waiting when creators go live. Join the waitlist and you'll be first in.
          </p>
          <a
            href={`mailto:hello@productvisuallock.com?subject=Creator Waitlist — ${campaign.brand} ${campaign.product}&body=I want to generate videos for this brief.`}
            style={{
              display: 'block',
              width: '100%',
              textAlign: 'center',
              fontFamily: 'Raleway, sans-serif',
              fontSize: '0.8rem',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#0A0A0B',
              background: '#6467F2',
              textDecoration: 'none',
              padding: '12px 24px',
              transition: 'background 0.25s ease',
              boxSizing: 'border-box',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#8083F5'}
            onMouseLeave={e => e.currentTarget.style.background = '#6467F2'}
          >
            Join Creator Waitlist →
          </a>
        </div>

        <p style={{
          fontFamily: 'Raleway, sans-serif',
          fontSize: '0.7rem',
          fontWeight: 300,
          color: 'rgba(240,240,248,0.2)',
          textAlign: 'center',
          lineHeight: 1.6,
        }}>
          Product fingerprint loads automatically when you generate. No technical setup needed.
          <br />
          Watermark applied until brand approval and payment clears via Stripe.
        </p>
      </div>
    </div>
  )
}
