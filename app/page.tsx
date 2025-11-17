import Patners from "./components/Patners/page";
import Article from "./components/Article/page";
import Initiative from "./components/Initiative/page";
import Testimonials from "./components/Testimonials/page";
import Faq from "./components/FaQ/page";
import HeroBanner from "./components/HeroBanner/page";
import Hero from "./components/Hero/page";
import Footer from "./components/Footer/page";

 

export default function Page() {
  return (
    <>
    <Hero />
    <Patners />
    <Article />
    <Initiative />
    <Testimonials />
    <Faq />
    <HeroBanner />
    <Footer />
    </ >
  );
}