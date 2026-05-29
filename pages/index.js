import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const GALLERY_PREVIEW = [
  { id: 1, brand: 'BEYZO', product: 'Oversized Drop-Shoulder Hoodie', category: 'Apparel', payout: 180, status: 'OPEN', color: '#1a1a2e', accent: '#7c3aed', emoji: '🧥', videosApproved: 0, videosRemaining: 12 },
  { id: 2, brand: 'LUMĒ', product: 'Vitamin C Brightening Serum', category: 'Skincare', payout: 120, status: 'OPEN', color: '#1a180e', accent: '#d97706', emoji: '✨', videosApproved: 3, videosRemaining: 9 },
  { id: 3, brand: 'STRĪD', product: 'Carbon Trail Runner — Black/White', category: 'Footwear', payout: 220, status: 'OPEN', color: '#0f1a0f', accent: '#16a34a', emoji: '👟', videosApproved: 7, videosRemaining: 5 },
  { id: 4, brand: 'COVE', product: '40oz Insulated Bottle — Matte Slate', category: 'Lifestyle', payout: 90, status: 'REVIEWING', color: '#0f1520', accent: '#0ea5e9', emoji: '🫙', videosApproved: 10, videosRemaining: 2 },
]

const STEPS_BRAND = [
  { n: '01', title: 'Submit Product Photos', body: 'Send us 10–20 high-resolution images from multiple angles. Raw files are fine.' },
  { n: '02', title: 'We Lock the Fingerprint', body: 'Our IP-Adapter + LoRA pipeline builds a visual identity model of your exact product — colours, textures, logo placement, and structural details.' },
  { n: '03', title: 'Define Your Brief', body: 'Specify the video format, scene direction, platform, and payout per approved submission. Fund the campaign via Stripe.' },
  { n: '04', title: 'Review and Approve', body: 'Creators generate videos. Your product appears visually accurate in every submission. You approve what meets the brief and pay only for those.' },
]

const STEPS_CREATOR = [
  { n: '01', title: 'Browse Open Briefs', body: 'Filter by category, payout rate, or brand. Each brief details exactly what the brand requires.' },
  { n: '02', title: 'Generate Your Submission', body: 'Select a product, write a scene description, and generate. The locked fingerprint ensures the product is visually accurate — no technical configuration required.' },
  { n: '03', title: 'Submit for Review', body: 'Upload your video. A watermark is applied automatically until payment is confirmed.' },
  { n: '04', title: 'Receive Payment on Approval', body: 'Brand approval triggers automatic payment via Stripe Connect. No manual follow-up required.' },
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
        background: '#FFFFFF',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }} />

        <div style={{
          position: 'absolute',
          top: '30%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px', height: '600px',
          background: 'radial-gradient(ellipse, rgba(85,88,227,0.05) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          border: '1px solid rgba(85,88,227,0.25)',
          background: 'rgba(85,88,227,0.06)',
          padding: '6px 16px',
          marginBottom: '2.5rem',
          position: 'relative',
        }}>
          <span style={{
            width: '6px', height: '6px',
            background: '#5558E3',
            borderRadius: '50%',
            animation: 'fingerprint-pulse 2s ease-in-out infinite',
          }} />
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.68rem',
            color: '#5558E3',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>
            Now enrolling brands — Phase 1 open
          </span>
        </div>

        <h1 style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: 'clamp(2.6rem, 6.5vw, 5rem)',
          fontWeight: 700,
          lineHeight: 1.06,
          letterSpacing: '-0.03em',
          color: '#0F0F14',
          maxWidth: '860px',
          marginBottom: '1.5rem',
          position: 'relative',
        }}>
          Your product. Every time. Across every AI-generated ad.
        </h1>

        <p style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
          fontWeight: 400,
          color: '#6B7080',
          maxWidth: '580px',
          lineHeight: 1.75,
          marginBottom: '3.5rem',
          position: 'relative',
        }}>
          AI video tools generate inconsistent representations of your product in every render. Logos drift. Colour identities shift. We create a visual fingerprint that locks your product's appearance across every AI generation, every creator, every platform.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', position: 'relative' }}>
          <Link href="/for-brands" style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: '#FFFFFF',
            textDecoration: 'none',
            padding: '13px 28px',
            background: '#5558E3',
            transition: 'all 0.25s ease',
            letterSpacing: '-0.01em',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#4446C5'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#5558E3'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Enroll Your Product →
          </Link>
          <Link href="/gallery" style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '0.85rem',
            fontWeight: 500,
            color: '#6B7080',
            textDecoration: 'none',
            padding: '13px 28px',
            border: '1px solid rgba(0,0,0,0.12)',
            background: 'transparent',
            transition: 'all 0.25s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.25)'; e.currentTarget.style.color = '#0F0F14' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)'; e.currentTarget.style.color = '#6B7080' }}
          >
            Browse Campaigns
          </Link>
        </div>

        <p style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '0.75rem',
          fontWeight: 400,
          color: '#9CA3AF',
          marginTop: '2rem',
          position: 'relative',
        }}>
          Phase 1 — manual enrollment open · Limited to 5 brands
        </p>
      </section>

      {/* PROBLEM */}
      <section style={{ padding: '7rem 2rem', background: '#F7F8FA', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Label>The Problem</Label>
          <h2 style={{ ...headingStyle, maxWidth: '700px', marginTop: '1.25rem', marginBottom: '4rem' }}>
            AI video tools render your product differently with every generation.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: 'rgba(0,0,0,0.07)' }}>
            {[
              { icon: '⚡', stat: '10 creators', desc: '10 different product interpretations. Incorrect colours, missing logos, hallucinated details. Your brand identity is inconsistent across every video.' },
              { icon: '🎯', stat: '$0 recovered', desc: 'Ad spend directed toward videos where your product is unrecognisable. The visual equity you have built is lost in every generation.' },
              { icon: '🔒', stat: 'One fingerprint', desc: 'Product Visual Lock creates a permanent visual identity model for your product. Every AI generation, from every creator, on every platform — produces your real product.' },
            ].map(({ icon, stat, desc }) => (
              <div key={stat} style={{ padding: '2.5rem', background: '#F7F8FA' }}>
                <div style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{icon}</div>
                <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '1.2rem', fontWeight: 600, color: '#0F0F14', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
                  {stat}
                </div>
                <p style={bodyStyle}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ padding: '7rem 2rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Label>How It Works</Label>
          <h2 style={{ ...headingStyle, marginTop: '1.25rem' }}>
            Two sides. One visual standard.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '4rem', marginTop: '4rem' }}>
            <div>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5558E3', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '20px', height: '1px', background: '#5558E3', display: 'inline-block' }} />
                For Brands
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {STEPS_BRAND.map((step, i) => <StepRow key={step.n} step={step} last={i === STEPS_BRAND.length - 1} />)}
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '20px', height: '1px', background: '#9CA3AF', display: 'inline-block' }} />
                For Creators
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {STEPS_CREATOR.map((step, i) => <StepRow key={step.n} step={step} last={i === STEPS_CREATOR.length - 1} dim />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section style={{ padding: '7rem 2rem', background: '#F7F8FA', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <Label>Live Campaigns</Label>
              <h2 style={{ ...headingStyle, marginTop: '0.75rem', marginBottom: 0 }}>
                Open briefs, ready to generate.
              </h2>
            </div>
            <Link href="/gallery" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.8rem', fontWeight: 500, color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseEnter={e => e.target.style.color = '#0F0F14'}
              onMouseLeave={e => e.target.style.color = '#9CA3AF'}
            >
              View all campaigns →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '1px', background: 'rgba(0,0,0,0.07)' }}>
            {GALLERY_PREVIEW.map(item => <GalleryCardMini key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      {/* CREATOR STRIP */}
      <section style={{ padding: '5rem 2rem', background: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', border: '1px solid rgba(0,0,0,0.08)' }}>
            <div style={{ padding: '3rem', borderRight: '1px solid rgba(0,0,0,0.07)' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: '#9CA3AF', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                For Creators
              </div>
              <h3 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '1.5rem', fontWeight: 600, color: '#0F0F14', lineHeight: 1.25, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Generate AI video ads. Earn when brands approve.
              </h3>
              <p style={{ ...bodyStyle, marginBottom: '1.75rem' }}>
                Select a brief, write a scene description, and generate. The locked product fingerprint loads automatically — no IP-Adapter configuration, no LoRA training required. Submit and earn on approval.
              </p>
              <Link href="/gallery" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.8rem', fontWeight: 500, color: '#6B7080', textDecoration: 'none', border: '1px solid rgba(0,0,0,0.12)', padding: '10px 20px', display: 'inline-block', transition: 'all 0.2s ease' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#0F0F14'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.25)' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#6B7080'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)' }}
              >
                Browse open briefs →
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)' }}>
              {[
                { val: '$90–$220', label: 'per approved video', sub: 'Across current open briefs' },
                { val: '48h', label: 'typical approval time', sub: 'Brands review promptly — funds are held in escrow' },
                { val: '0', label: 'technical setup required', sub: 'The fingerprint loads automatically. You write the scene.' },
              ].map(({ val, label, sub }, i) => (
                <div key={val} style={{ padding: '1.75rem 2.5rem', borderTop: i > 0 ? '1px solid rgba(0,0,0,0.07)' : 'none' }}>
                  <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#0F0F14', marginBottom: '0.15rem', letterSpacing: '-0.02em' }}>{val}</div>
                  <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.75rem', fontWeight: 500, color: '#6B7080' }}>{label}</div>
                  <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.7rem', fontWeight: 400, color: '#9CA3AF', marginTop: '2px' }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BEYZO PROOF */}
      <section id="proof" style={{ padding: '7rem 2rem', background: '#F7F8FA', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Label>Proof of Concept</Label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '4rem', alignItems: 'center', marginTop: '3rem' }}>
            <div>
              <h2 style={headingStyle}>
                BEYZO was the first product we fingerprinted.
              </h2>
              <p style={{ ...bodyStyle, marginTop: '1.25rem' }}>
                BEYZO is a clothing brand. We enrolled the Oversized Drop-Shoulder Hoodie as the initial proof of concept — running the complete IP-Adapter + LoRA pipeline on our own product before requesting that any external brand trust us with theirs.
              </p>
              <p style={{ ...bodyStyle, marginTop: '1.25rem' }}>
                The outcome: every AI-generated frame produces the same hoodie. Same colourway. Same silhouette. Same brand identity — regardless of the scene, the creator, or the generation tool.
              </p>
              <div style={{ marginTop: '2.5rem', display: 'flex', gap: '2.5rem' }}>
                {[
                  { val: '10+', label: 'Product photos enrolled' },
                  { val: '100%', label: 'Visual consistency' },
                  { val: '~48h', label: 'Time to lock fingerprint' },
                ].map(({ val, label }) => (
                  <div key={label}>
                    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '1.8rem', fontWeight: 700, color: '#0F0F14', letterSpacing: '-0.02em' }}>{val}</div>
                    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.72rem', fontWeight: 400, color: '#9CA3AF', marginTop: '2px' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ border: '1px solid rgba(85,88,227,0.15)', background: '#FFFFFF', padding: '2.5rem', position: 'relative', overflow: 'hidden', boxShadow: '0 2px 20px rgba(0,0,0,0.06)' }}>
              <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '240px', height: '240px', border: '1px solid rgba(85,88,227,0.1)', borderRadius: '50%', animation: 'fingerprint-pulse 4s ease-in-out infinite' }} />
              <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '180px', height: '180px', border: '1px solid rgba(85,88,227,0.07)', borderRadius: '50%', animation: 'fingerprint-pulse 4s ease-in-out infinite 1s' }} />

              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: 'rgba(85,88,227,0.5)', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>
                FINGERPRINT_ID: beyzo_hoodie_v1_20260528
              </div>

              <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>🧥</div>

              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '1.15rem', fontWeight: 600, color: '#0F0F14', marginBottom: '0.4rem', letterSpacing: '-0.01em' }}>
                BEYZO — Oversized Hoodie
              </div>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.78rem', fontWeight: 400, color: '#9CA3AF', marginBottom: '2rem' }}>
                Drop-shoulder · Heavyweight fleece · Black/Ecru
              </div>

              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {['COLOR_LOCKED', 'SILHOUETTE_LOCKED', 'LOGO_LOCKED', 'TEXTURE_LOCKED'].map(tag => (
                  <span key={tag} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem', color: '#5558E3', border: '1px solid rgba(85,88,227,0.2)', padding: '3px 8px', letterSpacing: '0.05em' }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.07)', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.75rem', fontWeight: 400, color: '#9CA3AF' }}>
                Status: <span style={{ color: '#16a34a', fontWeight: 500 }}>● Active</span> · Brief open · $180 per approved video
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section style={{ padding: '5rem 2rem', background: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <Label center>Powered by</Label>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginTop: '2.5rem' }}>
            {['IP-Adapter', 'LoRA Fine-Tuning', 'Replicate', 'Runway Gen-3', 'Stripe Connect', 'Supabase', 'n8n', 'FFmpeg'].map(tech => (
              <span key={tech} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: '#9CA3AF', letterSpacing: '0.05em', textTransform: 'uppercase', padding: '6px 14px', border: '1px solid rgba(0,0,0,0.08)', background: '#F7F8FA' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: '7rem 2rem', background: '#F7F8FA', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Label>Pricing</Label>
          <h2 style={{ ...headingStyle, marginTop: '1.25rem' }}>
            Start manual. Scale when ready.
          </h2>
          <p style={{ ...bodyStyle, marginTop: '0.75rem', maxWidth: '520px', marginBottom: '4rem' }}>
            Phase 1 is a manual, white-glove service. We enroll your product, run the pipeline, and deliver your locked fingerprint. No platform access required — just results.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'rgba(0,0,0,0.07)' }}>
            {[
              {
                name: 'Manual Enrollment',
                phase: 'Phase 1 — Available Now',
                price: '$500–$1,500',
                period: 'one-time',
                desc: 'We run the complete IP-Adapter + LoRA pipeline on your product photos and deliver 10 approved AI video demo frames. Manual, fast, and proof the system works.',
                features: ['10–20 product photo intake', 'IP-Adapter + LoRA fine-tuning', '10 approved AI video demo frames', 'Locked asset file for creator distribution', '48–72 hour turnaround'],
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
                features: ['Self-serve product enrollment', 'Creator brief management', 'Automatic fingerprint maintenance', 'Submission review dashboard', 'Stripe-automated creator payouts'],
                cta: 'Join Waitlist',
                href: 'mailto:hello@productvisuallock.com?subject=Phase 2 Waitlist',
                primary: false,
              },
              {
                name: 'Enterprise API',
                phase: 'Phase 4 — Year 2',
                price: '$500–$2,000',
                period: 'per month',
                desc: 'Programmatic access to the brand fingerprint library. For agencies and platforms operating multi-brand AI video campaigns at scale.',
                features: ['REST API access to fingerprint library', 'Bulk product enrollment', 'White-label campaign management', 'Custom SLAs and support', 'Multi-seat brand team access'],
                cta: 'Contact Us',
                href: 'mailto:hello@productvisuallock.com',
                primary: false,
              },
            ].map(tier => <PricingTier key={tier.name} tier={tier} />)}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '8rem 2rem', background: '#FFFFFF', textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
        <Label center>Ready to lock your product?</Label>
        <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 700, color: '#0F0F14', maxWidth: '640px', margin: '1.5rem auto 1rem', lineHeight: 1.12, letterSpacing: '-0.03em' }}>
          Five brand spots available in Phase 1. Every one filled is a case study.
        </h2>
        <p style={{ ...bodyStyle, maxWidth: '460px', margin: '0 auto 3rem' }}>
          Phase 1 is manual and deliberately limited. We manage the entire process. You receive proof that your product appears consistent across every AI-generated video.
        </p>
        <Link href="/for-brands" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.88rem', fontWeight: 600, color: '#FFFFFF', textDecoration: 'none', padding: '14px 36px', background: '#5558E3', transition: 'all 0.25s ease', display: 'inline-block', letterSpacing: '-0.01em' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#4446C5'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#5558E3'; e.currentTarget.style.transform = 'translateY(0)' }}
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
    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5558E3', display: 'flex', alignItems: 'center', gap: '10px', justifyContent: center ? 'center' : 'flex-start' }}>
      <span style={{ width: '20px', height: '1px', background: '#5558E3', display: 'inline-block' }} />
      {children}
    </div>
  )
}

function StepRow({ step, last, dim }) {
  return (
    <div style={{ display: 'flex', gap: '1.5rem', position: 'relative' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div style={{ width: '36px', height: '36px', border: `1px solid ${dim ? 'rgba(0,0,0,0.1)' : 'rgba(85,88,227,0.3)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: dim ? '#B8BCC8' : '#5558E3', flexShrink: 0 }}>
          {step.n}
        </div>
        {!last && <div style={{ width: '1px', flex: 1, minHeight: '2rem', background: dim ? 'rgba(0,0,0,0.07)' : 'rgba(85,88,227,0.12)', margin: '4px 0' }} />}
      </div>
      <div style={{ paddingBottom: last ? 0 : '2rem', paddingTop: '6px' }}>
        <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.95rem', fontWeight: 600, color: '#0F0F14', marginBottom: '0.4rem', letterSpacing: '-0.01em' }}>
          {step.title}
        </div>
        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.83rem', fontWeight: 400, color: '#6B7080', lineHeight: 1.65 }}>
          {step.body}
        </p>
      </div>
    </div>
  )
}

function GalleryCardMini({ item }) {
  return (
    <div style={{ background: '#FFFFFF', padding: '2rem', position: 'relative', cursor: 'pointer', transition: 'background 0.2s ease' }}
      onMouseEnter={e => e.currentTarget.style.background = '#F7F8FA'}
      onMouseLeave={e => e.currentTarget.style.background = '#FFFFFF'}
    >
      <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.55rem', letterSpacing: '0.08em', padding: '3px 8px', background: item.status === 'OPEN' ? 'rgba(22,163,74,0.08)' : 'rgba(107,112,128,0.08)', border: `1px solid ${item.status === 'OPEN' ? 'rgba(22,163,74,0.25)' : 'rgba(107,112,128,0.2)'}`, color: item.status === 'OPEN' ? '#16a34a' : '#6B7080' }}>
        {item.status}
      </div>

      <div style={{ width: '64px', height: '64px', background: item.color, border: `1px solid ${item.accent}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', marginBottom: '1.25rem', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: '-4px', border: `1px solid ${item.accent}30`, borderRadius: '50%', animation: 'fingerprint-pulse 4s ease-in-out infinite' }} />
        {item.emoji}
      </div>

      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.08em', color: '#9CA3AF', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
        {item.brand} · {item.category}
      </div>
      <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.92rem', fontWeight: 500, color: '#0F0F14', marginBottom: '1.25rem', lineHeight: 1.35, letterSpacing: '-0.01em' }}>
        {item.product}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
        <div>
          <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '1.3rem', fontWeight: 700, color: '#0F0F14', letterSpacing: '-0.02em' }}>${item.payout}</div>
          <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.68rem', fontWeight: 400, color: '#9CA3AF' }}>per approved video</div>
        </div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: '#B8BCC8' }}>{item.videosRemaining} slots left</div>
      </div>
    </div>
  )
}

function PricingTier({ tier }) {
  return (
    <div style={{ padding: '2.5rem', background: tier.primary ? 'rgba(85,88,227,0.05)' : '#FFFFFF', border: tier.primary ? '1px solid rgba(85,88,227,0.2)' : 'none', position: 'relative' }}>
      {tier.primary && (
        <div style={{ position: 'absolute', top: '-1px', left: '2rem', background: '#5558E3', padding: '3px 12px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem', color: '#FFFFFF', letterSpacing: '0.08em' }}>
          AVAILABLE NOW
        </div>
      )}

      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem', color: '#5558E3', letterSpacing: '0.08em', marginBottom: '0.75rem', marginTop: tier.primary ? '0.5rem' : '0' }}>
        {tier.phase}
      </div>

      <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '1.1rem', fontWeight: 600, color: '#0F0F14', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
        {tier.name}
      </div>

      <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '2rem', fontWeight: 700, color: '#0F0F14', marginBottom: '0.15rem', letterSpacing: '-0.03em' }}>
        {tier.price}
      </div>
      <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.75rem', fontWeight: 400, color: '#9CA3AF', marginBottom: '1.5rem' }}>
        {tier.period}
      </div>

      <p style={{ ...bodyStyle, marginBottom: '1.75rem' }}>{tier.desc}</p>

      <div style={{ marginBottom: '2rem' }}>
        {tier.features.map(f => (
          <div key={f} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
            <span style={{ color: '#5558E3', flexShrink: 0, marginTop: '1px', fontSize: '0.8rem' }}>→</span>
            <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.82rem', fontWeight: 400, color: '#6B7080' }}>{f}</span>
          </div>
        ))}
      </div>

      <Link href={tier.href} style={{ display: 'block', textAlign: 'center', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none', padding: '12px 24px', background: tier.primary ? '#5558E3' : 'transparent', color: tier.primary ? '#FFFFFF' : '#6B7080', border: tier.primary ? 'none' : '1px solid rgba(0,0,0,0.12)', transition: 'all 0.2s ease', letterSpacing: '-0.01em' }}
        onMouseEnter={e => { if (tier.primary) { e.currentTarget.style.background = '#4446C5' } else { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.25)'; e.currentTarget.style.color = '#0F0F14' } }}
        onMouseLeave={e => { if (tier.primary) { e.currentTarget.style.background = '#5558E3' } else { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)'; e.currentTarget.style.color = '#6B7080' } }}
      >
        {tier.cta}
      </Link>
    </div>
  )
}

const headingStyle = {
  fontFamily: 'Inter, system-ui, sans-serif',
  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
  fontWeight: 700,
  lineHeight: 1.15,
  color: '#0F0F14',
  marginBottom: '1.5rem',
  letterSpacing: '-0.025em',
}

const bodyStyle = {
  fontFamily: 'Inter, system-ui, sans-serif',
  fontSize: '0.88rem',
  fontWeight: 400,
  color: '#6B7080',
  lineHeight: 1.75,
}
