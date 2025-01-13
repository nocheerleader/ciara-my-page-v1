"use client"

import { Space_Grotesk } from 'next/font/google';
import styles from './styles/Home.module.css';
import { useState, useEffect, useRef } from 'react';

// Initialize the font
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700']
});

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const mobileNavRef = useRef(null);

  // Handle mounting
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Add a cleanup effect for the mobile nav
  useEffect(() => {
    return () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
  }, [isMenuOpen]);

  // Handle menu toggle safely
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.container} style={{ fontFamily: spaceGrotesk.style.fontFamily }}>
      <header className={styles.header}>
        <div style={{ fontSize: '1.75rem' }}>🛸</div>
        
        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          <a href="#" className={styles.navLink}>prompting</a>
          <a href="#" className={styles.navLink}>framework</a>
          <a href="#" className={styles.navLink}>about</a>
          <span style={{ color: '#ffbc42' }}>welcome</span>
        </div>

        {/* Hamburger Button */}
        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        {typeof window !== 'undefined' && (
          <div 
            ref={mobileNavRef}
            className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}
          >
            <a href="#" className={styles.navLink}>work</a>
            <a href="#" className={styles.navLink}>about</a>
            <a href="#" className={styles.navLink}>contact</a>
            <span style={{ color: '#ffbc42' }}>welcome</span>
          </div>
        )}
      </header>

      <main style={{ marginTop: '0', position: 'relative' }}>
        <div className={styles.titleContainer}>
          <div className={styles.mainTitle}>BUILD &amp; <br />DEPLOY</div>
          <div className={styles.subHeading}>with AI</div>
        </div>
        <div className={styles.subHeading2}>a zero to launch framework for non-technical beginners</div>
        
        <div className={styles.columns}>
          <div className={styles.leftColumn}>
            <h2 className={styles.sectionHeading}>About Me</h2>
            <p>
            I&#39;m an AI optimist. I believe AI can do amazing things for good. I&#39;ve been prompting since 2022 and I&#39;ve spent 100s of hours figuring out how to get the best results. I&#39;m a neurodiverse autodidact. Which is just a fancy way of saying I love to teach myself cool stuff. <br />
            <br />
            Before this I spent 10+ years in finance and business strategy. I&#39;ve travelled and lived around the world, in Bangkok, Sydney and Osaka. I was born and raised in Ireland but now I call beautiful rural Wales home. Fun fact? I once got chased by a Komodo dragon. Not as fun at the time. <br /> 
            <br />
            I&#39;ve also got eight years of product experience at a tech start-up. These days, I&#39;m helping non-tech folks create amazing things as an AI x Coding instructor with the 100 School bootcamp. 
            </p>
          </div>

          <div className={styles.rightColumn}>
            <p>
              I&#39;m passionate about making AI accessible to everyone. 
            </p>
            <p style={{ marginTop: '0.5 rem' }}>
             Build and deploy framework coming soon. 
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
