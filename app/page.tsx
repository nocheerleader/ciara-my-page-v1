// app/page.tsx (Next.js 13+)
import { Space_Grotesk } from 'next/font/google';

// Initialize the font
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'] // You can adjust these weights based on your needs
});

export default function Page() {
  return (
    <div style={{ 
      background: '#000', 
      color: '#fff', 
      minHeight: '100vh',
      fontFamily: spaceGrotesk.style.fontFamily,
      padding: '2rem' 
    }}>
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start' 
      }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>🛸</div>
        <nav style={{ fontSize: '1rem', color: '#ffbc42' }}>welcome</nav>
      </header>

      <main style={{ marginTop: '4rem', position: 'relative' }}>
        {/* Large CIARA text */}
        <div style={{ 
          fontSize: '20vw', 
          fontWeight: 'bold', 
          lineHeight: '0.9', 
          letterSpacing: '-0.05em',
          opacity: 1,
          whiteSpace: 'nowrap',
          overflow: 'hidden'
        }}>
          CiARA
        </div>
        
        {/* Two-column text layout */}
        <div style={{
          display: 'flex',  
          gap: '8rem',      
          marginTop: '2rem'
        }}>
          {/* Left column */}
          <div style={{ 
            width: '60%',      // Takes up 60% of its original space
            fontSize: '1.25rem', 
            lineHeight: '1.5' 
          }}>
            <p>
              I&#39;m an AI optimist. I believe in using AI for good. I&#39;ve been prompting with AI for 3+ years. I&#39;m a neurodiverse autodidactic polymath. Spent 10+ years in finance and business strategy. I&#39;m Irish. I&#39;ve lived in Bangkok, Sydney and Osaka and now reside in Wales. I once got chased by a Komodo dragon. I&#39;ve 8 years of product experience at a tech start-up. And now I&#39;m teaching non-tech folks how to build cool stuff as an AI-native development instructor.
            </p>
          </div>

          {/* Right column */}
          <div style={{ 
            width: '25%',   // Fixed width at 25% of the container
            fontSize: '0.875rem', 
            lineHeight: '1.5' 
          }}>
            <p>
              I&#39;m passionate about making AI accessible. Especially for non-technical beginners. I&#39;ve pivoted from a decade-long career in accounting to building and teaching the next wave of tools like v0 and Cursor.
            </p>
            <a 
              href="https://x.com/nocheerleader" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ textDecoration: 'none' }}
            >
              <button style={{ 
                marginTop: '1rem', 
                background: '#ffbc42', 
                color: '#000', 
                border: 'none', 
                padding: '0.75rem 1.5rem', 
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                borderRadius: '4px',
              }}>
                FIND ME HERE
              </button>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
