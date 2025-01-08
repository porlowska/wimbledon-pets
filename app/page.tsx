import AboutSection from "./_components/home/AboutSection";
import Banner from "./_components/home/Banner";
import ReviewsSection from "./_components/home/ReviewsSection";
import ServicesSection from "./_components/home/ServicesSection";
import StructuredData from "./_components/StructuredData";
import { Metadata } from "next";
import { organizationStructuredData } from "./metadata/organisationStructuredData";
import globalMetadata from "@/app/metadata/globalMetadata";

export const metadata: Metadata = globalMetadata.home;

export default function Home() {
  return (
    <>
      <StructuredData data={organizationStructuredData.home} />
      <Banner />
      <div className="h-100">
        <AboutSection />
        <ServicesSection />
        <ReviewsSection />
      </div>
    </>
  );
}
