import type { Metadata } from "next";
import CsrShowcase from '@/components/csrShowcase';
import ExpandingMission from '@/components/ExpandingMission';
import OurProjects from '@/components/ourProjects';
import PurchaseDifference from '@/components/Purchasedifference';

export const metadata: Metadata = {
  title: "CSR Initiatives",
  description: "Heartland ♥ Homeland - our commitment to supporting cancer-related projects in Sri Lanka and giving back to the community we serve.",
};

export default function csr() {
  return (
    <>     {/* 
    <CsrShowcase />
    <OurProjects />
    <ExpandingMission />
    <PurchaseDifference /> */}
    </ > 
  );
}