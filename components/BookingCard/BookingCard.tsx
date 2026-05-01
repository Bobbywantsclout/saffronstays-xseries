'use client';
import { useState } from 'react';
import styles from './BookingCard.module.css';

export default function BookingCard() {
  const [checkIn, setCheckIn]   = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests]     = useState(2);
  const [unlocked, setUnlocked] = useState(false);

  const formatPrice = (n: number) =>
    '₹' + n.toLocaleString('en-IN');

  return (
    <aside className={styles.card} aria-label="Booking widget">

      {/* Price row */}
      <div className={styles.priceRow}>
        <span className={styles.priceStrike}>{formatPrice(149086)}</span>
        <div>
          <span className={styles.priceMain}>{formatPrice(100086)}</span>
          <span className={styles.priceNight}>/Night</span>
        </div>
      </div>

      {/* Discount banner */}
      <div className={styles.discountBanner}>
        <span className={styles.discountText}>Special discounts available!</span>
        <button
          className={styles.unlockBtn}
          onClick={() => setUnlocked(!unlocked)}
          aria-label="Unlock price"
        >
          {unlocked ? '✓ Unlocked' : 'Unlock Price'}
        </button>
      </div>

      {/* Date fields */}
      <div className={styles.dateRow}>
        <div className={styles.dateField}>
          <svg className={styles.fieldIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <rect x="3" y="4" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.3"/>
            <path d="M3 8H17" stroke="currentColor" strokeWidth="1.3"/>
            <path d="M7 2V5M13 2V5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
          <input
            type="text"
            className={styles.dateInput}
            placeholder="Check In"
            value={checkIn}
            onChange={e => setCheckIn(e.target.value)}
            aria-label="Check in date"
          />
        </div>
        <div className={styles.dateSep} aria-hidden="true">—</div>
        <div className={styles.dateField}>
          <input
            type="text"
            className={styles.dateInput}
            placeholder="Check Out"
            value={checkOut}
            onChange={e => setCheckOut(e.target.value)}
            aria-label="Check out date"
          />
        </div>
      </div>

      {/* Guest stepper */}
      <div className={styles.guestRow}>
        <div className={styles.guestLeft}>
          <svg className={styles.fieldIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="10" cy="6" r="3.5" stroke="currentColor" strokeWidth="1.3"/>
            <path d="M3.5 17C3.5 13.9624 6.46243 11.5 10 11.5C13.5376 11.5 16.5 13.9624 16.5 17"
              stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
          <span className={styles.guestLabel}>{guests} Guest{guests !== 1 ? 's' : ''}</span>
        </div>
        <div className={styles.guestStepper}>
          <button
            className={styles.stepBtn}
            onClick={() => setGuests(g => Math.max(1, g - 1))}
            aria-label="Remove guest"
          >−</button>
          <span className={styles.stepCount}>{guests}</span>
          <button
            className={styles.stepBtn}
            onClick={() => setGuests(g => Math.min(12, g + 1))}
            aria-label="Add guest"
          >+</button>
        </div>
      </div>

      {/* CTA */}
      <button className={styles.ctaBtn} aria-label="Check availability">
        Check Availability
      </button>

    </aside>
  );
}
