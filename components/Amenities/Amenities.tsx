import styles from './Amenities.module.css';
import { amenities } from '@/lib/data';

const icons: Record<string, React.ReactNode> = {
  bed: (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="9" width="16" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M2 12H18" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M2 12V6C2 5.4 2.4 5 3 5H17C17.6 5 18 5.4 18 6V12"
        stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  ),
  guests: (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="8" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M2 17C2 13.7 4.7 11 8 11S14 13.7 14 17"
        stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <circle cx="14.5" cy="6" r="2" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M17 17C17 14.8 16 12.9 14.5 12"
        stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  parking: (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M8 14V7H11C12.7 7 13.5 7.8 13.5 9.5S12.7 12 11 12H8"
        stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  ac: (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="5" width="16" height="7" rx="2" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M6 15L6.5 12M10 15V12M14 15L13.5 12"
        stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <circle cx="10" cy="8.5" r="1" fill="currentColor"/>
    </svg>
  ),
  bath: (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10H17V14C17 15.7 15.7 17 14 17H6C4.3 17 3 15.7 3 14V10H4Z"
        stroke="currentColor" strokeWidth="1.3"/>
      <path d="M4 10V6C4 4.9 4.9 4 6 4H7C7.6 4 8 4.4 8 5V10"
        stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M5 19H15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  wifi: (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M2.5 8C5.5 5 9 3.5 10 3.5C11 3.5 14.5 5 17.5 8"
        stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M5.5 11C7 9.5 8.5 8.5 10 8.5C11.5 8.5 13 9.5 14.5 11"
        stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M8 14C8.7 13.3 9.3 13 10 13C10.7 13 11.3 13.3 12 14"
        stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <circle cx="10" cy="17" r="1" fill="currentColor"/>
    </svg>
  ),
};

export default function Amenities() {
  return (
    <section className={styles.section} aria-labelledby="amenities-heading">
      <h2 className={`section-title ${styles.heading}`} id="amenities-heading">Amenities</h2>

      <div className={styles.grid} role="list">
        {amenities.map(item => (
          <div key={item.label + item.icon} className={styles.item} role="listitem">
            <span className={styles.icon}>{icons[item.icon]}</span>
            <span className={styles.label}>{item.label}</span>
          </div>
        ))}
      </div>

      <button className={styles.viewAllBtn} aria-label="View all amenities">
        View all Amenities
      </button>
    </section>
  );
}
