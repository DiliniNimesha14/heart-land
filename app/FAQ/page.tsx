import FAQHeader from '@/components/faQheader';
import Footer from '@/components/footer';
import GeneralFaqs from '@/components/generalFaqs';
import Navbar from '@/components/Navbar';
import ProductFaqs from '@/components/productFAQs';
import HaveQ from '@/components/stillHaveQuestion';

export default function FAQ() {
  return (
    <>
    <Navbar />
    <FAQHeader />
    <GeneralFaqs />
    <ProductFaqs />
    <HaveQ />
    
    <Footer />
   
  
    
    </ >
  );
}