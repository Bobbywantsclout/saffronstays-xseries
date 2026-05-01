'use client';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>

        {/* Logo */}
        <a href="/" className={styles.logo} aria-label="XSeries home">
          <span className={styles.logoX}>X</span>
          <span className={styles.logoSeries}>SERIES</span>
        </a>

        {/* Search */}
        <div className={styles.searchWrap}>
          <svg className={styles.searchIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input
            type="text"
            placeholder="search for location, villa, facilities..."
            className={styles.searchInput}
            aria-label="Search"
          />
        </div>

        {/* Right cluster */}
        <div className={styles.right}>
          {/* SaffronStays brand */}
          <a href="/" className={styles.brandLink} aria-label="SaffronStays">
            <svg className={styles.brandIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2L14.5 9H22L16 13.5L18.5 20.5L12 16L5.5 20.5L8 13.5L2 9H9.5L12 2Z"
                fill="var(--gold)" opacity="0.9"/>
            </svg>
            <span>SaffronStays</span>
          </a>

          {/* Phone */}
          <a href="tel:08069160000" className={styles.phone} aria-label="Call us">
            <svg viewBox="0 0 24 24" fill="none" className={styles.phoneIcon} aria-hidden="true">
              <path d="M6.6 10.8C7.8 13.2 9.8 15.2 12.2 16.4L14.2 14.4C14.4667 14.1333 14.8 14.0667 15.1333 14.2C16.2 14.5333 17.3333 14.7333 18.5333 14.7333C19.0667 14.7333 19.4667 15.1333 19.4667 15.6667V18.5333C19.4667 19.0667 19.0667 19.4667 18.5333 19.4667C9.93333 19.4667 3 12.5333 3 3.93333C3 3.4 3.4 3 3.93333 3H6.8C7.33333 3 7.73333 3.4 7.73333 3.93333C7.73333 5.13333 7.93333 6.26667 8.26667 7.33333C8.4 7.66667 8.33333 8 8.06667 8.26667L6.6 10.8Z"
                fill="currentColor"/>
            </svg>
            <span>08069160000</span>
          </a>

          {/* Login */}
          <button className={styles.loginBtn}>Login</button>
        </div>

      </div>
    </nav>
  );
}
