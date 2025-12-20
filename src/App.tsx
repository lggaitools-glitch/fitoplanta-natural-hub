import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Transparency from "./pages/Transparency";
import NotFound from "./pages/NotFound";

// SILO Pages - Pillars
import FitoterapiaPillar from "./pages/silos/FitoterapiaPillar";
import PlantasMedicinaisPillar from "./pages/silos/PlantasMedicinaisPillar";
import SuplementosPillar from "./pages/silos/SuplementosPillar";
import GuiasPillar from "./pages/silos/GuiasPillar";
import BemEstarPillar from "./pages/silos/BemEstarPillar";

// SILO Pages - Subpages
import FitoterapiaSubpage from "./pages/silos/FitoterapiaSubpage";
import PlantDetail from "./pages/silos/PlantDetail";
import PlantSubpage from "./pages/silos/PlantSubpage";
import GuideDetail from "./pages/silos/GuideDetail";
import SupplementDetail from "./pages/silos/SupplementDetail";
import WellnessDetail from "./pages/silos/WellnessDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
