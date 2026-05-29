import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

const FAQS = [
  {
    q: 'What format do my product photos need to be?',
    a: 'JPG or PNG, minimum 1000px on the shortest side. We require 10–20 images covering different angles, close-ups of key details (logo, texture, hardware), and ideally images both on-model and flat/hanger.',
  },
  {
    q: 'How long does the fingerprinting process take?',
    a: 'In Phase 1, turnaround is 48–72 hours from photo receipt. You will receive 10 approved demo video frames demonstrating your actual product generated consistently across different scenes.',
  },
  {
    q: 'Do creators have access to my original product photos?',
    a: 'No. Creators interact only with the locked fingerprint model file, never the original images. Your intellectual property is protected. Access is controlled per brief and can be revoked at any time.',
  },
  {
    q: 'What if I do not approve any submitted videos?',
    a: 'You pay only for videos you approve. If no submission meets your brief, you owe nothing. In Phase 1, we work with you directly to define a brief that will generate strong submissions.',
  },
  {
    q: 'What product types are best suited to Phase 1?',
    a: 'We recommend starting with solid-colour garments, clean-label bottles, or footwear. Patterned fabrics and fine-text logos are more demanding for the current pipeline — we will advise you candidly if your product presents additional complexity.',
  },
  {
    q: 'How does creator payment work?',
    a: 'Brands pre-fund campaigns. Stripe Connect holds funds in escrow. When you approve a video, the creator is paid their agreed payout automatically, minus the platform fee (15–20%). No manual transfers are required.',
  },
]

export default function ForBrands() {
  const [openFaq, setOpenFaq] = useState(null)
  const [formData, setFormData] = useState({ brandName: '', email: '', product: '', website: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Head>
        <title>For Brands — Product Visual Lock</title>
      </Head>

      <Navbar />

      {/* Hero */}
      <section style={{ paddingTop: '120px', paddingBottom: '6rem', padding: '120px 2rem 6rem', background: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', left: '60%', width: '600px', height: '600px', background: 'radial-gradient(ellipse, rgba(85,88,227,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: '#5558E3', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '20px', height: '1px', background: '#5558E3', display: 'inline-block' }} />
            For Brands
          </div>

          <h1 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1.08, color: '#0F0F14', maxWidth: '760px', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
            Your product, locked. Every AI ad, consistent.
          </h1>

          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '1rem', fontWeight: 400, color: '#6B7080', maxWidth: '520px', lineHeight: 1.75, marginBottom: '3rem' }}>
            Submit your product photos once. We create a visual fingerprint using IP-Adapter and LoRA fine-tuning. From that point forward, every AI-generated video ad displays your actual product — not a hallucination.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#enroll" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.85rem', fontWeight: 600, color: '#FFFFFF', textDecoration: 'none', padding: '13px 28px', background: '#5558E3', transition: 'all 0.25s ease', display: 'inline-block', letterSpacing: '-0.01em' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#4446C5'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#5558E3'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Enroll Your Product →
            </a>
            <a href="#how" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.85rem', fontWeight: 500, color: '#6B7080', textDecoration: 'none', padding: '13px 22px', border: '1px solid rgba(0,0,0,0.12)', transition: 'all 0.25s ease', display: 'inline-block' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.25)'; e.currentTarget.style.color = '#0F0F14' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)'; e.currentTarget.style.color = '#6B7080' }}
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '6rem 2rem', background: '#F7F8FA', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', background: 'rgba(0,0,0,0.07)' }}>
            {[
              { stat: '10x', label: 'More consistent', desc: 'Every creator, every generation, every platform. Your product appears identical.' },
              { stat: '$0', label: 'Wasted on rejected videos', desc: 'You pay only on approval. No approval, no charge. No financial risk.' },
              { stat: '48h', label: 'To fingerprint your product', desc: 'Submit photos on Monday. Your fingerprint is locked and ready by Wednesday.' },
              { stat: '∞', label: 'Generations from one fingerprint', desc: 'Enrol once. The fingerprint applies across every brief, every creator, every scene.' },
            ].map(({ stat, label, desc }) => (
              <div key={stat} style={{ padding: '2.5rem', background: '#F7F8FA' }}>
                <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '2.5rem', fontWeight: 700, color: '#0F0F14', marginBottom: '0.25rem', letterSpacing: '-0.03em' }}>{stat}</div>
                <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#5558E3', marginBottom: '0.75rem' }}>{label}</div>
                <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.83rem', fontWeight: 400, color: '#6B7080', lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="how" style={{ padding: '7rem 2rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: '#5558E3', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>— PROCESS</div>
          <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: '#0F0F14', marginBottom: '4rem', lineHeight: 1.12, letterSpacing: '-0.025em' }}>
            Four steps from product photos to live campaign.
          </h2>

          {[
            { n: '01', title: 'Submit Your Product Photos', body: '10–20 high-resolution images from multiple angles. Flat lay, on-model, and close-ups of logos and texture. JPG or PNG. We will guide you precisely on what we need.', detail: 'JPG/PNG · Min 1000px shortest side · Multiple angles required' },
            { n: '02', title: 'We Run the Fingerprint Pipeline', body: 'Our team applies IP-Adapter + LoRA fine-tuning to your product images. This produces a visual identity model that captures your product\'s exact colours, silhouette, logo placement, and surface texture.', detail: '48–72 hour turnaround · Hosted on Replicate/Modal · No GPU infrastructure required on your end' },
            { n: '03', title: 'Review 10 Demo Frames', body: 'Before going live, we generate 10 AI video frames showing your product across different scenes. You review and approve the fingerprint quality. If any aspect is incorrect, we iterate at no additional charge.', detail: '10 demo frames delivered · Review and approve · Revisions included' },
            { n: '04', title: 'Set Your Brief and Fund the Campaign', body: 'Define the creative direction: scene, platform, tone. Set a payout per approved video. Fund the campaign via Stripe. Your brief is distributed to creators, with the product fingerprint loading automatically into every generation.', detail: 'Stripe-powered escrow · Per-approval pricing · Brief management dashboard in Phase 2' },
          ].map((step, i) => (
            <div key={step.n} style={{ display: 'flex', gap: '2rem', paddingBottom: i < 3 ? '3rem' : 0, borderBottom: i < 3 ? '1px solid rgba(0,0,0,0.07)' : 'none', marginBottom: i < 3 ? '3rem' : 0 }}>
              <div style={{ width: '44px', flexShrink: 0, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: '#5558E3', letterSpacing: '0.06em', paddingTop: '4px' }}>{step.n}</div>
              <div>
                <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '1.15rem', fontWeight: 600, color: '#0F0F14', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>{step.title}</div>
                <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.88rem', fontWeight: 400, color: '#6B7080', lineHeight: 1.7, marginBottom: '0.75rem' }}>{step.body}</p>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem', color: '#9CA3AF', letterSpacing: '0.05em' }}>{step.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '7rem 2rem', background: '#F7F8FA', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: '#5558E3', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>— FAQ</div>
          <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#0F0F14', marginBottom: '3rem', lineHeight: 1.12, letterSpacing: '-0.025em' }}>
            Common questions.
          </h2>

          {FAQS.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', padding: '1.5rem 0', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.92rem', fontWeight: 500, color: openFaq === i ? '#0F0F14' : '#6B7080', lineHeight: 1.5 }}>{faq.q}</span>
                <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '1rem', fontWeight: 400, color: '#5558E3', flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.2s ease', marginTop: '1px' }}>+</span>
              </button>
              {openFaq === i && (
                <div style={{ paddingBottom: '1.5rem', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.85rem', fontWeight: 400, color: '#6B7080', lineHeight: 1.7 }}>{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Enrollment form */}
      <section id="enroll" style={{ padding: '7rem 2rem', background: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
        <div style={{ maxWidth: '660px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: '#5558E3', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>— ENROLL YOUR PRODUCT</div>
          <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#0F0F14', marginBottom: '0.75rem', lineHeight: 1.12, letterSpacing: '-0.025em' }}>
            Phase 1 — limited to 5 brands.
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.88rem', fontWeight: 400, color: '#6B7080', lineHeight: 1.7, marginBottom: '3rem' }}>
            Complete this form and we will respond within 24 hours to scope your enrollment. Pricing is $500–$1,500 depending on product complexity.
          </p>

          {submitted ? (
            <div style={{ border: '1px solid rgba(22,163,74,0.2)', background: 'rgba(22,163,74,0.04)', padding: '3rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>✓</div>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '1.3rem', fontWeight: 600, color: '#0F0F14', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>Enrollment request received.</div>
              <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.85rem', fontWeight: 400, color: '#6B7080' }}>Expect a response within 24 hours to begin your enrollment.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <FormField label="Brand Name" value={formData.brandName} onChange={v => setFormData(p => ({ ...p, brandName: v }))} required />
                <FormField label="Your Email" type="email" value={formData.email} onChange={v => setFormData(p => ({ ...p, email: v }))} required />
              </div>
              <FormField label="Product to Enroll" placeholder="e.g. Oversized Hoodie — Black" value={formData.product} onChange={v => setFormData(p => ({ ...p, product: v }))} required style={{ marginBottom: '1rem' }} />
              <FormField label="Website or Shopify URL" type="url" value={formData.website} onChange={v => setFormData(p => ({ ...p, website: v }))} style={{ marginBottom: '1rem' }} />
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.03em', color: '#9CA3AF', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  Additional context
                </label>
                <textarea value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} rows={4} placeholder="Describe your product, your current advertising approach, and where visual inconsistency is impacting your brand..." style={{ width: '100%', background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.12)', color: '#0F0F14', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.85rem', fontWeight: 400, padding: '12px 16px', resize: 'vertical', outline: 'none', transition: 'border-color 0.2s ease' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(85,88,227,0.4)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,0.12)'}
                />
              </div>

              <button type="submit" style={{ width: '100%', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.88rem', fontWeight: 600, color: '#FFFFFF', background: '#5558E3', border: 'none', padding: '14px 24px', cursor: 'pointer', transition: 'background 0.2s ease', letterSpacing: '-0.01em' }}
                onMouseEnter={e => e.currentTarget.style.background = '#4446C5'}
                onMouseLeave={e => e.currentTarget.style.background = '#5558E3'}
              >
                Submit Enrollment Request →
              </button>

              <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.72rem', fontWeight: 400, color: '#9CA3AF', textAlign: 'center', marginTop: '1rem' }}>
                We will respond within 24 hours. No commitment is required until you approve the fingerprint demo.
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}

function FormField({ label, value, onChange, type = 'text', placeholder, required, style }) {
  return (
    <div style={style}>
      <label style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.03em', color: '#9CA3AF', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
        {label}{required && ' *'}
      </label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} required={required}
        style={{ width: '100%', background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.12)', color: '#0F0F14', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.85rem', fontWeight: 400, padding: '10px 14px', outline: 'none', transition: 'border-color 0.2s ease' }}
        onFocus={e => e.target.style.borderColor = 'rgba(85,88,227,0.4)'}
        onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,0.12)'}
      />
    </div>
  )
}
