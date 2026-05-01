'use client';
import { useState } from 'react';
import styles from './PropertyInfo.module.css';
import { villaData } from '@/lib/data';

export default function PropertyInfo() {
  const [favourited, setFavourited] = useState(false);

  return (
    <section className={styles.section} aria-label="Property information">

      {/* Rating + actions */}
      <div className={styles.topRow}>
        <div className={styles.rating}>
          <svg className={styles.star} viewBox="0 0 20 20" aria-hidden="true">
            <path d="M10 1L12.4 7.3H19.1L13.8 11.2L15.9 17.5L10 13.6L4.1 17.5L6.2 11.2L0.9 7.3H7.6L10 1Z"
              fill="#f5c518"/>
          </svg>
          <span className={styles.ratingNum}>{villaData.rating}/5</span>
          <span className={styles.divider}>|</span>
          <a href="#reviews" className={styles.reviewLink}>
            {villaData.reviewCount} reviews
          </a>
        </div>

        <div className={styles.actions}>
          {/* Share */}
          <button className={styles.actionBtn} aria-label="Share property">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="15" cy="4" r="2" stroke="currentColor" strokeWidth="1.4"/>
              <circle cx="5" cy="10" r="2" stroke="currentColor" strokeWidth="1.4"/>
              <circle cx="15" cy="16" r="2" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M7 8.8L13 5.2M7 11.2L13 14.8"
                stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Favourite */}
          <button
            className={`${styles.actionBtn} ${favourited ? styles.favourited : ''}`}
            aria-label={favourited ? 'Remove from favourites' : 'Add to favourites'}
            aria-pressed={favourited}
            onClick={() => setFavourited(f => !f)}
          >
            <svg viewBox="0 0 20 20" fill={favourited ? '#e53935' : 'none'} aria-hidden="true">
              <path d="M10 16.5S2.5 11.5 2.5 7C2.5 4.5 4.5 3 6.5 3C7.9 3 9.2 3.9 10 5.1C10.8 3.9 12.1 3 13.5 3C15.5 3 17.5 4.5 17.5 7C17.5 11.5 10 16.5 10 16.5Z"
                stroke={favourited ? '#e53935' : 'currentColor'} strokeWidth="1.4"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Property tags pills */}
      <div className={styles.tags} role="list" aria-label="Property features">
        {[villaData.type, villaData.guests, villaData.bedrooms, ...villaData.tags].map(tag => (
          <div key={tag} className={styles.tag} role="listitem">
            <TagIcon tag={tag} />
            <span>{tag}</span>
          </div>
        ))}
      </div>

    </section>
  );
}

function TagIcon({ tag }: { tag: string }) {
  if (tag.includes('Villa')) {
    return (
      <svg className={styles.tagIcon} viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M2 8L8 3L14 8V14H10V10H6V14H2V8Z" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    );
  }
  if (tag.includes('Guest')) {
    return (
      <svg className={styles.tagIcon} viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M3 14C3 11.2 5.2 9 8 9C10.8 9 13 11.2 13 14"
          stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    );
  }
  if (tag.includes('Bedroom')) {
    return (
      <svg className={styles.tagIcon} viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="2" y="7" width="12" height="7" rx="1" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M2 9H14" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M2 7V4C2 3.4 2.4 3 3 3H13C13.6 3 14 3.4 14 4V7"
          stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    );
  }
  // Pet-Friendly
  return (
    <svg className={styles.tagIcon} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="5" cy="4" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="11" cy="4" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="3" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="13" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M8 8C5 8 4 10 4 12C4 13.1 5 14 6.5 14H9.5C11 14 12 13.1 12 12C12 10 11 8 8 8Z"
        stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  );
}
