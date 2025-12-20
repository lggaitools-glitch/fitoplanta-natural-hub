import { Link } from 'react-router-dom';
import { Leaf, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

const footerLinks = {
  conteudo: [
    { name: 'Todos os Artigos', href: '/artigos' },
    { name: 'Fitoterapia', href: '/artigos?categoria=fitoterapia' },
    { name: 'Plantas Medicinais', href: '/artigos?categoria=plantas-medicinais' },
    { name: 'Guias de Compra', href: '/guias' },
  ],
  produtos: [
    { name: 'Produtos Recomendados', href: '/produtos' },
    { name: 'Valeriana', href: '/produtos/valeriana-beneficios-melhores-marcas' },
    { name: 'Equinácea', href: '/produtos/equinacea-imunidade-funciona' },
    { name: 'Guaraná', href: '/produtos/guarana-capsulas-energia-natural-marketing' },
  ],
  institucional: [
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Transparência', href: '/transparencia' },
    { name: 'Contato', href: '/contato' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-semibold">FitoPlantaMed</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Informação confiável sobre fitoterapia e saúde natural. Conteúdo educativo baseado em evidências científicas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Conteúdo */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Conteúdo</h3>
            <ul className="space-y-3">
              {footerLinks.conteudo.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Produtos</h3>
            <ul className="space-y-3">
              {footerLinks.produtos.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Institucional</h3>
            <ul className="space-y-3">
              {footerLinks.institucional.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <a href="mailto:contato@fitoplantamed.com.br" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  <Mail className="w-4 h-4" />
                  contato@fitoplantamed.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 FitoPlantaMed. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/60 text-xs text-center md:text-right max-w-xl">
              Este site contém links de afiliados. Se você comprar através deles, podemos receber uma comissão, sem custo adicional para você. 
              O conteúdo não substitui orientação médica profissional.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
