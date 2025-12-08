import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const footerLinks = {
  produtos: [
    { name: 'FitoCalm', href: '/produtos/fitocalm' },
    { name: 'ImmunoPlanta', href: '/produtos/immunoplanta' },
    { name: 'EnergiaVerde', href: '/produtos/energiaverde' },
  ],
  institucional: [
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Artigos', href: '/artigos' },
    { name: 'Contato', href: '/contato' },
  ],
  ajuda: [
    { name: 'Política de Privacidade', href: '#' },
    { name: 'Termos de Uso', href: '#' },
    { name: 'FAQ', href: '#' },
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
              Saúde natural com ciência e eficácia. Produtos fitoterápicos premium para seu bem-estar.
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
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Av. Paulista, 1000 - São Paulo, SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">(11) 3000-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">contato@fitoplantamed.com.br</span>
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
            <p className="text-primary-foreground/60 text-xs">
              Os produtos não substituem orientação médica profissional.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
