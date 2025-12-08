import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Helena S.',
    location: 'São Paulo, SP',
    text: 'Depois de anos tentando resolver minha insônia com medicamentos, encontrei na FitoCalm a solução natural que eu precisava. Durmo melhor e acordo disposta!',
    rating: 5,
    product: 'FitoCalm',
  },
  {
    name: 'Carlos Roberto M.',
    location: 'Rio de Janeiro, RJ',
    text: 'ImmunoPlanta se tornou essencial na minha rotina. Desde que comecei a usar, não tive mais aquelas gripes que me derrubavam. Qualidade excepcional!',
    rating: 5,
    product: 'ImmunoPlanta',
  },
  {
    name: 'Ana Paula L.',
    location: 'Belo Horizonte, MG',
    text: 'Sou personal trainer e EnergiaVerde é meu aliado diário. Energia sustentada sem nervosismo, perfeito para meus treinos intensos e aulas.',
    rating: 5,
    product: 'EnergiaVerde',
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-cream-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Histórias reais de pessoas que transformaram sua saúde com nossos produtos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card p-8 rounded-2xl shadow-card relative animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/30" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
                <span className="text-xs text-secondary font-medium px-3 py-1 bg-green-soft rounded-full">
                  {testimonial.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
