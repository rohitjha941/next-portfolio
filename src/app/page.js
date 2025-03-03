import HomeHero from '@/components/HomeHero/HomeHero';
import AboutSection from '@/components/AboutSection/AboutSection';
import SkillsSection from '@/components/SkillsSection/SkillsSection';
import Footer from '@/components/Footer/Footer';

export default function Home() {
    return (
        <div>
            <HomeHero />
            <AboutSection />
            <SkillsSection />
            <Footer />
        </div>
    );
}