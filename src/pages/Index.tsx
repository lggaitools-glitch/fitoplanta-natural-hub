import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/home/Hero';
import { MissionSection } from '@/components/home/MissionSection';
import { ProductCarousel } from '@/components/home/ProductCarousel';
import { BenefitsSection } from '@/components/home/BenefitsSection';
import { ArticlesSection } from '@/components/home/ArticlesSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <MissionSection />
      <ProductCarousel />
      <BenefitsSection />
      <ArticlesSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
