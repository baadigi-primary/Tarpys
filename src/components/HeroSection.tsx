import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  bgImage: string;
  priority?: boolean;
}

export default function HeroSection({ title, subtitle, bgImage, priority = false }: HeroSectionProps) {
  return (
    <section
      style={{
        height: '100vh',
        minHeight: 600,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <style>{`
        @keyframes bounceDown {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        @media (max-width: 767px) {
          .hero-overlay { padding: 24px 20px !important; }
          .hero-title { font-size: 48px !important; letter-spacing: 8px !important; }
          .hero-subtitle { font-size: 18px !important; letter-spacing: 4px !important; }
        }
      `}</style>

      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <Image
          fill
          priority={priority}
          src={bgImage}
          alt=""
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      {/* Overlay box */}
      <div
        className="hero-overlay"
        style={{
          background: 'rgba(0, 0, 0, 0.35)',
          padding: '40px 60px',
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          position: 'relative',
          zIndex: 10,
        }}
      >
        <h2
          className="hero-title"
          style={{
            fontFamily: 'var(--font-amatic), cursive',
            fontSize: 80,
            fontWeight: 700,
            color: 'white',
            textTransform: 'uppercase',
            letterSpacing: 16,
            lineHeight: 1.1,
            margin: 0,
            textAlign: 'center',
          }}
        >
          {title}
        </h2>

        {/* Separator ornament */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'white', margin: '4px 0' }}>
          <div style={{ width: 80, height: 1, background: 'white', opacity: 0.6 }} />
          <span style={{ fontSize: 14, opacity: 0.8 }}>✻</span>
          <div style={{ width: 80, height: 1, background: 'white', opacity: 0.6 }} />
        </div>

        {subtitle && subtitle.length > 0 && (
          <p
            className="hero-subtitle"
            style={{
              fontFamily: 'var(--font-cabin), sans-serif',
              fontSize: 28,
              fontWeight: 400,
              color: '#cf723d',
              textTransform: 'uppercase',
              letterSpacing: 8,
              textAlign: 'center',
              margin: 0,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Scroll chevron */}
      <div
        style={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          color: 'rgba(255,255,255,0.8)',
          animation: 'bounceDown 2s ease-in-out infinite',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          width: 44,
          height: 44,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
        }}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
