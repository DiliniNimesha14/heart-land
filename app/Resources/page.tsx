import type { Metadata } from "next";
import BlogAndNews from '@/components/blogAndNews';
import SuccessStory from '@/components/successStory';
import CommunityPillar from '@/components/CommunityPillar';
import SchoolProfessionalities from '@/components/SchoolProfessionalities';
import HeartlandB2BNetwork from '@/components/Heartlandb2bNetwork';
import BrandsDistributionStrength from '@/components/brandsDistributionStrength';
import HomePage from "@/components/maintenance";

export const metadata: Metadata = {
  title: "Resources",
  description: "Latest news, articles and resources from Heartland General Trading. Stay updated on Sri Lankan food trends and industry insights.",
};

export default function Resources() {
  return (
    <>
    <HomePage />
    </ >

    
  );
}