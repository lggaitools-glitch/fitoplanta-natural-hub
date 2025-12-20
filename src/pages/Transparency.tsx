import { Layout } from '@/components/layout/Layout';
import { Shield, Heart, AlertCircle, CheckCircle } from 'lucide-react';

const Transparency = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-primary-foreground animate-fade-up">
            <div className="flex items-center gap-2 text-accent mb-4">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Compromisso Editorial</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Transparência e Disclosure
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Nosso compromisso com você: honestidade, transparência e informação de qualidade.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg">
            
            <div className="bg-accent/10 p-6 rounded-xl mb-8 not-prose">
              <h2 className="font-display text-xl font-semibold text-foreground flex items-center gap-2 mb-3">
                <AlertCircle className="w-5 h-5 text-accent" />
                Aviso Importante
              </h2>
              <p className="text-muted-foreground">
                O conteúdo deste site é puramente informativo e educacional. 
                <strong> Não substitui, em hipótese alguma, a consulta a um profissional de saúde qualificado.</strong> 
                Antes de iniciar qualquer tratamento ou suplementação, consulte seu médico, nutricionista ou farmacêutico.
              </p>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
              Sobre Links de Afiliados
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              O FitoPlantaMed participa de programas de afiliados. Isso significa que, quando você clica em 
              determinados links e realiza uma compra, podemos receber uma pequena comissão, 
              <strong> sem nenhum custo adicional para você</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Essa é uma das formas que utilizamos para manter o site funcionando e produzindo conteúdo 
              gratuito de qualidade. Agradecemos seu apoio!
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
              Nosso Compromisso Editorial
            </h2>
            <div className="space-y-4 not-prose">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Independência:</strong> Nossas análises e recomendações 
                  são baseadas em pesquisa independente, não em compensação financeira.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Evidências:</strong> Priorizamos informações 
                  respaldadas por estudos científicos e fontes confiáveis.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Honestidade:</strong> Se um produto tem limitações 
                  ou evidências fracas, dizemos claramente.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Sem promessas milagrosas:</strong> Não prometemos 
                  curas ou resultados garantidos. Fitoterapia é ciência, não magia.
                </p>
              </div>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
              Como Escolhemos Produtos
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Nossos critérios de avaliação incluem:
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>Evidências científicas disponíveis</li>
              <li>Qualidade dos ingredientes (preferência por extratos padronizados)</li>
              <li>Reputação e histórico da marca</li>
              <li>Certificações de qualidade (BPF/GMP)</li>
              <li>Custo-benefício</li>
              <li>Feedback de usuários reais</li>
            </ul>

            <div className="bg-primary/5 p-6 rounded-xl mt-12 not-prose">
              <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2 mb-3">
                <Heart className="w-5 h-5 text-primary" />
                Nosso Propósito
              </h3>
              <p className="text-muted-foreground">
                Acreditamos que informação de qualidade pode transformar vidas. Nosso objetivo é ser 
                uma fonte confiável para quem busca entender melhor a fitoterapia e fazer escolhas 
                informadas sobre sua saúde. Obrigado por confiar em nós.
              </p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Transparency;
