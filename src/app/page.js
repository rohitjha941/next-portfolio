import HomeHero from '@/components/HomeHero/HomeHero';
import AboutSection from '@/components/AboutSection/AboutSection';
import SkillsSection from '@/components/SkillsSection/SkillsSection';

export default function Home() {
    return (
        <>
            <HomeHero />
            <AboutSection />
            <SkillsSection />
        </>
    );
}