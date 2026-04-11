'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { GalleryItem } from '@/content/siteContent';

export function Gallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="gallery-grid">
        {items.map((item) => (
          <figure
            key={item.title}
            className={item.featured ? 'gallery-card gallery-card-feature' : 'gallery-card'}
          >
            <button className="gallery-trigger" onClick={() => setActive(item)} aria-label={`Open ${item.title}`}>
              <Image
                src={item.image}
                alt={item.alt}
                sizes={item.featured ? '(max-width: 768px) 100vw, 60vw' : '(max-width: 768px) 100vw, 33vw'}
              />
            </button>
            <figcaption>
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.title}>
          <div className="lightbox-inner">
            <button className="lightbox-close" onClick={() => setActive(null)}>
              Close
            </button>
            <Image src={active.image} alt={active.alt} sizes="90vw" />
          </div>
        </div>
      )}
    </>
  );
}
