import styles from './Meals.module.css';

export default function Meals() {
  return (
    <section className={styles.section} aria-labelledby="meals-heading">
      <h2 className={`section-title ${styles.heading}`} id="meals-heading">Meals</h2>

      <p className={styles.description}>
        A cook is available to prepare local specialities and a delicious spread of
        home-cooked meals all day, at an additional charge
      </p>

      {/* Veg / Non-Veg indicators */}
      <div className={styles.dietRow} role="list" aria-label="Meal options">
        <div className={styles.dietItem} role="listitem">
          <span className={`${styles.dot} ${styles.dotVeg}`} aria-hidden="true" />
          <span>Veg</span>
        </div>
        <div className={styles.dietItem} role="listitem">
          <span className={`${styles.dot} ${styles.dotNonVeg}`} aria-hidden="true" />
          <span>Non Veg</span>
        </div>
      </div>

      {/* Action buttons */}
      <div className={styles.actions}>
        <button className={styles.actionBtn} aria-label="View menu">View Menu</button>
        <button className={styles.actionBtn} aria-label="View meal rate card">Meal Rate Card</button>
      </div>
    </section>
  );
}
