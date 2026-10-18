import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { ConsultationBooking } from '@/components/contact/ConsultationBooking';
import SEOHead from '@/components/seo/SEOHead';

const Contact = () => {
  return (
    <Layout>
      <SEOHead
        title="Contato - Fale Conosco"
        description="Entre em contato com a FitoPlantaMed. Dúvidas sobre fitoterapia, plantas medicinais ou agendamento de consulta com a farmacêutica Marta Leni."
      />
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-primary-foreground animate-fade-up">
            <div className="flex items-center gap-2 text-accent mb-4">
              <Mail className="w-5 h-5" />
              <span className="text-sm font-medium">Fale Conosco</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Contato
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Estamos aqui para ajudar. Entre em contato conosco e nossa equipe responderá o mais breve possível.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Booking Section */}
      <ConsultationBooking />

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-fade-up">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Informações de Contato
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Tem dúvidas sobre nossos produtos ou precisa de orientação? Nossa equipe de especialistas está pronta para ajudá-lo em sua jornada de bem-estar.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">E-mail</h3>
                    <a href="mailto:fito.planta.med@gmail.com" className="text-muted-foreground text-sm underline underline-offset-4">
                      fito.planta.med@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Temporary Contact Notice */}
            <div className="animate-fade-up delay-100">
              <div className="bg-card p-8 rounded-2xl shadow-card">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Envie sua Mensagem
                </h2>
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    O formulário online está temporariamente indisponível. Para falar conosco, envie um e-mail para fito.planta.med@gmail.com ou agende sua consulta pelo WhatsApp acima.
                  </p>
                  <Button asChild size="lg" className="w-full">
                    <a href="mailto:fito.planta.med@gmail.com">
                      <Mail className="w-4 h-4" />
                      Entrar em contato por e-mail
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    O link abre seu aplicativo de e-mail. Nenhuma mensagem é enviada automaticamente pelo site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
