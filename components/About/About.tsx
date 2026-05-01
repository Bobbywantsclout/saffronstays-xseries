'use client';
import { useState } from 'react';
import styles from './About.module.css';
import { villaData, tabs, tabContent } from '@/lib/data';

export default function About() {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className={styles.section} aria-labelledby="about-heading">
      <h2 className={`section-title ${styles.heading}`} id="about-heading">About</h2>

      {/* Description */}
      <div className={`${styles.description} ${expanded ? styles.descriptionExpanded : ''}`}
           aria-expanded={expanded}>
        <ul className={styles.bullets}>
          {villaData.about.map((line, i) => (
            <li key={i} className={styles.bullet}>{line}</li>
          ))}
        </ul>
        {!expanded && (
          <button
            className={styles.readMore}
            onClick={() => setExpanded(true)}
            aria-label="Read more about this villa"
          >
            Read more
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className={styles.tabs} role="tablist" aria-label="Villa details">
        {tabs.map(tab => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`tab-panel-${tab.id}`}
            id={`tab-${tab.id}`}
            className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div
        className={styles.tabContent}
        role="tabpanel"
        id={`tab-panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
      >
        {tabContent[activeTab]}
      </div>
    </section>
  );
}
