import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

const FAQS = [
  {
    q: 'What format do my product photos need to be?',
    a: 'JPG or PNG, minimum 1000px on the shortest side. We need 10–20 images showing different angles, close-ups of key details (logo, texture, hardware), and ideally shots on both model and flat/hanger.',
  },
  {
    q: 'How long does fingerprinting take?',
    a: 'In Phase 1, turnaround is 48–72 hours from photo receipt. You\'ll get 10 approved demo video frames showing your actual product generated consistently across different scenes.',
  },
  {
    q: 'Do creators have access to my original product photos?',
    a: 'No. Creators interact with the locked fingerprint (a model file), never the original images. Your IP stays protected. Access is controlled per brief and can be revoked at any time.',
  },
  {
    q: 'What if I don\'t approve any submitted videos?',
    a: 'You only pay for videos you approve. If nothing meets your brief, you owe nothing. In Phase 1, we work with you directly to set a brief that will generate strong submissions.',
  },
  {
    q: 'What products work best?',
    a: 'In Phase 1 we recommend starting with solid-colour garments, clean-label bottles, or footwear. Patterned fabrics and fine-text logos are harder for the current pipeline — we\'ll be transparent if your product is a harder case.',
  },
  {
    q: 'How does the creator payout work?',
    a: 'Brands pre-fund campaigns. Stripe Connect holds funds in escrow. When you approve a video, the creator is automatically paid their payout minus the platform cut (15–20%). No manual transfers.',
  },
]

export default function ForBrands() {
  const [openFaq, setOpenFaq] = useState(null)
  const [formData, setFormData] = useState({
    brandName: '',
    email: '',
    product: '',
    website: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    // Phase 1: just captures intent — real submission handled manually
    setSubmitted(true)
  }

  return (
    <>
      <Head>
        <title>For Brands — Product Visual Lock</title>
      </Head>

      <Navbar />

      {/* Hero */}
      <section style={{
        paddingTop: '120px',
        paddingBottom: '6rem',
        padding: '120px 2rem 6rem',
        background: '#0A0A0B',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '10%', left: '60%',
          width: '600px', height: '600px',
          background: 'radial-gradient(ellipse, rgba(100,103,242,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.65rem',
            color: 'rgba(100,103,242,0.6)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
            <span style={{ width: '24px', height: '1px', background: 'rgba(100,103,242,0.5)', display: 'inline-block' }} />
            For Brands
          </div>

          <h1 style={{
            fontFamily: 'EB Garamond, serif',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            color: '#f0f0f8',
            maxWidth: '800px',
            marginBottom: '1.5rem',
          }}>
            Your product, locked.
            <br />
            <span style={{
              color: 'rgba(240,240,248,0.4)',
              fontStyle: 'italic',
            }}>
              Every AI ad, consistent.
            </span>
          </h1>

          <p style={{
            fontFamily: 'Raleway, sans-serif',
            fontSize: '1rem',
            fontWeight: 300,
            color: 'rgba(240,240,248,0.5)',
            maxWidth: '560px',
            lineHeight: 1.75,
            marginBottom: '3rem',
          }}>
            Upload your product photos once. We create a visual fingerprint using IP-Adapter and LoRA fine-tuning. From that point forward, every AI-generated video ad shows your real product — not a hallucination.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#enroll" style={{
              fontFamily: 'Raleway, sans-serif',
              fontSize: '0.85rem',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#0A0A0B',
              textDecoration: 'none',
              padding: '14px 32px',
              background: '#6467F2',
              boxShadow: '0 8px 32px rgba(100,103,242,0.35)',
              transition: 'all 0.3s ease',
              display: 'inline-block',
            }}>
              Enroll Your Product →
            </a>
            <a href="#how" style={{
              fontFamily: 'Raleway, sans-serif',
              fontSize: '0.85rem',
              fontWeight: 300,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'rgba(240,240,248,0.5)',
              textDecoration: 'none',
              padding: '14px 24px',
              border: '1px solid rgba(255,255,255,0.1)',
              transition: 'all 0.3s ease',
              display: 'inline-block',
            }}>
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Why brands care */}
      <section style={{
        padding: '6rem 2rem',
        background: '#111112',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5px',
            background: 'rgba(255,255,255,0.05)',
          }}>
            {[
              { stat: '10x', label: 'More consistent', desc: 'Every creator, every generation, every platform. Your product looks the same.' },
              { stat: '$0', label: 'Wasted on bad videos', desc: 'You only pay when you approve. No approval, no charge. No risk.' },
              { stat: '48h', label: 'To fingerprint your product', desc: 'Send us your photos on Monday. Your fingerprint is locked by Wednesday.' },
              { stat: '∞', label: 'Generations from one fingerprint', desc: 'Enroll once. The fingerprint works across every brief, every creator, every scene.' },
            ].map(({ stat, label, desc }) => (
              <div key={stat} style={{ padding: '2.5rem', background: '#111112' }}>
                <div style={{
                  fontFamily: 'EB Garamond, serif',
                  fontSize: '2.8rem',
                  fontWeight: 400,
                  color: '#f0f0f8',
                  marginBottom: '0.25rem',
                }}>
                  {stat}
                </div>
                <div style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'rgba(100,103,242,0.7)',
                  marginBottom: '0.75rem',
                }}>
                  {label}
                </div>
                <p style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontSize: '0.83rem',
                  fontWeight: 300,
                  color: 'rgba(240,240,248,0.4)',
                  lineHeight: 1.65,
                }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works for brands */}
      <section id="how" style={{
        padding: '7rem 2rem',
        background: '#0A0A0B',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.65rem',
            color: 'rgba(100,103,242,0.6)',
            letterSpacing: '0.1em',
            marginBottom: '1.5rem',
          }}>
            — PROCESS
          </div>
          <h2 style={{
            fontFamily: 'EB Garamond, serif',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 400,
            color: '#f0f0f8',
            marginBottom: '4rem',
            lineHeight: 1.15,
          }}>
            Four steps from photos to campaign.
          </h2>

          {[
            {
              n: '01',
              title: 'Send Us Your Product Photos',
              body: '10–20 high-res images from multiple angles. Flat, model, close-ups of logos and texture. JPG or PNG. We\'ll guide you on what we need for clean fingerprinting.',
              detail: 'JPG/PNG · Min 1000px shortest side · Multiple angles required',
            },
            {
              n: '02',
              title: 'We Run the Fingerprint Pipeline',
              body: 'Our team runs IP-Adapter + LoRA fine-tuning on your product images. This creates a visual identity model that captures your product\'s exact colours, silhouette, logo placement, and texture.',
              detail: '48–72 hour turnaround · Hosted on Replicate/Modal · No GPU infra needed on your end',
            },
            {
              n: '03',
              title: 'You Receive 10 Demo Frames',
              body: 'Before going live, we generate 10 AI video frames showing your product in different scenes. You approve the fingerprint quality — if it\'s not right, we iterate. No charge until you\'re satisfied.',
              detail: '10 demo frames delivered · Review and approve · Iterate if needed',
            },
            {
              n: '04',
              title: 'Set Your Brief and Fund Your Campaign',
              body: 'Write your brief: what scene, what platform, what feel. Set a payout per approved video. Fund the campaign via Stripe. Your brief goes live to creators — your product fingerprint loads automatically into every generation.',
              detail: 'Stripe-powered escrow · Payout per approval · Brief management dashboard (Phase 2)',
            },
          ].map((step, i) => (
            <div key={step.n} style={{
              display: 'flex',
              gap: '2rem',
              paddingBottom: i < 3 ? '3rem' : 0,
              borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              marginBottom: i < 3 ? '3rem' : 0,
            }}>
              <div style={{
                width: '48px',
                flexShrink: 0,
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.65rem',
                color: 'rgba(100,103,242,0.5)',
                letterSpacing: '0.06em',
                paddingTop: '4px',
              }}>
                {step.n}
              </div>
              <div>
                <div style={{
                  fontFamily: 'EB Garamond, serif',
                  fontSize: '1.4rem',
                  color: '#f0f0f8',
                  marginBottom: '0.75rem',
                }}>
                  {step.title}
                </div>
                <p style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontSize: '0.88rem',
                  fontWeight: 300,
                  color: 'rgba(240,240,248,0.5)',
                  lineHeight: 1.7,
                  marginBottom: '0.75rem',
                }}>
                  {step.body}
                </p>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.6rem',
                  color: 'rgba(100,103,242,0.4)',
                  letterSpacing: '0.06em',
                }}>
                  {step.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{
        padding: '7rem 2rem',
        background: '#111112',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.65rem',
            color: 'rgba(100,103,242,0.6)',
            letterSpacing: '0.1em',
            marginBottom: '1.5rem',
          }}>
            — FAQ
          </div>
          <h2 style={{
            fontFamily: 'EB Garamond, serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 400,
            color: '#f0f0f8',
            marginBottom: '3rem',
            lineHeight: 1.15,
          }}>
            Common questions.
          </h2>

          {FAQS.map((faq, i) => (
            <div key={i} style={{
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.5rem 0',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontSize: '0.92rem',
                  fontWeight: 400,
                  color: openFaq === i ? '#f0f0f8' : 'rgba(240,240,248,0.7)',
                  lineHeight: 1.5,
                }}>
                  {faq.q}
                </span>
                <span style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.9rem',
                  color: 'rgba(100,103,242,0.6)',
                  flexShrink: 0,
                  transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)',
                  transition: 'transform 0.25s ease',
                  marginTop: '2px',
                }}>
                  +
                </span>
              </button>
              {openFaq === i && (
                <div style={{
                  paddingBottom: '1.5rem',
                  fontFamily: 'Raleway, sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 300,
                  color: 'rgba(240,240,248,0.45)',
                  lineHeight: 1.7,
                }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Enrollment form */}
      <section id="enroll" style={{
        padding: '7rem 2rem',
        background: '#0A0A0B',
      }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.65rem',
            color: 'rgba(100,103,242,0.6)',
            letterSpacing: '0.1em',
            marginBottom: '1.5rem',
          }}>
            — ENROLL YOUR PRODUCT
          </div>
          <h2 style={{
            fontFamily: 'EB Garamond, serif',
            fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
            fontWeight: 400,
            color: '#f0f0f8',
            marginBottom: '0.75rem',
            lineHeight: 1.15,
          }}>
            Phase 1 — limited to 5 brands.
          </h2>
          <p style={{
            fontFamily: 'Raleway, sans-serif',
            fontSize: '0.88rem',
            fontWeight: 300,
            color: 'rgba(240,240,248,0.45)',
            lineHeight: 1.7,
            marginBottom: '3rem',
          }}>
            Fill this in and we'll be in touch within 24 hours to scope your enrollment. $500–$1,500 depending on product complexity.
          </p>

          {submitted ? (
            <div style={{
              border: '1px solid rgba(34,197,94,0.25)',
              background: 'rgba(34,197,94,0.06)',
              padding: '3rem',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✓</div>
              <div style={{
                fontFamily: 'EB Garamond, serif',
                fontSize: '1.5rem',
                color: '#f0f0f8',
                marginBottom: '0.75rem',
              }}>
                We've got your details.
              </div>
              <p style={{
                fontFamily: 'Raleway, sans-serif',
                fontSize: '0.85rem',
                fontWeight: 300,
                color: 'rgba(240,240,248,0.45)',
              }}>
                Expect a message within 24 hours to kick off your enrollment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <FormField
                  label="Brand Name"
                  value={formData.brandName}
                  onChange={v => setFormData(p => ({ ...p, brandName: v }))}
                  required
                />
                <FormField
                  label="Your Email"
                  type="email"
                  value={formData.email}
                  onChange={v => setFormData(p => ({ ...p, email: v }))}
                  required
                />
              </div>
              <FormField
                label="Product to Enroll"
                placeholder="e.g. Oversized Hoodie — Black"
                value={formData.product}
                onChange={v => setFormData(p => ({ ...p, product: v }))}
                required
                style={{ marginBottom: '1rem' }}
              />
              <FormField
                label="Website or Shopify URL"
                type="url"
                value={formData.website}
                onChange={v => setFormData(p => ({ ...p, website: v }))}
                style={{ marginBottom: '1rem' }}
              />
              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.6rem',
                  letterSpacing: '0.08em',
                  color: 'rgba(240,240,248,0.35)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '8px',
                }}>
                  Anything else we should know
                </label>
                <textarea
                  value={formData.message}
                  onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                  rows={4}
                  placeholder="Tell us about your product, your current ad strategy, and what inconsistency is costing you..."
                  style={{
                    width: '100%',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#f0f0f8',
                    fontFamily: 'Raleway, sans-serif',
                    fontSize: '0.85rem',
                    fontWeight: 300,
                    padding: '12px 16px',
                    resize: 'vertical',
                    outline: 'none',
                  }}
                />
              </div>

              <button type="submit" style={{
                width: '100%',
                fontFamily: 'Raleway, sans-serif',
                fontSize: '0.85rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#0A0A0B',
                background: '#6467F2',
                border: 'none',
                padding: '14px 24px',
                cursor: 'pointer',
                boxShadow: '0 8px 32px rgba(100,103,242,0.3)',
                transition: 'all 0.3s ease',
              }}>
                Submit Enrollment Request →
              </button>

              <p style={{
                fontFamily: 'Raleway, sans-serif',
                fontSize: '0.72rem',
                fontWeight: 300,
                color: 'rgba(240,240,248,0.25)',
                textAlign: 'center',
                marginTop: '1rem',
              }}>
                We'll respond within 24 hours. No commitment until you approve the fingerprint demo.
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
      <label style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.6rem',
        letterSpacing: '0.08em',
        color: 'rgba(240,240,248,0.35)',
        textTransform: 'uppercase',
        display: 'block',
        marginBottom: '8px',
      }}>
        {label}{required && ' *'}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        style={{
          width: '100%',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          color: '#f0f0f8',
          fontFamily: 'Raleway, sans-serif',
          fontSize: '0.85rem',
          fontWeight: 300,
          padding: '10px 14px',
          outline: 'none',
          transition: 'border-color 0.2s ease',
        }}
        onFocus={e => e.target.style.borderColor = 'rgba(100,103,242,0.4)'}
        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
      />
    </div>
  )
}
