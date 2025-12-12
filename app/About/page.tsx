import AboutHero from '@/components/aboutUsHero';
import CommunitySection from '@/components/community';
import Footer from '@/components/footer';
import JoinWithUs from '@/components/joinWithUs';
import Founders from '@/components/ourFounders';
import TeamMembers from '@/components/teamMember';
import VisionMission from '@/components/vision&Mission';
import WhyWorkWithUs from '@/components/whyWorkWithUs';

export default function AboutPagee() {
  return (
    <>
    <AboutHero />
    <VisionMission />
    <WhyWorkWithUs />
    <Founders />
    <TeamMembers />
    <CommunitySection />
    <JoinWithUs />
   
  
    
    </ >
  );
}