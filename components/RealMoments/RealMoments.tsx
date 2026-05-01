import Image from 'next/image';
import styles from './RealMoments.module.css';
import { realMoments } from '@/lib/data';

export default function RealMoments() {
  return (
    <section className={styles.section} aria-labelledby="moments-heading">
      <h2 className={`section-title ${styles.heading}`} id="moments-heading">Real Moments</h2>

      <div className={styles.grid} role="list">
        {realMoments.map((moment, i) => (
          <article key={i} className={styles.card} role="listitem">
            <div className={styles.imageWrap}>
              <Image
                src={moment.image}
                alt={`Photo by ${moment.user}`}
                fill
                sizes="(max-width: 768px) 80vw, 33vw"
                className={styles.image}
              />
            </div>
            <div className={styles.caption}>
              <span className={styles.user}>{moment.user}</span>
              <span className={styles.sep}>•</span>
              <time className={styles.date}>{moment.date}</time>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
