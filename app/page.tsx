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
        {/* Large GIRL text */}
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
        
        {/* Main text block */}
        <div style={{ 
          maxWidth: '600px', 
          marginTop: '2rem', 
          fontSize: '1.25rem', 
          lineHeight: '1.5' 
        }}>
          <p>
            We create powerful, unapologetic, meaningful identities that work; 
            with projects and processes driven by fearlessness. If you share our 
            ethos and want to collaborate on something extraordinary, we want to 
            work with you.
          </p>
        </div>

        {/* Founder info and button */}
        <div style={{ 
          maxWidth: '400px', 
          marginTop: '3rem', 
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
      </main>
    </div>
  );
}
