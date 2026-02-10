import type { Metadata } from "next";
import AboutHero from '@/components/aboutUsHero';
import CommunitySection from '@/components/community';
import JoinWithUs from '@/components/joinWithUs';
import Founders from '@/components/ourFounders';
import TeamMembers from '@/components/teamMember';
import VisionMission from '@/components/vision&Mission';
import WhyWorkWithUs from '@/components/whyWorkWithUs';
import HeartlandTrading from '@/components/HeartlandTrading';
import HomePagee from "@/components/maintenance";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Heartland General Trading - 25+ years bringing authentic Sri Lankan flavors to the UAE through ethical sourcing and community partnership.",
};

export default function AboutPagee() {
  return (
    <>
    <HomePagee/>
    </ >
  );
}