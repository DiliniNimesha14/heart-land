import Footer from '@/components/footer';
import Faq from '@/components/frequentlyAskedQuestions';
import Initiative from '@/components/joinOurInitiatives';
import HeroBanner from '@/components/makeThingsHappen';
import Testimonials from '@/components/ourHappyCustomers';
import Partners from '@/components/yourTrustedPartners';
import HomeHero from '@/components/homeHero';



export default function HomePagee() {
  return (
    <>
    <HomeHero />
    <Partners />
    <Initiative />
    <Testimonials />
    <Faq />
    <HeroBanner />   
    </ >
  );
}