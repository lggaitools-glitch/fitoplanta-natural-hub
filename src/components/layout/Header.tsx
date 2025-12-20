import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
    ]
  },
  { name: 'Suplementos', href: '/suplementos-naturais' },
  { name: 'Guias', href: '/guias' },
  { name: 'Bem-estar', href: '/bem-estar' },
  { name: 'Artigos', href: '/artigos' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navegação principal">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-semibold text-primary">
              FitoPlantaMed
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-muted",
                    isActive(item.href)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  onMouseEnter={() => item.submenu && setOpenSubmenu(item.name)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-3 h-3" />}
                </Link>
                
                {/* Dropdown */}
                {item.submenu && (
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-1 w-56 rounded-lg bg-card border border-border shadow-lg transition-all duration-200",
                      openSubmenu === item.name ? "opacity-100 visible" : "opacity-0 invisible"
                    )}
                    onMouseEnter={() => setOpenSubmenu(item.name)}
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in max-h-[70vh] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => !item.submenu && setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    {item.name}
                    {item.submenu && (
                      <ChevronDown 
                        className={cn(
                          "w-4 h-4 transition-transform",
                          openSubmenu === item.name && "rotate-180"
                        )}
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenSubmenu(openSubmenu === item.name ? null : item.name);
                        }}
                      />
                    )}
                  </Link>
                  {item.submenu && openSubmenu === item.name && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
