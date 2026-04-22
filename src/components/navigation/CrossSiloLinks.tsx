import { Link } from 'react-router-dom';
import { Leaf, BookOpen, Pill, ShoppingBag, Heart, ArrowRight } from 'lucide-react';

interface CrossSiloLinksProps {
  currentSilo?: string;
  relatedPlant?: string;
  relatedSupplement?: string;
  relatedGuide?: string;
  relatedWellness?: string;
  tags?: string[];
}

const siloMap = [
  { 
    key: 'fitoterapia', 
    name: 'Fitoterapia', 
    href: '/fitoterapia', 
    icon: BookOpen, 
    description: 'Ciência por trás das plantas medicinais',
    color: 'bg-green-600/10 text-green-700'
  },
  { 
    key: 'plantas', 
    name: 'Plantas Medicinais', 
    href: '/plantas-medicinais', 
    icon: Leaf, 
    description: 'Guia completo de cada planta',
    color: 'bg-emerald-600/10 text-emerald-700'
  },
  { 
    key: 'suplementos', 
    name: 'Suplementos Naturais', 
    href: '/suplementos-naturais', 
    icon: Pill, 
    description: 'Análise de suplementos com base científica',
    color: 'bg-blue-600/10 text-blue-700'
  },
  { 
    key: 'guias', 
    name: 'Guias de Compra', 
    href: '/guias', 
    icon: ShoppingBag, 
    description: 'Comparativos e recomendações',
    color: 'bg-amber-600/10 text-amber-700'
  },
  { 
    key: 'bem-estar', 
    name: 'Bem-estar', 
    href: '/bem-estar', 
    icon: Heart, 
    description: 'Saúde natural no dia a dia',
    color: 'bg-rose-600/10 text-rose-700'
  },
];

// Map common tags/categories to specific silo pages
const tagToLink: Record<string, { href: string; label: string }> = {
  'valeriana': { href: '/plantas-medicinais/valeriana', label: 'Valeriana — Guia Completo' },
  'equinacea': { href: '/plantas-medicinais/equinacea', label: 'Equinácea — Guia Completo' },
  'guarana': { href: '/plantas-medicinais/guarana', label: 'Guaraná — Guia Completo' },
  'melissa': { href: '/plantas-medicinais/melissa', label: 'Melissa — Guia Completo' },
  'ginseng': { href: '/plantas-medicinais/ginseng', label: 'Ginseng — Guia Completo' },
  'curcuma': { href: '/plantas-medicinais/curcuma', label: 'Cúrcuma — Guia Completo' },
  'camomila': { href: '/plantas-medicinais/camomila', label: 'Camomila — Guia Completo' },
  'ashwagandha': { href: '/plantas-medicinais/ashwagandha', label: 'Ashwagandha — Guia Completo' },
  'boldo': { href: '/plantas-medicinais/boldo', label: 'Boldo — Guia Completo' },
  'maracuja': { href: '/plantas-medicinais/maracuja', label: 'Maracujá — Guia Completo' },
  'passiflora': { href: '/plantas-medicinais/maracuja', label: 'Passiflora — Guia Completo' },
  'espinheira-santa': { href: '/plantas-medicinais/espinheira-santa', label: 'Espinheira-santa — Guia Completo' },
  'sono': { href: '/bem-estar/sono-natural', label: 'Sono Natural — Como Melhorar' },
  'ansiedade': { href: '/bem-estar/gestao-do-estresse', label: 'Gestão do Estresse Natural' },
  'imunidade': { href: '/bem-estar/imunidade-natural', label: 'Imunidade Natural' },
  'energia': { href: '/bem-estar/energia-e-foco', label: 'Energia e Foco Natural' },
  'digestao': { href: '/bem-estar/saude-digestiva-natural', label: 'Saúde Digestiva Natural' },
  'memoria': { href: '/bem-estar/saude-cognitiva-memoria', label: 'Saúde Cognitiva e Memória' },
  'anti-inflamatorio': { href: '/guias/melhor-anti-inflamatorio-natural', label: 'Guia: Melhor Anti-inflamatório Natural' },
  'omega-3': { href: '/artigos/omega-3-natural-fontes-vegetais-beneficios', label: 'Ômega-3 Natural — Fontes e Benefícios' },
  'saude cardiovascular': { href: '/artigos/omega-3-natural-fontes-vegetais-beneficios', label: 'Ômega-3 e Saúde Cardiovascular' },
  'adaptogenos': { href: '/suplementos-naturais/ashwagandha-capsulas', label: 'Adaptógenos — Ashwagandha em Cápsulas' },
};

export const CrossSiloLinks = ({ currentSilo, relatedPlant, relatedSupplement, relatedGuide, relatedWellness, tags = [] }: CrossSiloLinksProps) => {
  // Build specific links from tags
  const specificLinks: { href: string; label: string }[] = [];
  
  for (const tag of tags) {
    const normalizedTag = tag.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    if (tagToLink[normalizedTag] && specificLinks.length < 4) {
      specificLinks.push(tagToLink[normalizedTag]);
    }
  }

  // Add explicit related links
  if (relatedPlant) specificLinks.push({ href: `/plantas-medicinais/${relatedPlant}`, label: `Ver planta: ${relatedPlant}` });
  if (relatedSupplement) specificLinks.push({ href: `/suplementos-naturais/${relatedSupplement}`, label: `Ver suplemento` });
  if (relatedGuide) specificLinks.push({ href: `/guias/${relatedGuide}`, label: `Ver guia de compra` });
  if (relatedWellness) specificLinks.push({ href: `/bem-estar/${relatedWellness}`, label: `Ver dicas de bem-estar` });

  // Filter silos to show (exclude current)
  const otherSilos = siloMap.filter(s => s.key !== currentSilo).slice(0, 4);

  return (
    <section className="my-12 py-10">
      {/* Specific tag-based links */}
      {specificLinks.length > 0 && (
        <div className="mb-8">
          <h3 className="font-display text-xl font-bold text-foreground mb-4">
            📖 Aprofunde seu conhecimento
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {specificLinks.slice(0, 4).map((link, i) => (
              <Link
                key={i}
                to={link.href}
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all group"
              >
                <Leaf className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {link.label}
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all ml-auto" />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Silo exploration cards */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        🌿 Explore mais temas
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {otherSilos.map((silo) => (
          <Link
            key={silo.key}
            to={silo.href}
            className="p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all group text-center"
          >
            <div className={`w-10 h-10 rounded-full ${silo.color} flex items-center justify-center mx-auto mb-3`}>
              <silo.icon className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              {silo.name}
            </h4>
            <p className="text-xs text-muted-foreground mt-1 hidden sm:block">
              {silo.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CrossSiloLinks;
