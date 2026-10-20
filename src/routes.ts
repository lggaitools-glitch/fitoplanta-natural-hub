// Build-only inventory derived from the same data used by route components.
import { articles } from './data/articles';
import { productReviews } from './data/products';
import { plants } from './data/plants';
import { guides } from './data/guides';
import { supplements } from './data/supplements';
import { wellnessTopics } from './data/wellness';
import { fitoterapiaSubpages } from './data/fitoterapia';
export const routes = [
  '/', '/sobre', '/contato', '/transparencia', '/artigos', '/produtos',
  '/fitoterapia', '/plantas-medicinais', '/suplementos-naturais', '/guias', '/bem-estar',
  ...articles.map(a => `/artigos/${a.slug}`),
  ...productReviews.map(p => `/produtos/${p.slug}`),
  ...fitoterapiaSubpages.map(p => `/fitoterapia/${p.slug}`),
  ...plants.flatMap(p => [`/plantas-medicinais/${p.slug}`, ...p.subpages.map(s => `/plantas-medicinais/${p.slug}/${s.slug}`)]),
  ...supplements.map(p => `/suplementos-naturais/${p.slug}`),
  ...guides.map(p => `/guias/${p.slug}`),
  ...wellnessTopics.map(p => `/bem-estar/${p.slug}`),
];
