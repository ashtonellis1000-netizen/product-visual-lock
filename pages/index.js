import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ROSTER_PREVIEW = [
  { id: 1, brand: 'BEYZO', product: 'Oversized Drop-Shoulder Hoodie', category: 'Apparel', status: 'LIVE', networks: 'LTK · ShareASale', color: '#F4F4F8', accent: '#5558E3', emoji: '🧥' },
  { id: 2, brand: 'LUMĒ', product: 'Vitamin C Brightening Serum', category: 'Skincare', status: 'LIVE', networks: 'LTK · Impact', color: '#FAF6EE', accent: '#D97706', emoji: '✨' },
  { id: 3, brand: 'STRĪD', product: 'Carbon Trail Runner', category: 'Footwear', status: 'PILOT', networks: 'In-house affiliate', color: '#EEF6EE', accent: '#16A34A', emoji: '👟' },
  { id: 4, brand: 'COVE', product: '40oz Insulated Bottle', category: 'Lifestyle', status: 'FINGERPRINTING', networks: 'Awin · Refersion', color: '#EEF2F8', accent: '#0EA5E9', emoji: '🫙' },
]

const STEPS = [
  { n: '01', title: 'Enrol Your Product', body: 'Submit 10–20 high-resolution product photos. We capture every angle, every detail, every brand-defining feature.' },
  { n: '02', title: 'We Build the Visual Fingerprint', body: 'Our IP-Adapter and LoRA pipeline produces a visual identity model. Your product\'s colours, silhouette, logo, and texture are locked into a distributable asset.' },
  { n: '03', title: 'Distribute to Your Affiliate Network', body: 'Push the fingerprint to LTK, ShareASale, Impact, Refersion, Awin, or your in-house affiliate program. Available as an asset pack or via API.' },
  { n: '04', title: 'Track the Conversion Lift', body: 'Affiliates generate AI content using your locked fingerprint. The product appears accurately in every ad. Conversion data flows back to your dashboard.' },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Product Visual Lock — Brand-Accurate AI Ads for Affiliate Networks</title>
        <meta name="description" content="Lock your product's visual identity once. Distribute brand-accurate AI assets across your affiliate network. Higher conversion, brand-safe at scale." />
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
            Phase 1 — Enrolling 5 brand partners
          </span>
        </div>

        <h1 style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: 'clamp(2.6rem, 6.5vw, 5rem)',
          fontWeight: 700,
          lineHeight: 1.06,
          letterSpacing: '-0.03em',
          color: '#0F0F14',
          maxWidth: '880px',
          marginBottom: '1.5rem',
          position: 'relative',
        }}>
          Brand-accurate AI ads for your affiliate network.
        </h1>

        <p style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
          fontWeight: 400,
          color: '#6B7080',
          maxWidth: '620px',
          lineHeight: 1.75,
          marginBottom: '3.5rem',
          position: 'relative',
        }}>
          Your affiliates are generating AI content with your products right now. Most of it looks wrong. Lock your product's visual identity once — then distribute it across LTK, ShareASale, Impact, or your in-house program. Every AI-generated ad reflects your brand accurately. Conversion follows.
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
            Enrol Your Product →
          </Link>
          <Link href="/#how-it-works" style={{
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
            See how it works
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
          Phase 1 — Manual enrolment open · Limited to 5 brand partners
        </p>
      </section>

      {/* PROBLEM — The Conversion Gap */}
      <section style={{ padding: '7rem 2rem', background: '#F7F8FA', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Label>The Conversion Gap</Label>
          <h2 style={{ ...headingStyle, maxWidth: '780px', marginTop: '1.25rem', marginBottom: '1.5rem' }}>
            Your affiliates are making AI content with your products. Most of it is hurting your conversion.
          </h2>
          <p style={{ ...bodyStyle, maxWidth: '620px', marginBottom: '4rem' }}>
            AI-generated content is the fastest-growing format in creator marketing. The bottleneck is no longer access to AI tools — it is product accuracy. Inaccurate product representation suppresses conversion across the entire affiliate funnel.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: 'rgba(0,0,0,0.07)' }}>
            {[
              { stat: 'Inconsistent', label: 'Without Visual Lock', desc: 'Logos drift. Colourways shift. Silhouettes deform. Every affiliate produces a different interpretation of your product. The brand identity you have built is diluted across every AI generation.' },
              { stat: 'Suppressed', label: 'Conversion impact', desc: 'Performance ad data consistently shows product accuracy as the leading driver of conversion. Inaccurate AI-generated content underperforms authentic content by a meaningful margin — your affiliates earn less, and stop promoting.' },
              { stat: 'Locked', label: 'With Visual Lock', desc: 'One enrolled fingerprint. Distributed across your entire affiliate network. Every AI ad — on every platform, from every affiliate — produces your real product. Brand-safe by default.' },
            ].map(({ stat, label, desc }) => (
              <div key={stat} style={{ padding: '2.75rem', background: '#F7F8FA' }}>
                <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#5558E3', marginBottom: '0.75rem' }}>
                  {label}
                </div>
                <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '1.6rem', fontWeight: 700, color: '#0F0F14', marginBottom: '1.25rem', letterSpacing: '-0.025em' }}>
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
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Label>How It Works</Label>
          <h2 style={{ ...headingStyle, marginTop: '1.25rem', marginBottom: '1.25rem' }}>
            From product photos to brand-accurate affiliate content.
          </h2>
          <p style={{ ...bodyStyle, marginBottom: '4rem', maxWidth: '580px' }}>
            We sit between your product asset library and your affiliate network. You enrol once. We handle the distribution. Your affiliates produce accurate content automatically.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {STEPS.map((step, i) => <StepRow key={step.n} step={step} last={i === STEPS.length - 1} />)}
          </div>
        </div>
      </section>

      {/* INTEGRATION */}
      <section style={{ padding: '7rem 2rem', background: '#F7F8FA', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Label>Integrations</Label>
          <h2 style={{ ...headingStyle, marginTop: '1.25rem', marginBottom: '1.25rem' }}>
            Works with the affiliate stack you already use.
          </h2>
          <p style={{ ...bodyStyle, marginBottom: '3.5rem', maxWidth: '580px' }}>
            We do not replace your affiliate network. We make it more profitable. The fingerprint is delivered as a downloadable asset pack or accessed via API — compatible with every major creator and affiliate platform.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1px', background: 'rgba(0,0,0,0.07)' }}>
            {[
              { name: 'LTK', type: 'Creator commerce' },
              { name: 'ShareASale', type: 'Affiliate network' },
              { name: 'Impact', type: 'Partnership platform' },
              { name: 'Refersion', type: 'Affiliate tracking' },
              { name: 'Awin', type: 'Affiliate network' },
              { name: 'In-house programs', type: 'Direct integration' },
            ].map(({ name, type }) => (
              <div key={name} style={{ padding: '2rem', background: '#F7F8FA', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '1.05rem', fontWeight: 600, color: '#0F0F14', marginBottom: '0.4rem', letterSpacing: '-0.01em' }}>
                  {name}
                </div>
                <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.72rem', fontWeight: 400, color: '#9CA3AF' }}>
                  {type}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: '#FFFFFF', padding: '2rem', border: '1px solid rgba(0,0,0,0.07)' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem', color: '#5558E3', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>DELIVERY MODE A</div>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '1.1rem', fontWeight: 600, color: '#0F0F14', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>Asset Pack Download</div>
              <p style={{ ...bodyStyle }}>Distribute a ZIP of the locked product fingerprint to your affiliates via your existing creator portal. Compatible with any AI generation workflow.</p>
            </div>
            <div style={{ background: '#FFFFFF', padding: '2rem', border: '1px solid rgba(0,0,0,0.07)' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem', color: '#5558E3', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>DELIVERY MODE B</div>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '1.1rem', fontWeight: 600, color: '#0F0F14', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>API Integration</div>
              <p style={{ ...bodyStyle }}>Programmatic access to your fingerprint library. Affiliates authenticate, generate, and submit — the fingerprint loads automatically. Available in Phase 2.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROSTER PREVIEW */}
      <section style={{ padding: '7rem 2rem', background: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <Label>Brand Roster</Label>
              <h2 style={{ ...headingStyle, marginTop: '0.75rem', marginBottom: '0.75rem' }}>
                Brands enrolled with Visual Lock.
              </h2>
              <p style={{ ...bodyStyle, maxWidth: '480px' }}>
                Every enrolled brand has a fingerprinted product distributed across their affiliate network. Phase 1 is deliberately small.
              </p>
            </div>
            <Link href="/roster" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.8rem', fontWeight: 500, color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseEnter={e => e.target.style.color = '#0F0F14'}
              onMouseLeave={e => e.target.style.color = '#9CA3AF'}
            >
              View full roster →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '1px', background: 'rgba(0,0,0,0.07)' }}>
            {ROSTER_PREVIEW.map(item => <RosterCardMini key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      {/* BEYZO PROOF */}
      <section id="proof" style={{ padding: '7rem 2rem', background: '#F7F8FA', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Label>Founding Case Study</Label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '4rem', alignItems: 'center', marginTop: '3rem' }}>
            <div>
              <h2 style={headingStyle}>
                BEYZO was the first product we fingerprinted.
              </h2>
              <p style={{ ...bodyStyle, marginTop: '1.25rem' }}>
                BEYZO is a streetwear brand. We enrolled the Oversized Drop-Shoulder Hoodie as our founding proof of concept — running the complete IP-Adapter and LoRA pipeline on our own product before requesting that any external brand trust us with theirs.
              </p>
              <p style={{ ...bodyStyle, marginTop: '1.25rem' }}>
                The fingerprint is now live and being distributed to affiliate partners. Every AI generation produces the same hoodie. Same colourway. Same silhouette. Same brand identity — regardless of the scene, the affiliate, or the generation tool they use.
              </p>
              <div style={{ marginTop: '2.5rem', display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
                {[
                  { val: '12', label: 'Photos enrolled' },
                  { val: '100%', label: 'Visual consistency' },
                  { val: '48h', label: 'Time to lock' },
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
                FINGERPRINT_ID: beyzo_hoodie_v1_20260530
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
                Status: <span style={{ color: '#16a34a', fontWeight: 500 }}>● Live</span> · Distributed to LTK · ShareASale
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
            {['IP-Adapter', 'LoRA Fine-Tuning', 'Replicate', 'Runway Gen-3', 'Supabase', 'n8n', 'Stripe', 'FFmpeg'].map(tech => (
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
            Start with a pilot. Scale when the data is in.
          </h2>
          <p style={{ ...bodyStyle, marginTop: '0.75rem', maxWidth: '580px', marginBottom: '4rem' }}>
            Every Phase 1 enrolment is a white-glove engagement. We fingerprint your product, deliver the asset pack, integrate with your existing affiliate network, and report on the conversion lift directly.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'rgba(0,0,0,0.07)' }}>
            {[
              {
                name: 'Pilot',
                phase: 'Phase 1 — Available Now',
                price: '£2,000',
                period: 'one-time, single product',
                desc: 'Enrol one product. Receive a locked visual fingerprint and full asset pack. Distribute to one affiliate network of your choice. 30 days of conversion reporting included.',
                features: ['One product fingerprinted', 'Full asset pack delivered', 'Integration with one affiliate network', '30-day conversion reporting', '48–72 hour turnaround'],
                cta: 'Start a Pilot',
                href: '/for-brands',
                primary: true,
              },
              {
                name: 'Growth',
                phase: 'Phase 2 — From Q3',
                price: '£2,500',
                period: 'per month',
                desc: 'Up to 10 enrolled products. Distribute across multiple affiliate networks. Conversion dashboard, monthly reporting, and ongoing fingerprint maintenance as your products evolve.',
                features: ['Up to 10 products enrolled', 'Multi-network distribution', 'Conversion dashboard', 'Monthly performance reporting', 'Fingerprint maintenance included'],
                cta: 'Join Waitlist',
                href: 'mailto:hello@productvisuallock.com?subject=Growth Plan Waitlist',
                primary: false,
              },
              {
                name: 'Scale',
                phase: 'Phase 3 — Enterprise',
                price: '£8,000+',
                period: 'per month',
                desc: 'Unlimited products. Full API access for direct integration into your affiliate platform. White-glove account management, custom SLAs, and bespoke integrations.',
                features: ['Unlimited products', 'API access for direct integration', 'Dedicated account management', 'Custom SLAs and support', 'Bespoke integration work included'],
                cta: 'Contact Sales',
                href: 'mailto:hello@productvisuallock.com?subject=Scale Plan Enquiry',
                primary: false,
              },
            ].map(tier => <PricingTier key={tier.name} tier={tier} />)}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '8rem 2rem', background: '#FFFFFF', textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
        <Label center>Ready to lock your product?</Label>
        <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 700, color: '#0F0F14', maxWidth: '680px', margin: '1.5rem auto 1rem', lineHeight: 1.12, letterSpacing: '-0.03em' }}>
          Five brand partners. Each one becomes a published case study.
        </h2>
        <p style={{ ...bodyStyle, maxWidth: '500px', margin: '0 auto 3rem' }}>
          Phase 1 is manual and deliberately limited. We manage the full enrolment, distribution, and reporting. You receive measurable evidence that brand-accurate AI content lifts affiliate conversion.
        </p>
        <Link href="/for-brands" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.88rem', fontWeight: 600, color: '#FFFFFF', textDecoration: 'none', padding: '14px 36px', background: '#5558E3', transition: 'all 0.25s ease', display: 'inline-block', letterSpacing: '-0.01em' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#4446C5'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#5558E3'; e.currentTarget.style.transform = 'translateY(0)' }}
        >
          Enrol Your Product →
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

function StepRow({ step, last }) {
  return (
    <div style={{ display: 'flex', gap: '1.5rem', position: 'relative' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div style={{ width: '40px', height: '40px', border: '1px solid rgba(85,88,227,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.64rem', color: '#5558E3', flexShrink: 0 }}>
          {step.n}
        </div>
        {!last && <div style={{ width: '1px', flex: 1, minHeight: '2rem', background: 'rgba(85,88,227,0.12)', margin: '4px 0' }} />}
      </div>
      <div style={{ paddingBottom: last ? 0 : '2.5rem', paddingTop: '8px', maxWidth: '640px' }}>
        <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '1.05rem', fontWeight: 600, color: '#0F0F14', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
          {step.title}
        </div>
        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.88rem', fontWeight: 400, color: '#6B7080', lineHeight: 1.7 }}>
          {step.body}
        </p>
      </div>
    </div>
  )
}

function RosterCardMini({ item }) {
  const statusColor = item.status === 'LIVE' ? '#16a34a' : item.status === 'PILOT' ? '#5558E3' : '#9CA3AF'
  const statusBg = item.status === 'LIVE' ? 'rgba(22,163,74,0.08)' : item.status === 'PILOT' ? 'rgba(85,88,227,0.08)' : 'rgba(107,112,128,0.08)'
  const statusBorder = item.status === 'LIVE' ? 'rgba(22,163,74,0.25)' : item.status === 'PILOT' ? 'rgba(85,88,227,0.25)' : 'rgba(107,112,128,0.2)'

  return (
    <div style={{ background: '#FFFFFF', padding: '2rem', position: 'relative', transition: 'background 0.2s ease' }}
      onMouseEnter={e => e.currentTarget.style.background = '#F7F8FA'}
      onMouseLeave={e => e.currentTarget.style.background = '#FFFFFF'}
    >
      <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.55rem', letterSpacing: '0.08em', padding: '3px 8px', background: statusBg, border: `1px solid ${statusBorder}`, color: statusColor }}>
        {item.status}
      </div>

      <div style={{ width: '64px', height: '64px', background: item.color, border: `1px solid ${item.accent}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', marginBottom: '1.25rem', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: '-4px', border: `1px solid ${item.accent}33`, borderRadius: '50%', animation: 'fingerprint-pulse 4s ease-in-out infinite' }} />
        {item.emoji}
      </div>

      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.08em', color: '#9CA3AF', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
        {item.brand} · {item.category}
      </div>
      <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.92rem', fontWeight: 500, color: '#0F0F14', marginBottom: '1.25rem', lineHeight: 1.35, letterSpacing: '-0.01em' }}>
        {item.product}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
        <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.7rem', fontWeight: 500, color: '#6B7080' }}>
          {item.networks}
        </div>
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
