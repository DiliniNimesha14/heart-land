import type { Metadata } from "next";
import AboutHero from '@/components/aboutUsHero';
import CommunitySection from '@/components/community';
import JoinWithUs from '@/components/joinWithUs';
import LeadershipTeam from '@/components/leadershipTeam';
import VisionMission from '@/components/vision&Mission';
import WhyWorkWithUs from '@/components/whyWorkWithUs';
import HeartlandTrading from '@/components/HeartlandTrading';

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Heartland General Trading - 25+ years bringing authentic Sri Lankan flavors to the UAE through ethical sourcing and community partnership.",
};

export default function AboutPagee() {
  return (
    <>
    <AboutHero />
    <VisionMission />
    <HeartlandTrading />
    <WhyWorkWithUs />
    <LeadershipTeam />
    <CommunitySection />
    <JoinWithUs />
    </ >
  );
}