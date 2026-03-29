import { useState, useEffect } from 'react';
import { X, BookOpen, Mail } from 'lucide-react';

export const EmailCapturePopup = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if already dismissed
    const dismissed = localStorage.getItem('emailPopupDismissed');
    if (dismissed) return;

    // Show after 45 seconds or on exit intent
    const timer = setTimeout(() => setVisible(true), 45000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10 && !localStorage.getItem('emailPopupDismissed')) {
        setVisible(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    localStorage.setItem('emailPopupDismissed', Date.now().toString());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, send to email service (Mailchimp, ConvertKit, etc.)
    console.log('Email captured:', email);
    setSubmitted(true);
    localStorage.setItem('emailPopupDismissed', Date.now().toString());
    setTimeout(() => setVisible(false), 3000);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleDismiss} />
      
      {/* Modal */}
      <div className="relative bg-card rounded-2xl shadow-elevated max-w-md w-full p-8 animate-scale-in">
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            
            <h3 className="font-display text-2xl font-bold text-foreground text-center mb-2">
              Guia Gratuito de Fitoterapia
            </h3>
            <p className="text-muted-foreground text-center text-sm mb-6">
              Receba nosso e-book exclusivo com as <strong>10 plantas medicinais essenciais</strong> e dicas de uso seguro. Grátis no seu e-mail.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Quero Receber Grátis
              </button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Sem spam. Cancele a qualquer momento.
            </p>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">✅</span>
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              Pronto!
            </h3>
            <p className="text-muted-foreground text-sm">
              Confira seu e-mail em instantes. Obrigado por se inscrever!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};