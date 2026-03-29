import { useState, useEffect } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { AFFILIATE_CONFIG } from '@/config/affiliate';

interface StickyAffiliateCTAProps {
  productName: string;
}

export const StickyAffiliateCTA = ({ productName }: StickyAffiliateCTAProps) => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (dismissed) return;
      setVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-t border-primary-foreground/10 py-3 px-4 animate-fade-up">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="hidden sm:block text-primary-foreground">
          <p className="font-medium text-sm">{productName}</p>
          <p className="text-xs text-primary-foreground/70">Qualidade verificada • Entrega para todo Brasil</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <a
            href={AFFILIATE_CONFIG.mainLink}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-accent text-primary rounded-lg font-semibold text-sm hover:bg-accent/90 transition-colors"
          >
            {AFFILIATE_CONFIG.ctaText}
            <ExternalLink className="w-4 h-4" />
          </a>
          <button
            onClick={() => setDismissed(true)}
            className="p-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};