import type { Metadata } from "next";
import ContactGetInTouch from '@/components/contactGetInTouch';
import ContactHeader from '@/components/contactHeader';
import HomePagee from "@/components/maintenance";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Heartland General Trading Dubai. Inquire about wholesale partnerships, distribution opportunities, or product sourcing.",
};

export default function Contact() {
  return (
    <>
    <HomePagee />

    </ >
  );
}