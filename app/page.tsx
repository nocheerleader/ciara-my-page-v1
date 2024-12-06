// app/page.tsx (Next.js 13+)
import { Space_Grotesk } from 'next/font/google';
import styles from './styles/Home.module.css';

// Initialize the font
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'] // You can adjust these weights based on your needs
});

export default function Page() {
  return (
    <div className={styles.container} style={{ fontFamily: spaceGrotesk.style.fontFamily }}>
      <header className={styles.header}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>🛸</div>
        <nav style={{ fontSize: '1rem', color: '#ffbc42' }}>welcome</nav>
      </header>

      <main style={{ marginTop: '4rem', position: 'relative' }}>
        <div className={styles.mainTitle}>CiARA</div>
        
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
