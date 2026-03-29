import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse flex flex-col items-center gap-4">
      <div className="h-12 w-12 rounded-full border-4 border-green-600 border-t-transparent animate-spin" />
      <p className="text-green-700 font-medium">Carregando...</p>
    </div>
  </div>
);

// Lazy-loaded pages
const Index = lazy(() => import("./pages/Index"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Articles = lazy(() => import("./pages/Articles"));
const ArticleDetail = lazy(() => import("./pages/ArticleDetail"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Transparency = lazy(() => import("./pages/Transparency"));
const NotFound = lazy(() => import("./pages/NotFound"));

// SILO Pages - Pillars
const FitoterapiaPillar = lazy(() => import("./pages/silos/FitoterapiaPillar"));
const PlantasMedicinaisPillar = lazy(() => import("./pages/silos/PlantasMedicinaisPillar"));
const SuplementosPillar = lazy(() => import("./pages/silos/SuplementosPillar"));
const GuiasPillar = lazy(() => import("./pages/silos/GuiasPillar"));
const BemEstarPillar = lazy(() => import("./pages/silos/BemEstarPillar"));

// SILO Pages - Subpages
const FitoterapiaSubpage = lazy(() => import("./pages/silos/FitoterapiaSubpage"));
const PlantDetail = lazy(() => import("./pages/silos/PlantDetail"));
const PlantSubpage = lazy(() => import("./pages/silos/PlantSubpage"));
const GuideDetail = lazy(() => import("./pages/silos/GuideDetail"));
const SupplementDetail = lazy(() => import("./pages/silos/SupplementDetail"));
const WellnessDetail = lazy(() => import("./pages/silos/WellnessDetail"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/transparencia" element={<Transparency />} />
            
            {/* Articles */}
            <Route path="/artigos" element={<Articles />} />
            <Route path="/artigos/:slug" element={<ArticleDetail />} />
            
            {/* Legacy Products (redirects to Guias) */}
            <Route path="/produtos" element={<Products />} />
            <Route path="/produtos/:slug" element={<ProductDetail />} />
            
            {/* SILO 1: Fitoterapia */}
            <Route path="/fitoterapia" element={<FitoterapiaPillar />} />
            <Route path="/fitoterapia/:slug" element={<FitoterapiaSubpage />} />
            
            {/* SILO 2: Plantas Medicinais */}
            <Route path="/plantas-medicinais" element={<PlantasMedicinaisPillar />} />
            <Route path="/plantas-medicinais/:slug" element={<PlantDetail />} />
            <Route path="/plantas-medicinais/:slug/:subSlug" element={<PlantSubpage />} />
            
            {/* SILO 3: Suplementos Naturais */}
            <Route path="/suplementos-naturais" element={<SuplementosPillar />} />
            <Route path="/suplementos-naturais/:slug" element={<SupplementDetail />} />
            
            {/* SILO 4: Guias de Compra */}
            <Route path="/guias" element={<GuiasPillar />} />
            <Route path="/guias/:slug" element={<GuideDetail />} />
            
            {/* SILO 5: Bem-estar */}
            <Route path="/bem-estar" element={<BemEstarPillar />} />
            <Route path="/bem-estar/:slug" element={<WellnessDetail />} />
            
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
