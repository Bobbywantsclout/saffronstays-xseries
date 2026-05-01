'use client';
import { useState } from 'react';
import BookingCard from '../BookingCard/BookingCard';
import styles from './MobileBookingBar.module.css';

export default function MobileBookingBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* Sticky bottom bar */}
      <div className={styles.bar} aria-label="Quick booking bar">
        <div className={styles.priceGroup}>
          <span className={styles.priceStrike}>₹1,49,086</span>
          <div>
            <span className={styles.priceMain}>₹1,00,086</span>
            <span className={styles.priceNight}>/Night</span>
          </div>
        </div>
        <button
          className={styles.ctaBtn}
          onClick={() => setDrawerOpen(true)}
          aria-label="Open booking panel"
          aria-expanded={drawerOpen}
        >
          Check Availability
        </button>
      </div>

      {/* Drawer overlay */}
      {drawerOpen && (
        <div
          className={styles.overlay}
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer panel */}
      <div
        className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Booking details"
      >
        <div className={styles.drawerHandle} />
        <button
          className={styles.drawerClose}
          onClick={() => setDrawerOpen(false)}
          aria-label="Close booking panel"
        >
          ✕
        </button>
        <BookingCard />
      </div>
    </>
  );
}
