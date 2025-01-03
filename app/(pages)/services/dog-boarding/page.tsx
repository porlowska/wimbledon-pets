import ServiceLayout from "@/app/_components/services/ServiceLayout";
import { services } from "@/app/_data/services";
import StructuredData from "@/app/_components/StructuredData";
import { Metadata } from "next";
import { servicesStructuredData } from "@/app/metadata/serviceStructuredData";
import servicesMetadata from "@/app/metadata/servicesMetadata";

export const metadata: Metadata = servicesMetadata.dogBoarding;

const Boarding = () => {
  return (
    <>
      <StructuredData data={servicesStructuredData.dogBoarding} />
      <ServiceLayout service={services[4]} />;
    </>
  );
  
};
export default Boarding;
