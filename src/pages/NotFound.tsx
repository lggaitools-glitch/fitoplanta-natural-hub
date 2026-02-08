import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, Leaf } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <SEOHead
        title="Página Não Encontrada"
        description="A página que você está procurando não foi encontrada. Explore nosso conteúdo sobre fitoterapia e plantas medicinais."
        robots="noindex,follow"
      />
      <div className="flex min-h-[60vh] items-center justify-center bg-background">
        <div className="text-center max-w-md px-4">
          <h1 className="mb-4 text-6xl font-display font-bold text-primary">404</h1>
          <p className="mb-2 text-2xl font-semibold text-foreground">Página não encontrada</p>
          <p className="mb-8 text-muted-foreground">
            A página que você está procurando não existe ou foi movida.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Ir para Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/artigos">
                <BookOpen className="w-4 h-4 mr-2" />
                Ver Artigos
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/plantas-medicinais">
                <Leaf className="w-4 h-4 mr-2" />
                Plantas Medicinais
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
