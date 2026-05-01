import styles from './Location.module.css';
import { villaData } from '@/lib/data';

export default function Location() {
  const { lat, lng } = villaData.coordinates;
  const mapSrc = `https://maps.google.com/maps?q=${lat},${lng}&z=14&output=embed`;

  return (
    <section className={styles.section} aria-labelledby="location-heading">
      <h2 className={`section-title ${styles.heading}`} id="location-heading">Location</h2>

      <div className={styles.mapWrap}>
        {/* Coordinates label */}
        <div className={styles.coordsLabel} aria-label="GPS coordinates">
          {villaData.mapsCoordText}
        </div>
        <iframe
          src={mapSrc}
          className={styles.map}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map showing location of ${villaData.name}`}
          aria-label="Property location map"
        />
      </div>

      <a
        href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.dirBtn}
        aria-label="Get directions to villa"
      >
        Get Direction
      </a>
    </section>
  );
}
