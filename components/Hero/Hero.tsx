'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const SLIDES = [
  '/images/hero-1.jpg',
  '/images/hero-2.jpg',
  '/images/hero-3.jpg',
  '/images/hero-4.jpg',
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const goTo = (i: number) => setActive(i);

  return (
    <section className={styles.hero} aria-label="Villa photo gallery">
      {/* Main image */}
      <div className={styles.imageWrap}>
        <Image
          src="/images/villa-hero.jpg"
          alt="Sea La Vie villa exterior"
          fill
          priority
          sizes="100vw"
          className={styles.heroImg}
        />
        {/* Dark gradient overlay */}
        <div className={styles.overlay} />
      </div>

      {/* Top-left text */}
      <div className={styles.textBlock}>
        <h1 className={styles.villaName}>Sea La Vie</h1>
        <p className={styles.location}>Alibaug, Maharashtra</p>
        <span className={styles.brandBadge}>X SERIES</span>
      </div>

      {/* Bottom controls row */}
      <div className={styles.controls}>
        {/* Carousel dots */}
        <div className={styles.dots} role="tablist" aria-label="Gallery slides">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Slide ${i + 1}`}
              className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        {/* Play / video tour button */}
        <button className={styles.playBtn} aria-label="Watch video tour">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="currentColor"/>
          </svg>
        </button>
      </div>

      {/* Thumbnail (+12 photos) */}
      <button
        className={styles.thumbnail}
        onClick={() => setLightboxOpen(true)}
        aria-label="View all 12 photos"
      >
        <Image
          src="/images/thumb.jpg"
          alt="More photos"
          fill
          sizes="80px"
          className={styles.thumbImg}
        />
        <span className={styles.thumbCount}>+12</span>
      </button>

      {/* Lightbox stub */}
      {lightboxOpen && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Photo gallery"
          onClick={() => setLightboxOpen(false)}
        >
          <button className={styles.lightboxClose} aria-label="Close gallery">✕</button>
          <div className={styles.lightboxInner} onClick={e => e.stopPropagation()}>
            <Image
              src="/images/villa-hero.jpg"
              alt="Villa photo"
              width={1200}
              height={700}
              className={styles.lightboxImg}
            />
            <p className={styles.lightboxHint}>Click outside to close</p>
          </div>
        </div>
      )}
    </section>
  );
}
