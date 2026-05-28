import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const GALLERY_PREVIEW = [
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
    videosRemaining: 12,
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
    videosRemaining: 9,
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
    videosRemaining: 5,
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
    videosRemaining: 2,
  },
]

const STEPS_BRAND = [
  { n: '01', title: 'Upload Product Photos', body: 'Send us 10–20 high-res images of your product from multiple angles. Raw is fine.' },
  { n: '02', title: 'We Lock the Fingerprint', body: 'Our IP-Adapter + LoRA pipeline creates a visual identity model of your exact product — colours, textures, logo, details.' },
  { n: '03', title: 'You Set the Brief', body: 'Describe the video you want. Scene, mood, platform. Set your payout per approved video and fund the campaign.' },
  { n: '04', title: 'Creators Generate, You Approve', body: 'AI creators submit videos. Your product always looks like your real product. You approve what you love and pay only for those.' },
]

const STEPS_CREATOR = [
  { n: '01', title: 'Browse Open Briefs', body: 'Filter by category, payout, or brand. See exactly what each brand needs.' },
  { n: '02', title: 'Generate Your Video', body: 'Pick a product, write your scene description, hit generate. The locked fingerprint means the product is always visually correct — no technical setup needed.' },
  { n: '03', title: 'Submit for Approval', body: 'Upload your video. Watermark is applied automatically until payment clears.' },
  { n: '04', title: 'Get Paid on Approval', body: 'Brand approves → payment releases via Stripe Connect → you receive your payout automatically.' },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Product Visual Lock — Your Product. Every AI Ad. Consistent.</title>
      </Head>

      <Navbar />

      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '8rem 2rem 6rem',
        position: 'relative',
        overflow: 'hidden',
        background: '#07070f',
      }}>
        {/* Grid background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(90,79,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(90,79,255,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }} />

        {/* Radial glow */}
        <div style={{
          position: 'absolute',
          top: '30%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px', height: '500px',
          background: 'radial-gradient(ellipse, rgba(90,79,255,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Status chip */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          border: '1px solid rgba(90,79,255,0.35)',
          background: 'rgba(90,79,255,0.08)',
          padding: '6px 16px',
          marginBottom: '2.5rem',
          position: 'relative',
        }}>
          <span style={{
            width: '6px', height: '6px',
            background: '#5a4fff',
            borderRadius: '50%',
            animation: 'fingerprint-pulse 2s ease-in-out infinite',
          }} />
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.7rem',
            color: 'rgba(90,79,255,0.9)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            Now enrolling brands — Phase 1 open
          </span>
        </div>

        {/* Main headline */}
        <h1 style={{
          fontFamily: 'EB Garamond, Georgia, serif',
          fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
          fontWeight: 400,
          lineHeight: 1.08,
          letterSpacing: '-0.02em',
          color: '#f0f0f8',
          maxWidth: '900px',
          marginBottom: '1.5rem',
          position: 'relative',
        }}>
          Your product.{' '}
          <span style={{
            background: 'linear-gradient(135deg, #a8a0ff 0%, #5a4fff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Every time.
          </span>
          <br />
          Across every AI-generated ad.
        </h1>

        <p style={{
          fontFamily: 'Raleway, sans-serif',
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          fontWeight: 300,
          color: 'rgba(240,240,248,0.55)',
          maxWidth: '620px',
          lineHeight: 1.75,
          marginBottom: '3.5rem',
          position: 'relative',
        }}>
          AI video tools hallucinate your product in every generation. Logos drift. Colorways shift. We lock a visual fingerprint of your product so it looks real and consistent — regardless of who creates the content or what tool they use.
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          position: 'relative',
        }}>
          <Link href="/for-brands" style={{
            fontFamily: 'Raleway, sans-serif',
            fontSize: '0.85rem',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#07070f',
            textDecoration: 'none',
            padding: '14px 32px',
            background: '#5a4fff',
            transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            boxShadow: '0 8px 32px rgba(90,79,255,0.35)',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#7c6fff'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(90,79,255,0.45)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#5a4fff'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(90,79,255,0.35)'
            }}
          >
            Enroll Your Product →
          </Link>
          <Link href="/gallery" style={{
            fontFamily: 'Raleway, sans-serif',
            fontSize: '0.85rem',
            fontWeight: 400,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(240,240,248,0.75)',
            textDecoration: 'none',
            padding: '14px 32px',
            border: '1px solid rgba(255,255,255,0.12)',
            background: 'rgba(255,255,255,0.03)',
            transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
              e.currentTarget.style.color = '#f0f0f8'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
              e.currentTarget.style.color = 'rgba(240,240,248,0.75)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Browse Campaigns
          </Link>
        </div>

        {/* Trust line */}
        <p style={{
          fontFamily: 'Raleway, sans-serif',
          fontSize: '0.75rem',
          fontWeight: 300,
          color: 'rgba(240,240,248,0.25)',
          marginTop: '2rem',
          letterSpacing: '0.04em',
          position: 'relative',
        }}>
          Phase 1 — manual enrollment open · Limited to 5 brands
        </p>
      </section>

      {/* PROBLEM STATEMENT */}
      <section style={{
        padding: '7rem 2rem',
        background: '#0a0a12',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Label>The Problem</Label>
          <h2 style={{
            fontFamily: 'EB Garamond, serif',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 400,
            lineHeight: 1.15,
            color: '#f0f0f8',
            maxWidth: '780px',
            marginBottom: '4rem',
            marginTop: '1.5rem',
          }}>
            AI video tools generate your product differently{' '}
            <em>every single time.</em>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5px',
            background: 'rgba(255,255,255,0.05)',
          }}>
            {[
              { icon: '⚡', stat: '10 creators', desc: '10 different interpretations of your product. Different colors, wrong logos, hallucinated details. Your brand is inconsistent across every video.' },
              { icon: '🎯', stat: '$0 of value', desc: 'Ad spend wasted on videos where your product looks wrong. Customers don\'t recognise the product in-store. The visual brand you\'ve built evaporates.' },
              { icon: '🔒', stat: 'One fingerprint', desc: 'Product Visual Lock creates a permanent visual identity model for your product. Every AI generation, from every creator, using every tool — looks like your real product.' },
            ].map(({ icon, stat, desc }) => (
              <div key={stat} style={{
                padding: '2.5rem',
                background: '#0a0a12',
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{icon}</div>
                <div style={{
                  fontFamily: 'EB Garamond, serif',
                  fontSize: '1.6rem',
                  fontWeight: 400,
                  color: '#f0f0f8',
                  marginBottom: '0.75rem',
                }}>
                  {stat}
                </div>
                <p style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontSize: '0.88rem',
                  fontWeight: 300,
                  color: 'rgba(240,240,248,0.5)',
                  lineHeight: 1.7,
                }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{
        padding: '7rem 2rem',
        background: '#07070f',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Label>How It Works</Label>
          <h2 style={sectionHeadingStyle}>
            Two sides. One visual standard.
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
            gap: '3rem',
            marginTop: '4rem',
          }}>
            {/* Brand track */}
            <div>
              <div style={{
                fontFamily: 'Raleway, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#5a4fff',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <span style={{ width: '20px', height: '1px', background: '#5a4fff', display: 'inline-block' }} />
                For Brands
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {STEPS_BRAND.map((step, i) => (
                  <StepRow key={step.n} step={step} last={i === STEPS_BRAND.length - 1} />
                ))}
              </div>
            </div>

            {/* Creator track */}
            <div>
              <div style={{
                fontFamily: 'Raleway, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(240,240,248,0.4)',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <span style={{ width: '20px', height: '1px', background: 'rgba(240,240,248,0.4)', display: 'inline-block' }} />
                For Creators
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {STEPS_CREATOR.map((step, i) => (
                  <StepRow key={step.n} step={step} last={i === STEPS_CREATOR.length - 1} dim />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section style={{
        padding: '7rem 2rem',
        background: '#08080f',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}>
            <div>
              <Label>Live Campaigns</Label>
              <h2 style={{ ...sectionHeadingStyle, marginTop: '0.75rem', marginBottom: 0 }}>
                Open briefs, ready to generate.
              </h2>
            </div>
            <Link href="/gallery" style={{
              fontFamily: 'Raleway, sans-serif',
              fontSize: '0.78rem',
              fontWeight: 400,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(240,240,248,0.5)',
              textDecoration: 'none',
              transition: 'color 0.25s ease',
            }}
              onMouseEnter={e => e.target.style.color = '#f0f0f8'}
              onMouseLeave={e => e.target.style.color = 'rgba(240,240,248,0.5)'}
            >
              View all campaigns →
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: '1.5px',
            background: 'rgba(255,255,255,0.05)',
          }}>
            {GALLERY_PREVIEW.map(item => (
              <GalleryCardMini key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* PROOF OF CONCEPT: BEYZO */}
      <section style={{
        padding: '7rem 2rem',
        background: '#07070f',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Label>Proof of Concept</Label>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
            marginTop: '3rem',
          }}>
            <div>
              <h2 style={sectionHeadingStyle}>
                BEYZO was the first product we locked.
              </h2>
              <p style={bodyStyle}>
                BEYZO is a clothing brand. We enrolled the Oversized Drop-Shoulder Hoodie as the first proof of concept — running the full IP-Adapter + LoRA pipeline on our own product before asking any brand to trust us with theirs.
              </p>
              <p style={{ ...bodyStyle, marginTop: '1.25rem' }}>
                The result: every AI-generated frame shows the same hoodie. Same colorway. Same silhouette. Same brand DNA — regardless of the scene, the creator, or the generation tool.
              </p>
              <div style={{ marginTop: '2.5rem', display: 'flex', gap: '2rem' }}>
                {[
                  { val: '10+', label: 'Product photos enrolled' },
                  { val: '100%', label: 'Visual consistency' },
                  { val: '~48h', label: 'Time to lock fingerprint' },
                ].map(({ val, label }) => (
                  <div key={label}>
                    <div style={{
                      fontFamily: 'EB Garamond, serif',
                      fontSize: '2rem',
                      fontWeight: 400,
                      color: '#f0f0f8',
                    }}>{val}</div>
                    <div style={{
                      fontFamily: 'Raleway, sans-serif',
                      fontSize: '0.75rem',
                      fontWeight: 300,
                      color: 'rgba(240,240,248,0.4)',
                      letterSpacing: '0.04em',
                      marginTop: '2px',
                    }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual: Fingerprint card */}
            <div style={{
              border: '1px solid rgba(90,79,255,0.2)',
              background: 'rgba(90,79,255,0.04)',
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Animated ring */}
              <div style={{
                position: 'absolute',
                top: '-60px', right: '-60px',
                width: '240px', height: '240px',
                border: '1px solid rgba(90,79,255,0.15)',
                borderRadius: '50%',
                animation: 'fingerprint-pulse 4s ease-in-out infinite',
              }} />
              <div style={{
                position: 'absolute',
                top: '-30px', right: '-30px',
                width: '180px', height: '180px',
                border: '1px solid rgba(90,79,255,0.1)',
                borderRadius: '50%',
                animation: 'fingerprint-pulse 4s ease-in-out infinite 1s',
              }} />

              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.65rem',
                color: 'rgba(90,79,255,0.6)',
                letterSpacing: '0.08em',
                marginBottom: '1.5rem',
              }}>
                FINGERPRINT_ID: beyzo_hoodie_v1_20260528
              </div>

              <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🧥</div>

              <div style={{
                fontFamily: 'EB Garamond, serif',
                fontSize: '1.4rem',
                color: '#f0f0f8',
                marginBottom: '0.5rem',
              }}>
                BEYZO — Oversized Hoodie
              </div>
              <div style={{
                fontFamily: 'Raleway, sans-serif',
                fontSize: '0.8rem',
                fontWeight: 300,
                color: 'rgba(240,240,248,0.4)',
                marginBottom: '2rem',
              }}>
                Drop-shoulder · Heavyweight fleece · Black/Ecru
              </div>

              <div style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
              }}>
                {['COLOR_LOCKED', 'SILHOUETTE_LOCKED', 'LOGO_LOCKED', 'TEXTURE_LOCKED'].map(tag => (
                  <span key={tag} style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.6rem',
                    color: 'rgba(90,79,255,0.7)',
                    border: '1px solid rgba(90,79,255,0.2)',
                    padding: '3px 8px',
                    letterSpacing: '0.06em',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                fontFamily: 'Raleway, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 300,
                color: 'rgba(240,240,248,0.3)',
              }}>
                Status: <span style={{ color: '#22c55e' }}>● ACTIVE</span> · Brief open · $180/approved video
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section style={{
        padding: '5rem 2rem',
        background: '#0a0a12',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <Label center>Powered by</Label>
          <div style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '2.5rem',
            opacity: 0.4,
          }}>
            {['IP-Adapter', 'LoRA Fine-Tuning', 'Replicate', 'Runway Gen-3', 'Stripe Connect', 'Supabase', 'n8n', 'FFmpeg'].map(tech => (
              <span key={tech} style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.72rem',
                color: '#f0f0f8',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '6px 14px',
                border: '1px solid rgba(255,255,255,0.1)',
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{
        padding: '7rem 2rem',
        background: '#07070f',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Label>Pricing</Label>
          <h2 style={sectionHeadingStyle}>
            Start manual. Scale when ready.
          </h2>
          <p style={{ ...bodyStyle, marginTop: '1rem', maxWidth: '540px', marginBottom: '4rem' }}>
            Phase 1 is a manual, white-glove service. We enroll your product, run the pipeline, and deliver your locked fingerprint. No platform access needed — just results.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5px',
            background: 'rgba(255,255,255,0.05)',
          }}>
            {[
              {
                name: 'Manual Enrollment',
                phase: 'Phase 1 — Now',
                price: '$500–$1,500',
                period: 'one-time',
                desc: 'We run the full IP-Adapter + LoRA pipeline on your product photos and deliver 10 approved video demo frames. Manual, fast, and proof it works.',
                features: [
                  '10–20 product photo intake',
                  'IP-Adapter + LoRA fine-tuning',
                  '10 approved AI video demo frames',
                  'Locked asset file for creator distribution',
                  '48–72 hour turnaround',
                ],
                cta: 'Get Started',
                href: '/for-brands',
                primary: true,
              },
              {
                name: 'Brand Subscription',
                phase: 'Phase 2 — Coming Soon',
                price: '$99–$499',
                period: 'per month',
                desc: 'Self-serve enrollment dashboard. Upload photos, launch briefs, and manage campaigns. Fingerprint maintained automatically.',
                features: [
                  'Self-serve product enrollment',
                  'Creator brief management',
                  'Automatic fingerprint maintenance',
                  'Submission review dashboard',
                  'Stripe-automated creator payouts',
                ],
                cta: 'Join Waitlist',
                href: '/waitlist',
                primary: false,
              },
              {
                name: 'Enterprise API',
                phase: 'Phase 4 — Year 2',
                price: '$500–$2,000',
                period: 'per month',
                desc: 'Programmatic access to the brand fingerprint library. For agencies and platforms running multi-brand AI video campaigns at scale.',
                features: [
                  'REST API access to fingerprint library',
                  'Bulk product enrollment',
                  'White-label campaign management',
                  'Custom SLAs and support',
                  'Multi-seat brand team access',
                ],
                cta: 'Contact Us',
                href: 'mailto:hello@productvisuallock.com',
                primary: false,
              },
            ].map(tier => (
              <PricingTier key={tier.name} tier={tier} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{
        padding: '8rem 2rem',
        background: 'linear-gradient(180deg, #07070f 0%, #0d0a1f 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          bottom: '-100px', left: '50%',
          transform: 'translateX(-50%)',
          width: '600px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(90,79,255,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <Label center>Ready to lock your product?</Label>
        <h2 style={{
          fontFamily: 'EB Garamond, serif',
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 400,
          color: '#f0f0f8',
          maxWidth: '700px',
          margin: '1.5rem auto 1rem',
          lineHeight: 1.15,
        }}>
          Five brand spots available in Phase 1. Every one filled is a case study.
        </h2>
        <p style={{
          ...bodyStyle,
          maxWidth: '480px',
          margin: '0 auto 3rem',
        }}>
          Phase 1 is manual and limited. We handle everything. You get proof your product looks consistent across every AI-generated video.
        </p>
        <Link href="/for-brands" style={{
          fontFamily: 'Raleway, sans-serif',
          fontSize: '0.88rem',
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#07070f',
          textDecoration: 'none',
          padding: '16px 40px',
          background: '#5a4fff',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: '0 8px 40px rgba(90,79,255,0.4)',
          display: 'inline-block',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#7c6fff'
            e.currentTarget.style.transform = 'translateY(-3px)'
            e.currentTarget.style.boxShadow = '0 16px 48px rgba(90,79,255,0.5)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#5a4fff'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 8px 40px rgba(90,79,255,0.4)'
          }}
        >
          Enroll Your Product — Phase 1 →
        </Link>
      </section>

      <Footer />
    </>
  )
}

function Label({ children, center }) {
  return (
    <div style={{
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: '0.68rem',
      fontWeight: 400,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'rgba(90,79,255,0.7)',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      justifyContent: center ? 'center' : 'flex-start',
    }}>
      <span style={{ width: '24px', height: '1px', background: 'rgba(90,79,255,0.5)', display: 'inline-block' }} />
      {children}
    </div>
  )
}

function StepRow({ step, last, dim }) {
  return (
    <div style={{
      display: 'flex',
      gap: '1.5rem',
      position: 'relative',
    }}>
      {/* Step number + line */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexShrink: 0,
      }}>
        <div style={{
          width: '36px', height: '36px',
          border: `1px solid ${dim ? 'rgba(255,255,255,0.1)' : 'rgba(90,79,255,0.35)'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.65rem',
          color: dim ? 'rgba(240,240,248,0.3)' : 'rgba(90,79,255,0.8)',
          flexShrink: 0,
        }}>
          {step.n}
        </div>
        {!last && (
          <div style={{
            width: '1px',
            flex: 1,
            minHeight: '2rem',
            background: dim ? 'rgba(255,255,255,0.06)' : 'rgba(90,79,255,0.15)',
            margin: '4px 0',
          }} />
        )}
      </div>

      {/* Content */}
      <div style={{ paddingBottom: last ? 0 : '2rem', paddingTop: '6px' }}>
        <div style={{
          fontFamily: 'EB Garamond, serif',
          fontSize: '1.15rem',
          fontWeight: 400,
          color: '#f0f0f8',
          marginBottom: '0.4rem',
        }}>
          {step.title}
        </div>
        <p style={{
          fontFamily: 'Raleway, sans-serif',
          fontSize: '0.83rem',
          fontWeight: 300,
          color: 'rgba(240,240,248,0.45)',
          lineHeight: 1.65,
        }}>
          {step.body}
        </p>
      </div>
    </div>
  )
}

function GalleryCardMini({ item }) {
  return (
    <div style={{
      background: '#08080f',
      padding: '2rem',
      position: 'relative',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
    }}
      onMouseEnter={e => e.currentTarget.style.background = '#0e0e1c'}
      onMouseLeave={e => e.currentTarget.style.background = '#08080f'}
    >
      {/* Status badge */}
      <div style={{
        position: 'absolute',
        top: '1.25rem',
        right: '1.25rem',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.58rem',
        letterSpacing: '0.1em',
        padding: '3px 8px',
        background: item.status === 'OPEN' ? 'rgba(34,197,94,0.1)' : 'rgba(107,107,136,0.15)',
        border: `1px solid ${item.status === 'OPEN' ? 'rgba(34,197,94,0.3)' : 'rgba(107,107,136,0.2)'}`,
        color: item.status === 'OPEN' ? '#22c55e' : '#6b6b88',
      }}>
        {item.status}
      </div>

      {/* Product visual */}
      <div style={{
        width: '70px', height: '70px',
        background: item.color,
        border: `1px solid ${item.accent}22`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        marginBottom: '1.25rem',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', inset: '-4px',
          border: `1px solid ${item.accent}30`,
          borderRadius: '50%',
          animation: 'fingerprint-pulse 4s ease-in-out infinite',
        }} />
        {item.emoji}
      </div>

      {/* Brand + product */}
      <div style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.65rem',
        letterSpacing: '0.1em',
        color: 'rgba(240,240,248,0.3)',
        marginBottom: '0.35rem',
        textTransform: 'uppercase',
      }}>
        {item.brand} · {item.category}
      </div>
      <div style={{
        fontFamily: 'EB Garamond, serif',
        fontSize: '1.05rem',
        color: '#f0f0f8',
        marginBottom: '1.25rem',
        lineHeight: 1.3,
      }}>
        {item.product}
      </div>

      {/* Payout + progress */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '1rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div>
          <div style={{
            fontFamily: 'EB Garamond, serif',
            fontSize: '1.4rem',
            color: '#f0f0f8',
          }}>
            ${item.payout}
          </div>
          <div style={{
            fontFamily: 'Raleway, sans-serif',
            fontSize: '0.7rem',
            fontWeight: 300,
            color: 'rgba(240,240,248,0.3)',
          }}>
            per approved video
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.65rem',
            color: 'rgba(240,240,248,0.25)',
          }}>
            {item.videosRemaining} slots left
          </div>
        </div>
      </div>
    </div>
  )
}

function PricingTier({ tier }) {
  return (
    <div style={{
      padding: '2.5rem',
      background: tier.primary ? 'rgba(90,79,255,0.07)' : '#08080f',
      border: tier.primary ? '1px solid rgba(90,79,255,0.25)' : 'none',
      position: 'relative',
    }}>
      {tier.primary && (
        <div style={{
          position: 'absolute',
          top: '-1px', left: '2rem',
          background: '#5a4fff',
          padding: '3px 12px',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.6rem',
          color: '#fff',
          letterSpacing: '0.08em',
        }}>
          AVAILABLE NOW
        </div>
      )}

      <div style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.6rem',
        color: 'rgba(90,79,255,0.5)',
        letterSpacing: '0.1em',
        marginBottom: '0.75rem',
        marginTop: tier.primary ? '0.5rem' : '0',
      }}>
        {tier.phase}
      </div>

      <div style={{
        fontFamily: 'EB Garamond, serif',
        fontSize: '1.3rem',
        color: '#f0f0f8',
        marginBottom: '0.5rem',
      }}>
        {tier.name}
      </div>

      <div style={{
        fontFamily: 'EB Garamond, serif',
        fontSize: '2.2rem',
        fontWeight: 400,
        color: '#f0f0f8',
        marginBottom: '0.25rem',
      }}>
        {tier.price}
      </div>
      <div style={{
        fontFamily: 'Raleway, sans-serif',
        fontSize: '0.75rem',
        fontWeight: 300,
        color: 'rgba(240,240,248,0.35)',
        marginBottom: '1.5rem',
      }}>
        {tier.period}
      </div>

      <p style={{
        fontFamily: 'Raleway, sans-serif',
        fontSize: '0.83rem',
        fontWeight: 300,
        color: 'rgba(240,240,248,0.5)',
        lineHeight: 1.65,
        marginBottom: '1.75rem',
      }}>
        {tier.desc}
      </p>

      <div style={{ marginBottom: '2rem' }}>
        {tier.features.map(f => (
          <div key={f} style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'flex-start',
            marginBottom: '0.6rem',
          }}>
            <span style={{ color: '#5a4fff', flexShrink: 0, marginTop: '2px' }}>→</span>
            <span style={{
              fontFamily: 'Raleway, sans-serif',
              fontSize: '0.82rem',
              fontWeight: 300,
              color: 'rgba(240,240,248,0.6)',
            }}>
              {f}
            </span>
          </div>
        ))}
      </div>

      <Link href={tier.href} style={{
        display: 'block',
        textAlign: 'center',
        fontFamily: 'Raleway, sans-serif',
        fontSize: '0.8rem',
        fontWeight: 500,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        padding: '12px 24px',
        background: tier.primary ? '#5a4fff' : 'transparent',
        color: tier.primary ? '#07070f' : 'rgba(240,240,248,0.6)',
        border: tier.primary ? 'none' : '1px solid rgba(255,255,255,0.12)',
        transition: 'all 0.3s ease',
      }}
        onMouseEnter={e => {
          if (tier.primary) {
            e.currentTarget.style.background = '#7c6fff'
          } else {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
            e.currentTarget.style.color = '#f0f0f8'
          }
        }}
        onMouseLeave={e => {
          if (tier.primary) {
            e.currentTarget.style.background = '#5a4fff'
          } else {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
            e.currentTarget.style.color = 'rgba(240,240,248,0.6)'
          }
        }}
      >
        {tier.cta}
      </Link>
    </div>
  )
}

const sectionHeadingStyle = {
  fontFamily: 'EB Garamond, serif',
  fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
  fontWeight: 400,
  lineHeight: 1.15,
  color: '#f0f0f8',
  marginBottom: '1.5rem',
}

const bodyStyle = {
  fontFamily: 'Raleway, sans-serif',
  fontSize: '0.9rem',
  fontWeight: 300,
  color: 'rgba(240,240,248,0.5)',
  lineHeight: 1.75,
}
