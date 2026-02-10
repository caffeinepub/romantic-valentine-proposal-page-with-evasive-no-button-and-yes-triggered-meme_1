import { useState, useRef, useEffect } from 'react';
import { Heart } from 'lucide-react';
import useEvasiveNoButton from '../hooks/useEvasiveNoButton';

interface ValentinePromptProps {
  onAccept: () => void;
}

export default function ValentinePrompt({ onAccept }: ValentinePromptProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const yesButtonRef = useRef<HTMLButtonElement>(null);
  const [noButtonSize, setNoButtonSize] = useState({ width: 0, height: 0 });
  
  const { position, handleNoHover, handleNoPointerDown } = useEvasiveNoButton({
    containerRef,
    yesButtonRef,
    noButtonSize,
  });

  // Measure No button size after mount
  useEffect(() => {
    const measureButton = () => {
      const button = document.getElementById('no-button');
      if (button) {
        const rect = button.getBoundingClientRect();
        setNoButtonSize({ width: rect.width, height: rect.height });
      }
    };
    
    // Measure after a short delay to ensure rendering is complete
    const timer = setTimeout(measureButton, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[500px] w-full bg-card rounded-3xl shadow-romantic-lg p-8 md:p-12 border-2 border-primary/20"
    >
      {/* Decorative corner hearts */}
      <div className="absolute top-4 left-4 text-2xl opacity-40">💕</div>
      <div className="absolute top-4 right-4 text-2xl opacity-40">💕</div>
      <div className="absolute bottom-4 left-4 text-2xl opacity-40">💕</div>
      <div className="absolute bottom-4 right-4 text-2xl opacity-40">💕</div>

      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        {/* Main heart icon */}
        <div className="relative">
          <Heart className="w-24 h-24 md:w-32 md:h-32 text-primary fill-primary animate-pulse-heart" />
          <div className="absolute inset-0 blur-2xl bg-primary/30 animate-pulse-heart" />
        </div>

        {/* Question */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-romantic text-primary leading-tight">
            Will you be my Valentine?
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            Choose wisely... 💖
          </p>
        </div>

        {/* Buttons container */}
        <div className="relative w-full h-32 mt-8">
          {/* Yes button - fixed position */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <button
              ref={yesButtonRef}
              onClick={onAccept}
              className="px-12 py-4 text-xl md:text-2xl font-bold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95 transition-all shadow-romantic hover:shadow-romantic-lg touch-manipulation"
            >
              Yes! 💕
            </button>
          </div>

          {/* No button - evasive position */}
          <button
            id="no-button"
            onMouseEnter={handleNoHover}
            onPointerDown={handleNoPointerDown}
            onTouchStart={handleNoPointerDown}
            style={{
              position: 'absolute',
              left: `${position.x}px`,
              top: `${position.y}px`,
              transition: 'left 0.3s ease-out, top 0.3s ease-out',
            }}
            className="px-8 py-3 text-lg md:text-xl font-semibold rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md touch-manipulation"
          >
            No
          </button>
        </div>

        {/* Hint text */}
        <p className="text-sm text-muted-foreground italic mt-8">
          (Hint: There's really only one right answer here... 😉)
        </p>
      </div>
    </div>
  );
}
