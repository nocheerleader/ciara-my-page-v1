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
        <nav style={{ fontSize: '1rem' }}>welcome</nav>
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
            I’m an AI optimist. I believe in using AI for good. I've been prompting with AI for 3+ years. I'm an autodidactic polymath. Spent 10+ years in finance and business strategy. I'm Irish. I've lived in Bangkok, Sydney and Osaka and now reside in Wales. I once got chased by a Komodo dragon. I've 8 years of product experience at a tech start-up. And now I'm teaching non-tech folks how to build cool stuff as an AI-native development instructor.
            </p>
          </div>

          {/* Right column */}
          <div style={{ 
            width: '25%',   // Fixed width at 25% of the container
            fontSize: '0.875rem', 
            lineHeight: '1.5' 
          }}>
            <p>
              GIRL was founded by Roz Stoughton, one half of renowned former design 
              studio, Passport, with the goal of pushing back against preconceptions; 
              of subverting the expected; of doing things differently. We're the new 
              kid on the block with the benefit of over a decade of award-winning 
              experience.
            </p>
            <button style={{ 
              marginTop: '1rem', 
              background: '#fff', 
              color: '#000', 
              border: 'none', 
              padding: '0.75rem 1.5rem', 
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '0.9rem'
            }}>
              View our services
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
