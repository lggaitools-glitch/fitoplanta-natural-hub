import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/home/Hero';
import { MissionSection } from '@/components/home/MissionSection';
import { BenefitsSection } from '@/components/home/BenefitsSection';
import { ArticlesSection } from '@/components/home/ArticlesSection';
import { CTASection } from '@/components/home/CTASection';
import { CategoriesSection } from '@/components/home/CategoriesSection';
import { PopularArticlesSection } from '@/components/home/PopularArticlesSection';
import { HowWeChooseSection } from '@/components/home/HowWeChooseSection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ArticlesSection />
      <CategoriesSection />
      <PopularArticlesSection />
      <HowWeChooseSection />
      <MissionSection />
      <BenefitsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
