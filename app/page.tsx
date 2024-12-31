"use client"

import { Space_Grotesk } from 'next/font/google';
import styles from './styles/Home.module.css';
import { useState, useEffect } from 'react';

// Initialize the font
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700']
});

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Add this useEffect to handle client-side mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render navigation until component is mounted
  if (!isMounted) {
    return null;
  }

  return (
    <div className={styles.container} style={{ fontFamily: spaceGrotesk.style.fontFamily }}>
      <header className={styles.header}>
        <div style={{ fontSize: '1.75rem' }}>🛸</div>
        
        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          <a href="#" className={styles.navLink}>work</a>
          <a href="#" className={styles.navLink}>about</a>
          <a href="#" className={styles.navLink}>contact</a>
          <span style={{ color: '#ffbc42' }}>welcome</span>
        </div>

        {/* Hamburger Button */}
        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
          <a href="#" className={styles.navLink}>work</a>
          <a href="#" className={styles.navLink}>about</a>
          <a href="#" className={styles.navLink}>contact</a>
          <span style={{ color: '#ffbc42' }}>welcome</span>
        </div>
      </header>

      <main style={{ marginTop: '0', position: 'relative' }}>
        <div className={styles.titleContainer}>
          <div className={styles.mainTitle}>BUILD &amp; <br />DEPLOY</div>
          <div className={styles.subHeading}>with AI</div>
        </div>
        <div className={styles.subHeading2}>a zero to launch framework for non-technical beginners</div>
        
        <div className={styles.columns}>
          <div className={styles.leftColumn}>
            <p>
              I&#39;m an AI optimist. I believe in using AI for good. I&#39;ve been prompting with AI for 3+ years. I&#39;m a neurodiverse autodidactic polymath. Spent 10+ years in finance and business strategy. I&#39;m Irish. I&#39;ve lived in Bangkok, Sydney and Osaka and now reside in Wales. I once got chased by a Komodo dragon. I&#39;ve 8 years of product experience at a tech start-up. And now I&#39;m teaching non-tech folks how to build cool stuff as an AI-native development instructor.
            </p>
          </div>

          <div className={styles.rightColumn}>
            <p>
              I&#39;m passionate about making AI accessible to everyone. Especially for non-technical beginners. 
            </p>
            <p style={{ marginTop: '1.5rem' }}>
             v0 and Cursor beginners course coming January 2025 
            </p>
            <a 
              href="https://x.com/nocheerleader" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ textDecoration: 'none' }}
            >
              <button className={styles.button}>
                FIND ME HERE
              </button>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
