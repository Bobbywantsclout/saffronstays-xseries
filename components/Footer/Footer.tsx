import styles from './Footer.module.css';
import { footerColumns } from '@/lib/data';

const socialIcons = [
  { name: 'Facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
  { name: 'Instagram', path: 'M16 2H8a6 6 0 00-6 6v8a6 6 0 006 6h8a6 6 0 006-6V8a6 6 0 00-6-6zM12 15a3 3 0 110-6 3 3 0 010 6zm5-9a1 1 0 100-2 1 1 0 000 2z' },
  { name: 'Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
  { name: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zm2-5a2 2 0 110 4 2 2 0 010-4z' },
  { name: 'YouTube', path: 'M22.54 6.42A2.78 2.78 0 0020.6 4.47C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 1.95A29 29 0 001 12a29 29 0 00.46 5.57A2.78 2.78 0 003.4 19.53C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z' },
  { name: 'Pinterest', path: 'M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>

        {/* Brand column */}
        <div className={styles.brandCol}>
          <div className={styles.footerLogo}>
            <svg viewBox="0 0 24 24" fill="none" className={styles.footerLogoIcon} aria-hidden="true">
              <path d="M12 2L14.5 9H22L16 13.5L18.5 20.5L12 16L5.5 20.5L8 13.5L2 9H9.5L12 2Z"
                fill="var(--gold)" opacity="0.9"/>
            </svg>
            <span className={styles.footerLogoText}>SaffronStays</span>
          </div>
          <p className={styles.footerTagline}>2021 SaffronStays. All rights reserved</p>
        </div>

        {/* Link columns */}
        {footerColumns.map((col, i) => (
          <div key={i} className={styles.col}>
            <h3 className={styles.colHeading}>{col.heading}</h3>
            <ul className={styles.colLinks}>
              {col.links.map(link => (
                <li key={link}>
                  <a href="#" className={styles.colLink}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomInner}`}>
          <span className={styles.copyright}>© 2021 SaffronStays. All rights reserved</span>
          <div className={styles.socials} role="list" aria-label="Social media links">
            {socialIcons.map(s => (
              <a key={s.name} href="#" className={styles.socialLink} aria-label={s.name} role="listitem">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={s.path}/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
