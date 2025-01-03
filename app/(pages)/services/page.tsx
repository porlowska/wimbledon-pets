import ServicesSection from "@/app/_components/home/ServicesSection";
import ServiceLayout from "@/app/_components/services/ServiceLayout";
import { services } from "@/app/_data/services";
import StructuredData from "@/app/_components/StructuredData";
import { Metadata } from "next";
import { servicesStructuredData } from "@/app/metadata/serviceStructuredData"; 
import servicesMetadata from "@/app/metadata/servicesMetadata";

export const metadata: Metadata = servicesMetadata.allServices;


const Services = () => {
  return (
    <>
      <StructuredData data={servicesStructuredData.allServices} />
      <ServiceLayout service={services[0]} />
      <div className="pb-24">
        <h4 className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 py-4  text-pretty text-4xl font-semibold tracking-tight text-secondary sm:text-5xl ">
          Expore our services:
        </h4>
        <ServicesSection />
      </div>
    </>
  );
};
export default Services;
