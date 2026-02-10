import { Heart, Sparkles } from 'lucide-react';

export default function SuccessMeme() {
  return (
    <div className="w-full bg-card rounded-3xl shadow-romantic-lg p-8 md:p-12 border-2 border-primary/20 animate-in fade-in zoom-in duration-500">
      {/* Decorative elements */}
      <div className="absolute top-4 left-4 text-3xl animate-pulse-heart">💖</div>
      <div className="absolute top-4 right-4 text-3xl animate-pulse-heart" style={{ animationDelay: '0.3s' }}>
        💖
      </div>
      <div className="absolute bottom-4 left-4 text-3xl animate-pulse-heart" style={{ animationDelay: '0.6s' }}>
        💖
      </div>
      <div className="absolute bottom-4 right-4 text-3xl animate-pulse-heart" style={{ animationDelay: '0.9s' }}>
        💖
      </div>

      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        {/* Success header */}
        <div className="flex items-center gap-3">
          <Sparkles className="w-8 h-8 text-accent fill-accent animate-pulse" />
          <h1 className="text-4xl md:text-5xl font-romantic text-primary">
            Good choice
          </h1>
          <Sparkles className="w-8 h-8 text-accent fill-accent animate-pulse" />
        </div>

        {/* Meme image */}
        <div className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-romantic-lg border-4 border-primary/30">
          <img
            src="/assets/generated/valentine-good-choice-meme.dim_1200x800.png"
            alt="Good choice meme"
            className="w-full h-auto"
          />
        </div>

        {/* Success message */}
        <div className="space-y-4 mt-6">
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-6 h-6 text-primary fill-primary animate-pulse-heart" />
            <p className="text-2xl md:text-3xl font-bold text-primary">
              Happy Valentine's Day!
            </p>
            <Heart className="w-6 h-6 text-primary fill-primary animate-pulse-heart" />
          </div>
          <p className="text-lg text-muted-foreground">
            I knew you'd make the right choice! 💕
          </p>
        </div>

        {/* Decorative hearts */}
        <div className="flex gap-4 text-4xl mt-6">
          <span className="animate-pulse-heart">❤️</span>
          <span className="animate-pulse-heart" style={{ animationDelay: '0.2s' }}>
            💕
          </span>
          <span className="animate-pulse-heart" style={{ animationDelay: '0.4s' }}>
            💖
          </span>
          <span className="animate-pulse-heart" style={{ animationDelay: '0.6s' }}>
            💗
          </span>
          <span className="animate-pulse-heart" style={{ animationDelay: '0.8s' }}>
            💝
          </span>
        </div>
      </div>
    </div>
  );
}
