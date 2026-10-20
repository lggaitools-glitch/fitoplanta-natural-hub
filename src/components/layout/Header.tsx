import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { BrandLogo } from './BrandLogo';

const navigation = [
  { name: 'Início', href: '/' },
  { 
    name: 'Fitoterapia', 
    href: '/fitoterapia',
    submenu: [
      { name: 'O Que é Fitoterapia', href: '/fitoterapia/o-que-e-fitoterapia' },
      { name: 'Funciona Mesmo?', href: '/fitoterapia/fitoterapia-funciona' },
      { name: 'Benefícios e Riscos', href: '/fitoterapia/beneficios-e-riscos' },
      { name: 'Fito vs Sintéticos', href: '/fitoterapia/fitoterapia-x-suplementos' },
    ]
  },
  { 
    name: 'Plantas', 
    href: '/plantas-medicinais',
    submenu: [
      { name: 'Valeriana', href: '/plantas-medicinais/valeriana' },
      { name: 'Equinácea', href: '/plantas-medicinais/equinacea' },
      { name: 'Guaraná', href: '/plantas-medicinais/guarana' },
      { name: 'Melissa', href: '/plantas-medicinais/melissa' },
      { name: 'Ginseng', href: '/plantas-medicinais/ginseng' },
      { name: 'Cúrcuma', href: '/plantas-medicinais/curcuma' },
      { name: 'Camomila', href: '/plantas-medicinais/camomila' },
      { name: 'Ashwagandha', href: '/plantas-medicinais/ashwagandha' },
      { name: 'Boldo', href: '/plantas-medicinais/boldo' },
      { name: 'Maracujá', href: '/plantas-medicinais/maracuja' },
      { name: 'Espinheira-santa', href: '/plantas-medicinais/espinheira-santa' },
      { name: 'Gengibre', href: '/plantas-medicinais/gengibre' },
      { name: 'Rhodiola', href: '/plantas-medicinais/rhodiola' },
      { name: 'Moringa', href: '/plantas-medicinais/moringa' },
      { name: 'Alecrim', href: '/plantas-medicinais/alecrim' },
    ]
  },
  { name: 'Suplementos', href: '/suplementos-naturais' },
  { name: 'Guias', href: '/guias' },
  { name: 'Bem-estar', href: '/bem-estar' },
  { name: 'Artigos', href: '/artigos' },
  { name: 'Contato', href: '/contato' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const closeNavigation = () => { setMobileMenuOpen(false); setOpenSubmenu(null); };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border"
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          closeNavigation();
          const control = event.currentTarget.querySelector<HTMLButtonElement>(window.innerWidth < 1280 ? '[aria-controls="site-navigation"]' : `[aria-controls="submenu-${openSubmenu}"]`);
          control?.focus();
        }
      }}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 relative xl:flex xl:items-center xl:justify-between" aria-label="Navegação principal">
        <div className="flex h-24 items-center justify-between gap-4">
          <Link to="/" onClick={closeNavigation} className="shrink-0" aria-label="FitoPlantaMed — Início"><BrandLogo /></Link>
          <Button variant="ghost" size="icon" className="xl:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={mobileMenuOpen} aria-controls="site-navigation">
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        <div id="site-navigation" className={cn('site-navigation', mobileMenuOpen && 'is-open')}>
          {navigation.map((item) => (
            <div key={item.name} className="nav-group">
              <div className="flex items-center">
                <Link to={item.href} onClick={closeNavigation} aria-current={isActive(item.href) ? 'page' : undefined}
                  className={cn('nav-link', isActive(item.href) && 'is-active')}>
                  {item.name}
                </Link>
                {item.submenu && <button type="button" className="submenu-toggle" aria-label={`Submenu ${item.name}`}
                  aria-expanded={openSubmenu === item.name} aria-controls={`submenu-${item.name}`}
                  onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}>
                  <ChevronDown className={cn('w-4 h-4 transition-transform', openSubmenu === item.name && 'rotate-180')} />
                </button>}
              </div>
              {item.submenu && <div id={`submenu-${item.name}`} className="nav-submenu" hidden={openSubmenu !== item.name}>
                {item.submenu.map((subItem) => <Link key={subItem.href} to={subItem.href} onClick={closeNavigation}
                  className="block px-4 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-primary rounded-lg">{subItem.name}</Link>)}
              </div>}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};
