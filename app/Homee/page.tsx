import type { Metadata } from "next";
import Faq from "@/components/frequentlyAskedQuestions";
import Initiative from "@/components/joinOurInitiatives";
import HeroBanner from "@/components/makeThingsHappen";
import Testimonials from "@/components/ourHappyCustomers";
import Partners from "@/components/yourTrustedPartners";
import HomeHero from "@/components/homeHero";
import Blog from "@/components/blog";

export const metadata: Metadata = {
  title: "Welcome",
  description:
    "Welcome to Heartland General Trading - bringing authentic Sri Lankan flavors to the UAE for over 25 years. Quality products, trusted partnerships.",
};

export default function HomePagee() {
  return (
    <>
      {/* for build*/}
      <HomeHero />
      <Partners />
      <Blog />
      <Initiative />
      {/* <Testimonials />  - hide for now */} {/* test */}
      <Faq />
      <HeroBanner />
    </>
  );
}
