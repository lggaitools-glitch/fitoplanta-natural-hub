import { Calendar, Video, Clock, MessageCircle, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ConsultationBookingProps {
  onFormClick: () => void;
}

export const ConsultationBooking = ({ onFormClick }: ConsultationBookingProps) => {
  const whatsappNumber = '5511992014584';
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de agendar uma consulta farmacêutica com a Dra. Marta Leni.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-16 bg-gradient-to-br from-gold/10 via-cream to-gold/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl shadow-xl overflow-hidden border border-gold/20">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary/80 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-gold" />
                </div>
                <span className="text-gold font-medium text-sm uppercase tracking-wide">
                  Atendimento Personalizado
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground mb-2">
                Agende sua Consulta Farmacêutica
              </h2>
              <p className="text-primary-foreground/80">
                Orientação especializada para sua saúde e bem-estar
              </p>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Professional Info */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-gold/20 rounded-full flex items-center justify-center border-2 border-gold/30">
                      <User className="w-10 h-10 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        Marta Leni
                      </h3>
                      <p className="text-primary font-medium">
                        Farmacêutica Clínica
                      </p>
                      <p className="text-muted-foreground text-sm mt-1">
                        Especialista em fitoterapia e suplementação personalizada
                      </p>
                    </div>
                  </div>

                  {/* Consultation Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Video className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">Consulta Online</p>
                        <p className="text-muted-foreground text-xs">Via videochamada, do conforto da sua casa</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">Duração: 1h30 a 2h</p>
                        <p className="text-muted-foreground text-xs">Atendimento completo e detalhado</p>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground italic pl-1">
                      * Consulta paga. Valores e formas de pagamento informados no agendamento.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col justify-center">
                  <div className="space-y-4">
                    <div>
                      <p className="text-foreground font-medium mb-3 text-center sm:text-left">
                        Escolha como prefere agendar:
                      </p>
                    </div>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Agendar via WhatsApp
                    </a>

                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-px bg-border"></div>
                      <span className="text-muted-foreground text-sm">ou</span>
                      <div className="flex-1 h-px bg-border"></div>
                    </div>

                    <Button
                      variant="outline"
                      size="lg"
                      onClick={onFormClick}
                      className="w-full py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Calendar className="w-5 h-5" />
                      Solicitar via Formulário
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      Responderemos em até 24 horas úteis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
