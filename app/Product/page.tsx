import type { Metadata } from "next";
import ProductsSection from '@/components/productSection';
import HomePage from "@/components/maintenance";


export const metadata: Metadata = {
  title: "Our Products",
  description: "Explore authentic Sri Lankan products - premium rice, spices, noodles, jams, dry fish & more. Quality sourced for UAE distributors and retailers.",
};

export default function ProductPage() {
  return (
    <>
    <HomePage />    
    </ >
  );
}