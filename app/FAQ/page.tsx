import type { Metadata } from "next";
import FAQHeader from '@/components/faQheader';
import Faqs from '@/components/generalFaqs';
import HaveQ from '@/components/stillHaveQuestion';
import HomePagee from "@/components/maintenance";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Heartland General Trading - product sourcing, distribution partnerships, delivery, and ordering information.",
};

export default function FAQ() {
  return (
    <>
    <HomePagee />

    </ >
  );
}