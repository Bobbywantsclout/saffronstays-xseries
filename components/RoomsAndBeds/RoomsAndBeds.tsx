import Image from 'next/image';
import styles from './RoomsAndBeds.module.css';
import { rooms } from '@/lib/data';

export default function RoomsAndBeds() {
  return (
    <section className={styles.section} aria-labelledby="rooms-heading">
      <h2 className={`section-title ${styles.heading}`} id="rooms-heading">Rooms & Beds</h2>

      <div className={styles.grid} role="list">
        {rooms.map((room, i) => (
          <article key={i} className={styles.card} role="listitem">
            <div className={styles.imageWrap}>
              <Image
                src={room.image}
                alt={room.name}
                fill
                sizes="(max-width: 768px) 80vw, 33vw"
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <ul className={styles.bullets}>
                {room.bullets.map((b, j) => (
                  <li key={j} className={styles.bullet}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
