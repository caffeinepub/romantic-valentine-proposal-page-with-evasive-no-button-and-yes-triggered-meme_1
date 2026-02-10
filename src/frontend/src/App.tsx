import { useState } from 'react';
import ValentinePrompt from './components/ValentinePrompt';
import SuccessMeme from './components/SuccessMeme';

function App() {
  const [hasAccepted, setHasAccepted] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-background via-secondary/30 to-accent/20 overflow-hidden relative">
      {/* Decorative floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[15%] text-6xl opacity-20 animate-float" style={{ animationDelay: '0s' }}>
          💕
        </div>
        <div className="absolute top-[60%] left-[8%] text-5xl opacity-15 animate-float" style={{ animationDelay: '1s' }}>
          💖
        </div>
        <div className="absolute top-[20%] right-[12%] text-7xl opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>
          💗
        </div>
        <div className="absolute bottom-[15%] right-[20%] text-6xl opacity-15 animate-float" style={{ animationDelay: '1.5s' }}>
          💝
        </div>
        <div className="absolute top-[45%] right-[5%] text-5xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          💓
        </div>
        <div className="absolute bottom-[30%] left-[25%] text-6xl opacity-15 animate-float" style={{ animationDelay: '2.5s' }}>
          ❤️
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-2xl">
        {!hasAccepted ? (
          <ValentinePrompt onAccept={() => setHasAccepted(true)} />
        ) : (
          <SuccessMeme />
        )}
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 left-0 right-0 text-center text-sm text-muted-foreground z-20">
        <p>
          © {new Date().getFullYear()} · Built with{' '}
          <span className="inline-block animate-pulse-heart text-primary">❤️</span> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== 'undefined' ? window.location.hostname : 'valentine-app'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
