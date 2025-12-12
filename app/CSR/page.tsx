import CsrIntro from '@/components/cSRIntro';
import CsrShowcase from '@/components/csrShowcase';
import Footer from '@/components/footer';
import Navbar from '@/components/Navbar';
import OurProjects from '@/components/ourProjects';
import WhatPeopleSays from '@/components/whatPeopleSays';

export default function csr() {
  return (
    <>
    <CsrShowcase />
    <OurProjects />
    <CsrIntro />
    <WhatPeopleSays />
    </ >
  );
}