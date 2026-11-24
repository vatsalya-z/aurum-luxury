import React from 'react';
import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';
import { INTERNAL_LINKS } from '@/data/seo/internalLinkMap';

interface RelatedPagesProps {
  currentPath: string;
  title?: string;
  subtitle?: string;
  limit?: number;
}

export default function RelatedPages({
  currentPath,
  title = 'Continue Exploring The Aurum',
  subtitle = 'Discover more about our luxury chalets, dining experiences, and Kashmir retreats.',
  limit = 4,
}: RelatedPagesProps) {
  const links = (INTERNAL_LINKS[currentPath] || INTERNAL_LINKS['/'] || []).slice(0, limit);

  if (!links.length) return null;

  return (
    <section className="section alt" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <div className="head" style={{ marginBottom: 36 }}>
          <span className="eyebrow">
            <Compass style={{ width: 14, height: 14, display: 'inline', marginRight: 6 }} />
            Internal Navigation
          </span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)' }}>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 20,
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="related-page-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '24px 22px',
                background: '#ffffff',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius)',
                boxShadow: 'var(--shadow)',
                textDecoration: 'none',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
              }}
            >
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    fontWeight: 600,
                    color: 'var(--gold-dark)',
                    marginBottom: 8,
                  }}
                >
                  {link.category}
                </span>
                <h3
                  style={{
                    fontSize: '1.18rem',
                    color: 'var(--navy)',
                    marginBottom: 8,
                    fontWeight: 600,
                  }}
                >
                  {link.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--muted)',
                    lineHeight: 1.55,
                    marginBottom: 16,
                  }}
                >
                  {link.description}
                </p>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  color: 'var(--gold-dark)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                }}
              >
                <span>Discover</span>
                <ArrowRight style={{ width: 15, height: 15 }} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
