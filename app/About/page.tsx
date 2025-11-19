import AboutHero from '@/components/aboutUsHero';
import CommunitySection from '@/components/community';
import Footer from '@/components/footer';
import Navbar from '@/components/Navbar';
import Founders from '@/components/ourFounders';
import TeamMembers from '@/components/teamMember';
import VisionMission from '@/components/vision&Mission';
import WhyWorkWithUs from '@/components/whyWorkWithUs';

export default function AboutPagee() {
  return (
    <>
    <Navbar />
    <AboutHero />
    <VisionMission />
    <WhyWorkWithUs />
    <Founders />
    <TeamMembers />
    <CommunitySection />
    <Footer />
   
  
    
    </ >
  );
}